import { setProducts, setLoading, setError, setPagination } from "../slices/product";
import axios from "axios";

export const getProducts = (page, favoriteToggle) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const { data } = await axios.get("http://localhost:5555/api/products");
    const { products, pagination } = data;
    dispatch(setProducts(products));
    dispatch(setPagination(pagination));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
            ? error.message
            : "An unexpected error has occured. Please try again later."
      )
    );
  }
};
