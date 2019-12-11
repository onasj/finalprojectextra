import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
	apiKey: "AIzaSyC_nimabJKlXUdjcWECVJEFzUHhc-xtxuA",
	authDomain: "finalprojecttest-5fa44.firebaseapp.com",
	databaseURL: "https://finalprojecttest-5fa44.firebaseio.com",
	projectId: "finalprojecttest-5fa44",
	storageBucket: "finalprojecttest-5fa44.appspot.com",
	messagingSenderId: "116252896010",
	appId: "1:116252896010:web:fae32f76264c7db6cc28f3",
	measurementId: "G-C5TPRS15Z9"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 