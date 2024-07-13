import React, {useState} from 'react';

// here I added state variables in the function
function LoginForm(){
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    
    return (
            <div className="login-container">
                <div className='form'>
                    <form> 
                        <h3>Log in</h3>
                        <input type="text" placeholder="Username"  onChange={(e) => setUserName(e.target.value)} /> <br></br><br></br>
                        <input type="password"  placeholder="Password"  onChange={(e) => setPassword(e.target.value)} /> <br></br><br></br>
                        <input type="submit" value="Log in" />
                    </form>
                </div>
            </div>
        )
    
}

export default LoginForm;