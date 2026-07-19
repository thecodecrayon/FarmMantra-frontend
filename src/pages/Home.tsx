import { Hero } from "../components";
import CategoryBelt from "../components/CategoryBelt";
import FloatingSocials from "../components/FloatingSocials";
import ShowItemsSection from "../components/ShowItemsSection";
import TextSection from "../components/TextSection";
import useFetchHomeData from "../hooks/useFetchHomeData";
import Popup from "../components/Popup";
import ShowItemsSectionSkeleton from "../components/ShowItemSectionSkeleton";

const bgColor = ["bg-gray-100", "bg-white"];
const SKELETON_SECTION_COUNT = 2;

const Home = () => {
  const { homescreenData, isLoading } = useFetchHomeData();
  return (
    <div className="relative">
      <Popup />
      {/* SOCIAL MEDIA ICONS */}
      <FloatingSocials />

      <Hero />

      {/* CATEGORY BELT; */}
      <CategoryBelt items={homescreenData?.categories} loading={isLoading} />

      {/* {homescreenData.productsByCategory?.map((item: any, idx) => { */}
      {isLoading
        ? Array.from({ length: SKELETON_SECTION_COUNT }).map((_, idx) => (
            <ShowItemsSectionSkeleton key={idx} bgColor={bgColor[idx % 2]} />
          ))
        : homescreenData?.productsByCategory?.map((item: any, idx: number) => {
            if (item.data.length > 0) {
              return (
                <ShowItemsSection
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  items={item.data}
                  bgColor={bgColor[idx % 2]}
                />
              );
            }
            return null;
          })}

      <TextSection />
    </div>
  );
};

export default Home;
