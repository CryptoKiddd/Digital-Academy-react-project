import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total:0,
        
    },
    reducers: {
        addProduct: (state,action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += Number(action.payload.price) * action.payload.quantity || Number(action.payload.price) * 1;
            

        },
        removeProduct: (state,action) => {
            state.quantity -= 1;
            state.products = state.products.filter(item =>item._id !== action.payload._id);
            state.total -= Number(action.payload.price) * action.payload.quantity
          
        },
       
        clearCart:(state)=>{

            state.quantity = 0;
            state.total = 0;
            state.products = [];

        },
        setProductQuantity(state,action){
            state.productQuantity = action.payload;
        }
    },
});

export const {addProduct,removeProduct,clearCart,setProductQuantity} = cartSlice.actions;
export default cartSlice.reducer;

