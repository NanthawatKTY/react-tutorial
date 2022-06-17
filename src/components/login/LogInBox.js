import { useContext } from "react";
import { AuthContext } from "../../views/AppUseContext";


const fakeUser = { username: "admin", password: "admin123" };

function LoginForm() {

    const {authState, authDispatch} = useContext(AuthContext);
    
    function loginSubmit(event) {
        event.preventDefault();
        authDispatch({ type: 'login', payload: fakeUser }); //Send action = type: login to reducer in AppUseContext
    }

    function logoutSubmit() {
        authDispatch({ type: "logout" }); //Send action = type: logout to reducer in AppUseContext
    }

    if (!!authState) {
        return (
            <div>
                <p>Auth username = {authState.username}</p>
                <p>Auth password = {authState.password}</p>
                <p><button onClick={logoutSubmit}>Log out</button></p>
            </div>
        )
    } 

    return(
        <form onSubmit={loginSubmit}>
            <h3>โปรดเข้าสู่ระบบ</h3>
            <p><input type="text" placeholder="Username" /></p>
            <p><input type="password" placeholder="Password" /></p>
            <p><button type="submit">Log in</button></p>
        </form>
    )
}

export default LoginForm;