"use client";
import { create } from "zustand";
import { Camper, Filters } from "@/types/camper";
import { fetchCampersApi } from "../api/apiService";

interface CamperState {
  campers: Camper[];
  favorites: string[];
  filters: Filters;
  isLoading: boolean;
  error: string | null;
  page: number;
  limit: number;
  hasMore: boolean;

  setFilters: (filters: Filters) => void;
  fetchCampers: (reset?: boolean) => Promise<void>;
  toggleFavorite: (id: string) => void;
  loadMore: () => Promise<void>;
}

export const useCamperStore = create<CamperState>((set, get) => ({
  campers: [],
  favorites: [],
  filters: {},
  isLoading: false,
  error: null,
  page: 1,
  limit: 6,
  hasMore: true,

  setFilters: (filters) => {
    set((state) => ({ ...state, filters, page: 1 }));
    get().fetchCampers(true);
  },

  fetchCampers: async (reset = false) => {
    try {
      set((state) => ({ ...state, isLoading: true, error: null }));
      const { filters, page, limit, campers } = get();
      const data = await fetchCampersApi({ ...filters, page, limit });
      set((state) => ({
        ...state,
        campers: reset ? data : [...campers, ...data],
        hasMore: data.length === limit,
        isLoading: false,
      }));
    } catch (error: unknown) {
      if (error instanceof Error) {
        set((state) => ({ ...state, error: error.message, isLoading: false }));
      } else {
        set((state) => ({
          ...state,
          error: "Unknown error",
          isLoading: false,
        }));
      }
    }
  },

  loadMore: async () => {
    set((state) => ({ ...state, page: state.page + 1 }));
    get().fetchCampers();
  },

  toggleFavorite: (id) =>
    set((state) => {
      const newFav = state.favorites.includes(id)
        ? state.favorites.filter((f) => f !== id)
        : [...state.favorites, id];

      if (typeof window !== "undefined") {
        localStorage.setItem("favorites", JSON.stringify(newFav));
      }
      return { ...state, favorites: newFav };
    }),
}));
