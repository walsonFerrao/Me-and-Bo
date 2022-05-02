import { createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./services/reducer";




export const store=createStore(reducer,applyMiddleware(thunk))

