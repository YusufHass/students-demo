import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import StudentService from "../services/StudentService";

const StudentsList = () => {
  const [students, setStudents] = useState([]);
const getAllStudents=()=>{

  StudentService.getAllStudents()
  .then((res) => {
    setStudents(res.data);
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });
}
  useEffect(() => {
    getAllStudents();

  }, []);
  const deleteStudent=(studentId)=>{
    StudentService.deleteStudent(studentId).then((res)=>
    {
      getAllStudents();
    }).catch(error=>{
      console.log(error);
    })

  }
  return (
    <div className="container">
      <h2 className="text-center">List of Students</h2>
      <Link to="/add-student" className="btn btn-primary mb-2">
        Add Students
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
            <th>Student Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Major </th>
            <th>Actions</th>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.fname}</td>
              <td>{student.lname}</td>
              <td>{student.email}</td>
              <td>{student.major}</td>
              <td> <button className="btn btn-danger" onClick={()=>deleteStudent(student.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default StudentsList;
