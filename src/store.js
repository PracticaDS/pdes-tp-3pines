import {combineReducers, createStore} from "redux";
import acciones from './reducers/accciones'

const reducer = combineReducers({
  acciones,
})

const store = createStore(reducer)

export default store
