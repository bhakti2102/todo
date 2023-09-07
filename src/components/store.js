import { createStore , applyMiddleware} from "redux";
import rootReducer from './rootReducer'
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import rootEpic from "./rootEpics";

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer , applyMiddleware(epicMiddleware))

epicMiddleware.run(combineEpics(rootEpic));

export default store
