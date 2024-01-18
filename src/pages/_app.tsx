import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/cart-store/CartSlice";
import modalReducer from "@/store/modal-store/ModalSlice";
import counterReducer from "@/store/quantity-store/CounterSlice";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    counter: counterReducer,
    // Add more reducers if needed
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={`${poppins.variable}`}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
