import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import { RiForbidLine } from "react-icons/ri";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap me-4">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module</button>
       
      {/* I debugged for a long time and my dropdown menu still dont work
      Therefore I changed to the react-bootstrap and then it works
      The pattern in the web is the same as the one in the lab, thanks. */}
      
      <Dropdown as={ButtonGroup} className="float-end">
        <Dropdown.Toggle id="wd-publish-all-btn" className="btn btn-lg btn-secondary">
          <GreenCheckmark />
          Publish All
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-all-modules-and-items-btn" href="#">
            <GreenCheckmark />
            Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-modules-only-button" href="#">
            <GreenCheckmark />
            Publish modules only
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-all-modules-and-items" href="#">
            <RiForbidLine />
            Unpublish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-modules-only" href="#">
            <RiForbidLine />
            Unpublish modules only
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <button id="wd-view-progress" className="btn btn-lg btn-secondary me-1 float-end">
        View Progress</button>
        
      <button id="wd-collapse-all" className="btn btn-lg btn-secondary me-1 float-end">
        Collapse All</button>
    </div>
);}

