import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "./ProductCard.module.scss";

interface ProductProps {
  productImg: StaticImageData;
  productName: any;
  productPrice: any;
}

const ProductCard: React.FC<ProductProps> = ({
  productImg,
  productName,
  productPrice,
}) => {
  return (
    <div className="cursor-pointer">
      <Image
        src={productImg}
        alt="product"
        className={styles.productImg}
        width={320}
        height={408}
      />

      <p className={styles.productName}>{productName}</p>

      <p className={styles.productPrice}>&#8358; {productPrice}</p>
    </div>
  );
};

export default ProductCard;
