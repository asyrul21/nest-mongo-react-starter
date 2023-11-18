const extractErrorMessage = (errorObject: any) => {
  const result =
    errorObject.response && errorObject.response.data.message
      ? errorObject.response.data.message
      : errorObject.message;

  return result;
};

const convertObjectToURLParams = (object: any) => {
  return new URLSearchParams(object).toString();
};

const buildJsonHeaderConfig = (token = null) => {
  let headers = {
    'Content-Type': 'application/json',
  } as any;

  if (token) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  const config = {
    headers: { ...headers },
  };
  return config;
};

const buildMultipartFormDataHeaderConfig = (token = null) => {
  let headers = {
    'Content-Type': 'multipart/form-data',
  } as any;

  if (token) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }
  const config = {
    headers: { ...headers },
  };
  return config;
};

export {
  extractErrorMessage,
  buildJsonHeaderConfig,
  convertObjectToURLParams,
  buildMultipartFormDataHeaderConfig,
};
