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
  price: string;
  image: string;
  descr: string;
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
    case "SET_COURSES":
      return {
        ...state,
        courses: action.payload,
        filteredCourses: action.payload,
      };
    case "FILTER_COURSES":
      return {
        ...state,
        filteredCourses: action.payload
          ? state.courses.filter((course) =>
              course.title.toLowerCase().includes(action.payload.toLowerCase())
            )
          : state.courses,
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
