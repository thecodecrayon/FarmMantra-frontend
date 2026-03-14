import { Grid2X2 } from "lucide-react";
import type { ComponentType } from "react";
import { useNavigate } from "react-router-dom";

type Icon = ComponentType;

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
      className="flex flex-col items-center justify-center gap-3 flex-1 cursor-pointer"
      onClick={handleNavigate}
    >
      {image ? (
        <img
          src={image}
          alt={`${title}`}
          className="w-25 h-25 rounded-[50%] shadow"
        />
      ) : (
        <div className=" flex items-center w-25 h-25 justify-center rounded-[50%] flex-1 bg-gray-100">
          <Grid2X2 size={35} className="text-gray-700" />
        </div>
      )}
      <p className="font-bold tracking-medium text-gray-800 text-center">
        {title}
      </p>
    </div>
  );
};

export default CategoryBubble;
