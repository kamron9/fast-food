import MainProductsCarousel from "@/components/generic/MainProductsCarousel";
import { product } from "@/data/product";

const HotDog = () => (
  <MainProductsCarousel title={"Хот-Дог"} products={product} />
);

export default HotDog;
