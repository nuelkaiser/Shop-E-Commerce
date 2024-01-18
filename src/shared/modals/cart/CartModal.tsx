import React, { useState } from "react";
import styles from "./CartModal.module.scss";
import ShopClose from "@/assets/icons/shop-close.svg";
import Image from "next/image";
import DeleteCart from "@/assets/icons/delete-cart.svg";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  selectCartItems,
  selectTotalAmount,
} from "@/store/cart-store/CartSlice";
import { setModal } from "@/store/modal-store/ModalSlice";
import { selectCounter, setCounter } from "@/store/quantity-store/CounterSlice";

interface CartProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const Cart: React.FC<CartProps> = () => {
  const cartItems = useSelector(selectCartItems);
  const counter = useSelector(selectCounter);
  const totalAmount = useSelector(selectTotalAmount);
  const { modal } = useSelector((state: any) => state.modal);

  const dispatch = useDispatch();

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  const handleCartModal = () => {
    dispatch(setModal(!modal));
    handleAddToCartWithReset();
  };

  const handleAddToCartWithReset = () => {
    dispatch(setCounter(1)); // Reset counter to 1
  };

  return (
    <div className={modal ? `flex flex-col z-40` : `hidden`}>
      <div className={styles.modalContainer}></div>

      <div className={styles.notificationContainer}>
        <div className="flex items-center justify-between mx-6 mb-7">
          <p className="font-poppins font-semibold text-2xl text-black">
            Shopping Cart
          </p>
          <ShopClose className={styles.closeIcon} onClick={handleCartModal} />
        </div>

        <span className="bg-[#D9D9D9] mx-6 block h-[1px] w-4/5"></span>

        <div className={styles.itemsContainer}>
          <div className={styles.scrollContainer}>
            {cartItems.map((item) => (
              <div
                className="flex justify-between items-center gap-4 mb-5"
                key={item.id}
              >
                <Image
                  src={item.images[0]}
                  alt="notifiy"
                  className=""
                  width={110}
                  height={90}
                />

                <div className="w-4/5">
                  <p className="font-poppins font-normal text-black text-base mb-3">
                    {item.title}
                  </p>

                  <div className="flex gap-4 items-center">
                    <p>{counter} X</p>

                    <p className="text-[#B88E2F] text-sm font-poppins font-medium">
                      {item.price}
                    </p>
                  </div>
                </div>

                <div onClick={() => handleRemoveItem(item.id)}>
                  <DeleteCart />
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className={styles.checkOutContainer}>
              <div className={styles.subAmount}>
                <p>Subtotal</p>

                <h4 className="text-[#B88E2F] font-semibold font-poppins text-base">
                  &#8358; {totalAmount * counter}
                </h4>
              </div>

              <div className="flex items-center justify-between">
                <Link href="/cart">
                  <button className={styles.checkOutButton}>View Cart</button>
                </Link>

                <Link href="/checkout">
                  <button className={styles.checkOutButton}>Checkout</button>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className=' flex flex-col items-center gap-9 mt-20'>
                          <Image src={Empty} alt='bell'/>
                          <P className='text-[#475367] text-center max-w-[252px] md:max-w-sm'>
                              You have’nt made any transaction yet. Your wallet Payments would appear here when you
                          </P>
                      </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
