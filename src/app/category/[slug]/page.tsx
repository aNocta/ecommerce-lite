import Category from "@/components/Category";
import { NextPage } from "next";

const Page: NextPage<{ params: { slug: string } }> = ({ params }) => {
  return <Category category={params.slug} />;
};

export default Page;
