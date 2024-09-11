import React, { createContext, useContext, useReducer } from "react";
const addedsubjectcontextcreate = createContext();
export const useAddedSubjectCustomHook = () => {
  const addedsubjectusecontext = useContext(addedsubjectcontextcreate);
  return addedsubjectusecontext;
};
import SubjectsArrayProvider from "./SubjectsArrayProvider";
import { useSubjectCustomHook } from "./SubjectsArrayProvider";

function AddedSubjectProvider(props) {
  const { classwisesubjectsarray, dispatch } = useSubjectCustomHook();

  classwisesubjectsarray.map((elm) => {
    const { name, School_Subject } = elm;
    const { fullname, shortname } = School_Subject;
    let [subjectShortArray, setSubjectShortArray] = useState(
      School_Subject.fullname
    );
    let [subjectFullArray, setSubjectFullArray] = useState(
      School_Subject.shortname
    );
  });

  return (
    <div>
      <addesubjectcontextcreate.Provider
        value={{
          subjectShortArray,
          setSubjectShortArray,
          subjectFullArray,
          setSubjectFullArray,
        }}
      >
        {props.children}
      </addesubjectcontextcreate.Provider>
    </div>
  );
}

export default SubjectsArrayProvider;
