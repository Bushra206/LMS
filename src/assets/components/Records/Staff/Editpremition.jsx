import React, { useEffect, useState } from "react";
//import "./Editpremition.css";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { IoDocumentTextSharp } from "react-icons/io5";
import { TbRobot } from "react-icons/tb";
import { FaFlagCheckered } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineClear } from "react-icons/md";
//import "../../.././index.css";

function Editpremition() {
  const [able, setAble] = useState(false);
  const [add, setAdd] = useState(1);
  useEffect(() => {
    console.log(add);
  }, [add]);
  // function handleStaffButton() {}
  const [isCurrentStaffActive, setIsCurrentStaffActive] = useState(true);

  const handleStaffButton = () => {
    setIsCurrentStaffActive(!isCurrentStaffActive);
  };

  return (
    <>
      <div className="h-[100vh] w-[90%] m-[auto] mt-6">
        <p className="text-[gray] font-extralight text-2xl">
          Update Staff Permission
        </p>
        <p className="text-[gray] font-extralight">
          Click on the tabs to toggle between current and old staff members
        </p>
        <div className="flex mt-8">
          <p
            className={`${!isCurrentStaffActive ? 'bg-[#e9e6e6] ' :'bg-[#e9e6e6]' }border text-xl font-semibold rounded-t-md pt-4 px-3 border-b-0 `}

          >
            <button>Current Staff</button>
          </p>

          <p className="border-b pe-11 ps-1 pt-3" onClick={handleStaffButton}>
            <button className={`${isCurrentStaffActive ? 'bg-[#e9e6e6] border-0 rounded-t-md' : 'bg-[#fff] rounded-t-md border-b-0 border-t border-l border-r '}  py-2 px-4 `}>
              Old staff
            </button>
          </p>
        </div>
        {/* <div className="flex mt-8">
          <p
            className={`flex justify-center items-center border text-xl font-semibold rounded-t-md pt-0 px-3 border-b-0 cursor-pointer ${
              isCurrentStaffActive ? "bg-[#e9e6e6]" : ""
            }`}
            onClick={handleStaffButton}
          >
            <button
              className={`${
                isCurrentStaffActive ? "" : "bg-[#e9e6e6]"
              } py-2 px-4 rounded-md`}
            >
              Current Staff
            </button>
          </p>
          <p
            className={`border-b pe-11 ps-1 pt-3 cursor-pointer ${
              !isCurrentStaffActive ? "bg-[#e9e6e6]" : ""
            }`}
            onClick={handleStaffButton}
          >
            <button
              className={`${
                !isCurrentStaffActive ? "" : "bg-[#e9e6e6]"
              } py-2 px-4 rounded-md`}
            >
              Old staff
            </button>
          </p>
        </div> */}
        <div className={`staf1 ${able === true ? "staf2" : ""} p-4`}>
          <RiLayoutGrid2Fill
            className="text-red-600"
            onClick={() => setAdd(add === 4 ? 1 : 4)}
          />
          <p className="text-[gray] text-center text-2xl font-extralight">
            Sunday Akinwale
          </p>
          <div className="flex gap-1 ps-8 pt-5">
            <div
              className={`h-[33px] w-[60px] ${
                add === 1 || add === 4
                  ? "bg-blue-400 text-white "
                  : "bg-[#ecebeb]"
              }`}
              onClick={() => setAdd(1)}
            >
              <IoDocumentTextSharp className="text-white text-3xl ms-4" />
            </div>
            <div
              className={`h-[33px] w-[60px] ${
                add === 2 || add === 4
                  ? "bg-blue-400 text-white"
                  : " bg-[#ecebeb]"
              }`}
              onClick={() => setAdd(2)}
            >
              <TbRobot className="  text-white text-3xl ms-4" />
            </div>
            <div
              className={`h-[33px] w-[60px] ${
                add === 3 || add === 4 ? "bg-blue-400" : "bg-[#ecebeb]"
              } `}
              onClick={() => setAdd(3)}
            >
              <FaFlagCheckered className="text-white text-2xl ms-4 mt-1" />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-gray-400 font-bold ps-8 pt-3">Assign Subject</p>
            <RiDeleteBin6Line className="text-red-500 mt-3 ms-3" />
          </div>

          <p className="ps-8">Section</p>
          <select
            name=""
            id=""
            className="ms-8 w-[250px] p-1 bg-gray-100 border rounded-md"
          >
            <option value="">Select section</option>
            <option value="">Preschool</option>
            <option value="">Nursery</option>
            <option value="">Primary</option>
            <option value="">Junior Secondary</option>
            <option value="">Senior secondary</option>
          </select>
          <p className="ps-8">Subject</p>
          <select
            name=""
            id=""
            className="ms-8 mb-5 w-[250px] p-1 bg-gray-100 border rounded-md"
          >
            <option value="">Select subject</option>
          </select>

          <p className="text-gray-500 ms-3">Preschool</p>
          <p className="h-[30px] w-[117px] bg-white border rounded-2xl text-sm text-center p-1 ps-3 m-2 shadow-xl">
            {" "}
            <div className="flex items-center gap-2">
              GRAMMER <MdOutlineClear className="hover:text-red-600" />
            </div>
          </p>

          <hr className="h-[4px] bg-gray-200 mt-5" />
        </div>
        <div className="h-[60vh] w-[29%] border border-t-0 rounded-b-md pt-8">
          <p
            className="text-[gray] w-[97%] border-b ps-3 m-auto pb-1 cursor-pointer hover:bg-red-600 hover:text-[white]"
            onClick={() => setAble(!able)}
          >
            1. Sunday Akinwale
          </p>
        </div>
      </div>
    </>
  );
}

export default Editpremition;
