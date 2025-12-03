import axios from "axios";
import { Camper, Filters } from "@/types/camper";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

interface FetchCampersParams extends Partial<Filters> {
  page?: number;
  limit?: number;
}

export const fetchCampersApi = async (
  params: FetchCampersParams = {}
): Promise<Camper[]> => {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    // Пропускаємо null, undefined, пустий рядок, false
    if (value != null && value !== "" && value !== false) {
      searchParams.append(key, String(value));
    }
  }

  const url = `${API_URL}?${searchParams.toString()}`;

  const { data } = await axios.get<Camper[]>(url);
  console.log("RESPONSE ===>", data);

  return data;
};
