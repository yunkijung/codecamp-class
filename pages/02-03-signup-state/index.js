import { useState } from "react";

export default function signupStatePage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");

    function onChangeEmail(event){
        console.log(event);
        console.log(event.target); //tag
        console.log(event.target.value); //value
        setEmail(event.target.value);
    }

    function onChangePassword(event){
        console.log(event.target); //tag
        console.log(event.target.value); //value
        setPassword(event.target.value);
    }

    function onClickSignUp(){
        // checking values
        console.log(email);
        console.log(password);

        // validation checker
        if(email.includes("@") === false){
            //alert("Wrong format");
            //document.getElementById("error").innerText = "Wrong format";
            setEmailError("Wrong format");
        } else{
            //after alert, call API.
            alert("successed");
            
        }
    }

    return (
        <>
            Email: <input type="text" value={email} onChange={onChangeEmail} />
            <div>{emailError}</div>
            Password: <input type="password" value={password} onChange={onChangePassword} />
            <button onClick={onClickSignUp}>Sign Up</button>
        </>
    )
}