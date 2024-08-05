import React, { useEffect } from "react";
import img from "../../assets/images/image.jpg";
import CourseCard from "../Generic/Card/Card";
import "./style.css";
import { useFilterContext } from "../../context/FilterContext";
import Course_URL from "../../mock/API";

const CardWrapper: React.FC = () => {
  const { state, dispatch } = useFilterContext();

  const getData = async () => {
    try {
      const response = await fetch(Course_URL);
      const res = await response.json();
      if (Array.isArray(res.Courses)) {
        dispatch({ type: "SetCourses", payload: res.Courses });
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
          <h2 className="text-black text-xl text-center font-semibold">
            No courses found
          </h2>
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
