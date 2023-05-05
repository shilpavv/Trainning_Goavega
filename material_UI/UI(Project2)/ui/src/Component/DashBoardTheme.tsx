import { createTheme } from '@mui/material/styles';
export const dashboardTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
            contained: {
                // fontSize: '0.875rem'
                backgroundColor:'red'
                
            },
            
        },
        
      },
      
    },
    // palette:{
    //     primary:{
    //         main:"red"
    //     },
    // },
    typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
      spacing:[4,8,16,20]
      
    
  });