import { Grid2X2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  image: string;
  title: string;
  link: string;
};

const CategoryBubble = ({ image, title, link }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(link);
  };

  return (
    <div
      className="flex flex-col flex-1 items-center justify-center gap-2 md:gap-3 cursor-pointer"
      onClick={handleNavigate}
    >
      {image ? (
        <img
          src={image}
          alt={`${title}`}
          className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-25 lg:h-25 rounded-full shadow"
        />
      ) : (
        <div className="flex items-center w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-25 lg:h-25 justify-center rounded-full bg-gray-100">
          <Grid2X2 size={28} className="text-gray-700" />
        </div>
      )}
      <p className="font-bold text-[10px] sm:text-xs md:text-sm text-gray-800 text-center leading-tight">
        {title}
      </p>
    </div>
  );
};

export default CategoryBubble;
