// store/useAnimeQueryStore.ts
import { create } from "zustand";

export interface AnimeQuery {
  genreId?: number;
  type?: string;
  rating?: string;
  sortOrder?: string;
  searchText?: string;
}

interface AnimeQueryStore {
  animeQuery: AnimeQuery;
  setGenreId: (genreId: number) => void;
  setType: (type: string) => void;
  setRating: (rating: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
  reset: () => void; // Add reset method
}

const useAnimeQueryStore = create<AnimeQueryStore>((set) => ({
  animeQuery: {},
  setGenreId: (genreId) =>
    set((state) => ({ animeQuery: { ...state.animeQuery, genreId } })),
  setType: (type) =>
    set((state) => ({ animeQuery: { ...state.animeQuery, type } })),
  setRating: (rating) =>
    set((state) => ({ animeQuery: { ...state.animeQuery, rating } })),
  setSortOrder: (sortOrder) =>
    set((state) => ({ animeQuery: { ...state.animeQuery, sortOrder } })),
  setSearchText: (searchText) =>
    set((state) => ({ animeQuery: { ...state.animeQuery, searchText } })),
  reset: () => set(() => ({ animeQuery: {} })), // Reset animeQuery to its default state
}));

export default useAnimeQueryStore;
