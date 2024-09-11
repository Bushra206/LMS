import React, { useState } from 'react'
import MyAccordian from './MyAccordian';
//import react icons
import { FaHome } from "react-icons/fa";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { IoMdLaptop } from "react-icons/io";
import { MdAssignment } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { FiMessageSquare } from "react-icons/fi";
import { MdMore } from "react-icons/md";

function Accordian() {
  const menu_items_list=[
    {
        title:" School profile",
        icon:<FaHome />,
        subitem:{
          heading1:"Upload logo",
          heading2:"Upload stamp",
          heading3:"Edit school profile",
          heading4:"Add School"
        }
    },
    {
        title:"  Records",
        icon:<BsFillRecordCircleFill />,
        subitem1:{
          subitemheading:"Staff",
          no:21,
          furthersubitem:{
            furthersubitemheading1:"Edit permission",
            furthersubitemheading2:"Edit subject teacher"
          }
        },
        subitem2:{
          subitemheading:"Manage section",
          no:5,
          furthersubitem:{
            furthersubitemheading1:"Update section",
            furthersubitemheading2:"Rename section"
          }
        },
        subitem3:{
          subitemheading:"Manage class",
          no:16,
          furthersubitem:{
            furthersubitemheading1:"Edit class arms",
            furthersubitemheading2:"Rename class"
          }
        },
        subitem4:{
          subitemheading:"Subjects",
          no:73,
          furthersubitem:{
            furthersubitemheading1:"Add subject",
            furthersubitemheading2:"Edit subject",
             furthersubitemheading3:"Group subject"
          }
        },
        subitem5:{
          subitemheading:"Edit Calender",
          no:"2nd",

        },
        subitem6:{
          subitemheading:"Students",
          no:92,
          furthersubitem:{
            furthersubitemheading1:"Quick add",
            furthersubitemheading2:"View full list",
            furthersubitemheading3:"Edit record",
            furthersubitemheading4:"Updatestudent",
            furthersubitemheading5:"view students",
            furthersubitemheading6:"Find student"
          }
        },
        subitem7:{
          subitemheading:"Delete Items",

        },
        subitem8:{
          subitemheading:"Close term",

        },
        subitem9:{
          subitemheading:"Boarding",

        },
        subitem10:{
          subitemheading:"Lock access",

        },

    },
    {
        title:"Assessment",
        icon:<BsFillSunFill />,
        subitem:{
          heading1:"Mark register",
          heading2:"Enter score",
          heading3:"Add Comment",
          heading4:"Extended Comment",
          heading5:"Add attendance",
          heading6:"Add Behaviour",
          heading7:"Add Skills",
          heading8:"View Transcript",
          heading9:"View Cumulative",
          heading10:"Result",
          heading11:"Promotion"

        }
    },
    {
        title:"CBT",
        icon:<IoMdLaptop />,
        subitem:{
          heading1:"Setcbt question",
          heading2:"My saved CBTs",
          heading3:"Take a test",
          heading4:"Lock CBT",
        }
    },
    {
        title:"Lesson notes",
        icon:<MdAssignment />,
        subitem:{
          heading1:"Add questions",
          heading2:"View questions",
        }
    },
    {
        title:"Question bank",
        icon:<MdContactPage />
    },
    {
        title:" Analytics",
        icon:<SiGoogleanalytics />
    },
    {
        title:"Messaging",
        icon:<FiMessageSquare />,
        subitem:{
          heading1:"Send message",
          heading2:"Message update",
        }
    },
    {
        title:"More",
        icon:<MdMore />,
        subitem:{
          heading1:"Synch percentages",
          heading2:"Toggle access",
        }
    },
]
const[accordianData,setAccordianData]=useState(menu_items_list);

console.log(accordianData);


  return (
    <div className='flex-col w-[20%] '>
        {
  accordianData.map((elem, index) => {
    return (
      <React.Fragment key={index}>
        <MyAccordian {...elem} index={index} className="w-[100%]"/>
        {/* {index === 0 && <MyAccordian {...elem,index} />} */}
      </React.Fragment>
    );
  })
}
    </div>
  )
}

export default Accordian
