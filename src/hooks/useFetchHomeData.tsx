import { useEffect, useState } from "react";
import { HOMESCREEN_URLS } from "../api/url";

type CategoryDataType = {
  id: number;
  name: string;
  image: string;
  data?: any;
};

type ArtisanType = {
  id: number;
  name: string;
};

type ProductType = {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  price: number;
  discountInPercent: number;
  discountedPrice: number;
  defaultQuantity: number;
  quantityNote: string;
  artisan: ArtisanType;
};

type ProductByCategoryType = {
  categoryId: number;
  categoryName: string;
  products: ProductType;
};

type HomescreenDataType = {
  categories: CategoryDataType[];
  productsByCategory: ProductByCategoryType[];
};

const useFetchHomeData = () => {
  const [homescreenData, setHomescreenData] = useState<HomescreenDataType>({
    categories: [],
    productsByCategory: [],
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadHomescreenData = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(HOMESCREEN_URLS.BASE);

      const parsedResponse = await response.json();

      if (!response.ok || !parsedResponse.status)
        throw new Error("API ERROR: while fetching homescreen stats!");

      const { data } = parsedResponse;
      setHomescreenData(data);
    } catch (error) {
      console.error("ERROR: Unable to fetch homescreen data", error);
      setError("ERROR: Unable to fetch homescreen data!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadHomescreenData();
  }, []);

  return {
    isLoading,
    error,
    homescreenData,
  };
};

export default useFetchHomeData;
