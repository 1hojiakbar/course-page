import React, { useState, useEffect } from "react";
import img from "../../assets/images/image.jpg";
import CourseCard from "../Card/Card";
import Course_URL from "../../mock/API";
import "./style.css";

interface Course {
  course_id: string;
  title: string;
  price: string;
  image: string;
  descr: string;
}

const CardWrapper: React.FC = () => {
  const [data, setData] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    try {
      const response = await fetch(Course_URL);
      const res = await response.json();
      if (Array.isArray(res.Courses)) {
        setData(res.Courses);
      }
    } catch (error) {
      console.error(error);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto px-3">
      <div className="grid gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          data?.map((card) => (
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
