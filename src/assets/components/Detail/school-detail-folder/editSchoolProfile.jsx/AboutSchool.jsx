import React from "react";
import { useSchoolContextHook } from "../../../context/SchoolArrayProvider";

function AboutSchool() {
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
  return (
    <div>
      <p className="font-bold py-3 text-[14px] text-[#838383]">About School</p>
      <div className="flex-col gap-6">
        <div className="flex-col ">
          <label htmlFor="" className="text-[11px] font-normal text-[#838383]">School name</label> <br />
          <input
            type="text"
            onChange={(e) => setSchoolName(e.target.value)}
            value={schoolname}
            placeholder="school name"
            className="w-[300px] py-[5px] px-[4px] border-2 rounded-lg "
          />
        </div>
        <div className="flex-col">
          <label htmlFor="" className="text-[11px] font-normal text-[#838383]">Motto</label> <br />
          <input
            type="text"
            onChange={(e) => setSchoolMotto(e.target.value)}
            value={schoolmotto}
            placeholder="motto"
            className="w-[300px] py-[5px] px-[4px] border-2 rounded-lg "
          />
        </div>
        <div className="flex-col">
          <label htmlFor="" className="text-[11px] font-normal text-[#838383]">Date founded:</label> <br />
          <div className="flex gap-1">
            <select name="dd" className="bg-[#EEEEEE] p-[5px] rounded-lg">
              <option selected="">DD</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
            <select name="mm" className="bg-[#EEEEEE] p-[5px] rounded-lg">
              <option selected="">MM</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select name="yy" className="bg-[#EEEEEE] p-[5px] rounded-lg">
              <option selected="">YY</option>
              <option value="1980">1980</option>
              <option value="1981">1981</option>
              <option value="1982">1982</option>
              <option value="1983">1983</option>
              <option value="1984">1984</option>
              <option value="1985">1985</option>
              <option value="1986">1986</option>
              <option value="1987">1987</option>
              <option value="1988">1988</option>
              <option value="1989">1989</option>
              <option value="1990">1990</option>
              <option value="1991">1991</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSchool;
