import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Store/Sagas/root-saga";
import reducer from "../Store/Reducers";
import { applyMiddleware, createStore } from "redux";
import { enableScreens } from "react-native-screens";
import ApplicationStack from "./AppStackNavigator";
import {navigationRef} from "./RootNavigation";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

enableScreens(true);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <ApplicationStack />
      </NavigationContainer>
    </Provider>
  );
}

sagaMiddleware.run(rootSaga);

export default App;
