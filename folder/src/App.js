import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import theme from './Style/theme'
import { ThemeProvider } from '@emotion/react';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
       <Route   path="/" exact element={<Home/>}  />
       <Route   path="/signin" exact element={<Signin/>}  />
       <Route   path="/Signup" exact element={<Signup/>}  />
       <Route   path="/" exact element={<Home/>}  />

      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
