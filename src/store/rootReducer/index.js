import authReducer from '../authReducer'
import postReducer from '../postReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
	auth: authReducer,
	post: postReducer,
	firestore: firestoreReducer
});

export default rootReducer

// the key name will be the data property on the state object