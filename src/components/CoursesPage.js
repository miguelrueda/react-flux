import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import {Link} from "react-router-dom";
import courseStore from "../stores/courseStore";
import { loadCourses } from "../actions/courseActions";

function CoursesPage() {

    const [courses, setCourses] = useState(courseStore.getCourses());

    useEffect(() => {
        courseStore.addChangeListener(onChange);
        if (courseStore.getCourses().length === 0) {
            loadCourses();
        }
        // unmount
        return () => {
            courseStore.removeChangeListener(onChange);
        }
    }, []);

    function onChange() {
        setCourses(courseStore.getCourses());
    }

    return <>
        <h2>Courses</h2>
        <Link className="btn btn-primary" to="/course">Add Course</Link>
        <CourseList courses={courses} />
    </>
}

export default CoursesPage;