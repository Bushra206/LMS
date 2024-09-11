import React, { useEffect, useState } from "react";
import { useSchoolContextHook } from "../../../context/SchoolArrayProvider";
import Accordian from "../Accordian";
import School_address from "../../School_address";
import Location from "./Location";
import Contact from "./Contact";
import { IoMdGrid } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import OwnerInfo from "./OwnerInfo";
import AboutSchool from "./AboutSchool";

// import SchoolArrayProvider from '../../context/SchoolArrayProvider'

function EditSchool() {
  const {
    schoolArrayData,
    setschoolArrayData,
    schoolname,
    setSchoolName,
    schoolmotto,
    setSchoolMotto,
    schoolstreetaddress,
    setSchoolStreetaddress,
    schoolcity,
    setSchoolCity,
    schoolpobox,
    setSchoolPobox,
    schoolpostalcode,
    setSchoolPostalCode,
    schoolstate,
    setSchoolState,
    schoolcountry,
    setSchoolCountry,
    schoolphone,
    setSchoolPhone,
    schoolemail,
    setSchoolEmail,
    schoolwebsite,
    setSchoolWebsite,
    foundername,
    setFounderName,
    founderemail,
    setFounderEmail,
    founderPhone,
    setFounderPhone,
    principalname,
    setPrincipalName,
  } = useSchoolContextHook();
  //console.log(" before Updated schoolArrayData:", schoolArrayData);
  function handleSave(e) {
    // e.preventDefault();

    const updatedData = {
      schoolname,
      schoolmotto,
      schoolstreetaddress,
      schoolcity,
      schoolpobox,
      schoolpostalcode,
      schoolstate,
      schoolcountry,
      schoolphone,
      schoolemail,
      schoolwebsite,
      foundername,
      founderemail,
      founderPhone,
      principalname,
    };
    setschoolArrayData([updatedData]);
    // console.log("Updated schoolArrayData:", schoolArrayData);
    // useEffect(() => {
    //   console.log("Updated schoolArrayData:", schoolArrayData);
    // }, []);
  }
  useEffect(() => {
    console.log("Updated schoolArrayData:", schoolArrayData);
  }, [schoolArrayData]);
  const [gridiconcolor, setGridIconColor] = useState("#FF0000");
  const [gridicon, setGridIcon] = useState(false);
  function handleGridIcon() {
    if (gridiconcolor === "#FF0000") {
      setGridIconColor("#dbd4d4");
    } else {
      setGridIconColor("#FF0000");
    }
  }
  const [activeButton, setActiveButton] = useState("home");

  const handleClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const getButtonColor = (buttonType) => {
    if (activeButton === buttonType) {
      return { bg: "#00AAEE", text: "#fff" };
    } else {
      return { bg: "#EEEEEE", text: "#D7D7D7" };
    }
  };

  return (
    <div className="flex justify-start gap-10 p-3 w-full">
      <Accordian />
      <div className="flex-col justify-between">
        <p className="text-[21px] font-thin text-[#838383] py-[10px]">Edit School Profile</p>
        <div className="flex justify-between gap-4  border-[#E8E8E8] border-[1px] px-[15px] py-[9px]"
       style={{ boxShadow: '0px 3px 8px rgba(0,0,0,0.24)' }}>
          <IoMdGrid
            className={`text-[${gridiconcolor}]`}
            onClick={handleGridIcon}
          />
          <div>
            <p className="text-[21px] font-thin text-[#838383] py-[12px]">{schoolArrayData[0].name}</p>

            {gridiconcolor == "#dbd4d4" ? (
              <>
                <div className="flex  gap-[3px] ">
                  <div className="px-[22px] py-[4px] bg-[#00AAEE]">
                    <FaHome className=" w-[25px] h-[25px]  text-[#fff] " />
                  </div>
                  <div className="px-[22px] bg-[#00AAEE] py-[4px] text-center">
                    <FaLocationDot className=" w-[25px] h-[25px]  text-[#fff]" />
                  </div>
                  <div className="px-[22px] bg-[#00AAEE] py-[4px]">
                    <FaPhoneAlt className=" w-[25px] h-[25px]  text-[#fff]" />
                  </div>
                  <div className="px-[22px] bg-[#00AAEE] py-[4px]">
                    <FaUser className=" w-[25px] h-[25px]  text-[#fff]" />
                  </div>
                </div>
                <AboutSchool />
                <Location />
                <Contact />
                <OwnerInfo />
              </>
            ) : (
              <div>
                {/* <div className="flex  gap-[3px] mb-4">
                  <div className="px-[22px] py-[4px] bg-[#00AAEE]" onClick={() => handleClick('home')}>
                    <FaHome className=" w-[25px] h-[25px]  text-[#fff] " />
                  </div>
                  <div className="px-[22px] bg-[#EEEEEE] py-[4px] text-center" onClick={() => handleClick('location')}>
                    <FaLocationDot className=" w-[25px] h-[25px]  text-[#D7D7D7]" />
                  </div>
                  <div className="px-[22px] bg-[#EEEEEE] py-[4px]" onClick={() => handleClick('phone')}>
                    <FaPhoneAlt className=" w-[25px] h-[25px]  text-[#D7D7D7]" />
                  </div>
                  <div className="px-[22px] bg-[#EEEEEE] py-[4px]" onClick={() => handleClick('user')}>
                    <FaUser className=" w-[25px] h-[25px]  text-[#D7D7D7]" />
                  </div>
                </div> */}
                <div className="flex gap-[3px] ">
                  <div
                    className={`px-[22px] py-[4px] bg-[${
                      getButtonColor("home").bg
                    }]`}
                    onClick={() => handleClick("home")}
                  >
                    <FaHome
                      className={`w-[25px] h-[25px] text-[${
                        getButtonColor("home").text
                      }]`}
                    />
                  </div>
                  <div
                    className={`px-[22px] bg-[${
                      getButtonColor("location").bg
                    }] py-[4px] text-center`}
                    onClick={() => handleClick("location")}
                  >
                    <FaLocationDot
                      className={`w-[25px] h-[25px] text-[${
                        getButtonColor("location").text
                      }]`}
                    />
                  </div>
                  <div
                    className={`px-[22px] bg-[${
                      getButtonColor("phone").bg
                    }] py-[4px]`}
                    onClick={() => handleClick("phone")}
                  >
                    <FaPhoneAlt
                      className={`w-[25px] h-[25px] text-[${
                        getButtonColor("phone").text
                      }]`}
                    />
                  </div>
                  <div
                    className={`px-[22px] bg-[${
                      getButtonColor("user").bg
                    }] py-[4px]`}
                    onClick={() => handleClick("user")}
                  >
                    <FaUser
                      className={`w-[25px] h-[25px] text-[${
                        getButtonColor("user").text
                      }]`}
                    />
                  </div>
                </div>

                {activeButton === "home" && <AboutSchool />}
                {activeButton === "location" && <Location />}
                {activeButton === "phone" && <Contact />}
                {activeButton === "user" && <OwnerInfo />}
              </div>
            )}
            {/* // <AboutSchool />
            // <Location />
            // <Contact />
            // <OwnerInfo /> */}
            <div className="flex gap-2">
              <button
                className="bg-[#00AAEE] text-[#fff] py-[3px] px-[6px] mt-9 mb-2"
                onClick={() => {
                  handleSave();
                }}
              >
                Save Update
              </button>
              <p className="hidden">Updated successful</p>
            </div>
          </div>
        </div>
      </div>

      <School_address />
    </div>
  );
}

export default EditSchool;
