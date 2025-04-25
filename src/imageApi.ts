import axios from "axios";
import { Image } from "./types";

export interface ImageSearchResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

export const fetchImages = async (
  topic: string,
  currentPage: number
): Promise<ImageSearchResponse> => {
  const response = await axios.get<ImageSearchResponse>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query: topic,
        page: currentPage,
        client_id: "wF3w9nwRAt8AqJ_cDgqvuS34sl94P7CLhUifSsy_E9U",
        per_page: 12,
      },
    }
  );

  return response.data;
};
