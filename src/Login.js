import React, {useState} from 'react'

function Login(){
    const [user, setUser]=useState("");

    const [password, setPassword]=useState("");
    let [userErr, setUserErr]=useState(false);
    let [passwordErr, setPasswordErr]=useState(false);

    function loginHandle(e){
        e.preventDefault();
    }
    function userHandler(e){
        const itemLength=e.target.value.length;
        if(itemLength<3){
            setUserErr(true);
        }
        else{
            setUserErr(false);
        }
        setUser(e.target.value);
    }

    function passwordHandler(e){
        const passwordLength=e.target.value.length;
        if(passwordLength<3){
            setPasswordErr(true);
        }
        else{
            setPasswordErr(false);
        }
        setPassword(e.target.value);
    }
    return (<div>
        <form onSubmit={loginHandle}>

        <h1>Login</h1>
        <input type="text" placeholder='Enter User Id' onChange={userHandler}/><br/>
        {userErr?<span>User not valid</span>:""}
        <br/><br/>
        <input type="password" placeholder='Enter User Password' onChange={passwordHandler} />
        {passwordErr?<span>Password not valid</span>:""}
        <br/><br/>
        <button type='submit'>Login</button>
        </form>
            </div>);
}

export default Login;