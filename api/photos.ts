import { url } from "@/constants/data";
import { PhotoResponse } from "@/lib/type";
import axios from "axios";

export const getPohots = async () => {
  const res = await axios<PhotoResponse>(url, {
    headers: {
      Authorization: `${process.env.EXPO_PUBLIC_API_URL}`,
    },
  });

  return res.data;
};
