import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Fortune1k from './pages/Fortune1k';
import Statewise from './pages/Statewise';
import Global500 from './pages/Global500';
import './App.css';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <BrowserRouter>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/statewise-companies' element={<Statewise />} />
            <Route path='/fortune-1000-companies' element={<Fortune1k />} />
            <Route path='/global-500-companies' element={<Global500 />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
