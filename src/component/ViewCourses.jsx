import React from "react";
import ViewCourse from "./ViewCourse";

export default function ViewCourses() {
  const Courses = [
    {
      name: "React",
      desc: "SPA",
      id: 0,
    },
    {
      name: "HTML",
      desc: "HyperText markup language",
      id: 1,
    },
    {
      name: "CSS",
      desc: "Cascading style sheet",
      id: 2,
    },
  ];
  return (
    <>
      <h1>ViewCourses</h1>
      <br />
      {Courses.map((Course) => (
        <ViewCourse Course={Course} key={Course.id} />
        
        ))}
    </>
  );
}
