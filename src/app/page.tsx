import MainPage from "@/components/MainPage";
import StaticBanner from "@/components/StaticBanner";
import { IImage } from "@/types/image.type";

export default function Home() {
  const mainBanner: IImage = {
    imageSrc: "/cats.jpeg",
    width: 2000,
    height: 1200,
  };

  return (
    <main>
      <StaticBanner
        className="h-[50vh] object-cover"
        image={mainBanner}
      ></StaticBanner>
      <MainPage />
    </main>
  );
}
