import { Hero } from "../components";
import CategoryBelt from "../components/CategoryBelt";
import FloatingSocials from "../components/FloatingSocials";
import ShowItemsSection from "../components/ShowItemsSection";
import TextSection from "../components/TextSection";
import { homeData } from "../data";
import useFetchHomeData from "../hooks/useFetchHomeData";
import Popup from "../components/Popup";

const bgColor = ["bg-gray-100", "bg-white"];

const Home = () => {
  const { homescreenData } = useFetchHomeData();
  return (
    <div className="relative">
      <Popup />
      {/* SOCIAL MEDIA ICONS */}
      <FloatingSocials />

      <Hero />

      {/* CATEGORY BELT; */}
      <CategoryBelt items={homescreenData?.categories} />

      {/* {homescreenData.productsByCategory?.map((item: any, idx) => { */}
      {homeData.map((item: any, idx) => {
        if (item.data.length > 0) {
          return (
            <ShowItemsSection
              id={item.id}
              title={item.title}
              items={item.data}
              bgColor={bgColor[idx % 2]}
            />
          );
        }
      })}

      <TextSection />
    </div>
  );
};

export default Home;
