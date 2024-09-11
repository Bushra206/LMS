import React, { useRef, useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ImCross } from "react-icons/im";
import SubjectsArrayProvider from "../../context/SubjectsArrayProvider";
import { useSubjectCustomHook } from "../../context/SubjectsArrayProvider";
import AlertTextProvider from "../../context/AlertTextProvider";
import { useAlertCustomHook } from "../../context/AlertTextProvider";
import { dataContext } from "../../context/dataContext";

function SchoolSubComponent(props) {
  const { changeData } = useContext(dataContext);
  const { classwisesubjectsarray, setClassWiseSubjectsArray } =
    useSubjectCustomHook();
  // const [arrayData, setArrayData] = useState(classwisesubjectsarray);
  const ref = useRef();
  const [subjectFullTitle, setSubjectFullTitle] = useState("");
  const [subjectShortTitle, setSubjectShortTitle] = useState("");
  let [subjectShortArray, setSubjectShortArray] = useState(
    props.School_Subject.shortname
  );
  let [subjectFullArray, setSubjectFullArray] = useState(
    props.School_Subject.fullname
  );

  // changeData(subjectFullArray);


  const [newSubjects, setNewSubjects] = useState([]); // Combine new full and short titles into one state
  const [removedSubjects, setRemovedSubjects] = useState([]);
  const { alertText, setAlertText, handleAlertTextShow } = useAlertCustomHook();

  function handleAddSubject(e) {
    e.preventDefault();
    if (subjectFullTitle.trim() === "" || subjectShortTitle.trim() === "") {
      return; // do nothing if either input field is empty
    }
    setNewSubjects([
      ...newSubjects,
      { fullTitle: subjectFullTitle, shortTitle: subjectShortTitle },
    ]);

    setSubjectFullTitle(""); // Clear the input field after adding
    setSubjectShortTitle(""); // Clear the input field after adding
  }

  //save functionality started

  useEffect(() => {
    const updatedArrayData = classwisesubjectsarray.map((item) => {
      if (item.name === props.name) {
        return {
          ...item,
          School_Subject: {
            ...item.School_Subject,
            fullname: subjectFullArray,
            shortname: subjectShortArray,
          },
        };
      } else {
        return item;
      }
    });
    // Update the state with the new array
    setClassWiseSubjectsArray(updatedArrayData);
  }, [subjectFullArray]);
  function handleSaveSubject() {
    setSubjectFullArray([
      ...subjectFullArray,
      ...newSubjects.map((subject) => subject.fullTitle),
    ]);

    setSubjectShortArray([
      ...subjectShortArray,
      ...newSubjects.map((subject) => subject.shortTitle),
    ]);
    setNewSubjects([]);
    handleAlertTextShow(`${props.name} Subject`);
    changeData(subjectFullArray);
  }
  //console.log("props.schoolclass", classwisesubjectsarray);
 // localStorage.setItem("myArray", JSON.stringify(classwisesubjectsarray));
  //console.log("arrayData", classwisesubjectsarray);
  // const arrayData = JSON.parse(
  //   localStorage.getItem("myArray")
  // );
  console.log("arrayDataInAddSubject", classwisesubjectsarray);
  //console.log("subjectFullArray", subjectFullArray);
  //delete functionality
  function handleDeleteButton(uniqueId) {
    setRemovedSubjects([...removedSubjects, uniqueId]);
    //console.log("subjectFullArrayafter deletion", subjectFullArray);
  }

  useEffect(() => {
    // Print ref value when component is updated
    if (ref.current) {
      console.log(ref.current);
    }
  }, [newSubjects]);

  return (
    <div className="my-8 flex flex-col gap-7 ">
      <div className="flex gap-80 border-b-[1px] ">
        <p className="text-[17px] font-normal text-[#444444] pb-1">
          Add {props.name} Subject
        </p>
        <div className="bg-[#CCCCCC] rounded-full py-[3px] px-[10px]">
          <p className=" font-bold text-[14px]  ">{props.size}</p>
        </div>
      </div>
      <div>
        <form action="" className="flex  gap-2 px-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="">For e.g mathematics</label>
            <input
              type="text"
              required
              value={subjectFullTitle}
              onChange={(e) => setSubjectFullTitle(e.target.value)}
              className="border rounded text-[16px] font-thin text-[#000] bg-[#EEEEEE] p-1 w-[220px]"
              placeholder="Subject full title"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">For e.g maths</label>
            <input
              type="text"
              required
              value={subjectShortTitle}
              onChange={(e) => setSubjectShortTitle(e.target.value)}
              className="border rounded text-[16px] font-thin text-[#000] bg-[#EEEEEE] p-1 w-[220px]"
              placeholder="Subject short title"
            />
          </div>
          <div className=" flex flex-col justify-end">
            <button
              className="text-[14px] font-normal text-[#fff] bg-[#00AAEE] px-[10px] py-[5px] rounded ms-[4px]"
              onClick={handleAddSubject}
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-wrap gap-3 w-[100%]">
        {subjectFullArray.map((singlesubject, singlesubjectindex) => {
          const uniqueId = `full-${singlesubjectindex}`;
          return (
            !removedSubjects.includes(uniqueId) && (
              <div
                className="flex gap-1.5 justify-center items-center bg-[#DDEEFF] px-[4px] py-[5px] rounded"
                id={uniqueId}
                key={uniqueId}
                ref={ref}
              >
                <p className="subjects-overflow text-[14px] font-normal  text-[#444444] h-max">
                  {singlesubject}
                </p>
                <ImCross
                  size={11}
                  onClick={() => handleDeleteButton(uniqueId)}
                />
              </div>
            )
          );
        })}
        {newSubjects.map((subject, index) => {
          const uniqueId = `new-${index}`;
          return (
            !removedSubjects.includes(uniqueId) && (
              <div
                className="flex gap-1.5 justify-center items-center bg-[#DDEEFF] px-[4px]  py-[5px] rounded"
                id={uniqueId}
                key={uniqueId}
                ref={ref}
              >
                <p className="subjects-overflow text-[14px] font-normal  text-[#444444] h-max">
                  {subject.fullTitle}
                </p>
                <ImCross
                  size={11}
                  className=" w-min"
                  onClick={() => handleDeleteButton(uniqueId)}
                />
              </div>
            )
          );
        })}
      </div>

      <div className=" flex flex-col justify-end">
        <button
          className="flex justify-start text-[14px] font-normal text-[#fff] bg-[#00AAEE] px-[10px] py-[5px] rounded ms-[4px] w-max"
          onClick={handleSaveSubject}
        >
          Save {props.name} Subject
        </button>
      </div>
    </div>
  );
}

export default SchoolSubComponent;
