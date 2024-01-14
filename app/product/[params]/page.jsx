"use client";
import { useParams } from "next/navigation";

const Page = () => {
  const { params } = useParams();
  return <div>product: {params}</div>;
};

export default Page;
