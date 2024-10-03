import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';


export default function AssignmentEditor() {
    
  
    const [dueDate, setDueDate] = useState<Date | null>(new Date("2024-05-13T23:59"));
    const [availableFrom, setAvailableFrom] = useState<Date | null>(new Date("2024-05-06T12:00"));
    const [availableUntil, setAvailableUntil] = useState<Date | null>(new Date("2024-05-27T12:00"));

    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><p/>
        <input id="wd-name" defaultValue="A1" className="form-control" /><p />
        <div className="border p-3 S" >
        
          <p>The assignment is <span className="text-danger">available online</span></p>
          <p>Submit alink to the landing page of your Webapplication running on Netlify.</p>
          <p>The landing page should include the following:</p>
          <ul>
            <li>Your fullname and section</li> 
            <li>Links to each of the lab assignments </li>
            <li>Link to the Kanbas application</li>
            <li>Links to all relevant source code repositories</li>
          </ul>

          The Kanbas application should include a link to navigate back to the landing page.
        
        </div><br/>


        <div id="wd-css-responsive-forms-1">

          <div className="mb-3 row">
              <label htmlFor="wd-points" className="col-sm-4 col-form-label d-flex justify-content-end">Points</label>
              <div className="col-sm-8">
                <input id="wd-points" value={100} className="form-control"/>
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
                  onChange={(date: Date | null) => setDueDate(date)}
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
                  <label htmlFor="wd-available-from"><strong>Available from</strong></label>
                    <DatePicker
                      selected={availableFrom}
                      onChange={(date: Date | null) => setDueDate(date)}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      dateFormat="MMMM d, yyyy, h:mm aa"
                      className="form-control mb-3 p-2"
                      id="wd-available-from"
                    />
                </div>

                <div className="col-6">
                  <label htmlFor="wd-available-until"><strong>Until</strong></label>
                  <DatePicker
                    selected={availableUntil}
                    onChange={(date: Date | null) => setDueDate(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy, h:mm aa"
                    className="form-control mb-3 p-2"
                    id="wd-available-until"
                  />
                 
                </div>
              </div>
                
            </div>
          </div>

          <hr/>
          <button id="wd-save" className="btn btn-lg btn-danger me-1 float-end">save</button>
          <button id="wd-cancel" className="btn  btn-lg btn-secondary me-1 float-end">Cancel</button>  
        
        </div>
      </div>

);}
  
  