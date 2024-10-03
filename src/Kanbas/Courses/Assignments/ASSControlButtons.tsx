import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";


export default function AssControlButtons() {
  return (
    <div className="float-end">
        <span className="badge rounded-pill custom-pill">40% of Total</span>
      <FaPlus className="ms-2"/>
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
