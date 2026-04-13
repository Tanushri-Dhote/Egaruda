import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      500: "#b83280",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "light" ? "#ffe4ec" : "#1a202c",
      },
    }),
  },
});

export default theme;