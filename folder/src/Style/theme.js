// 063970

import { createTheme } from "@mui/material/styles"; 


const colors={
    primary:"#063970",
    secondary:"#1bbd7e",
    tertiary:"#077b8a",
    white:"#ffffff"
}


const theme=createTheme({
    palette:{
        primary:{
            main:colors.primary
        },
        secondary:{
            main:colors.secondary
        },
        tertiary:{
            main:colors.tertiary
        }
    },transitions: {
        duration: {
          shortest: 150,
          shorter: 200,
          short: 250,
          // most basic recommended timing
          standard: 300,
          // this is to be used in complex animations
          complex: 375,
          // recommended when something is entering screen
          enteringScreen: 225,
          // recommended when something is leaving screen
          leavingScreen: 195,
        },
      },
    
        
    
    

})



export default theme;