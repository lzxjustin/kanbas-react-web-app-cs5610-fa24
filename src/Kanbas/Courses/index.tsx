import { Route, Routes, useParams, useLocation, Navigate } from "react-router";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState,  useEffect, Dispatch, SetStateAction } from "react";
import { addAssignment} from "./Assignments/reducer";
import { useDispatch } from "react-redux";
// import { courses } from "../Database";

export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const course = courses.find((course) => course._id === cid);
   
    const [assignmentName, setassignmentName] = useState("New Assignment");
    const [assignmentDesc, setassignmentDesc] = useState("This is a new assignment");
    const [assignmentPts, setassignmentPts] = useState("100");
    const [assignmentDue, setassignmentDue] = useState("Jan 31 at 12:00am");
    const [assignmentAvaf, setassignmentAvaf] = useState("Jan 10 at 12:00am");
    const [assignmentAvaU, setassignmentAvaU] = useState("Jan 10 at 12:00am");
    const dispatch = useDispatch()
    
    return (
        <div id="wd-courses">
        <h2 className="text-danger">
            <FaAlignJustify className="me-4 fs-4 mb-1" />
            {course && course.name}  &gt; {pathname.split("/")[4]}
        </h2> <hr/>
        <div className="d-flex">
          <div className="d-none d-md-block">
            <CoursesNavigation />
          </div>
            <div className="flex-fill">
                <Routes>
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Assignments" element={<Assignments
                           assignmentName = {assignmentName}
                           setassignmentName = {setassignmentName} 
                    
                    />} />
                    <Route path="Assignments/:aid" element={<AssignmentEditor
                            assignmentName = {assignmentName}
                            setassignmentName = {setassignmentName}
                            assignmentDesc = {assignmentDesc}
                            setassignmentDesc = {setassignmentDesc} 
                            assignmentPts = {assignmentPts}
                            setassignmentPts = {setassignmentPts} 
                            assignmentDue = {assignmentDue}
                            setassignmentDue = {setassignmentDue} 
                            assignmentAvaU = {assignmentAvaU}
                            setassignmentAvaU = {setassignmentAvaU} 
                            assignmentAvaf = {assignmentAvaf}
                            setassignmentAvaf = {setassignmentAvaf} 
                            addAssignment = {() => {
                              dispatch(addAssignment({name: assignmentName, course: cid, desc:assignmentDesc, points:assignmentPts, due:assignmentDue, from:assignmentAvaf, until:assignmentAvaU}));
                              
                            }}
                            
                             />} />
                    <Route path="People" element={<PeopleTable />} />
                </Routes>
            </div>
          </div>
        </div>
  );}
  