import React,{createContext,useContext,useState} from "react";
const alertcontextcreate=createContext();
export const useAlertCustomHook=()=>{
 const alertcontextState=useContext(alertcontextcreate);
 return alertcontextState;
}
function AlertTextProvider(props) {
const [alertText, setAlertText] = useState("Access to Hello was granted");
  //setAlertText(`${className} subjects have been added.`);
  const handleAlertTextShow = (className) => {
    setAlertText(`${className} were successfully updated.`);
  };
  return (
    <div>
    <alertcontextcreate.Provider value={{alertText,setAlertText,handleAlertTextShow}}>
     {props.children}
    </alertcontextcreate.Provider>
    </div>
  )
}

export default AlertTextProvider
