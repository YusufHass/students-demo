import logo from './logo.svg';
import './App.css';
import StudentForm from './components/StudentDemo';
import StudentsList from './components/StudentsList';
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import AddStudents  from './components/AddStudents';

function App() {
  return (
    <div>
      {/* <StudentForm/> */}
      <Router>
      <HeaderComponent/>
        <div className='container'>
          <Routes>
           <Route exact path='/' element={<StudentsList/>}> </Route>
           <Route path='/students-list' element= {<StudentsList/>}> </Route>
           <Route path='/add-student' element= {<AddStudents/>}> </Route>
          </Routes>
        
        </div>
      <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
