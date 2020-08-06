import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

// Action creator
export function saveCourse(course) {
    return courseApi.saveCourse(course).then(savedCourse => {
        // Action
        dispatcher.dispatch({
            actionType: course.id ? actionTypes.UPDATE_COURSE : actionTypes.CREATE_COURSE,
            course: savedCourse
        });
    });
}

export function loadCourses() {
    return courseApi.getCourses().then(courses => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_COURSES,
            courses: courses
        });
    });
}

export function deleteCourse(id) {
    return courseApi.deleteCourse(id).then(() => {
        dispatcher.dispatch({
            actionType: actionTypes.DELETE_COURSE,
            id: id
        });
    });
}