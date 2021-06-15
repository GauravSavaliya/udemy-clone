import React from "react";
import MyCoursesItem from "./MyCoursesItem";
import courses from "../../data/courses";
import "./MyCourses.css";

function MyCourses() {
  return (
    <div>
      <div className="myCourses__top">
        <h3>My Learning</h3>
      </div>
      <div className="myCourses__info">
        {courses.map((item) => (
          <MyCoursesItem
            key={item.id}
            id={item.id}
            imageURL={item.imageURL}
            title={item.title}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
}

export default MyCourses;
