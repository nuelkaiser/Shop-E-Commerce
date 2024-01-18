import Banner from "@/shared/banner/Banner";
import Nav from "@/shared/nav/Nav";
import ChenvronDown from "@/assets/icons/chevron-down.svg";
import Feautre from "@/shared/feature/Feautre";
import Footer from "@/shared/footer/Footer";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalAmount,
} from "@/store/cart-store/CartSlice";
import { selectCounter } from "@/store/quantity-store/CounterSlice";

export default function checkout() {
  const cartItems = useSelector(selectCartItems);
  const counter = useSelector(selectCounter);
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <div className="">
      <Nav />
      <Banner bannerPage="Checkout" />

      <div className="flex flex-col lg:flex-row lg:items-start justify-between mt-24 mx-6 lg:mx-12 xl:mx-24">
        <div>
          <div>
            <h3 className="font-poppins font-semibold text-black text-4xl mb-9">
              Billing Details
            </h3>

            <div className="flex flex-col gap-6 lg:gap-9">
              <div className="flex flex-col w-full lg:flex-row items-center gap-7">
                <div className="w-full">
                  <p className="font-poppins font-medium text-base text-black mb-5">
                    First Name
                  </p>
                  <input className="border-[#9F9F9F] w-full border h-[75px] rounded-xl px-3" />
                </div>

                <div className="w-full">
                  <p className="font-poppins font-medium text-base text-black mb-5">
                    Last Name
                  </p>
                  <input className="border-[#9F9F9F] w-full border h-[75px] rounded-xl px-3" />
                </div>
              </div>

              <div>
                <p className="font-poppins font-medium text-base text-black mb-5">
                  Company Name (Optional)
                </p>
                <input className="border-[#9F9F9F] w-full border h-[75px] rounded-xl px-3" />
              </div>

              <div>
                <p className="font-poppins font-medium text-base text-black mb-5">
                  Country / Region
                </p>

                <div className="border-[#9F9F9F] w-full border h-[75px] rounded-xl flex items-center px-3">
                  <select className="px-3 w-full rounded-xl outline-none appearance-none">
                    <option className="" value="sri lanka">
                      Sri Lanka
                    </option>
                    <option className="" value="Abuja">
                      Abuja
                    </option>
                    <option className="" value="singapore">
                      Singapore
                    </option>
                  </select>
                  <ChenvronDown />
                </div>
              </div>

              <div>
                <p className="font-poppins font-medium text-base text-black mb-5">
                  Street address
                </p>
                <input className="border-[#9F9F9F] border w-full h-[75px] rounded-xl px-3" />
              </div>

              <div>
                <p className="font-poppins font-medium text-base text-black mb-5">
                  Town / City
                </p>
                <input className="border-[#9F9F9F] border w-full h-[75px] rounded-xl px-3" />
              </div>

              <div>
                <p className="font-poppins font-medium text-base text-black mb-5">
                  Province
                </p>

                <div className="border-[#9F9F9F] w-full border h-[75px] rounded-xl flex items-center px-3">
                  <select className="px-3 w-full rounded-xl outline-none appearance-none">
                    <option className="" value="sri lanka">
                      Western Province
                    </option>
                    <option className="" value="Abuja">
                      Eastern Province
                    </option>
                    <option className="" value="singapore">
                      Northern Province
                    </option>
                  </select>
                  <ChenvronDown />
                </div>
              </div>

              <div>
                <p className="font-poppins font-medium text-base text-black mb-5">
                  ZIP code
                </p>
                <input className="border-[#9F9F9F] border w-full h-[75px] rounded-xl px-3" />
              </div>

              <div>
                <p className="font-poppins font-medium text-base text-black mb-5">
                  Phone
                </p>
                <input className="border-[#9F9F9F] border w-full h-[75px] rounded-xl px-3" />
              </div>

              <div>
                <p className="font-poppins font-medium text-base text-black mb-5">
                  Email address
                </p>
                <input className="border-[#9F9F9F] border w-full h-[75px] rounded-xl px-3" />
              </div>
            </div>
          </div>

          <input
            className="border-[#9F9F9F] border w-full h-[75px] rounded-xl px-3 placeholder-shown:text-[#9F9F9F] mt-6 lg:mt-[66px]"
            placeholder="Additional information"
          />
        </div>

        <div className="lg:w-2/5 mt-14">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-poppins font-medium text-black text-2xl">
              Product
            </h4>

            <h4 className="font-poppins font-medium text-black text-2xl">
              Subtotal
            </h4>
          </div>

          {cartItems.map((item) => (
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-1">
                <p className="font-poppins font-normla text-[#9F9F9F] text-base">
                  {item.title}
                </p>
                <p className="text-black font-poppins"> x {counter}</p>
              </div>

              <h4 className="font-poppins font-light text-black text-base">
                {item.price}
              </h4>
            </div>
          ))}

          <div className="flex items-center justify-between mb-6">
            <p className="font-poppins font-normal text-black text-base">
              Subtotal
            </p>

            <h4 className="font-poppins font-light text-black text-base">
              &#8358; {totalAmount}
            </h4>
          </div>

          <div className="flex items-center justify-between">
            <p className="font-poppins font-normal text-black text-base">
              total
            </p>

            <h4 className="font-poppins font-bold text-[#B88E2F] text-2xl">
              &#8358; {totalAmount}
            </h4>
          </div>

          <hr className="bg-[#D9D9D9] w-full mt-8 mb-6" />

          <div>
            <div className="flex items-center gap-4 mb-4">
              <input type="radio" />
              <p className="font-poppins font-mediumtext-sm md:text-base text-black">
                Direct Bank Transfer
              </p>
            </div>

            <p className="text-[#9F9F9F] text-sm md:text-base font-poppins font-light mb-6">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>

            <div className="flex items-center gap-4 mb-3">
              <input type="radio" />
              <p className="font-poppins font-mediumtext-sm md:text-base text-[#9F9F9F]">
                Direct Bank Transfer
              </p>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <input type="radio" />
              <p className="font-poppins font-mediumtext-sm md:text-base text-[#9F9F9F]">
                Cash On Delivery
              </p>
            </div>

            <p className="text-sm md:text-base text-black font-poppins font-normal">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-bold"> privacy policy</span>.
            </p>

            <div className="flex justify-center">
              <button className="py-[17px] px-[102px] border border-black rounded-2xl cursor-pointer font-poppins font-normal text-xl mt-[40px]">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>

      <Feautre />
      <Footer />
    </div>
  );
}
