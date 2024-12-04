import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark", // Set the initial color mode to dark
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        color: props.colorMode === "dark" ? "gray.100" : "gray.900", // Change text color based on color mode
        backgroundColor: props.colorMode === "dark" ? "gray.800" : "gray.50", // Change background color
      },
    }),
  },
});

export default theme;
