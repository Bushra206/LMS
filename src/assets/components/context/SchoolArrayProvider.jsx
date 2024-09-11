import React, { createContext, useContext, useState } from "react";
export const schoolContextCreate = createContext();
export const useSchoolContextHook = () => {
  const schoolContextState = useContext(schoolContextCreate);
  return schoolContextState;
};
// import SchoolReducer from "../reducer/SchoolReducer";

function SchoolArrayProvider(props) {
  let school_data = [
    {
      name: "ST. MARY'S SCHOOLyyy",
      motto: "Scientia est Lumen",
      street_address: "Road 27, Ikota Villa Estate",
      city: "(Behind Mega Chicken), Lekki-Ajah Expressway ",
      state: "Lagos State",
      country: "Nigeria",
      schoolphone: "08145435622",
      schoolemail:"thtj",
      website: "www.smsschools.net",
      foundername:"dg",
      founderemail:"gg",
      founderphone:"g",
      principal_name: "V.O Onoro",
    },
  ];
  const [schoolArrayData, setschoolArrayData] = useState(school_data);
  console.log("schoolArrayData:", schoolArrayData);
  const [schoolname, setSchoolName] = useState(school_data[0].name);
  const [schoolmotto, setSchoolMotto] = useState(school_data[0].motto);
  const [schoolstreetaddress, setSchoolStreetaddress] = useState(school_data[0].street_address);
  const [schoolcity, setSchoolCity] = useState(school_data[0].city);
  const [schoolpobox, setSchoolPobox] = useState(school_data[0].pobox);
  const [schoolpostalcode,setSchoolPostalCode] = useState(school_data[0].schoolpostalcodecode);
  const [schoolstate, setSchoolState] = useState(school_data[0].state);
  const [schoolcountry, setSchoolCountry] = useState(school_data[0].country);
  const [schoolphone, setSchoolPhone] = useState(school_data[0].schoolphone);
  const [schoolemail, setSchoolEmail] = useState(school_data[0].schoolemail);
  const [schoolwebsite, setSchoolWebsite] = useState(school_data[0].website);
  const [foundername, setFounderName] = useState(school_data[0].foundername);
  const [founderemail, setFounderEmail] = useState(school_data[0].founderemail);
  const [founderPhone, setFounderPhone] = useState(school_data[0].founderphone);
  const [principalname, setPrincipalName] = useState(school_data[0].principal_name);
  return (
    <div>
      <schoolContextCreate.Provider
        value={{
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
          setPrincipalName
        }}
      >
        {props.children}
      </schoolContextCreate.Provider>
    </div>
  );
}

export default SchoolArrayProvider;
