import Nav from "@/shared/nav/Nav";
import Feautre from "@/shared/feature/Feautre";
import ChevronRight from "@/assets/icons/chevron-right.svg";
import Footer from "@/shared/footer/Footer";
import Review from "@/assets/icons/review-star.svg";
import Facebook from "@/assets/icons/facebook.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";
import Favourite2 from "@/assets/icons/favourite-2.svg";
import Twitter from "@/assets/icons/twitter.svg";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/shared/product card/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Cart from "@/shared/modals/cart/CartModal";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/cart-store/CartSlice";
import { setModal } from "@/store/modal-store/ModalSlice";
import {
  selectCounter,
  incrementCounter,
  decrementCounter,
} from "@/store/quantity-store/CounterSlice";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  images: string[];
  quantity: number;
  subtotal: number
  // Add other properties as needed
}

export default function product() {
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [displayCount, setDisplayCount] = useState(4);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { modal } = useSelector((state: any) => state.modal);

  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);

  const handleCart = () => {
    dispatch(setModal(!modal));
    handleAddToCart();
  };

  const handleAddToCart = () => {
    // Check if product is not null
    if (product) {
      // Calculate the total price by multiplying the product price with the counter
      const totalPrice = product.price * counter;
  
      // Dispatch the addToCart action with the calculated total price
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          subtotal: totalPrice, // Use the calculated total price
          images: product.images,
          quantity: counter,
        })
      );
    }
  };

  const handleViewMore = () => {
    // Increment the number of products to display
    setDisplayCount((prevCount) => prevCount + 4);
  };

  const handleShowLess = () => {
    // Decrement the number of products to display
    setDisplayCount((prevCount) => Math.max(prevCount - 4, 0));
  };

  const handleThumbnailClick = (image: string) => {
    // Update the selected image when a thumbnail is clicked
    setSelectedImage(image);
  };

  const handleIncrease = () => {
    dispatch(incrementCounter());
  };

  const handleDecrease = () => {
    dispatch(decrementCounter());
  };

  // Reset the counter when handling addToCart
 

  // Simulate fetching product data based on the id
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // Replace this with your actual API endpoint to fetch product details
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();

        // Update the product state with the fetched data
        setProduct(data);

        // Fetch related products based on the category of the selected product
        const relatedResponse = await fetch(
          `https://dummyjson.com/products?category=${data.category}`
        );
        const relatedData = await relatedResponse.json();

        if (data.images.length > 0) {
          setSelectedImage(data.images[0]);
        }

        // Update the related products state
        setRelatedProducts(relatedData.products);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    // Check if id is available before fetching data
    if (id) {
      fetchProductData();
    }
  }, [id]);

  return (
    <>
      {product ? (
        <div className={modal ? "fixed" : ""}>
          <Nav />

          <div>
            <Cart />
          </div>

          <div className="mx-5 xl:mx-[100px]">
            <div className="flex items-center gap-6">
              <div className="flex items-center my-9 gap-6">
                <div className="flex items-center gap-4">
                  <Link href={"/"}>
                    <p className="text-[#9F9F9F]  max-[375px]:text-sm text-base font-normal font-poppins cursor-pointer">
                      Home
                    </p>
                  </Link>
                  <ChevronRight />
                </div>

                <div className="flex items-center gap-4">
                  <Link href={"/"}>
                    <p className="text-[#9F9F9F]  max-[375px]:text-sm text-base font-normal font-poppins cursor-pointer">
                      Shop
                    </p>
                  </Link>
                  <ChevronRight />
                </div>
              </div>

              <span className="bg-[#9F9F9F] w-[2px] h-9 block"></span>
              <p className="font-poppins font-normal max-[375px]:text-sm text-base text-black">
                {product.title}
              </p>
            </div>
            <div className="mt-9 flex flex-col lg:flex-row items-start gap-12 xl:gap-[105px]">
              <div className="max-[768px]:w-full">
                <div className="hidden lg:flex items-start gap-7">
                  <div className="flex flex-col gap-8">
                    {product.images.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => handleThumbnailClick(image)}
                        width={80}
                        height={80}
                        className="cursor-pointer"
                      />
                    ))}
                  </div>

                  {selectedImage && (
                    <img
                      src={selectedImage}
                      alt="Main Product Image"
                      width={450}
                      height={390}
                    />
                  )}
                </div>

                <div className="lg:hidden">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{ clickable: true }}
                    
                  >
                    {product.images.map((image, index) => (
                      <SwiperSlide>
                        <Image
                          src={image}
                          alt=""
                          className="lg:hidden md:w-[770px] md:h-80 object-fill"
                          width={770}
                          height={380}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              <div className="max-[768px]:w-full">
                <h2 className="font-poppins font-normal text-black text-[32px] md:text-[42px]">
                  {product.title}
                </h2>
                <p className="font-poppins font-medium text-[#9F9F9F] text-2xl mb-4">
                  &#8358; {product.price}
                </p>

                <div className="flex items-center mb-4">
                  <Review />
                  <span className="bg-[#9F9F9F] w-[1px] h-[30px] mx-5"></span>
                  <p className="text-[#9F9F9F] text-[13px] font-poppins font-normal">
                    5 Customer Review
                  </p>
                </div>

                <p className="font-poppins font-normal text-[13px] text-black lg:max-w-[425px]">
                  {product.description}
                </p>

                <div className="mt-6">
                  <p className="font-poppins font-normal text-sm text-[#9F9F9F] mb-3">
                    Size
                  </p>

                  <div className="flex items-center gap-4">
                    <button className="h-[30px] w-[30px] rounded-md bg-[#FBEBB5] font-poppins font-normal text-[13px] text-black cursor-pointer">
                      L
                    </button>

                    <button className="h-[30px] w-[30px] rounded-md bg-[#FAF4F4] font-poppins font-normal text-[13px] text-black cursor-pointer">
                      XL
                    </button>

                    <button className="h-[30px] w-[30px] rounded-md bg-[#FAF4F4] font-poppins font-normal text-[13px] text-black cursor-pointer">
                      XS
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="font-poppins font-normal text-sm text-[#9F9F9F] mb-3">
                    Color
                  </p>

                  <div className="flex items-center gap-4">
                    <button className="h-[30px] w-[30px] rounded-full bg-[#816DFA] cursor-pointer"></button>
                    <button className="h-[30px] w-[30px] rounded-full bg-[#000000] cursor-pointer"></button>
                    <button className="h-[30px] w-[30px] rounded-full bg-[#CDBA7B] cursor-pointer"></button>
                  </div>
                </div>

                <div className="flex items-center mt-8 gap-5">
                  <div className="flex items-center gap-9 py-5 px-4 border border-[#9F9F9F] rounded-xl h-16">
                    <div className="cursor-pointer" onClick={handleDecrease}>
                      -
                    </div>
                    <div>{counter}</div>
                    <div className="cursor-pointer" onClick={handleIncrease}>
                      +
                    </div>
                  </div>

                  <button
                    className="md:px-12 py-5 border border-black rounded-xl cursor-pointer font-poppins font-normal px-4 max-[375px]:text-sm text-base xl:text-xl h-16"
                    onClick={handleCart}
                  >
                    Add To Cart
                  </button>
                </div>

                <span className="bg-[#D9D9D9] h-[1px] w-full block mt-[60px] mb-10"></span>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-[61px]">
                    <p className="text-[#9F9F9F] text-base font-normal font-poppins">
                      SKU
                    </p>

                    <div className="flex items-center gap-3">
                      <p className="text-[#9F9F9F]">:</p>
                      <p className="text-[#9F9F9F] text-base font-normal font-poppins">
                        SS001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-[#9F9F9F] text-base font-normal font-poppins">
                      Category
                    </p>

                    <div className="flex items-center gap-3">
                      <p className="text-[#9F9F9F]">:</p>
                      <p className="text-[#9F9F9F] text-base font-normal font-poppins">
                        {product.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-[52px]">
                    <p className="text-[#9F9F9F] text-base font-normal font-poppins">
                      Tags
                    </p>

                    <div className="flex items-center gap-3">
                      <p className="text-[#9F9F9F]">:</p>
                      <p className="text-[#9F9F9F] text-base font-normal font-poppins">
                        Sofa, Chair, Home, Shop
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-11">
                    <p className="text-[#9F9F9F] text-base font-normal font-poppins">
                      Share
                    </p>

                    <div className="flex items-center gap-3">
                      <p className="text-[#9F9F9F]">:</p>

                      <div className="flex items-center gap-8">
                        {" "}
                        <div className="flex items-center gap-6">
                          <div className="cursor-pointer">
                            <Facebook />
                          </div>

                          <div className="cursor-pointer">
                            <LinkedIn />
                          </div>

                          <div className="cursor-pointer">
                            <Twitter />
                          </div>

                          <div className="cursor-pointer">
                            <Favourite2 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <span className="hidden w-full h-[1px] bg-[#D9D9D9] mt-14 mb-12 lg:block"></span>

          <div>
            <div className="hidden lg:block mx-5 xl:mx-52">
              <p className="font-poppins font-normal text-2xl text-black mb-9">
                Description
              </p>

              <p className="font-poppins font-normal text-base text-[#9F9F9F] mb-[30px]">
                {product.description}
              </p>

              <p className="font-poppins font-normal text-base text-[#9F9F9F]">
                {product.description}
              </p>
            </div>

            <div className="hidden lg:flex flex-col xl:flex-row items-center gap-[30px] mx-12 xl:mx-[100px] mt-9">
              <Image
                src={product.images[2]}
                alt="product"
                width={600}
                height={350}
              />
              <Image
                src={product.images[1]}
                alt="product"
                width={600}
                height={350}
              />
            </div>
          </div>

          <span className="w-full h-[1px] bg-[#D9D9D9] mt-16 mb-14 lg:block"></span>

          <div>
            <h4 className="hidden lg:block font-poppins font-medium text-4xl text-black text-center mb-7">
              Related Products
            </h4>

            <div className="lg:px-26 px-4 min-[768px]:px-12 pt-16 grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-12">
              {relatedProducts &&
                relatedProducts.slice(0, displayCount).map((related: any) => (
                  <Link href={`/product/${related.id}`}>
                    <ProductCard
                      productImg={related.images[0]}
                      productName={related.title}
                      productPrice={related.price}
                    />
                  </Link>
                ))}
            </div>
          </div>

          <div className="flex mt-24 justify-center gap-5">
            {displayCount < relatedProducts.length && (
              <p
                className="font-poppins font-medium text-xl text-black border-b-2 border-b-[black] pb-5 cursor-pointer"
                onClick={handleViewMore}
              >
                View More
              </p>
            )}

            {displayCount > 4 && (
              <p
                className="font-poppins font-medium text-xl text-black border-b-2 border-b-[black] pb-5 cursor-pointer"
                onClick={handleShowLess}
              >
                View Less
              </p>
            )}
          </div>

          <Feautre />
          <Footer />
        </div>
      ) : (
        <p>Loading Product</p>
      )}
    </>
  );
}
