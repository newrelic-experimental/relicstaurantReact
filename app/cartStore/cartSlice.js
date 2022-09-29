import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addMeal: (state, { payload }) => {
      const isItemInCart = state.find((item) => item.name === payload.name);

      if (isItemInCart) {
        const newData = state.map((item) =>
          item.name === payload.name ? { ...item, count: item.count + 1 } : item
        );
        return newData;
      } else {
        return [...state, { ...payload, count: 1 }];
      }
    },

    removeMeal: (state, { payload }) => {
      const newData = state
        .map((item) => (item.name === payload.name ? { ...item, count: item.count - 1 } : item))
        .filter((item) => item.count > 0);
      return newData;
    },

    clearCart: () => {
      return [];
    },
  },
});

export const { addMeal, removeMeal, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
