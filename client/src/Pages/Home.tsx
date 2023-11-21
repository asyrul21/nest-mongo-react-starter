import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, resetGetItemsReducer } from '../state/items/actions';
import { useLoggedInUser } from '../Hooks/useLoggedInUser';
import Modal from '../Components/Modal/Modal';
import Error from '../Components/Error/Error';
import Loader from '../Components/Loader/Loader';
import { Banner } from '../Components/Banner/Banner';
import CreateItemModal from '../Containers/CreateItemModal/CreateItemModal';

import './PageStyles.scss';

const Home = () => {
  const dispatch = useDispatch();

  const { loggedInUser } = useLoggedInUser();

  const getItemsReducer = useSelector((state: any) => state.getItems);
  const { loading, error, items } = getItemsReducer;

  const createItemReducer = useSelector((state: any) => state.createItem);
  const { success: createItemSuccess, error: createItemError } =
    createItemReducer;

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch, createItemSuccess]);

  const handleClickActionButton = (itemId: string) => {
    console.log(`Do something with ${itemId}`);
  };

  return (
    <>
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title={'Create an Item'}
        >
          <CreateItemModal onClose={() => setShowModal(false)} />
        </Modal>
      )}
      <div className="app_page">
        {createItemSuccess && (
          <Banner type="success" text="Item has been created successfully" />
        )}
        {createItemError && <Banner type="error" text={createItemError} />}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h1 className="app_title">The Home Page</h1>
          {/* {loggedInUser && !loggedInUser.isAdmin ? ( */}
          <button
            className={classnames({
              app_button: true,
              disabled: loading,
            })}
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
          >
            Create
          </button>
          {/* ) : (
            <div />
          )} */}
        </div>
        <div>
          {error ? (
            <Error error={error} />
          ) : loading ? (
            <Loader />
          ) : (
            <div className="page_list_container">
              {items?.map((i: any, idx: number) => {
                return (
                  <div className="page_list_item" key={`item_key_${idx}`}>
                    <div>
                      <p className="key_value_group">
                        <span>Name: </span>
                        <span style={{ fontWeight: 'bold' }}>{i.name}</span>
                      </p>
                      {i.description && (
                        <p className="key_value_group">
                          <span>Description: </span>
                          <span style={{ fontWeight: 'bold' }}>
                            {i.description}
                          </span>
                        </p>
                      )}
                    </div>
                    {loggedInUser && loggedInUser.isAdmin ? (
                      <button
                        className={classnames({
                          action_button: true,
                          // disabled: b.completed,
                        })}
                        onClick={(e: any) => {
                          e.preventDefault();
                          handleClickActionButton(i._id);
                        }}
                      >
                        Edit
                      </button>
                    ) : (
                      <div />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
