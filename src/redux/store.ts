import { configureStore } from '@reduxjs/toolkit';
export const makeStore = () => {
  return configureStore({
    reducer: {
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
      ]),
  });
};

export const store = makeStore();


