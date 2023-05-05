import Link from "next/link";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Student = () => {
  const [student, setStudent] = useState<any[]>([]);
  useEffect(() => {
    const FetchPost = async () => {
      const res= await fetch("/api/students");
      const data= await res.json();
      setStudent(data.data);
    };
    FetchPost();
  }, []);
  
  function handleDelete( id : any) {
    axios.delete(`http://127.0.0.1:1337/api/students/${id}`)
      .then((res) => console.log("deleted data", res))
      .catch((err) => console.log(err));
       console.log("deleted",handleDelete)
  }
  return (
    <>
      <h1>Student</h1>
      <div className="card ">
        {student.map((stud: any) => (
          <div>
            <h3>NAME:{stud.attributes.name}</h3>
            <h3>EMAIL:{stud.attributes.email}</h3>
            <h3>GRADE:{stud.attributes.grade}</h3>
            <Link href={"/students/" + stud.id} key={stud.id}></Link>
            <button onClick={(e) => handleDelete(stud.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default Student;
