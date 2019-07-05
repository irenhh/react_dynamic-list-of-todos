const baseDataAddress = 'https://jsonplaceholder.typicode.com';

export const getTodos = () => {
  return fetch(`${baseDataAddress}/todos`)
    .then(response => response.json());
};

export const getUsers = () => {
  return fetch(`${baseDataAddress}/users`)
    .then(response => response.json());
};
