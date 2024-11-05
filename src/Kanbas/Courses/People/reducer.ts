import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database";
const initialState = {
  modules: modules,
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addEnroll: (state, { payload: enroll }) => {
      const newEnroll: any = {
        _id: new Date().getTime().toString(),
        lessons: [],
        name: enroll.name,
        course: enroll.course,
      };
      state.modules = [...state.modules, newEnroll] as any;

      console.log(state.modules)
    },
    deleteEnroll: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter(
        (m: any) => m._id !== moduleId);
    },
  },
});
export const { addEnroll, deleteEnroll} =
  modulesSlice.actions;
export default modulesSlice.reducer;