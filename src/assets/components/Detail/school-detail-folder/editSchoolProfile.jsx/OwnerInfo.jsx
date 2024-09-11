import React from 'react'
import { useSchoolContextHook } from "../../../context/SchoolArrayProvider";

function OwnerInfo() {
    const { schoolArrayData,
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
    <p className="font-bold py-3 text-[14px] text-[#838383]">Team</p>
    <div className="flex-col gap-6">
          <div className="flex-col ">
            <label htmlFor="" className="text-[11px] font-normal text-[#838383]">Name of founder</label> <br />
            <input
              type="text"
              onChange={(e) => setFounderName(e.target.value)}
              value={foundername}
              className="w-[300px] py-[5px] px-[4px] border-2 rounded-lg "
            />
          </div>
          <div className="flex-col">
            <label htmlFor="" className="text-[11px] font-normal text-[#838383]">Email</label> <br />
            <input
              type="text"
              onChange={(e) => setFounderEmail(e.target.value)}
              value={founderemail}
              className="w-[300px] py-[5px] px-[4px] border-2 rounded-lg "
            />
          </div>
          <div className="flex-col ">
            <label htmlFor="" className="text-[11px] font-normal text-[#838383]">Phone</label> <br />
            <input
              type="text"
              onChange={(e) => setFounderPhone(e.target.value)}
              value={founderPhone}
              className="w-[300px] py-[5px] px-[4px] border-2 rounded-lg "
            />
          </div>
          <hr />
          <div className="flex-col ">
            <label htmlFor="" className="text-[11px] font-normal text-[#838383]">Principal's Name</label> <br />
            <input
              type="text"
              onChange={(e) => setPrincipalName(e.target.value)}
              value={principalname}
              className="w-[300px] py-[5px] px-[4px] border-2 rounded-lg "
            />
          </div>

          </div>

</div>
  )
}

export default OwnerInfo
