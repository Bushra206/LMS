import React,{useState,useEffect} from "react";
import SubjectsArrayProvider from "../../context/SubjectsArrayProvider";
import { useSubjectCustomHook } from "../../context/SubjectsArrayProvider";

import EditSubComponent from "./EditSubComponent";
import Accordian from "../../Detail/school-detail-folder/Accordian";
import School_address from "../../Detail/School_address";

function EditSubjects() {
  const { classwisesubjectsarray, setClassWiseSubjectsArray } =
    useSubjectCustomHook();
    const arrayData = JSON.parse(localStorage.getItem("myArray"));
  console.log("arrayData", arrayData);
    const uniqueSchools = [...new Set(arrayData.map((item) => item.name))];

  const [arrayDataState, setArrayDataState] = useState(arrayData);
  useEffect(() => {
    setArrayDataState(arrayDataState);
  }, [arrayDataState]);


  return (
    <div className="flex justify-start gap-6 p-3 w-full">
      <Accordian />
      <div className="w-[55%]">
        <p>Edit subject</p>
        {/* {arrayData.map((currelem,currelem_index) => {
          const { name, School_Subject } = currelem;
          const { fullname, shortname } = School_Subject;
          return (
            <EditSubComponent
              currelem_index={currelem_index}
              name={name}
              subjects_array_fullname={fullname}
              subjects_array_shortname={shortname}
              School_Subject={School_Subject}

            />
          );
        })} */}
        {uniqueSchools.map((schoolName, index) => {
          const schoolData = arrayData.find((item) => item.name === schoolName);
          return (
            <EditSubComponent
              key={index}
              currelem_index={index}
              schoolclass={schoolData}
              schoolclass_index={index}
              name={schoolName}
              size={schoolData.School_Subject.fullname.length}
              subjects_array_fullname={schoolData.School_Subject.fullname}
              subjects_array_shortname={schoolData.School_Subject.shortname}
              School_Subject={schoolData.School_Subject}
            />
          );
        })}
      </div>
      <School_address />
    </div>
  );
}

export default EditSubjects;
