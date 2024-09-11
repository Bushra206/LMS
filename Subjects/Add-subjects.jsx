import React, { useState } from 'react'
import Accordian from '../../Detail/school-detail-folder/Accordian'
import School_address from '../../Detail/School_address'
import SchoolSubComponent from './SchoolSubComponent'
import SubjectsArrayProvider from '../../context/SubjectsArrayProvider'
import { useSubjectCustomHook } from '../../context/SubjectsArrayProvider'
import Alert from '../../Alert'

function Addsubjects() {
   const{classwisesubjectsarray,dispatch}=useSubjectCustomHook();
    // console.log(classwisesubjectsarray);


  return (
    <div className="flex justify-start gap-6 p-3 w-full">
             <Accordian/>
             <div className='w-[55%]'>
                {/* <p>Access to Hello was granted.</p> */}
                {<Alert />}
                <p className='text-[13px] font-normal text-[#838383]'><span className='text-[15px]'>Add subjects to the various sections.</span> Enter subject long and short name then click Add. When done click save.</p>
                {classwisesubjectsarray.map((currelem)=>{
                    const {name,School_Subject}=currelem;
                    const {fullname,shortname}=School_Subject;
                    return(
                        <SchoolSubComponent name={name} size={School_Subject.fullname.length} subjects_array_fullname={fullname} subjects_array_shortname={shortname} />
                    )
                })}

             </div>
             <School_address />
    </div>
  )
}

export default Addsubjects
