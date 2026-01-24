import { useQuery } from "@tanstack/react-query";

const API_URL = "https://y79nmax2sc.execute-api.us-east-1.amazonaws.com/get-count";

export const useVisitorCount = () => {
  return useQuery({
    queryKey: ["visitorCount"],
    queryFn: async () => {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // This returns the {"views": X} object
    },
  });
};