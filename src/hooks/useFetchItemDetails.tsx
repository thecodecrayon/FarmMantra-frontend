import { useCallback, useEffect, useState } from "react";

const useFetchItemDetails = (productId: number) => {
  const [product, setProduct] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadProductDetails = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `http://localhost:8000/api/v1/product/${productId}`,
      );

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
      const response = await fetch(
        `http://localhost:8000/api/v1/view/${productId}`,
      );

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
