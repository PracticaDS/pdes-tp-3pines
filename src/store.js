import {combineReducers, createStore} from "redux";
import acciones from './reducers/accciones'

const initialState = {
}

const reducer = combineReducers({
  acciones,
})

const store = createStore(reducer, initialState)

export default store
