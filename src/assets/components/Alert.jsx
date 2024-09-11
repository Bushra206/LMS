import React,{createContext,useContext} from "react";
import { BsCheck } from "react-icons/bs";
import AlertTextProvider from "./context/AlertTextProvider";
import { useAlertCustomHook } from "./context/AlertTextProvider";

function Alert() {

//   export const handleAlertTextDisplay = (className) => {
//     setAlertText(`${className} subjects have been added.`);
//   };
const {alertText,setAlertText,handleAlertTextShow}=useAlertCustomHook();
  return (
    <div className="flex items-center w-[100%] mb-3">
      <p className="min-w-[90%] bg-[#87CEEB] py-2 px-2 text-[#fff] text-[14px] font-bold">
        {alertText}
      </p>
      <div className="bg-[#00FF00] ">
        <BsCheck className="text-[#fff] text-[18px] font-black" size={37} />
      </div>
    </div>
  );
}

export default Alert;
