import { create } from "zustand";
import { persist } from "zustand/middleware";
import productsData from "../data/products";

export const useStore = create(
  persist(
    (set, get) => ({
      products: productsData,
      cart: [],
      favorites: [],
      recentViews: [],
      searchTerm: "",
      darkMode: false,

      addToCart: (product) => {
        const cart = get().cart;
        const existing = cart.find((item) => item.id === product.id);

        if (existing) {
          const updated = cart.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          );
          set({ cart: updated });
        } else {
          set({ cart: [...cart, { ...product, qty: 1 }] });
        }
      },

      removeFromCart: (id) => {
        const cart = get().cart.filter((item) => item.id !== id);
        set({ cart });
      },

      updateQty: (id, qty) => {
        if (qty <= 0) return;
        const updated = get().cart.map((item) =>
          item.id === id ? { ...item, qty } : item
        );
        set({ cart: updated });
      },

      clearCart: () => set({ cart: [] }),

      cartCount: () => get().cart.reduce((acc, item) => acc + item.qty, 0),

      cartTotal: () =>
        get().cart.reduce((acc, item) => acc + item.qty * item.price, 0),

      toggleFavorite: (product) => {
        const favorites = get().favorites;
        const exists = favorites.some((item) => item.id === product.id);

        if (exists) {
          set({
            favorites: favorites.filter((item) => item.id !== product.id),
          });
        } else {
          set({ favorites: [...favorites, product] });
        }
      },

      isFavorite: (id) => get().favorites.some((item) => item.id === id),

      setSearchTerm: (term) => set({ searchTerm: term }),

      addRecentView: (product) => {
        const recent = get().recentViews.filter((item) => item.id !== product.id);
        const updated = [product, ...recent].slice(0, 8);
        set({ recentViews: updated });
      },

      toggleDarkMode: () => {
        const newMode = !get().darkMode;
        set({ darkMode: newMode });
        document.documentElement.classList.toggle("dark", newMode);
      },
    }),
    {
      name: "techstore-storage",
      partialize: (state) => ({
        cart: state.cart,
        favorites: state.favorites,
        recentViews: state.recentViews,
        darkMode: state.darkMode,
      }),
    }
  )
);
