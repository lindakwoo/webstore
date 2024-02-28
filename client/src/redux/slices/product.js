import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  error: null,
  products: [],
  product: null,
  pagination: {},
  favoritesToggled: true,
  favorites: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setProducts: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.products = payload;
    },
    setError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    setPagination: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.pagination = payload;
    },
    setFavorites: (state, { payload }) => {
      state.favorites = payload;
    },
    setFavoritesToggle: (state, { payload }) => {
      state.favoritesToggled = payload;
    },
  },
});

export const { setLoading, setError, setProducts, setPagination, setFavorites, setFavoritesToggle } =
  productsSlice.actions;

// export const initializeFavorites = () => (dispatch) => {
//   useEffect(() => {
//     const favoritesFromStorage = JSON.parse(window.localStorage.getItem("favorites") || "[]");
//     dispatch(slice.actions.setFavorites(favoritesFromStorage));
//   }, []);
// };

export default productsSlice.reducer;
export const productSelector = (state) => state.products;
