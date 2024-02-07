import { createSlice } from '@reduxjs/toolkit';
import { productEntity } from './entity.product';

const initialState: productEntity = {
    id: '',
    name: '',
    image: '',
    price: 0,
    description: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
        state.id = action.payload?.id;
        state.name = action.payload?.name;
        state.image = action.payload?.image;
        state.price = action.payload?.price;
        state.description = action.payload?.description;
    }
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
