import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import './CreateItemModal.scss';
import Loader from '../../Components/Loader/Loader';
import { Banner } from '../../Components/Banner/Banner';
import {
  createSingleItem,
  resetCreateItemReducer,
} from '../../state/items/actions';

// import { composeArrayToString } from '../../utils';

const CreateItemModal = ({ onClose }: any) => {
  const dispatch = useDispatch();

  const createItemReducer = useSelector((state: any) => state.createItem);
  const { loading, error, success } = createItemReducer;

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    if (success) {
      onClose();
    }
  }, [success, onClose, dispatch]);

  /**
   * Reset reducer clean ups should ALWAYS be in a separate useEffect,
   * where dispatch should be its ONLY dependency
   */
  useEffect(() => {
    return () => {
      console.log('cleaning up');
      dispatch(resetCreateItemReducer());
    };
  }, [dispatch]);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    dispatch(resetCreateItemReducer());
    dispatch(createSingleItem({ name, description }));
  };

  return (
    <div style={{ width: '540px', minHeight: '320px' }}>
      {/* {success && <Banner type="success" text={'Created successfully.'} />} */}
      {error && <Banner type="error" text={error} />}
      {loading ? (
        <Loader />
      ) : (
        <>
          <form
            className="app_form"
            onSubmit={handleFormSubmit}
            style={{ marginTop: '25px' }}
          >
            <div className="input_group">
              <label className="input_label" htmlFor="name_input">
                Name
              </label>
              <div className="input_container">
                <input
                  className="input_input"
                  id="name_input"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(String(e.target.value))}
                />
              </div>
            </div>
            <div className="input_group">
              <label className="input_label" htmlFor="desc_input">
                Description
              </label>
              <div className="input_container">
                <input
                  className="input_input"
                  id="desc_input"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(String(e.target.value))}
                />
              </div>
            </div>
            <button
              type="submit"
              className={classnames({
                form_submit_button: true,
                disabled: success || loading,
              })}
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default CreateItemModal;
