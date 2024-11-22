import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Account from "./Account";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";

export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>([]);
    const [all_courses, setAllCourses] = useState<any[]>([]);
    const [course, setCourse] = useState<any>({
      _id: "1234", name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    });
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const fetchCourses = async () => {
      let courses = [];
      try {
        courses = await userClient.findMyCourses();
      } catch (error) {
        console.error(error);
      }
      setCourses(courses);
    };

    const fetchAllCourses = async () => {
      let all_courses = [];
      try {
        all_courses = await courseClient.fetchAllCourses();
      } catch (error) {
        console.error(error);
      }
      setAllCourses(all_courses);
    };
    
    useEffect(() => {
      fetchCourses();
      fetchAllCourses();
    }, [currentUser]);

    const addNewCourse = async () => {
      const newCourse = await userClient.createCourse(course);
      setCourses([ ...courses, newCourse ]);
    };
  
    const deleteCourse = async (courseId: string) => {
      const status = await courseClient.deleteCourse(courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
    };
  
    const updateCourse = async () => {
      await courseClient.updateCourse(course);
      setCourses(courses.map((c) => {
          if (c._id === course._id) { return course; }
          else { return c; }
      })
    );};
  

    return (
      <Session>
      <div id="wd-kanbas">
              <KanbasNavigation />
              <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Account" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="Dashboard"      element={<ProtectedRoute><Dashboard
                          courses={courses}
                          all_courses={all_courses}
                          course={course}
                          setCourse={setCourse}
                          addNewCourse={addNewCourse}
                          deleteCourse={deleteCourse}
                          updateCourse={updateCourse}/></ProtectedRoute> } />
                    <Route path="Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute> } />
                    <Route path="/Calendar" element={<h1>Calendar</h1>} />
                    <Route path="/Inbox" element={<h1>Inbox</h1>} />
                </Routes>
              </div>
      </div>
      </Session>
  );}
  