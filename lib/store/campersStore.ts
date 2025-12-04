import { create } from "zustand";
import { getCampers } from "@/lib/api/clientApi";
import { Camper } from "@/types/camper";

interface CatalogFilters {
  location: string;
  form: string;
  AC: boolean;
  kitchen: boolean;
  bathroom: boolean;
  TV: boolean;
  transmission: string;
}

interface CatalogState {
  campers: Camper[];
  loading: boolean;
  error: string | null;
  noResults: boolean;
  page: number;
  total: number;
  filters: CatalogFilters;

  setFilters: (filters: Partial<CatalogFilters>) => void;
  fetchCampers: (page?: number, append?: boolean) => Promise<void>;
  resetCampers: () => void;
}

export const useCatalogStore = create<CatalogState>((set, get) => ({
  campers: [],
  loading: false,
  error: null,
  noResults: false,
  page: 1,
  total: 0,
  filters: {
    location: "",
    form: "",
    AC: false,
    kitchen: false,
    bathroom: false,
    TV: false,
    transmission: "",
  },

  setFilters: (newFilters) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    }));

    get().fetchCampers(1, false);
  },

  resetCampers: () => set({ campers: [], page: 1, total: 0 }),

  fetchCampers: async (page = 1, append = false) => {
    const { filters } = get();

    set({ loading: true, error: null, noResults: false });

    try {
      const params = {
        location: filters.location || undefined,
        form: filters.form || undefined,
        AC: filters.AC ? "true" : undefined,
        kitchen: filters.kitchen ? "true" : undefined,
        bathroom: filters.bathroom ? "true" : undefined,
        TV: filters.TV ? "true" : undefined,
        transmission: filters.transmission || undefined,
      };

      const result = await getCampers(params, page, 4);

      if (!result.data || result.data.length === 0) {
        set({
          campers: [],
          noResults: true,
          loading: false,
          total: 0,
        });
        return;
      }

      set((state) => ({
        campers: append ? [...state.campers, ...result.data] : result.data,
        total: result.total,
        page,
        loading: false,
      }));
    } catch (error) {
      console.error("API error", error);
      set({
        error: "Сервер не може знайти такі комбінації фільтрів",
        loading: false,
        campers: [],
      });
    }
  },
}));
