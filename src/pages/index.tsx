import Banner from "@/shared/banner/Banner";
import Nav from "@/shared/nav/Nav";
import Filter from "@/assets/icons/filter..svg";
import Grid from "@/assets/icons/grid.svg";
import List from "@/assets/icons/list.svg";
import ChevronDown from "@/assets/icons/chevron-down.svg";
import ProductCard from "@/shared/product card/ProductCard";
import Feautre from "@/shared/feature/Feautre";
import Footer from "@/shared/footer/Footer";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products"); 
        const data = await response.json(); // Parse the JSON data

        // Check if data has a "products" key and if it is an array
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <div className="">
      <Nav />
      <Banner bannerPage="Shop" />

      <div className="">
        <div className="sticky top-0 bg-[#FAF4F4] py-9 px-24 hidden lg:flex items-center justify-between mt-12">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6">
              <Filter />
              <Grid />
              <List />
            </div>

            <span className="bg-[#9F9F9F] block w-[2px] h-9"></span>

            <p className="text-black text-base font-poppins font-normal">
              Showing 1–16 of 32 results
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <p className="text-black text-xl font-poppins font-normal">
                Show
              </p>

              <select name="show" className="appearance-none py-3 px-[18px]">
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-black text-xl font-poppins font-normal">
                Sort By
              </p>

              <select name="show" className="appearance-none py-3 px-[18px]">
                <option value="Default">Default</option>
                <option value="Bed">Bed</option>
                <option value="Table">Table</option>
              </select>
            </div>
          </div>
        </div>

        <div className="sticky top-0 flex items-center justify-between lg:hidden max-[375px]:px-3 py-4 px-6 max-[320px]:px-2 bg-[#FAF4F4]">
          <div className="flex items-center gap-2 max-[375px]:gap-1">
            <Filter />
            <Grid />
            <List />
          </div>

          <span className="bg-[#9F9F9F] max-[320px]:hidden block w-[2px] h-9"></span>

          <div className="flex items-center gap-2 max-[320px]:gap-[1px]">
            <select
              name="show"
              className="appearance-none bg-transparent outline-none"
            >
              <option value="Default">Default</option>
              <option value="Bed">Bed</option>
              <option value="Table">Table</option>
            </select>

            <ChevronDown className="" />
          </div>

          <span className="bg-[#9F9F9F] max-[320px]:hidden block w-[2px] h-9"></span>

          <div className="flex items-center gap-4 max-[375px]:gap-2">
            <p className="text-black text-base font-poppins font-normal">
              Show
            </p>

            <select name="show" className="appearance-none py-2 px-[10px]">
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>
        </div>
      </div>

      <div className="lg:px-26 px-4 min-[768px]:px-12 pt-16 grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-12">
        {
        products && 
        products.map((product: any) => (
          <Link href={`/product/${product.id}`}>
            <ProductCard
              productImg={product.images[1]}
              productName={product.title}
              productPrice={product.price}
            />
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4 lg:gap-9 justify-center mt-6 lg:mt-28">
        <div className="bg-[#FBEBB5] lg:py-4 lg:px-7 px-5 py-2 rounded-lg cursor-pointer">
          1
        </div>

        <div className="bg-[#FFF9E5] lg:py-4 lg:px-7 px-5 py-2 rounded-lg cursor-pointer">
          2
        </div>

        <div className="bg-[#FFF9E5] lg:py-4 lg:px-7 px-5 py-2 rounded-lg cursor-pointer">
          3
        </div>

        <div className="bg-[#FFF9E5] lg:py-4 lg:px-7 px-5 py-2 rounded-lg cursor-pointer">
          Next
        </div>
      </div>

      <div>
        <Feautre />

        <Footer />
      </div>
    </div>
  );
}
