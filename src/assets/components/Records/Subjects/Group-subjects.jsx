import React, { useState } from "react";
import SubjectsArrayProvider from "../../context/SubjectsArrayProvider";
import { useSubjectCustomHook } from "../../context/SubjectsArrayProvider";
import Accordian from "../../Detail/school-detail-folder/Accordian";
import School_address from "../../Detail/School_address";
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function Group_subjects() {
  const { classwisesubjectsarray, setClassWiseSubjectsArray } =
    useSubjectCustomHook();
  const arrayDataInGroupSubject = JSON.parse(
    localStorage.getItem("arrayDataStateInLocalStorage")
  );
  console.log("arrayDataInGroupSubject", arrayDataInGroupSubject);
  const [selectedClass, setSelectedClass] = useState(null);
  const [addSubItem, setAddSubItem] = useState(0);
  const [subItems, setSubItems] = useState({});
  const [inputValues, setInputValues] = useState({});
  const handleInputChange = (subjectName, title, value) => {
    setInputValues((prevInputValues) => {
      return { ...prevInputValues, [subjectName]: { title, value } };
    });
  };
  const handleAddSubItem = (subjectName) => {
    const { title, value } = inputValues[subjectName];
    const newSubItem = {
      id: Math.random() * Date.now(),
      title,
      value,
    };

    setSubItems((prevSubItems) => {
      return { ...prevSubItems, [subjectName]: [...(prevSubItems[subjectName] || []), newSubItem] };
    });

    // Reset the input values for the next addition
    setInputValues((prevInputValues) => {
      return { ...prevInputValues, [subjectName]: { title: "", value: "" } };
    });
  };
// const handleAddSubItem = (subjectName) => {
//   setSubItems((prevSubItems) => {
//     return { ...prevSubItems, [subjectName]: [...(prevSubItems[subjectName] || []), { id:  Math.random() * Date.now(), title: "", value: "" }] };
//   });
// };
console.log("subItems",subItems)

  const handleSelectChange = (event) => {
    setSelectedClass(event.target.value);
  };


  return (
    <div className="flex  gap-6 p-3 w-full">
      <Accordian />
      <div className="flex flex-col gap-6 w-[80%] ">
        <form action="/action_page.php">
          <select
            name="cars"
            id="cars"
            className="w-[190px] px-2 py-1.5 bg-[#EEEEEE] text-[13.33px] font-normal rounded-md"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            onChange={handleSelectChange}
          >
            <option value="Select class">Select class</option>
            {arrayDataInGroupSubject.map((currclass, currclass_index) => {
              return (
                <option value={currclass.spec_name}>
                  {currclass.spec_name}
                </option>
              );
            })}
          </select>
        </form>
        <div className="flex flex-wrap  gap-4">
          {selectedClass &&
            classwisesubjectsarray.map((currclass, currclass_index) => {
              if (currclass.spec_name === selectedClass) {
                let mainname = Object.keys(currclass.School_Subject.fullname);
                let subitems_array = Object.values(
                  currclass.School_Subject.fullname
                );
                return mainname.map((currsub, currsub_index) => {
                  return (
                    <div
                      className="bg-[#fff] w-[30%]"
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      }}
                    >
                      <div className=" pb-2 pt-5 pl-4 flex items-center gap-4 border-b-[1px] mb-[7px]">
                        <FaPlus size={11} onClick={() => handleAddSubItem(currsub)} />
                        <p className="text-[14px] font-normal">{currsub}</p>
                      </div>

                     { subItems[currsub] &&
                      subItems[currsub].map((subitem, subitem_index)=>{
                      // {subItems.map((subitem, subitem_index) => {
                        return (
                          <div className="flex justify-center items-center gap-6 pb-[3px] pr-[20px] pl-[35px]  border-b-[1px] mb-[7px]">
                            <div className="flex gap-2 justify-center">
                              <input
                                type="text"
                                className="bg-[#EDEDED]  text-[14px] p-1 font-normal w-[130px] text-[#000]"
                                placeholder="Enter Sub-subject"
                                value={inputValues[currsub] && inputValues[currsub].title}
                                onChange={(e) => handleInputChange(currsub, e.target.value, inputValues[currsub] && inputValues[currsub].value)}
                                style={{
                                  overflowWrap: "anywhere",
                                  boxSizing: "border-box",
                                  // width: "min-content",
                                }}
                              />
                              <input
                                type="text"
                                className="bg-[#EDEDED]  text-[14px] p-1 font-normal w-[24px] text-[#000]"
                                placeholder="0"
                                value={inputValues[currsub] && inputValues[currsub].value}
                                onChange={(e) => handleInputChange(currsub, inputValues[currsub] && inputValues[currsub].title, e.target.value)}
                                style={{
                                  overflowWrap: "anywhere",
                                  boxSizing: "border-box",
                                  // width: "min-content",
                                }}
                              />
                            </div>
                            <RxCross2 size={13} onClick={()=>handleDeleteSubItem()} />
                          </div>
                        );
                      })}
                    </div>
                  );
                });

              }
            })}
        </div>
        {selectedClass && (
          <div className=" flex flex-col justify-end">
            <button
              className="flex justify-start mt-4 text-[14px] font-normal text-[#fff] bg-[#00AAEE] px-[10px] py-[5px] rounded ms-[4px] w-max"
              onClick={() => handleSaveButton()}
            >
              Save Subject
            </button>
          </div>
        )}
        {/* <div className=" flex flex-col justify-end">
            <button
              className="flex justify-start mt-4 text-[14px] font-normal text-[#fff] bg-[#00AAEE] px-[10px] py-[5px] rounded ms-[4px] w-max"
              onClick={() => handleSaveButton()}
            >
              Save Subject
            </button>
          </div> */}
        {/* {selectedClass && (
          <div>

            <h2>Selected Class: {selectedClass}</h2>

          </div>
        )} */}
      </div>
    </div>
  );
}

export default Group_subjects;
