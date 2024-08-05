import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
} from "react";

interface Course {
  course_id: string;
  title: string;
  price: number;
  image: string;
  descr: string;
  period: number;
}

interface CourseState {
  courses: Course[];
  filteredCourses: Course[];
}

interface CourseAction {
  type: string;
  payload?: any;
}

const initialState: CourseState = {
  courses: [],
  filteredCourses: [],
};

const FilterContext = createContext<{
  state: CourseState;
  dispatch: Dispatch<CourseAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const courseReducer = (
  state: CourseState,
  action: CourseAction
): CourseState => {
  switch (action.type) {
    case "SetCourses":
      return {
        ...state,
        courses: action.payload,
        filteredCourses: action.payload,
      };
    case "filter":
      return {
        ...state,
        filteredCourses: action.payload
          ? state.courses.filter((course) =>
              course.title.toLowerCase().includes(action.payload.toLowerCase())
            )
          : state.courses,
      };
    case "PRICE_FILTER":
      const priceRanges = action.payload;
      if (priceRanges.length === 0) {
        return {
          ...state,
          filteredCourses: state.courses,
        };
      }
      const filteredCourses = state.courses.filter((course) => {
        const coursePrice =
          typeof course.price === "string"
            ? parseFloat(String(course?.price).replace(/\s/g, ""))
            : course.price;
        return priceRanges.some((range: string) => {
          if (range === "300-above") {
            return coursePrice >= 300;
          } else {
            const [min, max] = range.split("-").map(Number);
            return coursePrice >= min && coursePrice <= max;
          }
        });
      });
      return {
        ...state,
        filteredCourses,
      };
    default:
      return state;
  }
};

export const CourseProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(courseReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
