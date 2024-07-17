import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";

const personalHomepageSlice = createSlice({
  name: "personalHomepage",
  initialState: {
    repositories: null,
    status: "initial",
  },
  reducers: {
    fetchRepositories: () => ({
      status: "loading",
      repositories: null,
    }),
    fetchRepositoriesSuccess: (state, { payload: repositories }) => ({
      status: "success",
      repositories,
    }),
    fetchRepositoriesError: () => ({
      status: "error",
      repositories: null,
    }),
  },
});

export const {
  fetchRepositories,
  fetchRepositoriesError,
  fetchRepositoriesSuccess,
} = personalHomepageSlice.actions;

const selectPersonalHomepageState = (state: RootState) =>
  state.personalHomepage;

export const selectRepositories = (state: RootState) =>
  selectPersonalHomepageState(state).repositories;
export const selectRepositoriesStatus = (state: RootState) =>
  selectPersonalHomepageState(state).status;

export default personalHomepageSlice.reducer;
