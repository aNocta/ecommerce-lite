import Category from "@/components/Category";
import Catalog from "@/components/catalog/Catalog";
import { IProduct } from "@/store/product/product.types";
import { NextPage } from "next";

const Page: NextPage<{ params: { slug: string } }> = ({ params }) => {
  return <Category category={params.slug} />;
};

export default Page;
