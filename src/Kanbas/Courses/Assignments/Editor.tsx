import React, { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { format } from 'date-fns';
import { updateAssignment } from './reducer';
import * as assignmentsClient from './client';

function convertDateString(dateString: string): string {
  const [monthDay, time] = dateString.split(' at ');
  const [monthName, dayStr] = monthDay.split(' ');
  const [hoursMinutes, period] = time.split(' ');
  
  // Convert day from string to number
  const day = parseInt(dayStr, 10);
  // Map month name to month number
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames.indexOf(monthName) + 1;

  // Handle year dynamically - assuming the current year
  const year = new Date().getFullYear(); 

  let [hours, minutes] = hoursMinutes.split(':') as unknown as number[];
  hours = parseInt(hours as unknown as string, 10);
  minutes = parseInt(minutes as unknown as string, 10);
  // console.log(hours, minutes)



  if (time.includes("pm") && hours !== 12) {
    hours += 12;
  }
  else if (time.includes("am") && hours === 12){
    hours = 0; // Midnight case
  }

  // console.log(`${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`)  
  // Format to ISO string and adjust to required format
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

export default function AssignmentEditor( { assignmentName, setassignmentName, 
                                            assignmentDesc, setassignmentDesc, 
                                            assignmentPts, setassignmentPts,
                                            assignmentDue, setassignmentDue,
                                            assignmentAvaf, setassignmentAvaf,
                                            assignmentAvaU, setassignmentAvaU,
                                            addAssignment}:
   {assignmentName: string; 
    setassignmentName: (title: string) => void;
    assignmentDesc: string; 
    setassignmentDesc: (title: string) => void; 
    assignmentPts: string; 
    setassignmentPts: (title: string) => void; 
    assignmentDue: string; 
    setassignmentDue: (title: string) => void; 
    assignmentAvaf: string; 
    setassignmentAvaf: (title: string) => void; 
    assignmentAvaU: string; 
    setassignmentAvaU: (title: string) => void; 
    addAssignment: () => void;}
    ) {

    const { cid, aid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const assignment = assignments.find((assignment: { _id: string | undefined; }) => assignment._id === aid);

    const due_date = `${assignment?.due_date??assignmentDue}`
    const available_date = `${assignment?.available_date??assignmentAvaU}`
    const from_date = `${assignment?.available_date??assignmentAvaf}`
    
    const [dueDate, setDueDate] = useState<Date | null>(new Date(convertDateString(due_date)));
    const [availableFrom, setAvailableFrom] = useState<Date | null>(new Date(convertDateString(available_date)));
    const [availableUntil, setAvailableUntil] = useState<Date | null>(new Date(convertDateString(from_date)));
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch()
    
    const saveAssignment = async (assignment: any) => {
      await assignmentsClient.updateAssignment(assignment);
      dispatch(updateAssignment(assignment));
    };
  

    useEffect(() => {
      if (aid !== 'TEMP') {
          setassignmentName(assignment.title);
          setassignmentDesc(assignment.description);
          setassignmentPts(assignment.points);
          setassignmentDue(assignment.due_date);
          setassignmentAvaf(assignment.available_from);
          setassignmentAvaU(assignment.available_date);
        }
      }, [assignments, setassignmentName, setassignmentDesc, setassignmentPts, setassignmentDue, setassignmentAvaf, setassignmentAvaU]);
  

    console.log({...assignment, title: assignmentName, description:assignmentDesc, points:assignmentPts, due_date:assignmentDue, available_from:assignmentAvaf, available_date:assignmentAvaU})

    return (

      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><p/>
        <input id="wd-name" defaultValue= {`${assignment?.title??assignmentName}`}
               onChange={(e) => {
                const newName = e.target.value;
                console.log(newName)
                if (newName.length > 0) 
                {
                   setassignmentName(newName); 
                }
                else
                {
                  setassignmentName("dummy"); 
                }
              }} 
        className="form-control" 
        readOnly={currentUser.role === "STUDENT"}/><p />

        <div
          className="border p-3 S"
          contentEditable={currentUser.role !== "STUDENT"}
          suppressContentEditableWarning={true}
          onInput={(e) => {
            const newName = e.currentTarget.textContent|| "";
            if (newName.length  > 0) 
            {
              setassignmentDesc(newName)
            }
            else
            {
              setassignmentDesc("dummy"); 
            }
        }}
        
        >
        
              {assignment?.description??assignmentDesc}
          
        </div><br/>


        <div id="wd-css-responsive-forms-1">

          <div className="mb-3 row">
              <label htmlFor="wd-points" className="col-sm-4 col-form-label d-flex justify-content-end">Points</label>
              <div className="col-sm-8">
                <input id="wd-points" defaultValue={`${assignment?.points??assignmentPts}`} 
                                      onChange={(e) => {
                                        const newValue = e.target.value;
                                    
                                        const intValue = parseInt(newValue, 10);

                                        if (!isNaN(intValue) && intValue >= 0 && intValue <= 100) {
                                          setassignmentPts(newValue); 
                                        }
                                        else {
                                          console.log("Please enter an integer between 0 and 100.");
                                        }
                                      }} className="form-control"
                  readOnly={currentUser.role === "STUDENT"}/>
              </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="wd-points" className="col-sm-4 col-form-label d-flex justify-content-end">Assignment Group</label>
            <div className="col-sm-8">
                <select id="default" className="form-select">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option value="PROJECTS">PROJECTS</option>
                </select>
            </div>
          </div>

          <div className="mb-3 row">
              <label htmlFor="wd-display-grade-as" className="col-sm-4 col-form-label d-flex justify-content-end">Display Grade as</label>
          
              <div className="col-sm-8">
                <select id="default" className="form-select">
                    <option value="ASSIGNMENTS">Percentage</option>
                </select>
              </div>
          </div>
         
          <div className="mb-2 row p-3">
              <label htmlFor="wd-submission-type" className="col-sm-4 col-form-label d-flex justify-content-end">Submission type</label>
          
              <div className="col-sm-8 border p-3" >
                <select id="d-submission-type" className="form-select">
                      <option value="Online">Online</option>
                  </select><p/>

                  <p><strong>Online Entry Options</strong></p>

                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="wd-text" />
                    <label className="form-check-label" htmlFor="wd-text" > Text Entry </label>
                  </div>


                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="wd-url" />
                    <label className="form-check-label" htmlFor="wd-url" > Website URL </label>
                  </div>


                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="wd-media" />
                    <label className="form-check-label" htmlFor="wd-media" > Media Recordings </label>
                  </div>


                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="wd-student-ann" />
                    <label className="form-check-label" htmlFor="wd-student-ann" > Student Annotation </label>
                  </div>


                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                    <label className="form-check-label" htmlFor="wd-file-upload" >File Uploads </label>
                  </div>

              </div>
          </div>

          <div className="mb-3 row p-3">
            <label htmlFor="wd-submission-type" className="col-sm-4 col-form-label d-flex justify-content-end">Assign</label>

            <div className="col-sm-8 border p-3" >
              <strong>Assign to</strong>
              <input id="wd-assign-to" className="form-control mb-3 p-2" defaultValue="Everyone" />

              <label htmlFor="wd-due-date"><strong>Due</strong></label>

              <div className="mb-3">
                
                <DatePicker
                  selected={dueDate}
                  onChange={(date: Date | null) => {
                            setDueDate(date);
                            setassignmentDue(date? format(date, "MMM d 'at' h:mma") : "")}}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy, h:mm aa"
                  className="form-control mb-3 p-2"
                  id="wd-due-date"
                />
              </div>
              
              <div className="row">
                <div className="col-6">
                  <label htmlFor="wd-available-from"><strong>Available from</strong></label><br/>
                    <DatePicker
                      selected={availableFrom}
                      onChange={(date: Date | null) => {
                                setAvailableFrom(date);
                                setassignmentAvaf(date? format(date, "MMM d 'at' h:mma") : "")}}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      dateFormat="MMMM d, yyyy, h:mm aa"
                      className="form-control mb-3 p-2 date-picker-input"
                      id="wd-available-from"
                    />
                </div>

                <div className="col-6">
                  <label htmlFor="wd-available-until"><strong>Until</strong></label><br/>
                  <DatePicker
                    selected={availableUntil}
                    onChange={(date: Date | null) => {
                              setAvailableUntil(date);
                              setassignmentAvaU(date? format(date, "MMM d 'at' h:mma") : "")}}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy, h:mm aa"
                    className="form-control mb-3 p-2 date-picker-input"
                    id="wd-available-until"
                  />
                 
                </div>
              </div>
                
            </div>
          </div>
          
          

          <hr/>
          {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN") && (
          <>
          <Link to={`/Kanbas/Courses/${cid}/Assignments`}
            className="wd-editor-course-link text-decoration-none text-dark" >
            <button onClick={() => {
                                    if (aid === 'TEMP') {
                                      addAssignment();
                                    } else {
                                      saveAssignment({
                                          ...assignment,
                                          title: assignmentName,
                                          description: assignmentDesc,
                                          points: assignmentPts,
                                          due_date: assignmentDue,
                                          available_from: assignmentAvaf,
                                          available_date: assignmentAvaU,
                                        });
                                    }

                                    setassignmentName("New Assignment");
                                    setassignmentDesc("This is a new assignment");
                                    setassignmentPts("100");
                                    setassignmentDue("Jan 31 at 12:00am");
                                    setassignmentAvaf("Jan 10 at 12:00am");
                                    setassignmentAvaU("Jan 10 at 12:00am");

                                  }}
                    id="wd-save" className="btn btn-lg btn-danger me-1 float-end">Save</button>
          </Link>
          </>
          )}

          <Link to={`/Kanbas/Courses/${cid}/Assignments`}
            className="wd-editor-course-link text-decoration-none text-dark" >
            <button id="wd-cancel" className="btn  btn-lg btn-secondary me-1 float-end">Cancel</button>  
          </Link>
          

        </div>
      </div>
    );

}
  
  