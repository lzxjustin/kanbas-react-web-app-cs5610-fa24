import { FaPlus, FaTrash } from "react-icons/fa6";
import { BsGripVertical } from 'react-icons/bs';
import {BiSolidDownArrow} from 'react-icons/bi';
import AssControlButtons from "./ASSControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import{ MdAssignment } from 'react-icons/md'
import { FaSearch } from "react-icons/fa";
import * as db from "../../Database";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAssignment } from "./reducer";
import Assignmentdeleter from "./LessonDeleter";
import { useState } from "react";

export default function Assignments({ assignmentName, setassignmentName }:
  { assignmentName: string; setassignmentName: (title: string) => void; }) {

    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const dispatch = useDispatch()
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    return (
      <div id="wd-assignments">

        <div className="mb-3 row">
          <div className="col-6">
              <div className="input-group">
                <span className="input-group-text border-end-0 bg-transparent">
                  <FaSearch /> 
                </span>
                <input type="text" className="form-control p-2 border-start-0" placeholder="Search..." />
              </div>
          </div>

          {currentUser.role === "FACULTY" && (
                      <>
                <div className="col-6">
                      <Link key= {`#/Kanbas/Courses/${cid}/Assignments/`} to= {`TEMP`} className="text-white fs-5 text-decoration-none">
                        <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
                                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                                Assignment
                        </button>
                      </Link>
                
                  <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
                      <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Group
                  </button>
                </div>

              
          </>
          )}
        </div>

      
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> 
              <BsGripVertical className="me-2 fs-2" />
              <BiSolidDownArrow className="me-2 fs-6" />
                <strong>ASSIGNMENTS</strong>
              <AssControlButtons />
            </div>

            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
              <li className = "wd-assignment list-group-item">
                  <div className="row align-items-center gx-0">
                      <div className="col-auto fs-2"  style={{ paddingRight: "20px" }}>
                        <BsGripVertical className="me-2 text-secondary"/>
                        <MdAssignment className="text-success" />
                      </div>
                      
                      <div className="col">
                        <Link key= {`#/Kanbas/Courses/${cid}/Assignments/`} to= {`${assignment._id}`} className="text-dark fs-5 text-decoration-none">
                          <strong>{assignment.title}</strong>
                        </Link>
                        <p  style={{ margin: "0" }}><span className="text-danger"><strong> Multiple Modules </strong> </span>| <strong> Not available until </strong> {assignment.available_date} |</p>
                        <strong> Due </strong> {assignment.due_date} | {assignment.points} pts
                      </div>

                      {currentUser.role === "FACULTY" && (
                      <>
                      <div className="col-auto">

                        <FaTrash className="text-danger me-2 mb-1" data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog"/>
                        
                        <LessonControlButtons/>

                        <Assignmentdeleter dialogTitle="Delete" 
                                          assignmentID={assignment._id} 
                                          deleteAssignment={(assignmentID) => {
                                            dispatch(deleteAssignment(assignmentID))}} />

                      </div>
                      </>
                        )}

                  </div>

              </li>
            ))}

          </li>
        </ul> 
      </div>
  );}
  
  