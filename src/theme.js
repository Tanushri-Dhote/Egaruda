import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      500: "#38A169", // green
    },
    accent: {
      500: "#F6AD55", // light orange
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg:
          props.colorMode === "light"
            ? "linear-gradient(to right, #FFF7ED, #ECFDF5)" // light orange → light green
            : "#1a202c",
      },
    }),
  },
});

export default theme;