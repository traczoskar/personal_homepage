import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import personalHomepageReducer from "../features/PersonalHomepage/personalHomepageSlice";
import themeReducer from "../common/ThemeSwitch/themeSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    personalHomepage: personalHomepageReducer,
    theme: themeReducer,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
