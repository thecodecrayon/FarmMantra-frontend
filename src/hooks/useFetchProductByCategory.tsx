import { useCallback, useEffect, useState } from "react";
import { PRODUCT_URLS } from "../api/url";

const useFetchProductByCategory = (categoryId: string | undefined) => {
  const [records, setRecords] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadProductByCategory = useCallback(async () => {
    if (!categoryId) {
      console.log("No category Id present for the API request!");
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch(PRODUCT_URLS.BY_CATEGORY_ID(categoryId));

      const parsedResponse = await response.json();

      if (!response.ok || !parsedResponse.status)
        throw new Error("API ERROR: Issue while fetching product data!");

      const { data } = parsedResponse;

      setRecords(data);
    } catch (error) {
      console.log("ERROR: Unable to load products", error);
      setError("ERROR: Unable to load products!");
    } finally {
      setIsLoading(false);
    }
  }, [categoryId]);

  useEffect(() => {
    loadProductByCategory();
  }, [loadProductByCategory]);

  return {
    isLoading,
    error,
    records,
  };
};

export default useFetchProductByCategory;
