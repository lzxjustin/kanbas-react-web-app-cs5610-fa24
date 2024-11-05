import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../../Database";
const initialState = {
  enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnroll: (state, { payload: enrollment }) => {
      const newEnroll: any = {
        _id: enrollment.counter,
        user: enrollment.user,
        course: enrollment.course,
      };
      state.enrollments = [...state.enrollments, newEnroll] as any;

      console.log(state.enrollments)
    },
    deleteEnroll: (state, { payload: {enrollmentId, enrollmentcourse} }) => {
      console.log(enrollmentId, enrollmentcourse)
      state.enrollments = state.enrollments.filter(
        (m: any) => !(m.user === enrollmentId && m.course === enrollmentcourse)
      );

    },
  },
});
export const { addEnroll, deleteEnroll} =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;