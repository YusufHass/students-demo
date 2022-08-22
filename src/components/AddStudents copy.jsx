import { useState } from "react";
import StudentService from "../services/StudentService";
import { useNavigate } from "react-router-dom";
import StudentsList from "./StudentsList";

const defaultValues = {
  firstName: "",
  lastName: "",
  age: "",
  major: "",
};
const AddStudents = () => {
  const navigate = useNavigate();
  const [studentDetails, setStudentDetails] = useState(defaultValues);
  const { firstName, lastName, age, major } = studentDetails;

  const handleOnChanges = (event) => {
    event.preventDefault();
    //now it sets both firstName and lastName the same value since they use the
    //same handleChanges
    // setFirstName(event.target.value);
    // setLastName(event.target.value);
    const { name, value } = event.target;
    setStudentDetails({ ...studentDetails, [name]: value });

    StudentService.createStudents(studentDetails)
      .then((res) => {
        navigate("/students-list");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const handleAges= (event)=>{
  //     setAge(event.target.value)
  // }

  const submitHandler = (event) => {
    //prevents default refresh of the form or on other hand
    // once we submitted the form then the value we entered stays
    // on the screen unless we refresh the browser
    event.preventDefault();

    alert(`${lastName}`);
    console.log(studentDetails);
  };
  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Add Students with First Name</h2>
            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div className="form-group ab-2">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    placeholder="Enter First Name"
                    value={firstName}
                    required
                    onChange={handleOnChanges}
                  ></input>
                </div>
                <div className="form-group ab-2">
                  <label className="form-lable">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={handleOnChanges}
                  ></input>
                </div>
                <div className="form-group ab-2">
                  <label className="form-label">Age</label>
                  <input
                    className="form-control"
                    type="text"
                    name="age"
                    placeholder="Enter Age "
                    value={age}
                    onChange={handleOnChanges}
                  ></input>
                </div>
                <div className="form-group ab-2">
                  <label className="form-label">Major</label>
                  <input
                    type="text"
                    placeholder="Enter Major"
                    className="form-control"
                    name="major"
                    value={major}
                    onChange={handleOnChanges}
                  ></input>
                </div>
              </form>
            </div>
            <div>
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddStudents;
