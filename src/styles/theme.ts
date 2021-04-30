const colors = {
  grey: {
    50: "#f9f9f9",
    100: "#f2f3f2",
    200: "#e3e5e4",
    300: "#d0d4d1",
    400: "#919a94",
    500: "#6a726c",
    600: "#474d49",
    700: "#313532",
    800: "#282c2b",
    900: "#1b1d1c"
  },
  blue: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A"
  },
  primary: {
    50: "#ECFDF5",
    100: "#D1FAE5",
    200: "#A7F3D0",
    300: "#6EE7B7",
    400: "#34D399",
    500: "#10B981",
    600: "#059669",
    700: "#047857",
    800: "#065F46",
    900: "#064E3B"
  },
  red: {
    50: "#FEF2F2",
    100: "#FEE2E2",
    200: "#FECACA",
    300: "#FCA5A5",
    400: "#F87171",
    500: "#EF4444",
    600: "#DC2626",
    700: "#B91C1C",
    800: "#991B1B",
    900: "#7F1D1D"
  },
  yellow: {
    50: "#FFFBEB",
    100: "#FEF9C3",
    200: "#FEF08A",
    300: "#FDE047",
    400: "#FACC15",
    500: "#EAB308",
    600: "#CA8A04",
    700: "#A16207",
    800: "#854D0E",
    900: "#713F12"
  },
  black: {
    500: "#393e39",
    600: "#343934",
    700: "#2d312d",
    800: "#232623",
    900: "#171917"
  },
  white: {
    50: "#fff",
    100: "#f9fbfa",
    200: "#eff2ef",
    300: "#e6ebe6",
    400: "#dce3dd",
    500: "#cfd8d0"
  }
}

export const lightTheme = {
  theme: "light",
  colors: {
    background: colors.black[900],
    backgroundSecondary: colors.white,
    text: colors.white[50],
    textSecondary: colors.grey[400],
    textHighLight: colors.primary[500],
    title: colors.primary[500],
    ...colors
  }
}

export const darkTheme = {
  theme: "dark",
  colors: {
    background: colors.black[900],
    backgroundSecondary: colors.black[800],
    text: colors.white[50],
    textSecondary: colors.grey[400],
    textHighLight: colors.primary[500],
    title: colors.primary[500],
    ...colors
  }
}
