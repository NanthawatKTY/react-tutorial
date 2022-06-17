import { useContext } from "react";
import { AuthContext } from "../../views/AppUseContext";


const fakeUser = { username: "admin", password: "admin" };

function LoginForm() {

    const {auth, setAuth} = useContext(AuthContext);

    function loginSubmit(event) {
        event.preventDefault();
        setAuth(fakeUser);
    }

    function logoutSubmit() {
        setAuth(null)
    }

    if (!!auth) {
        return (
            <div>
                <p>Auth username = {auth.username}</p>
                <p>Auth password = {auth.password}</p>
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