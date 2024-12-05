import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark", // Set the initial color mode to dark
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9", // Lightest gray for background in light mode
      100: "#ededed", // Light gray for backgrounds
      200: "#d3d3d3", // Lighter gray
      300: "#b3b3b3", // Soft gray
      400: "#a0a0a0", // Medium gray
      500: "#898989", // Slightly dark gray
      600: "#6c6c6c", // Dark gray for text and elements
      700: "#202020", // Very dark gray
      800: "#121212", // Almost black for dark mode backgrounds
      900: "#111", // Darkest gray, near black
    },
    button: {
      light: "#d3d3d3", // Light button background color for light mode
      dark: "#202020", // Dark button background color for dark mode
      hoverLight: "#b3b3b3", // Hover color for light mode button
      hoverDark: "#333333", // Hover color for dark mode button
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        color: props.colorMode === "dark" ? "gray.100" : "gray.900", // Change text color based on color mode
        backgroundColor: props.colorMode === "dark" ? "gray.800" : "gray.50", // Change background color
      },
      ".button-62": {
        "--button-border-color": props.colorMode === "dark" ? "gray.600" : "gray.400", // Border color for light and dark modes
        backgroundColor: props.colorMode === "dark" ? "button.dark" : "button.light", // Set button background color based on color mode
        transition: "background-color 200ms, border-color 200ms", // Smooth transition for hover effect
      },
      ".button-62:hover": {
        backgroundColor: props.colorMode === "dark" ? "button.hoverDark" : "button.hoverLight", // Button hover color based on mode
        borderColor: props.colorMode === "dark" ? "gray.500" : "gray.300", // Change border color on hover
      },
    }),
  },
});

export default theme;
