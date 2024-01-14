import MainProductsCarousel from "@/components/generic/MainProductsCarousel";
import { product } from "@/data/product";

const Lavash = () => (
  <MainProductsCarousel title={"Лаваш"} products={product} />
);

export default Lavash;
