import React, { useEffect, useState } from "react";
import CourseCard from "../Generic/Card/Card";
import "./style.css";
import { useFilterContext } from "../../context/FilterContext";
import Course_URL from "../../mock/CourseAPI";
import Pagination from "./Pagination";

const CardWrapper: React.FC = () => {
  const { state, dispatch } = useFilterContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

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

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = state.filteredCourses.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full mx-auto">
      <div className="grid gap-y-8 gap-x-2">
        {currentCards.length === 0 ? (
          <h2 className="text-black text-xl text-center font-semibold">
            No courses found
          </h2>
        ) : (
          currentCards.map((card) => (
            <CourseCard
              key={card.course_id}
              imageUrl={card.image}
              title={card.title}
              description={card.descr}
              month={String(card.period)}
              price={String(card.price)}
              buttonText="Enroll"
            />
          ))
        )}
      </div>
      <div className="flex mx-auto justify-center my-9">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(state.filteredCourses.length / cardsPerPage)}
          onPageChange={paginate}
        />
      </div>
    </div>
  );
};

export default CardWrapper;
