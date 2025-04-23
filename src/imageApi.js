import axios from "axios";

export const fetchImages = async (topic, currentPage) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: topic,
      page: currentPage,
      client_id: "wF3w9nwRAt8AqJ_cDgqvuS34sl94P7CLhUifSsy_E9U",
      per_page: 12,
    },
  });

  return response.data;
};
