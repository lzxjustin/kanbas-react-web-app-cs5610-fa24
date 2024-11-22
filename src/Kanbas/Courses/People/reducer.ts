import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  enrollments: [],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnroll: (state, action) => {
      state.enrollments = action.payload;
    },

    addEnroll: (state, { payload: enrollment }) => {
      const newEnroll: any = {
        _id: enrollment.counter,
        user: enrollment.user,
        course: enrollment.course,
      };
      state.enrollments = [...state.enrollments, newEnroll] as any;
    },
    deleteEnroll: (state, { payload: {enrollmentId, enrollmentcourse} }) => {
      state.enrollments = state.enrollments.filter(
        (m: any) => !(m.user === enrollmentId && m.course === enrollmentcourse)
      );

    },
  },
});
export const { addEnroll, deleteEnroll, setEnroll} =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;