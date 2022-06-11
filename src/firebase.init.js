import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCXxgZerf1LOD7V9JMacKkRZq4XeujMMf4",
    authDomain: "luxury-living-b54f1.firebaseapp.com",
    projectId: "luxury-living-b54f1",
    storageBucket: "luxury-living-b54f1.appspot.com",
    messagingSenderId: "500239200085",
    appId: "1:500239200085:web:4b219233ab26424ef789dc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;