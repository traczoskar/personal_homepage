import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import personalHomepageReducer from "../features/PersonalHomepage/personalHomepageSlice";
import themeReducer from "../common/ThemeSwitch/themeSlice";
import saga from "./saga";

export type RootState = ReturnType<typeof store.getState>;

const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();

const store = configureStore({
  reducer: {
    personalHomepage: personalHomepageReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;
sagaMiddleware.run(saga);
