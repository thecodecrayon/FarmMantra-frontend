import { useCallback, useEffect, useState } from "react";
import { PRODUCT_URLS, VIEW_URLS } from "../api/url";

const useFetchItemDetails = (productId: number) => {
  const [product, setProduct] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadProductDetails = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await fetch(`${PRODUCT_URLS.BY_ID(productId)}`);

      const parsedResponse = await response.json();

      if (!response.ok || !parsedResponse.status)
        throw new Error("API ERROR: issue while fetching product details!");

      const { data } = parsedResponse;
      setProduct(data);
    } catch (error) {
      console.log("ERROR: while fetching product details", error);
      setError("ERROR: While fetching product details!");
    } finally {
      setIsLoading(false);
    }
  }, [productId]);

  const incrementViewCount = useCallback(async () => {
    try {
      const response = await fetch(VIEW_URLS.BY_PRODUCT_ID(productId));

      const parsedResponse = await response.json();

      if (!response.ok || !parsedResponse.status)
        throw new Error("API ERROR: While adding view count for this post!");
    } catch (error) {
      console.log("ERROR: While incrementing view count", error);
    }
  }, [productId]);

  useEffect(() => {
    loadProductDetails();
    incrementViewCount();
  }, [loadProductDetails, incrementViewCount]);

  return {
    isLoading,
    error,
    product,
  };
};

export default useFetchItemDetails;
