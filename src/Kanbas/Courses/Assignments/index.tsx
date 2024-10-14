import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from 'react-icons/bs';
import {BiSolidDownArrow} from 'react-icons/bi';
import AssControlButtons from "./ASSControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import{ MdAssignment } from 'react-icons/md'
import { FaSearch } from "react-icons/fa";
import * as db from "../../Database";
import { useParams } from "react-router";
export default function Assignments() {
    const { cid } = useParams();

    const assignments = db.assignments;
    
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


          <div className="col-6">
            <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Assignment</button>

            <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group</button>
          </div>

        </div>

      
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> 
              <BsGripVertical className="me-2 fs-2" />
              <BiSolidDownArrow className="me-2 fs-6" />
                <strong>ASSIGNMENTS</strong>
              <AssControlButtons/>
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
                        <a href= {`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="text-dark fs-5 text-decoration-none">
                          <strong>{assignment.title}</strong>
                        </a>
                        <p  style={{ margin: "0" }}><span className="text-danger"><strong> Multiple Modules </strong> </span>| <strong> Not available until </strong> {assignment.available_date} |</p>
                        <strong> Due </strong> {assignment.due_date} | {assignment.points} pts
                      </div>

                      <div className="col-auto">
                        <LessonControlButtons />
                      </div>
                  </div>
              </li>
            ))}
            
            
            {/* <li className="wd-assignment list-group-item">
              <div className="row d-flex align-items-center">
                <div className="col-2 fs-2 d-flex justify-content-start align-items-center"  style={{ paddingRight: "0" }}>
                  <BsGripVertical className="me-2"/>
                  <MdAssignment />
                </div>

                <div className="col-7 text-start">
                <a className="wd-assignment-link fs-3 "
                  style={{ color: "black", textDecoration: "none" }}
                  href="#/Kanbas/Courses/${cid}/Assignments/123">

                    <strong>A1</strong>
                  </a><br/>
                  <p  style={{ margin: "0" }}><span className="text-danger"><strong> Multiple Modules </strong> </span>| <strong> Not available until </strong> May 6 at 12:00am |</p>
                  <strong> Due </strong> May 13 at 11:59pm | 100 pts
                </div> 

                <div className="col-3  justify-content-end">
                  <LessonControlButtons/>
                </div> 
              </div>
            </li>

            <li className="wd-assignment list-group-item p-3 ps-3">
              <div className="row d-flex align-items-center">
                <div className="col-2 fs-2 d-flex justify-content-start align-items-center"  style={{ margin: "0" }}>
                  <BsGripVertical className="me-2"/>
                  <MdAssignment />
                </div>

                <div className="col-7 text-start">
                <a className="wd-assignment-link fs-3 "
                  style={{ color: "black", textDecoration: "none" }}
                  href="#/Kanbas/Courses/${cid}/Assignments/123">
                    <strong>A2</strong>
                  </a><br/>
                  <p  style={{ margin: "0" }}><span className="text-danger"><strong> Multiple Modules </strong> </span>| <strong> Not available until </strong> May 13 at 12:00am |</p>
                  <strong> Due </strong> May 20 at 11:59pm | 100 pts<br/>
                </div> 

                <div className="col-3  justify-content-end">
                  <LessonControlButtons/>
                </div> 
              </div>
            </li>

            <li className="wd-assignment list-group-item p-3 ps-3">
              
              <div className="row d-flex align-items-center">
                <div className="col-2 fs-2 d-flex justify-content-start align-items-center">
                  <BsGripVertical className="me-2"/>
                  <MdAssignment />
                </div>

                <div className="col-7 justify-content-start">
                <a className="wd-assignment-link fs-3 "
                  style={{ color: "black", textDecoration: "none" }}
                  href="#/Kanbas/Courses/${cid}/Assignments/123">

                    <strong>A3</strong>
                  </a><br/>
                  <p  style={{ margin: "0" }}><span className="text-danger"><strong> Multiple Modules </strong> </span>| <strong> Not available until </strong> May 20 at 12:00am |</p>
                  <strong> Due </strong> May 27 at 11:59pm | 100 pts<br/>
                </div> 

                <div className="col-3  justify-content-end">
                  <LessonControlButtons/>
                </div> 
              </div>

            </li> */}

          </li>
        </ul> 
      </div>
  );}
  
  