import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home'
import AdminHome from './components/AdminHome'
import AdminCourse from './components/AdminCourse'
import ProfessorHome from './components/ProfessorHome'
import DeptHeadHome from './components/DeptHeadHome'
import DeptHeadCourse from './components/DeptHeadCourse'
import ProfessorCourse from './components/ProfessorCourse'
import AllOutlines from './components/AllOutlines'
import CourseOutline from './components/CourseOutline'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/adminhome" element={<AdminHome/>}/>
      <Route exact path="/admincourse" element={<AdminCourse/>}/>
      <Route exact path="/professorhome" element={<ProfessorHome/>}/>
      <Route exact path="/deptheadhome" element={<DeptHeadHome/>}/>
      <Route exact path="/professorcourse" element={<ProfessorCourse/>}/>
      <Route exact path="/deptheadcourse" element={<DeptHeadCourse/>}/>
      <Route exact path="/alloutlines" element={<AllOutlines/>}/>
      <Route exact path="/courseoutline" element={<CourseOutline/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
