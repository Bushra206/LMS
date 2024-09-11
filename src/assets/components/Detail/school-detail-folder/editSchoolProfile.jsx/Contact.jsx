import React from 'react'
import { useSchoolContextHook } from "../../../context/SchoolArrayProvider";

function Contact() {
  const {  schoolArrayData,
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
    setPrincipalName} = useSchoolContextHook();
  return (
    <div>
        <p className="font-bold py-3 text-[14px] text-[#838383]">Contact</p>
        <div className="flex-col gap-6">
              <div className="flex-col ">
                <label htmlFor="" className="text-[11px] font-normal text-[#838383]">Phone</label> <br />
                <input
                  type="text"
                  onChange={(e) => setSchoolPhone(e.target.value)}
                  value={schoolphone}
                  className="w-[300px] py-[5px] px-[4px] border-2 rounded-lg "
                />
              </div>
              <div className="flex-col">
                <label htmlFor="" className="text-[11px] font-normal text-[#838383]">Email</label> <br />
                <input
                  type="text"
                  onChange={(e) => setSchoolEmail(e.target.value)}
                  value={schoolemail}
                  className="w-[300px] py-[5px] px-[4px] border-2 rounded-lg "
                />
              </div>
              <div className="flex-col ">
                <label htmlFor="" className="text-[11px] font-normal text-[#838383]">Website</label> <br />
                <input
                  type="text"
                  onChange={(e) => setSchoolWebsite(e.target.value)}
                  value={schoolwebsite}
                  className="w-[300px] py-[5px] px-[4px] border-2 rounded-lg "
                />
              </div>

              </div>

    </div>
  )
}

export default Contact
