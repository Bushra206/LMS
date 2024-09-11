import React,{createContext} from "react";
import Accordian from "./Detail/school-detail-folder/Accordian";
import School_find from "./Detail/School_find";
import School_address from "./Detail/School_address";

function Account() {

  return (
    <div className="flex justify-between p-3 w-full">
      <Accordian className="w-[35%]"/>
      <School_find className="w-[35%]" />
      <School_address className="w-[30%]" />
      {/* <div className="left bg-black">
            <School_detail/>
        </div>
        <div className="center">
            <School_find/>
        </div>
        <div className="right">
            <School_address/>
        </div> */}
    </div>
  );
}

export default Account;
