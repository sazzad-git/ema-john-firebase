import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;

/*
steps fo authentication
-------------------
Step-1: initial setup
1. firebase: create project
2. create web app
3. get configeration
4. initialize firebase
5. Enable auth method

-----------------
Step-2: setup component
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register

----------------------
Step-3: set auth system
1. set up sign in method
2. setup sign out method
3. user state
4. special observer
5. return necessary methods and states from useFirebase

--------------------------------
Step 4: create auth context hook(useAuth)
1. Create a auth context 
2. Create context Provider 
3. set context provider context value
4. Use Auth Provider 
5. Create useAuth Hook

----------------------------
Step-5: create private route
1. Create Private Route
2. Set private route

-----------------------------
Step-6: Redirect after login
1. after login redirect user to their desired destination

*/