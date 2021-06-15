import React from "react";
import "./MyCoursesItem.css";

function MyCoursesItem(props) {
  return (
    <div className="myCoursesItem">
      <img
        className="myCoursesItem__image"
        src={props.imageURL}
        alt={props.title}
      />
      <div className="myCoursesItem__info">
        <p className="myCoursesItem__title">{props.title}</p>
        <p className="myCoursesItem__author">By {props.author}</p>
      </div>
      <div className="myCoursesItem__down">
        <p>START COURSE</p>
        <p>REMOVE COURSE</p>
      </div>
    </div>
  );
}

export default MyCoursesItem;
