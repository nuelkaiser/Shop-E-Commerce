import Banner from "@/shared/banner/Banner";
import Nav from "@/shared/nav/Nav";
import CartImage from "@/assets/images/cart-image.png";
import Delete from "@/assets/icons/delete.svg";
import ChenvronRight from "@/assets/icons/chevron-right.svg";
import Feautre from "@/shared/feature/Feautre";
import Footer from "@/shared/footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  selectCartItems,
  selectTotalAmount,
} from "@/store/cart-store/CartSlice";
import { selectCounter } from "@/store/quantity-store/CounterSlice";

export default function cart() {
  const cartItems = useSelector(selectCartItems);
  const counter = useSelector(selectCounter);
  const totalAmount = useSelector(selectTotalAmount);

  const dispatch = useDispatch();

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className="">
      <Nav />
      <Banner bannerPage="Cart" />

      <div>
        <div className="px-6 xl:px-[100px] pt-20 hidden md:flex flex-col xl:flex-row justify-between items-start gap-8">
          <div className=" w-full xl:w-3/5">
            <div className="bg-[#FFF9E5] flex items-center justify-between py-4 px-36 mb-14">
              <p className="font-poppins font-medium text-base text-black">
                Product
              </p>

              <p className="font-poppins font-medium text-base text-black">
                Price
              </p>

              <p className="font-poppins font-medium text-base text-black">
                Quantity
              </p>

              <p className="font-poppins font-medium text-base text-black">
                Subtotal
              </p>
            </div>

            {cartItems.map((item) => (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <Image
                    src={item.images[1]}
                    alt="sofa"
                    width={100}
                    height={100}
                  />
                  <p className="text-[#9F9F9F] text-base font-normal font-poppins">
                    {item.title}
                  </p>
                </div>

                <p className="text-[#9F9F9F] text-base font-normal font-poppins">
                  {item.price}
                </p>

                <div className="border border-[#9F9F9F] px-3 py-1 rounded-md appearance-none">
                  {item.subtotal / item.price}
                </div>

                <div className="flex items-center gap-12">
                  <p className="text-black text-base font-normal font-poppins">
                    {item.subtotal}
                  </p>

                  <div
                    className="cursor-pointer"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <Delete />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#FFF9E5]  pt-4 pb-20 px-20 w-full xl:w-2/5">
            <h4 className="font-poppins font-semibold text-black text-center text-[32px] mb-16">
              Cart Totals
            </h4>

            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <p className="font-poppins font-medium text-base text-black">
                  Subtotal
                </p>
                <p className="text-[#9F9F9F] text-base font-normal font-poppins">
                  &#8358; {counter * totalAmount}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="font-poppins font-medium text-base text-black">
                  Total
                </p>
                <p className="text-[#B88E2F] text-xl font-medium font-poppins">
                  &#8358; {counter * totalAmount}
                </p>
              </div>
            </div>

            <Link href="/checkout">
              <button className="py-[14px] px-[60px] border border-black rounded-3xl cursor-pointer font-poppins font-normal text-xl mt-[42px]">
                Check Out
              </button>
            </Link>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="mx-6 mb-4">
            <div className="flex items-center  my-4  gap-2">
              <Link href="/">
                <p className="font-poppins font-medium text-sm text-black cursor-pointer">
                  Home
                </p>
              </Link>
              <ChenvronRight />
              <p className="font-poppins font-normal text-sm text-black">
                Cart
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {cartItems.map((item) => (
                <div className="flex items-start gap-3">
                  <Image
                    src={item.images[0]}
                    alt="product"
                    className="w-32"
                    width={128}
                    height={128}
                  />

                  <div className="w-full">
                    <h4 className="font-poppins font-medium text-xl text-black mb-1">
                      {item.title}
                    </h4>
                    <p className="font-poppins font-normal text-sm text-black">
                      {item.price}
                    </p>

                    <div className="flex justify-between">
                      <div className="h-10 w-32 max-[375px]:h-8 border border-[#9F9F9F] rounded-lg"></div>

                      <div
                        className="cursor-pointer"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Delete />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-t-[#D7D7D7] pt-4 px-6 flex items-start justify-between">
            <div>
              <p className="font-poppins font-medium text-xs text-black mb-1">
                Total
              </p>

              <p className="text-[#B88E2F] max-[375px]:text-base text-xl font-medium font-poppins">
                Rs. 250,000.00
              </p>
            </div>

            <button className="py-3 max-[375px]:px-7 px-[57px] border border-black rounded-lg cursor-pointer font-poppins font-normal text-base">
              Check Out
            </button>
          </div>
        </div>
      </div>

      <Feautre />
      <Footer />
    </div>
  );
}
