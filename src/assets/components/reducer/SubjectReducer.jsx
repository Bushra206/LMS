import React from "react";

// CollectionReducer.js
function SubjectReducer(state, action) {
  switch (action.type) {
    case "PreschoolSubject":
      return {

        // filteredPreschoolData: state.cardsArrayData.filter(
        //   (item) => item.type === action.payload
        // ),
        filteredPreschoolData: state[0].Preschool_Subject.map((elem)=>{
          return elem;
        })
      };
  //   case "unst":
  //     return {
  //       ...state,
  //       filteredUnstData: state.cardsArrayData.filter(
  //         (item) => item.type === action.payload
  //       ),
  //     };
  //   case "west":
  //     return {
  //       ...state,
  //       filteredWestData: state.cardsArrayData.filter(
  //         (item) => item.type === action.payload
  //       ),
  //     };
  //   case "slpw":
  //     return {
  //       ...state,
  //       filteredSlpwData: state.cardsArrayData.filter(
  //         (item) => item.type === action.payload
  //       ),
  //     };
  //   case "mdstw":
  //     return {
  //       ...state,
  //       filteredMdstwData: state.cardsArrayData.filter(
  //         (item) => item.type === action.payload
  //       ),
  //     };
    default:
      return state;
  }
}
export default SubjectReducer;
