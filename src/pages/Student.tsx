import React , {useEffect, useState} from "react";
import {IStudent} from "../interface/student";
import { Link } from "react-router-dom";

const Student: React.FC = () => {
  const [allStudents,setAllStudent]=useState<IStudent[]>();
  useEffect(() =>{
    const Student = JSON.parse(localStorage.getItem("students") as string);
    setAllStudent(Student)
    console.log("student data",Student);
  },[])
;  
  return (
   <><button> <Link to="/student/create-student">Create-Students</Link></button>
   <table>
        <thead>
          <tr>
            <td>SN.</td>
            <td>Name</td>
            <td>Age</td>
            <td>Phone Number</td>
            <td>Email ID</td>
          </tr>
        </thead>
        <tbody>
          {allStudents?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
  );
};

export default Student;