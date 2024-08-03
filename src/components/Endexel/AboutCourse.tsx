import React, { useState } from "react";

const AboutCourse: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="flex justify-center pt-[50px]">
      <div className="w-[85%] bg-gray-50 h-max my-8">
        <div className="flex flex-col lg:flex-row gap-6 justify-between">
          <div className="lg:w-2/3 w-full max-w-4xl lg:mr-8 mb-8 lg:mb-0">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">About Course</h2>
              <ul className="flex lg:items-center justify-between w-full lg:flex-row flex-col list-disc list-inside mb-4">
                <li className="my-1">
                  This course is part of
                  <a
                    href="#"
                    className="text-teal-bg underline font-[500] pl-2"
                  >
                    UX Google Track
                  </a>
                </li>
                <li className="my-2">
                  This course is part of
                  <a
                    href="#"
                    className="text-teal-bg underline font-[500] pl-2"
                  >
                    UI - UX Track by Google
                  </a>
                </li>
              </ul>
              <p>
                Design a User Experience for Social Good and Prepare for Jobs is
                the seventh and final course in a program that will equip you
                with the skills you need to become an entry-level UX designer.
                In this course, you will design a dedicated mobile app and a
                responsive website focused on social good. You will showcase all
                that you've learned during the certificate program to complete
                the design process from beginning to end: empathizing with
                users, defining their pain points, coming up with ideas.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">What will you learn</h2>
              <div className="bg-white py-4 lg:pl-4 md:pl-4 sm:pl-0">
                <ul className="flex flex-col space-y-6 lg:flex-row md:flex-row md:space-y-0 md:space-x-6">
                  <li className="flex items-start">
                    Apply each step of the UX design process (empathize, define,
                    ideate, prototype, test)
                  </li>
                  <li className="flex items-start">
                    Build wireframes, mockups, and low-fidelity and
                    high-fidelity prototypes for a dedicated mobile app and a
                    responsive website.
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className="w-full lg:w-1/3 px-4 pt-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-[400] mb-5">
              Design a User Experience for Social Good & Prepare for Jobs
            </h2>
            <div className="flex items-center justify-start">
              <ul
                className="relative flex flex-col w-full"
                style={{ "--active-tab": activeTab } as React.CSSProperties}
              >
                {[
                  "About Course",
                  "What will you learn",
                  "Course requirements",
                  "Course content",
                ].map((item, index) => (
                  <li
                    key={index}
                    tabIndex={index}
                    className="flex-1 flex items-center pl-5 py-2 h-max w-full text-black cursor-pointer"
                    onClick={() => handleClick(index)}
                    onFocus={() => handleClick(index)}
                  >
                    {item}
                  </li>
                ))}
                <li
                  className="absolute left-0 top-0 w-1 bg-teal-500 rounded-tr-lg rounded-br-lg transition-all duration-300"
                  style={{
                    top: `calc(var(--active-tab) * 25%)`,
                    height: "25%",
                  }}
                ></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
