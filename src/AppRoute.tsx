import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StudentOutlet from './pages/StudentOutlet'
import Student from './pages/Student'
import CreateStudent from './pages/CreateStudent'





const AppRoute :React.FC = () => {
  return (
    <Routes>
    <Route path="" element={<HomePage />} />
    <Route path="student" element={<StudentOutlet />}>
      <Route path="" element={<Student />} />
      <Route path="create-student" element={<CreateStudent />} />
     
    </Route>
  </Routes>
  )
}

export default AppRoute