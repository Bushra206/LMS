import React, { useContext, useState } from "react";
import SubjectsArrayProvider from "../../context/SubjectsArrayProvider";
import { useSubjectCustomHook } from "../../context/SubjectsArrayProvider";
import { dataContext } from "../../context/dataContext";

function EditSubComponent({
  currelem_index,
  name,
  subjects_array_fullname,
  subjects_array_shortname,
  School_Subject,
}) {
  const { classwisesubjectsarray, setClassWiseSubjectsArray } =
    useSubjectCustomHook();
  // console.log("arrayData inEditSubComponent ", classwisesubjectsarray);
  // const arrayData = JSON.parse(localStorage.getItem("myArray"));
  // console.log("arrayDataInEditSubject", arrayData);
  let [subjectShortArray, setSubjectShortArray] = useState(
    School_Subject.shortname
  );
  let [subjectFullArray, setSubjectFullArray] = useState(
    School_Subject.fullname
  );
  const [arrayDataState, setArrayDataState] = useState(classwisesubjectsarray);

  // function handleInputChange(index, value, type) {

  //   if (type === "fullname") {
  //     setSubjectFullArray((subjectFullArray) => {
  //       subjectFullArray[index] = value;
  //       return [...subjectFullArray];
  //     });
  //   } else if (type === "shortname") {
  //     setSubjectShortArray((subjectShortArray) => {
  //       subjectShortArray[index] = value;
  //       return [...subjectShortArray];
  //     });
  //   }
  // }
  function handleInputChangeFullname(index, e) {
    setSubjectFullArray((subjectFullArray) => {
      subjectFullArray[index] = e.target.value;
      return [...subjectFullArray];
    });
  }
  function handleInputChangeShortname(index, e) {
    setSubjectShortArray((subjectShortArray) => {
      subjectShortArray[index] = e.target.value;
      return [...subjectShortArray];
    });
  }
  function handleSaveButton() {
    //const updatedarrayDataState = [...arrayDataState];
    // const index = arrayDataState.findIndex((item) => item.name === name);
    // if (index !== -1) {
    //   arrayDataState[index].School_Subject.fullname = subjectFullArray;
    //   arrayDataState[index].School_Subject.shortname = subjectShortArray;
    // }
    // setArrayDataState(arrayDataState);
    console.log("handleSaveSubject called");
    const updatedArrayDataState = [...arrayDataState]; // Create a new array
    const index = updatedArrayDataState.findIndex((item) => item.name === name);

    if (index !== -1) {
      updatedArrayDataState[index].School_Subject.fullname = subjectFullArray;
      updatedArrayDataState[index].School_Subject.shortname = subjectShortArray;
    }
    setArrayDataState(updatedArrayDataState);
  }

  console.log("arraydatastate", arrayDataState);
  // localStorage.setItem(
  //   "arrayDataStateInLocalStorage",
  //   JSON.stringify(arrayDataState)
  // );


  // console.log("subjectShortArray-editred", subjectShortArray);
  // console.log("subjectFullArray-edited", subjectFullArray);
  // console.log("arraydatastate", arrayDataState);

  return (
    <div>
      <div className="mt-8 w-full flex flex-col gap-3">
        <p className="text-[21px] font-normal text-[#2255ff]">{name}</p>
        <div class="table-box-shadow relative flex flex-col w-[90%]  h-full  text-gray-700 bg-white bg-clip-border">
          <table class="w-full text-left  table-auto">
            <thead>
              <tr>
                <th class="p-4 border-b  bg-[#fff]">
                  <p class="block font-sans text-sm antialiased font-bold leading-none text-[#000] ">
                    No
                  </p>
                </th>
                <th class="p-4 border-b bg-[#fff]">
                  <p class="block font-sans text-sm antialiased font-bold leading-none text-[#000]">
                    Subject Long Name
                  </p>
                </th>
                <th class="p-4 border-b bg-[#fff]">
                  <p class="block font-sans text-sm antialiased font-bold leading-none text-[#000]">
                    Subject Short Name
                  </p>
                </th>
              </tr>
            </thead>

            <tbody>
              {School_Subject.fullname.map((fullnamesubject, index) => {
                return (
                  <tr className="hover:bg-[#EEEEEE]">
                    <td class="p-3 border-b border-blue-gray-50">
                      <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {index + 1}
                      </p>
                    </td>
                    <td class=" border-b border-blue-gray-50">
                      <input
                        type="text"
                        value={subjectFullArray[index]}
                        className="p-3 block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 w-full "
                        onChange={(e) => {
                          handleInputChangeFullname(index, e);
                        }}
                      />
                    </td>
                    <td class=" border-b border-blue-gray-50">
                      <input
                        type="text"
                        value={subjectShortArray[index]}
                        className="p-3 block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 w-full "
                        onChange={(e) => {
                          handleInputChangeShortname(index, e);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {currelem_index == arrayData.length - 1 && (
          <div className=" flex flex-col justify-end">
            <button
              className="flex justify-start mt-4 text-[14px] font-normal text-[#fff] bg-[#00AAEE] px-[10px] py-[5px] rounded ms-[4px] w-max"
              onClick={() => handleSaveButton()}
            >
              Save Subject
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditSubComponent;

// <tr key={index} className="hover:bg-[#EEEEEE]">
// <td class="p-4 border-b border-blue-gray-50">
//   <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
//     {index+1}
//   </p>
// </td>
// <td class="p-4 border-b border-blue-gray-50">
//   <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
//      {fullname}
//   </p>
// </td>
// <td class="p-4 border-b border-blue-gray-50">
//   <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
//     {subjectclass.School_Subject.shortname[index]}
//   </p>
// </td>
// </tr>

// {arrayData.map((subjectclass,i)=>{
//   console.log('subjectclass:', subjectclass);
//   console.log('School_Subject:', subjectclass.School_Subject);
//   console.log('fullname:', subjectclass.School_Subject.fullname);
//   console.log('shortname:', subjectclass.School_Subject.shortname);
//      subjectclass.School_Subject.fullname.map((fullname,index)=>{
//       return(
//         <tr key={index} className="hover:bg-[#EEEEEE]">
//         <td class="p-4 border-b border-blue-gray-50">
//           <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
//             {index+1}
//           </p>
//         </td>
//         <td class="p-4 border-b border-blue-gray-50">
//           <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
//              {fullname}
//           </p>
//         </td>
//         <td class="p-4 border-b border-blue-gray-50">
//           <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
//             {subjectclass.School_Subject.shortname[index]}
//           </p>
//         </td>
//       </tr>

//       )
//      })
// })
