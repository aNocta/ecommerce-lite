import ProductPage from "@/components/ProductPage";
import { NextPage } from "next";

const Page: NextPage<{ params: { id: number } }> = ({ params }) => {
  return <ProductPage productId={params.id} />;
};

export default Page;
