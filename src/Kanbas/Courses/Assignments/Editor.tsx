export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><p/>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" /><p />
        <textarea id="wd-description">
        The assignment is available online Submit alink to the landing page 
        of your Webapplication running on Netlify. The landing page should include 
        the following: Your fullname and section Links to each of the lab assignments 
        Link to the Kanbas application.Links to all relevant source code repositories. 
        The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <p />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr><p/>

          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="default">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option value="PROJECTS">PROJECTS</option>
                </select><br/>
            </td>
          </tr><p/>
          
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id="default">
                    <option value="ASSIGNMENTS">Percentage</option>
                </select><br/>
            </td>
          </tr><p/>

          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission type</label>
            </td>
            <td>
                <select id="d-submission-type">
                    <option value="Online">Online</option>
                </select><p/>

                Online Entry Options<br/>
                <input type="checkbox" name="check-genre" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                <input type="checkbox" name="check-genre" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>

                <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                <input type="checkbox" name="check-genre" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr><p/>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
              Assign to<br/>
              <input id="wd-assign-to" defaultValue="Everyone" /><p />
            </td>
          </tr> 

          <tr>
            <td align="right" valign="top">
              
            </td>
            <td>
                <label htmlFor="wd-due-date"> Due </label><br/>
                <input type="date"
                    id="wd-due-date"
                    defaultValue="2024-05-13"/><br/>
            </td>
          </tr><p/>
          
          <tr>
            <td align="right" valign="top">
              
            </td>
            <td>
                <label htmlFor="wd-available-from"> Available from </label><br/>
                <input type="date"
                    id="wd-available-from"
                    defaultValue="2024-05-06"/>
            </td>
            <td>
                <label htmlFor="wd-available-until"> Until </label><br/>
                <input type="date"
                    id="wd-available-until"
                    defaultValue="2024-05-20"/><br/>
               
            </td>
        
          </tr>

          <tr>
            <td align="center" valign="top">
                <hr style={{width: '120%'}}/>
            </td>
            <td>
              <hr style={{width: '120%'}}/>
            </td>   
            <td>
              <hr/>
            </td>
            
          </tr>


          <tr>
            <td align="right" valign="top">
                
            </td>
            <td>
                
            </td>   
            <td>
                <button>Cancel</button>  <button>save</button>
            </td>
            
          </tr>
        </table>

      </div>
      
   
  );}
  
  