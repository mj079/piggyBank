import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import TransanctionPage from "./pages/TransanctionPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/transanctions" element={<TransanctionPage />}/>
      </Routes>
    </>
  )
}

export default App
