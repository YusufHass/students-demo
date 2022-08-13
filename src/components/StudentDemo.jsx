import { useState } from "react";

const defaultValues = {
  firstName: "",
  lastName: "",
  age: "",
  major: "",
};
const StudentForm = () => {
  const [studentDetails, setStudentDetails] = useState(defaultValues);
  const { firstName, lastName, age, major } = studentDetails;

  const handleOnChanges = (event) => {
    //now it sets both firstName and lastName the same value since they use the
    //same handleChanges
    // setFirstName(event.target.value);
    // setLastName(event.target.value);
    const { name, value } = event.target;
    setStudentDetails({ ...studentDetails, [name]: value });
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
    <form onSubmit={submitHandler}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          required
          onChange={handleOnChanges}
        ></input>
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleOnChanges}
        ></input>
      </div>{" "}
      <div>
        <label>Age</label>
        <input
          type="text"
          name="age"
          value={age}
          onChange={handleOnChanges}
        ></input>
      </div>
      <div>
        <label>Major</label>
        <input
          type="text"
          name="major"
          value={major}
          onChange={handleOnChanges}
        ></input>
      </div>
      <button type="submit">Submit</button>
      <h1>{age}</h1>
      <h1>{major}</h1>
    </form>
  );
};
export default StudentForm;
