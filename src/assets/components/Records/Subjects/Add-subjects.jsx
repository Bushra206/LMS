import React, { useState } from "react";

import Accordian from "../../Detail/school-detail-folder/Accordian";
import School_address from "../../Detail/School_address";
import SchoolSubComponent from "./SchoolSubComponent";
import SubjectsArrayProvider from "../../context/SubjectsArrayProvider";
import { useSubjectCustomHook } from "../../context/SubjectsArrayProvider";
import Alert from "../../Alert";

function Addsubjects() {
  const { classwisesubjectsarray, setClassWiseSubjectsArray } = useSubjectCustomHook();
  const uniqueSchools = [...new Set(classwisesubjectsarray.map((item) => item.name))];
  console.log("uniqueSchools",uniqueSchools)
  return (
    <div className="flex justify-start gap-6 p-3 w-full">
      <Accordian />
      <div className="w-[55%]">
        {/* <p>Access to Hello was granted.</p> */}
        {<Alert />}
        <p className="text-[13px] font-normal text-[#838383]">
          <span className="text-[15px]">
            Add subjects to the various sections.
          </span>{" "}
          Enter subject long and short name then click Add. When done click
          save.
        </p>
        {/* {classwisesubjectsarray.map((currelem,schoolclass_index) => {
          const { name, School_Subject } = currelem;
          const { fullname, shortname } = School_Subject;
          return (
            <SchoolSubComponent
              schoolclass={currelem}
              schoolclass_index={schoolclass_index}
              name={name}
              size={fullname.length}
              subjects_array_fullname={fullname}
              subjects_array_shortname={shortname}
              School_Subject={School_Subject}
            />
          );
        })} */}
        {uniqueSchools.map((schoolName, index) => {
          const schoolData = classwisesubjectsarray.find((item) => item.name === schoolName);
          return (
            <SchoolSubComponent
              key={index}
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

export default Addsubjects;
