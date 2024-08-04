import React, { useEffect } from "react";
import img from "../../assets/images/image.jpg";
import CourseCard from "../Generic/Card/Card";
import "./style.css";
import { useFilterContext } from "../../context/FilterProvider";

const CardWrapper: React.FC = () => {
  const { state, dispatch } = useFilterContext();

  const getData = async () => {
    try {
      const response = await fetch(
        "https://backend-api.educore-org.uz/api/get/landing/all/courses"
      );
      const res = await response.json();
      if (Array.isArray(res.Courses)) {
        dispatch({ type: "SET_COURSES", payload: res.Courses });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full mx-auto">
      <div className="grid gap-8">
        {state.filteredCourses.length === 0 ? (
          <p>No courses found</p>
        ) : (
          state.filteredCourses.map((card) => (
            <CourseCard
              key={card.course_id}
              imageUrl={img}
              title={card.title}
              description={card.descr}
              price={card.price}
              buttonText="Enroll"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CardWrapper;
