import MainPage from "./pages/MainPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* <MainPage /> */}

   </>
  )
}

export default App
