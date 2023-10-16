import { createStore } from 'redux';
import contactReducer from './contactReducer'; // Import your contactReducer

const store = createStore(contactReducer);

export default store;
