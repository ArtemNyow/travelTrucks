import { create } from "zustand";
import { getCampers } from "@/lib/api/clientApi"; // Your client API function
import { Camper } from "@/types/camper";

interface CatalogState {
  campers: Camper[];
  loading: boolean;
  error: string | null;
  page: number;
  total: number;
  filters: {
    location: string;
    type: string;
    AC: boolean;
    kitchen: boolean;
  };

  // Actions
  setFilters: (filters: Partial<CatalogState["filters"]>) => void;
  fetchCampers: (page?: number, append?: boolean) => Promise<void>;
  resetCampers: () => void;
}

export const useCatalogStore = create<CatalogState>((set, get) => ({
  campers: [],
  loading: false,
  error: null,
  page: 1,
  total: 0,
  filters: {
    location: "",
    type: "",
    AC: false,
    kitchen: false,
  },

  setFilters: (newFilters) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    }));
  },

  resetCampers: () => set({ campers: [], page: 1, total: 0 }),

  fetchCampers: async (page = 1, append = false) => {
    const { filters } = get();

    set({ loading: true, error: null });

    try {
      const params = {
        location: filters.location || undefined,
        type: filters.type || undefined,
        AC: filters.AC ? "true" : undefined,
        kitchen: filters.kitchen ? "true" : undefined,
      };

      const result = await getCampers(params, page, 4);

      set((state) => ({
        campers: append ? [...state.campers, ...result.data] : result.data,
        total: result.total,
        page: page,
        loading: false,
      }));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred", error);
      }

      set({ error: "Failed to load campers", loading: false });
    }
  },
}));
