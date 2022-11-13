
import React, {useState, useEffect} from "react"
import {auth} from "../../firebase";
import {toast} from "react-toastify";


const RegisterComplete = ({history}) =>{
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

useEffect(()=> {
setEmail(window.localStorage.getItem("emailForRegistration"));

//console.log(window.location.href);
//console.log(window.localStorage.getItem("emailForRegistration"));

}, []);


//props.history

const handleSubmit = async(e) =>{
 e.preventDefault();
 //validation
 if(!email || !password){
    toast.error("Email and Password is required");
    return;
 }

 if(password.length<6){
    toast.error("Password must be 6 character long");
    return;
 }

try{
const result = await auth.signInWithEmailLink(
    email,
    window.location.href
     );
//console.log("Result", result);
if(result.user.emailVerified){
    
    //remove user email from local storage
     window.localStorage.removeItem("emailForRegistration");

    //get user id token
    let user = auth.currentUser
    await user.updatePassword(password);
    const idTokenResult = await user.getIdTokenResult()

    //redux store
    console.log("user", user, "idTokenResult", idTokenResult);

    //redirect
    //history.push("/")
}

}catch(error){
    console.log(error);
    toast.error(error.message);
}

};

const completeRegisterForm = () => <form onSubmit={handleSubmit}>
<input 
type="email"
 className="form-control" 
 value={email} 
 disabled
 
 />
 <input 
type="password"
 className="form-control" 
 value={password} 
 onChange ={(e) => setPassword(e.target.value)}
 placeHolder="Password"
 autoFocus
 />

<br/>
 <button type="submit" className="btn-btn-raised">
   Complete Registration 
 </button>
</form>


    return (
        <div className="container p-5">
           <div className="row">
            <div className="col-md-6 offset-md-3">
                <h4>Register Complete</h4>
                
                {completeRegisterForm()}
                </div>
           </div>
        </div>
    );
};

export default RegisterComplete;