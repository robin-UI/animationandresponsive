import { createTheme } from "@mui/material";

const lightTheme = createTheme({
    // typography: {
    //   allVariants: {
    //     fontFamily: 'Poppins',
    //     color: "black"
    //   }
    // },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    components: {
      MuiPopover: {
        styleOverrides:{
          paper: {
            "& .MuiList-root .MuiButtonBase-root": {
              fontSize: "14px"
            }
          }
        }
      },
      MuiAutocomplete: {
        styleOverrides: {
          paper: {
            fontSize: '14px', // Adjust the font size as needed
          },
        },
      },
    },
    palette: {
      mode: 'light',
      background: {
        default: "#ebebeb",
      },
      primary: {
        main: "#101418",
      },
      secondary: {
        main: '#0A9EF3',
      },
    //   error: {
    //     main: red.A400,
    //   },
    },
  });
  
  export { lightTheme };