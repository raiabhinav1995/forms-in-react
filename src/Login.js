import React, {useState} from 'react'

function Login(){
    const [user, setUser]=useState("");

    const [password, setPassword]=useState("");
    let [userErr, setUserErr]=useState(false);
    function loginHandle(e){
        e.preventDefault();
    }
    function userHandler(e){
        let itemLength=e.target.value.length;
        if(itemLength<3){
            setUserErr(true);
        }
        else{
            setUserErr(false);
        }
    }
    function passwordHandler(e){
        console.log(e.target.value);
    }
    return (<div>
        <form onSubmit={loginHandle}>

        <h1>Login</h1>
        <input type="text" placeholder='Enter User Id' onChange={userHandler}/><br/>
        {userErr?<span>User not valid</span>:""}
        <br/><br/>
        <input type="password" placeholder='Enter User Password' onChange={passwordHandler} />
        <br/><br/>
        <button type='submit'>Login</button>
        </form>
            </div>);
}

export default Login;