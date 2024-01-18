import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  title: string;
  price: number;
  images: string[];
  quantity: number;
  subtotal: number;
  // Other properties as needed
}

interface CartState {
  items: Item[];
  totalAmount: number;
}

const calculateTotalAmount = (items: Item[]) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  } as CartState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If the item is already in the cart, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If it's a new item, add it to the cart with a quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalAmount = calculateTotalAmount(state.items);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      state.totalAmount = calculateTotalAmount(state.items);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectTotalAmount = (state: { cart: CartState }) => state.cart.totalAmount;
export default cartSlice.reducer;
