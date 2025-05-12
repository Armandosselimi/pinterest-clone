import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist((set) => ({
    currentUser: 0,
    setCurrentUser: (newUser) => set({ currentUser: newUser }),
    removeCurrentUser: () => set({ currentUser: null }),
    updateCurrentuser: (updatedCurrentUser) =>
      set({ currentUser: updatedCurrentUser }),
  }))
);

export default useAuthStore;
