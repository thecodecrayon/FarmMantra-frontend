import { useState } from "react";
import { INQUIRY_URLS } from "../../api/url";

type PayloadType = {
  name: string;
  phone: string;
  email?: string;
  message: string;
  productId: number;
};

const useCreateInquiry = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createNewInquiry = async (payload: PayloadType) => {
    try {
      setIsLoading(true);

      const response = await fetch(INQUIRY_URLS.BASE, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const parsedResponse = await response.json();

      if (!response.ok || !parsedResponse.status)
        throw new Error(
          "API ERROR: Issue while creating request for new inquiry!",
        );
    } catch (error) {
      console.log("Error: while creating a new inquiry!", error);
      setError("Error: While create a new inquiry!");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    createNewInquiry,
  };
};

export default useCreateInquiry;
