import MainProductsCarousel from "@/components/generic/MainProductsCarousel";
import { product } from "@/data/product";

const Burger = () => (
  <MainProductsCarousel title={"Бургеры"} products={product} />
);

export default Burger;
