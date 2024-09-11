import { createContext, useState } from "react";
export const dataContext = createContext();

const Details = ({ children }) => {
  const [detail, setDetail] = useState([""]);
  const changeData = (data) => {
    setDetail(data);
  };

  console.log("data", detail);
  return (
    <dataContext.Provider value={{ detail, changeData }}>
      {children}
    </dataContext.Provider>
  );
};
export default Details;
