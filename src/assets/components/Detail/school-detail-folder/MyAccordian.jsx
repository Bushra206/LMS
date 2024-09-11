import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { FaUpload } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { MdArrowDropUp } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaDoorClosed } from "react-icons/fa";
import { MdLock } from "react-icons/md";
function MyAccordian({
  title,
  icon,
  subitem,
  index,
  subitem1,
  subitem2,
  subitem3,
  subitem4,
  subitem5,
  subitem6,
  subitem7,
  subitem8,
  subitem9,
  subitem10,
}) {
  const [show, setShow] = useState(false);
  const [nextshow1, setNextShow1] = useState(false);
  const [nextshow2, setNextShow2] = useState(false);
  const [nextshow3, setNextShow3] = useState(false);
  const [nextshow4, setNextShow4] = useState(false);
  const [nextshow5, setNextShow5] = useState(false);
  const [file, setFile] = useState(null);
  const handleUpload = (event) => {
    setFile(event.target.files[0]);
    // You can add your upload logic here
    console.log("File uploaded:", file);
  };
  //   const handleToggle = (event) => {
  //     setShow(!show);
  //     //setAccordianIcon(show ?  accordianicon : <RiArrowDropUpFill/>);
  //   };
  return (
    <>
      <div
        className="flex items-center justify-between gap-6 text-[14px] font-bold leading-7 mb-2 w-[100%] cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <div className="flex gap-3 items-center ">
          <div>{icon}</div>
          <p>{title}</p>
        </div>
        {/* <MdArrowDropDown
          className="text-[20px] font-bold leading-5 text-center "

        /> */}
        <div className="text-[20px] font-bold leading-5 text-center ">
          {show ? <MdArrowDropUp /> : <MdArrowDropDown />}
        </div>
      </div>
      {/* { show && index === 0 ? (
        <div className="flex-col">
          <div className="flex justify-between px-2 mb-4">
            <p className="text-[14px] text-center">{subitem.heading1}</p>
            <input
              type="file"
              id="file-input"
              onChange={handleUpload}
              style={{ display: "none" }}
            />
            <button
              className="upload-btn"
              onClick={() => document.getElementById("file-input").click()}
            >
              <FaUpload size={15} className="text-[#2255FF]" />
            </button>
          </div>
          <div className="flex justify-between px-2 mb-4">
            <p className="text-[14px] text-center">{subitem.heading2}</p>
            <input
              type="file"
              id="file-input"
              onChange={handleUpload}
              style={{ display: "none" }}
            />
            <button
              className="upload-btn"
              onClick={() => document.getElementById("file-input").click()}
            >
              <FaUpload size={15} className="text-[#2255FF]" />
            </button>
          </div>
          <div className=" mb-4 text-start">
            <a href="/edit-school" className="text-[15px] px-2 mb-4">
              {subitem.heading3}
            </a>
          </div>
          <NavLink to="" className="flex justify-start items-center gap-2 px-2 mb-4">
            <FaPlus size={14} className="text-[#2255FF] font-black" />
            <p className="text-[14px] text-center">{subitem.heading4}</p>
          </NavLink>
        </div>
      ) : null}
      {index === 1 && show ? (
        <div className="flex-col">
          <div className="flex justify-between px-2 mb-4">
            <p className="text-[14px] text-center">{subitem.heading1}</p>
            <input
              type="file"
              id="file-input"
              onChange={handleUpload}
              style={{ display: "none" }}
            />
            <button
              className="upload-btn"
              onClick={() => document.getElementById("file-input").click()}
            >
              <FaUpload size={15} className="text-[#2255FF]" />
            </button>
          </div>
          <div className="flex justify-between px-2 mb-4">
            <p className="text-[14px] text-center">{subitem.heading2}</p>
            <input
              type="file"
              id="file-input"
              onChange={handleUpload}
              style={{ display: "none" }}
            />
            <button
              className="upload-btn"
              onClick={() => document.getElementById("file-input").click()}
            >
              <FaUpload size={15} className="text-[#2255FF]" />
            </button>
          </div>
          <div className=" mb-4 text-start">
            <a href="/edit-school" className="text-[15px] px-2 mb-4">
              {subitem.heading3}
            </a>
          </div>
          <NavLink to="" className="flex justify-start items-center gap-2 px-2 mb-4">
            <FaPlus size={14} className="text-[#2255FF] font-black" />
            <p className="text-[14px] text-center">{subitem.heading4}</p>
          </NavLink>
        </div>
      ) : null} */}

      {show && (
        <div className="flex-col ">
          {index === 0 && (
            // content for index 0
            <div className="flex-col w-[100%]">
              <div className="flex justify-between px-2 mb-4 ">
                <p className="text-[14px] text-center">{subitem.heading1}</p>
                <input
                  type="file"
                  id="file-input"
                  onChange={handleUpload}
                  style={{ display: "none" }}
                />
                <button
                  className="upload-btn"
                  onClick={() => document.getElementById("file-input").click()}
                >
                  <FaUpload size={15} className="text-[#2255FF]" />
                </button>
              </div>
              <div className="flex justify-between px-2 mb-4">
                <p className="text-[14px] text-center">{subitem.heading2}</p>
                <input
                  type="file"
                  id="file-input"
                  onChange={handleUpload}
                  style={{ display: "none" }}
                />
                <button
                  className="upload-btn"
                  onClick={() => document.getElementById("file-input").click()}
                >
                  <FaUpload size={15} className="text-[#2255FF]" />
                </button>
              </div>
              <div className=" mb-4 text-start">
                <a href="/edit-school" className="text-[15px] px-2 mb-4">
                  {subitem.heading3}
                </a>
              </div>
              <NavLink
                to=""
                className="flex justify-start items-center gap-2 px-2 mb-4"
              >
                <FaPlus size={14} className="text-[#2255FF] font-black" />
                <p className="text-[14px] text-center">{subitem.heading4}</p>
              </NavLink>
            </div>
          )}
          {index === 1 && (
            // content for index 1
            <div className="flex-col gap-6 mb-4">
              {/* staff portion */}
              <div
                className="flex items-center justify-between gap-3 text-[14px] font-bold  mb-4 mt-3 cursor-pointer px-[5px]"
                onClick={() => setNextShow1(!nextshow1)}
              >
                <div className="flex gap-4 items-center ">
                  <div className="flex gap-1 items-center">
                    <div>
                      <FaUser />
                    </div>
                    <p className="text-[#000] text-[14px] font-normal">
                      {subitem1.subitemheading}
                    </p>
                  </div>
                  <div className="bg-[#868483] rounded-2xl  text-[12px] font-normal text-[#fff] px-[5px] py-[3px] text-center">
                    {subitem1.no}
                  </div>
                </div>

                <div className="text-[20px] font-bold leading-5 text-center text-[#868483]">
                  {nextshow1 ? <MdArrowDropUp /> : <MdArrowDropDown />}
                </div>
              </div>
              {nextshow1 && (
                <div className="flex-col gap-12 px-4 text-[14px] font-normal text-[#C4C0BD">
                  <a href="/edit-permition">
                    <p className="mb-[5px]">
                      {subitem1.furthersubitem.furthersubitemheading1}
                    </p>
                  </a>
                  <a href="">
                    <p>{subitem1.furthersubitem.furthersubitemheading2}</p>
                  </a>
                </div>
              )}

              {/* manage section */}
              <div
                className="flex items-center justify-between gap-3 text-[14px] font-bold  mb-4 mt-3 cursor-pointer px-[5px]"
                onClick={() => setNextShow2(!nextshow2)}
              >
                <div className="flex gap-4 items-center ">
                  <div className="flex gap-1 items-center">
                    <p className="text-[#000] text-[14px] font-normal">
                      {subitem2.subitemheading}
                    </p>
                  </div>
                  <div className="bg-[#868483] rounded-2xl  text-[12px] font-normal text-[#fff] px-[5px] py-[3px] text-center">
                    {subitem2.no}
                  </div>
                </div>

                <div className="text-[20px] font-bold leading-5 text-center text-[#868483]">
                  {nextshow2 ? <MdArrowDropUp /> : <MdArrowDropDown />}
                </div>
              </div>
              {nextshow2 && (
                <div className="flex-col gap-12 px-4 text-[14px] font-normal text-[#C4C0BD">
                  <a href="">
                    <p className="mb-[5px]">
                      {subitem2.furthersubitem.furthersubitemheading1}
                    </p>
                  </a>
                  <a href="">
                    <p>{subitem2.furthersubitem.furthersubitemheading2}</p>
                  </a>
                </div>
              )}
              {/* manage class */}
              <div
                className="flex items-center justify-between gap-3 text-[14px] font-bold  mb-4 mt-3 cursor-pointer px-[5px]"
                onClick={() => setNextShow3(!nextshow3)}
              >
                <div className="flex gap-4 items-center ">
                  <div className="flex gap-1 items-center">
                    <p className="text-[#000] text-[14px] font-normal">
                      {subitem3.subitemheading}
                    </p>
                  </div>
                  <div className="bg-[#868483] rounded-2xl  text-[12px] font-normal text-[#fff] px-[5px] py-[3px] text-center">
                    {subitem3.no}
                  </div>
                </div>

                <div className="text-[20px] font-bold leading-5 text-center text-[#868483]">
                  {nextshow3 ? <MdArrowDropUp /> : <MdArrowDropDown />}
                </div>
              </div>
              {nextshow3 && (
                <div className="flex-col gap-12 px-4 text-[14px] font-normal text-[#C4C0BD">
                  <a href="">
                    <p className="mb-[5px]">
                      {subitem3.furthersubitem.furthersubitemheading1}
                    </p>
                  </a>
                  <a href="">
                    <p>{subitem3.furthersubitem.furthersubitemheading2}</p>
                  </a>
                </div>
              )}
              {/* subjects */}
              <div
                className="flex items-center justify-between gap-3 text-[14px] font-bold  mb-4 mt-3 cursor-pointer px-[5px]"
                onClick={() => setNextShow4(!nextshow4)}
              >
                <div className="flex gap-4 items-center ">
                  <div className="flex gap-1 items-center">
                    <p className="text-[#000] text-[14px] font-normal">
                      {subitem4.subitemheading}
                    </p>
                  </div>
                  <div className="bg-[#868483] rounded-2xl  text-[12px] font-normal text-[#fff] px-[5px] py-[3px] text-center">
                    {subitem4.no}
                  </div>
                </div>

                <div className="text-[20px] font-bold leading-5 text-center text-[#868483]">
                  {nextshow4 ? <MdArrowDropUp /> : <MdArrowDropDown />}
                </div>
              </div>
              {nextshow4 && (
                <div className="flex-col gap-12 px-4 text-[14px] font-normal ">
                  <a href="/add-subjects">
                    <p className="mb-[5px]">
                      {subitem4.furthersubitem.furthersubitemheading1}
                    </p>
                  </a>
                  <a href="/edit-subjects">
                    <p className="mb-[5px]">
                      {subitem4.furthersubitem.furthersubitemheading2}
                    </p>
                  </a>
                  <a href="/group-subjects">
                    <p>{subitem4.furthersubitem.furthersubitemheading3}</p>
                  </a>
                </div>
              )}
              {/* Edit Calender */}
              <NavLink>
                <div className="flex items-center justify-between gap-3 text-[14px] font-bold  mb-4 mt-3 cursor-pointer px-[5px]">
                  <div className="flex gap-4 items-center ">
                    <div className="flex gap-1 items-center">
                      <div>
                        <SlCalender />
                      </div>
                      <p className="text-[#000] text-[14px] font-normal">
                        {subitem5.subitemheading}
                      </p>
                    </div>
                    <div className="bg-[#868483] rounded-2xl  text-[12px] font-normal text-[#fff] px-[5px] py-[3px] text-center">
                      {subitem5.no}
                    </div>
                  </div>
                </div>
              </NavLink>
              {/* Students */}
              <div
                className="flex items-center justify-between gap-3 text-[14px] font-bold  mb-4 mt-3 cursor-pointer px-[5px]"
                onClick={() => setNextShow5(!nextshow5)}
              >
                <div className="flex gap-4 items-center ">
                  <div className="flex gap-1 items-center">
                    <div>
                      <FaUser />
                    </div>
                    <p className="text-[#000] text-[14px] font-normal">
                      {subitem6.subitemheading}
                    </p>
                  </div>
                  <div className="bg-[#868483] rounded-2xl  text-[12px] font-normal text-[#fff] px-[5px] py-[3px] text-center">
                    {subitem6.no}
                  </div>
                </div>

                <div className="text-[20px] font-bold leading-5 text-center text-[#868483]">
                  {nextshow5 ? <MdArrowDropUp /> : <MdArrowDropDown />}
                </div>
              </div>
              {nextshow5 && (
                <div className="flex-col gap-12 px-4 text-[14px] font-normal ">
                  <a href="">
                    <p className="mb-[5px]">
                      {subitem6.furthersubitem.furthersubitemheading1}
                    </p>
                  </a>
                  <a href="">
                    <p className="mb-[5px]">
                      {subitem6.furthersubitem.furthersubitemheading2}
                    </p>
                  </a>
                  <a href="">
                    <p className="mb-[5px]">
                      {subitem6.furthersubitem.furthersubitemheading3}
                    </p>
                  </a>
                  <a href="">
                    <p className="mb-[5px]">
                      {subitem6.furthersubitem.furthersubitemheading4}
                    </p>
                  </a>
                  <a href="">
                    <p className="mb-[5px]">
                      {subitem6.furthersubitem.furthersubitemheading5}
                    </p>
                  </a>
                  <a href="">
                    <p className="mb-[5px]">
                      {subitem6.furthersubitem.furthersubitemheading6}
                    </p>
                  </a>
                  {/* <a href=""><p>{subitem5.furthersubitem.furthersubitemheading3}</p></a> */}
                </div>
              )}
              {/* Delete items */}
              <NavLink>
                <div className="flex items-center justify-between gap-3 text-[14px] font-bold  mb-4 mt-3 cursor-pointer px-[5px]">
                  <p className="text-[#000] text-[14px] font-normal">
                    {subitem7.subitemheading}
                  </p>
                  <RiDeleteBin6Line />
                </div>
              </NavLink>
               {/* Close terms */}
               <NavLink>
                <div className="flex items-center justify-between gap-3 text-[14px] font-bold  mb-4 mt-3 cursor-pointer px-[5px]">
                  <p className="text-[#000] text-[14px] font-normal">
                    {subitem8.subitemheading}
                  </p>
                  <FaDoorClosed />
                </div>
              </NavLink>
              {/* Boarding */}
              <NavLink>
                <div className="flex items-center justify-between gap-3 text-[14px] font-bold  mb-4 mt-3 cursor-pointer px-[5px]">
                  <p className="text-[#000] text-[14px] font-normal">
                    {subitem9.subitemheading}
                  </p>
                </div>
              </NavLink>
              {/* Lock access */}
              <NavLink>
                <div className="flex items-center justify-between gap-3 text-[14px] font-bold  mb-4 mt-3 cursor-pointer px-[5px]">
                  <p className="text-[#000] text-[14px] font-normal">
                    {subitem10.subitemheading}
                  </p>
                  <MdLock />
                </div>
              </NavLink>
            </div>
          )}
          {index === 2 && (
            // content for index 2
            <div className="flex-col gap-6">
              <div
                className="flex items-center justify-between gap-3 text-[14px] font-bold  mb-4 cursor-pointer px-[5px]"
                onClick={() => setNextShow(!nextshow)}
              >
                <div className="flex gap-4 items-center ">
                  <div className="flex gap-1 items-center">
                    <div>
                      <FaUser />
                    </div>
                    <p className="text-[#868483]">{subitem2.subitemheading}</p>
                  </div>
                  <div className="bg-[#868483] rounded-2xl  text-[12px] font-normal text-[#fff] px-[5px] py-[3px] text-center">
                    {subitem2.no}
                  </div>
                </div>
                {/* <MdArrowDropDown
       className="text-[20px] font-bold leading-5 text-center "

     /> */}
                <div className="text-[20px] font-bold leading-5 text-center text-[#868483]">
                  {nextshow ? <MdArrowDropUp /> : <MdArrowDropDown />}
                </div>
              </div>
              {nextshow && (
                <div className="flex-col gap-12 px-4 text-[14px] font-normal text-[#C4C0BD">
                  <a href="">
                    <p className="mb-[5px]">
                      {subitem2.furthersubitem.furthersubitemheading1}
                    </p>
                  </a>
                  <a href="">
                    <p>{subitem2.furthersubitem.furthersubitemheading2}</p>
                  </a>
                </div>
              )}
            </div>
          )}
          {/* // add more conditions for each index value */}
        </div>
      )}
    </>
  );
}

export default MyAccordian;
