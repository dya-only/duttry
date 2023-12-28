import { Route, Routes } from "react-router-dom"
import Project from "./pages/project/project"
import MainPage from "./pages/mainpage/mainpage"

const App = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path={'/'} />
      <Route element={<Project />} path={'/ws/new'} />
    </Routes>
  )
}

export default App