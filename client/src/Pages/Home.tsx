import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, resetGetSingleItemReducer } from '../state/items/actions';

const Home = () => {
  const dispatch = useDispatch();

  // const { loggedInUser } = useLoggedInUser();

  const getItemsReducer = useSelector((state: any) => state.getItems);
  const { loading, error, items } = getItemsReducer;

  useEffect(() => {
    dispatch(getItems());
    // clean up
    return () => {
      dispatch(resetGetSingleItemReducer());
    };
  }, []);

  return (
    <div>
      <h1 className="app_title">The Home Page</h1>
      <div>
        {error ? (
          <p>{error}</p>
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          items?.map((i: any, idx: number) => {
            return (
              <div key={`items-${idx}`} className="row_container">
                <p>
                  Name: <span>{i.name}</span>
                </p>
                {i.description && i.description !== '' && (
                  <p>
                    Description: <span>{i.description}</span>
                  </p>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
