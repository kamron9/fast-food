"use client";
import { useParams } from "next/navigation";

const Catalog = () => {
  const { params } = useParams();
  console.log(params);
  return <div>Category : {params}</div>;
};

export default Catalog;
