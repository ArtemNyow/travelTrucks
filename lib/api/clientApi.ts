import { nextServer } from "./api";
import { isAxiosError } from "axios";
interface GetCampersParams {
  location?: string;
  form?: string;
  AC?: string;
  kitchen?: string;
}

export const getCampers = async (
  params: GetCampersParams = {},
  page: number = 1,
  limit: number = 4
) => {
  try {
    const response = await nextServer.get("/campers", {
      params: { ...params, page, limit },
    });

    const data = response.data?.data || [];
    const hasMore = data.length >= limit;

    return {
      data,
      total: response.data?.total || 0,
      page,
      limit,
      hasMore,
    };
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error(
        "Error in getCampers:",
        error.response?.data || error.message
      );
    } else if (error instanceof Error) {
      console.error("Error in getCampers:", error.message);
    } else {
      console.error("Unknown error in getCampers");
    }
    throw error;
  }
};
