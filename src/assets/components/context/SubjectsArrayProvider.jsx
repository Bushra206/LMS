import React, { createContext, useContext, useState } from "react";
const subjectcontextcreate = createContext();
export const useSubjectCustomHook = () => {
  const subjectusecontext = useContext(subjectcontextcreate);
  return subjectusecontext;
};

function SubjectsArrayProvider(props) {
  // let classwise_subjects_array = [
  //   {
  //     name: "Preschool",
  //     School_Subject: {
  //       fullname: ["Number Work", "Grammar ", "Phonics", "General Knowledge"],
  //       shortname: ["Numb Work", "Gramm ", "Phonic", "General Kng"],
  //     },
  //   },
  //   {
  //     name: "Nursery ",
  //     School_Subject: {
  //       fullname: ["Number Work", "Grammar ", "Phonics", "Reading"],
  //       shortname: ["Number Work", "Grammar ", "Phonics", "Reading"],
  //     },
  //   },
  //   {
  //     name: "Primary ",
  //     School_Subject: {
  //       fullname: ["Mathematics", "Grammar", "Comprehension", "Phonics"],
  //       shortname: ["Mathematics", "Grammar", "Comprehension", "Phonics"],
  //     },
  //   },
  //   {
  //     name: "Junior Secondary ",
  //     School_Subject: {
  //       fullname: [
  //         "Mathematics",
  //         "English Language",
  //         "Basic Science",
  //         "Agricultural science",
  //       ],
  //       shortname: [
  //         "Mathematics",
  //         "English Language",
  //         "Basic Science",
  //         "Agricultural science",
  //       ],
  //     },
  //   },
  //   {
  //     name: "Senior Secondary ",
  //     School_Subject: {
  //       fullname: ["Mathematics", "English Language", "Biology", "Chemistry"],
  //       shortname: ["Mathematics", "English Language", "Biology", "Chemistry"],
  //     },
  //   },
  // ];

  let classwise_subjects_array = [
    {
      name: "Preschool",
      spec_name:"PREPARATORY ONE ",
      School_Subject: {
        //  fullname: ["Number Work", "Grammar ", "Phonics", "General Knowledge"],
        fullname: {
          "Number WORK":[
            {
              title:"title",
              value:"value"
           }],
          "Grammar":[
            {
              title:"title",
              value:"value"
           }],
          "Phonics":[
            {
              title:"title",
              value:"value"
           }],
          "General Knowledge":{
              title:"title",
              value:"value"
          }

        },
        shortname: ["Numb Work", "Gramm ", "Phonic", "General Kng"],
      },
      subsubjects:[
        {
             title:"title",
             des:"description"
        }
      ]
    },
    // {
    //   name: "Preschool",
    //   spec_name:"PREPARATORY TWO ",
    //   School_Subject: {
    //     fullname: ["Number Work", "Grammar ", "Phonics", "General"],
    //     shortname: ["Numb Work", "Gramm ", "Phonic", "Gnr"],
    //   },
    // },
    // {
    //   name: "Nursery ",
    //   spec_name:" NURSERY ONE ",
    //   School_Subject: {
    //     fullname: ["Number Work", "Grammar ", "Phonics", "Reading"],
    //     shortname: ["Number Work", "Grammar ", "Phonics", "Reading"],
    //   },
    // },
    // {
    //   name: "Primary ",
    //   spec_name:" NURSERY TWO ",
    //   School_Subject: {
    //     fullname: ["Mathematics", "Grammar", "Comprehension", "Phonics"],
    //     shortname: ["Mathematics", "Grammar", "Comprehension", "Phonics"],
    //   },
    // },
    // {
    //   name: "Primary ",
    //   spec_name:"YEAR ONE ",
    //   School_Subject: {
    //     fullname: ["Mathematics", "Grammar", "Comprehension", "Phonics"],
    //     shortname: ["Mathematics", "Grammar", "Comprehension", "Phonics"],
    //   },
    // },
    // {
    //   name: "Primary ",
    //   spec_name:"YEAR TWO ",
    //   School_Subject: {
    //     fullname: ["Mathematics", "Grammar", "Comprehension", "Phonics"],
    //     shortname: ["Mathematics", "Grammar", "Comprehension", "Phonics"],
    //   },
    // },
    // {
    //   name: "Primary ",
    //   spec_name:"YEAR THREE ",
    //   School_Subject: {
    //     fullname: ["Mathematics", "Grammar", "Comprehension", "Phonics"],
    //     shortname: ["Mathematics", "Grammar", "Comprehension", "Phonics"],
    //   },
    // },
    // {
    //   name: "Primary ",
    //   spec_name:"YEAR FOUR ",
    //   School_Subject: {
    //     fullname: ["Mathematics", "Grammar", "Comprehension", "Phonics"],
    //     shortname: ["Mathematics", "Grammar", "Comprehension", "Phonics"],
    //   },
    // },
    // {
    //   name: "Primary ",
    //   spec_name:"YEAR FIVE ",
    //   School_Subject: {
    //     fullname: ["Mathematics", "Grammar", "Comprehension", "Phonics"],
    //     shortname: ["Mathematics", "Grammar", "Comprehension", "Phonics"],
    //   },
    // },
    // {
    //   name: "Primary ",
    //   spec_name:"YEAR SIX",
    //   School_Subject: {
    //     fullname: ["Mathematics", "Grammar", "Comprehension", "Phonics"],
    //     shortname: ["Mathematics", "Grammar", "Comprehension", "Phonics"],
    //   },
    // },
    // {
    //   name: "Junior Secondary ",
    //   spec_name:"YEAR SEVEN ",
    //   School_Subject: {
    //     fullname: [
    //       "Mathematics",
    //       "English Language",
    //       "Basic Science",
    //       "Agricultural science",
    //     ],
    //     shortname: [
    //       "Mathematics",
    //       "English Language",
    //       "Basic Science",
    //       "Agricultural science",
    //     ],
    //   },
    // },
    // {
    //   name: "Junior Secondary ",
    //   spec_name:"YEAR EIGHT",
    //   School_Subject: {
    //     fullname: [
    //       "Mathematics",
    //       "English Language",
    //       "Basic Science",
    //       "Agricultural science",
    //     ],
    //     shortname: [
    //       "Mathematics",
    //       "English Language",
    //       "Basic Science",
    //       "Agricultural science",
    //     ],
    //   },
    // },
    // {
    //   name: "Junior Secondary ",
    //   spec_name:"YEAR NINE ",
    //   School_Subject: {
    //     fullname: [
    //       "Mathematics",
    //       "English Language",
    //       "Basic Science",
    //       "Agricultural science",
    //     ],
    //     shortname: [
    //       "Mathematics",
    //       "English Language",
    //       "Basic Science",
    //       "Agricultural science",
    //     ],
    //   },
    // },
    // {
    //   name: "Senior Secondary ",
    //   spec_name:"YEAR TEN ",
    //   School_Subject: {
    //     fullname: ["Mathematics", "English Language", "Biology", "Chemistry"],
    //     shortname: ["Mathematics", "English Language", "Biology", "Chemistry"],
    //   },
    // },
    // {
    //   name: "Senior Secondary ",
    //   spec_name:"YEAR ELEVEN ",
    //   School_Subject: {
    //     fullname: ["Mathematics", "English Language", "Biology", "Chemistry"],
    //     shortname: ["Mathematics", "English Language", "Biology", "Chemistry"],
    //   },
    // },
    // {
    //   name: "Senior Secondary ",
    //   spec_name:"YEAR TWELVE",
    //   School_Subject: {
    //     fullname: ["Mathematics", "English Language", "Biology", "Chemistry"],
    //     shortname: ["Mathematics", "English Language", "Biology", "Chemistry"],
    //   },
    // },
  ];

  const [classwisesubjectsarray, setClassWiseSubjectsArray] = useState(
    classwise_subjects_array
  );

  return (
    <div>
      <subjectcontextcreate.Provider
        value={{ classwisesubjectsarray, setClassWiseSubjectsArray }}
      >
        {props.children}
      </subjectcontextcreate.Provider>
    </div>
  );
}

export default SubjectsArrayProvider;
