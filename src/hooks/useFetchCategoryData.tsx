import { useEffect, useState } from "react";
import { CATEGORY_URLS } from "../api/url";

type CategoryDataType = {
  id: number;
  name: string;
  image: string;
  totalItems: number;
  data?: any;
};

const useFetchCategoryData = () => {
  const [categories, setCategories] = useState<CategoryDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadCategories = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(CATEGORY_URLS.BASE);

      const parsedResponse = await response.json();

      if (!response.ok || !parsedResponse.status)
        throw new Error("API ERROR: Issue while fetching category data!");

      const { data } = parsedResponse;

      console.log("Data:", data);

      const filteredData = data.map((item: any) => ({
        id: item.id,
        name: item.name,
        image: item.image,
        totalItems: Number(item.totalItems),
      }));

      setCategories(filteredData);
    } catch (error) {
      console.error("Error: while fetching categories data", error);
      setError("Error: While fetching categories!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return {
    isLoading,
    error,
    categories,
  };
};

export default useFetchCategoryData;
