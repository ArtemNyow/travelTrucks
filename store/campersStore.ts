import { create } from "zustand";
import { Camper } from "../types/camper";

export interface Filters {
  location: string;
  type: string;
  AC?: boolean;
  kitchen?: boolean;
  bathroom?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
  [key: string]: string | boolean | undefined;
}

interface CamperState {
  campers: Camper[];
  favorites: string[];
  filters: Filters;
  setCampers: (campers: Camper[]) => void;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  setFilters: (filters: Partial<Filters>) => void;
  clearFilters: () => void;
}

const FAVORITES_KEY = "favorites";

export const useCamperStore = create<CamperState>((set, get) => ({
  campers: [],
  favorites:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]")
      : [],
  filters: { location: "", type: "" },
  setCampers: (campers) => set({ campers }),
  addFavorite: (id) => {
    const newFavs = [...get().favorites, id];
    set({ favorites: newFavs });
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavs));
  },
  removeFavorite: (id) => {
    const newFavs = get().favorites.filter((f) => f !== id);
    set({ favorites: newFavs });
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavs));
  },
  setFilters: (filters) =>
    set((state) => ({ filters: { ...state.filters, ...filters } })),
  clearFilters: () => set({ filters: { location: "", type: "" } }),
}));
