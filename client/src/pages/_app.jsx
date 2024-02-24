import React from "react";
import { styled, Box, Stack, ThemeProvider } from "@mui/system";
import { BiExpand } from "react-icons/bi";
import { theme } from "../theme";
import store from "../redux/store";
import { Provider } from "react-redux";

const WebStore = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default WebStore;
