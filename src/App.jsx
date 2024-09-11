import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Account from "./assets/components/Account";
import EditSchool from "./assets/components/Detail/school-detail-folder/editSchoolProfile.jsx/EditSchool";
import Editpremition from "./assets/components/Records/Staff/Editpremition";
import "./App.css";
import Addsubjects from "./assets/components/Records/Subjects/Add-subjects";
import EditSubjects from "./assets/components/Records/Subjects/Edit-subjects";
import Group_subjects from "./assets/components/Records/Subjects/Group-subjects";
//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/edit-school" element={<EditSchool />} />
        <Route path="/edit-permition" element={<Editpremition />} />
        <Route path="/add-subjects" element={<Addsubjects />} />
        <Route path="/edit-subjects" element={<EditSubjects />} />
        <Route path="/group-subjects" element={<Group_subjects />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
