import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
import {
  Routes,
  Route,
  BrowserRouter,

} from 'react-router-dom'
import Home from "./pages/Home";
import Video from "./pages/Video";
import Login from './pages/SignIn'

const Container =styled.div`
  display: flex;
  background-color: #181818;


`

const Main=styled.div`
  flex: 7;
  background-color:${({theme})=>theme.bg};
`
const Wrapper=styled.div`
padding: 22px 40px ;
  
`

const App = () => {

  const[darkMode,setDarkMode]=useState(false)
  return (
    <ThemeProvider theme={darkMode?darkTheme:lightTheme}>

    <Container>
      <BrowserRouter>
      <Menu darkMode ={darkMode} setDarkMode={setDarkMode}/>
      <Main>
        <Navbar/>
      <Wrapper>
        <Routes>
          <Route path="/" >
            <Route index element={<Home/>}/>
            <Route path='signin' element={<Login/>}/>
            <Route path="video">
              <Route path=":id" element={<Video/>}/>
            </Route>
          </Route>
        </Routes>

        
      </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
};

export default App;