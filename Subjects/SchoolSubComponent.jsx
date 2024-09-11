import React, { useRef, useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import SubjectsArrayProvider from "../../context/SubjectsArrayProvider";
import { useSubjectCustomHook } from "../../context/SubjectsArrayProvider";
import AlertTextProvider from "../../context/AlertTextProvider";
import { useAlertCustomHook } from "../../context/AlertTextProvider";

function SchoolSubComponent(props) {
  const ref = useRef();
  let new_classwise_subjects_array=[
    {
        name:"Preschool Subject",
        School_Subject:{
            fullname:[
                "Number Work","Grammar ","Phonics","General Knowledge"
            ],
            shortname:[
                "Number Work","Grammar ","Phonics","General Knowledge"
            ],
        }
    },
    {
        name:"Nursery Subject",
        School_Subject:{
            fullname:[
                "Number Work","Grammar ","Phonics","Reading"
            ],
            shortname:[
                "Number Work","Grammar ","Phonics","Reading"
            ],
        }
    },
    {
        name:"Primary Subject",
        School_Subject:{
            fullname:[
                "Mathematics","Grammar","Comprehension","Phonics"
            ],
            shortname:[
                "Mathematics","Grammar","Comprehension","Phonics"
            ],
        }

    },
    {
        name:"Junior Secondary Subject",
        School_Subject:{
            fullname:[
                "Mathematics","English Language","Basic Science","Agricultural science"
            ],
            shortname:[
                "Mathematics","English Language","Basic Science","Agricultural science"
            ],
        }

    },
    {
        name:"Senior Secondary Subject",
        School_Subject:{
            fullname:[
                "Mathematics","English Language","Biology","Chemistry"
            ],
            shortname:[
                "Mathematics","English Language","Biology","Chemistry"
            ]
        }

    },
]
  const [subjectFullTitle, setSubjectFullTitile] = useState("");
  const [subjectShortTitle, setSubjectShortTitile] = useState("");
  let [subjectShortArray, setSubjectShortArray] = useState(
    props.subjects_array_fullname
  );
  let [subjectFullArray, setSubjectFullArray] = useState(
    props.subjects_array_fullname
  );
  let [newSubjectFullTitle, setNewSubjectFullTitle] = useState([]);
  let [newSubjectShortTitle, setNewSubjectShortTitle] = useState([]);
  const [idCounter, setIdCounter] = useState(subjectFullArray.length - 1);
  const { alertText, setAlertText, handleAlertTextShow } = useAlertCustomHook();
  function handleAddSubject(e) {
    e.preventDefault();
    setNewSubjectFullTitle([...newSubjectFullTitle, subjectFullTitle]);
    setNewSubjectShortTitle([...newSubjectShortTitle, subjectShortTitle]);
    setSubjectFullTitile("");
    setSubjectShortTitile("");
    setIdCounter(idCounter + 1);
    //console.log(ref.current);
  }
  function handleSaveSubject() {
    setSubjectFullArray([...subjectFullArray, newSubjectFullTitle]);
    setSubjectShortArray([...subjectShortArray, newSubjectShortTitle]);
    handleAlertTextShow(props.name);
  }
  // console.log("subjectFullArray", subjectFullArray);
  // console.log("subjectShortArray", subjectShortArray);
  useEffect(() => {
    // Print ref value when component is updated
    if (ref.current) {
      console.log(ref.current);
    }
  }, [newSubjectFullTitle]);
  return (
    <div className="my-8 flex flex-col gap-7 ">
      <div className="flex gap-80 border-b-[1px] ">
        <p className="text-[17px] font-normal text-[#444444] pb-1">
          Add {props.name}
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
              value={subjectFullTitle}
              onChange={(e) => {
                setSubjectFullTitile(e.target.value);
              }}
              className="border rounded text-[16px] font-thin text-[#000] bg-[#EEEEEE] p-1 w-[220px]"
              placeholder="Subject full title"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">For e.g maths</label>
            <input
              type="text"
              value={subjectShortTitle}
              onChange={(e) => {
                setSubjectShortTitile(e.target.value);
              }}
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
        {props.subjects_array_fullname.map(
          (singlesubject, singlesubjectindex) => {
            return (
              <div
                className="flex gap-1.5 ustify-center items-center bg-[#DDEEFF] px-[4px] py-[5px] rounded"
                id={singlesubjectindex}
                key={singlesubjectindex}
                ref={ref}
              >
                <p className="subjects-overflow text-[14px] font-normal w-[100%] text-[#444444] h-max">
                  {singlesubject}
                </p>

                <ImCross size={11} />
              </div>
            );
          }
        )}
        {/* {newSubjectFullTitle && (
          <div
            className="flex gap-1.5 ustify-center items-center bg-[#DDEEFF] px-[4px] py-[5px] rounded"
            id={idCounter}
            key={idCounter}
            ref={ref}
          >
            <p className="subjects-overflow text-[14px] font-normal w-[100%] text-[#444444] h-max">
              {newSubjectFullTitle}
            </p>
            <ImCross size={11} />
          </div>
        )} */}

        {newSubjectFullTitle && newSubjectFullTitle.map((singlenewsubject)=>{
          return(
            <div
            className="flex gap-1.5 ustify-center items-center bg-[#DDEEFF] px-[4px] py-[5px] rounded"
            id={idCounter}
            key={idCounter}
            ref={ref}
          >
            <p className="subjects-overflow text-[14px] font-normal w-[100%] text-[#444444] h-max">
              {newSubjectFullTitle[newSubjectFullTitle.length-1]}
            </p>
            <ImCross size={11} />
          </div>
          )
        })}
      </div>

      <div className=" flex flex-col justify-end">
        <button
          className="flex justify-start text-[14px] font-normal text-[#fff] bg-[#00AAEE] px-[10px] py-[5px] rounded ms-[4px] w-max"
          onClick={handleSaveSubject}
        >
          Save {props.name}
        </button>
      </div>
    </div>
  );
}

export default SchoolSubComponent;
