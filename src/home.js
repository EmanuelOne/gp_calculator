import React from "react";
import { useHistory } from "react-router-dom";
import getScore from "./calculate";
import Course from "./Components/Course";
import { Form } from "./Components/elements";
import { FaEmpire } from "react-icons/fa";

const Home = ({ setState }) => {
  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    const courses = document.querySelectorAll(".course");
    const data = [];
    courses.forEach((e) => {
      const [gradeTag, unitTag] = e.childNodes;
      const grade = gradeTag.value;
      const unit = unitTag.value;
      //validate before push
      if (grade && unit)
        data.push({ grade: Number(grade), unit: Number(unit) });
      if (grade === "" && unit === "") {
        //focus to be red
        gradeTag.classList.add("error");
        unitTag.classList.add("error");
      } else if (unit === "" || grade === "") {
        unit === ""
          ? unitTag.classList.add("error")
          : gradeTag.classList.add("error");
      }
    });
    console.log(data.length, courses.length, data);
    if (data.length === courses.length) {
      const GP = getScore(data);
      history.push("result");

      setState(GP);
    }
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FaEmpire style={{}} />

        <Course />
        <Course />
        <Course />
        <Course />
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

export default Home;
