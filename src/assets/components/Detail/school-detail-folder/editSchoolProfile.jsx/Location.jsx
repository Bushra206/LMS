import React from 'react'
import { useSchoolContextHook } from "../../../context/SchoolArrayProvider";

function Location() {
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
        <p className="font-bold py-3 text-[14px] text-[#838383]">Location</p>
        <div className="flex-col gap-6">
              <div className="flex-col ">
                <label htmlFor="" className="text-[11px] font-normal text-[#838383]">Street address</label> <br />
                <input
                  type="text"
                  onChange={(e) => setSchoolStreetaddress(e.target.value)}
                  value={schoolstreetaddress}
                  placeholder="street sddress"
                  className="w-[300px] py-[5px] px-[4px] border-2 rounded-lg "
                />
              </div>
              <div className="flex-col">
                <label htmlFor="" className="text-[11px] font-normal text-[#838383]">City</label> <br />
                <input
                  type="text"
                  onChange={(e) => setSchoolCity(e.target.value)}
                  value={schoolcity}
                  placeholder="City"
                  className="w-[300px] py-[5px] px-[4px] border-2 rounded-lg "
                />
              </div>
              <div className="flex-col ">
                <label htmlFor="" className="text-[11px] font-normal text-[#838383]">P.O. Box</label> <br />
                <input
                  type="text"
                  onChange={(e) => setSchoolPobox(e.target.value)}
                  value={schoolpobox}
                  className="w-[300px] py-[5px] px-[4px] border-2 rounded-lg "
                />
              </div>
              <div className="flex-col">
                <label htmlFor="" className="text-[11px] font-normal text-[#838383]">Postal Code</label> <br />
                <input
                  type="text"
                  onChange={(e) => setSchoolpostalcode(e.target.value)}
                  value={schoolpostalcode}
                  className="w-[300px] py-[5px] px-[4px] border-2 rounded-lg "
                />
              </div>
              <div className="flex-col ">
                <label htmlFor="" className="text-[11px] font-normal text-[#838383]">State</label> <br />
                <input
                  type="text"
                  onChange={(e) => setSchoolState(e.target.value)}
                  value={schoolstate}
                  className="w-[300px] py-[5px] px-[4px] border-2 rounded-lg "
                />
              </div>
              <div className="flex-col">
                <label htmlFor="" className="text-[11px] font-normal text-[#838383]">Country</label> <br />
                <input
                  type="text"
                  onChange={(e) => setSchoolCountry(e.target.value)}
                  value={schoolcountry}
                  className="w-[300px] py-[5px] px-[4px] border-2 rounded-lg "
                />
              </div>
              </div>

    </div>
  )
}

export default Location
