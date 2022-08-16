import axios from "axios";

const STUDENT_API_URI = "http://localhost:8080/books"

class EmployeeService {
  getAllStudents() {
    return axios.get(STUDENT_API_URI);
  }
  createStudents(students){
    return axios.post(STUDENT_API_URI, students)
  }
  deleteStudent(studentID){
    
    // return axios.delete(`http://localhost:8080/books/${studentID}`)

    return axios.delete(STUDENT_API_URI+'/'+studentID)
  }
}
//so using the new keyword here avoids institiating in the StudentsList
export default new EmployeeService();
