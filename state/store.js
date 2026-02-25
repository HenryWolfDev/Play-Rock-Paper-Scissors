export const createStore = initialState => {
  let state = initialState;
  const listeners = [];

  const getState = () => state;

  const setState = nextState => {
    state = nextState;
    listeners.forEach(fn => fn(state));
  };

  const subscribe = fn => {
    listeners.push(fn);
    fn(state);
  };

  return { getState, setState, subscribe };
};
