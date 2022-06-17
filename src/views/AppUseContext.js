import React, {useState} from "react";
import './AppUseContext.css';
import LogInArea from "../components/login/LogInArea";

const AuthContext = React.createContext();

function AppUseContext () {
    const [auth, setAuth] = useState(null);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            <section className="app-section">
                <div className="app-container">
                    <LogInArea />
                </div>
            </section>
        </AuthContext.Provider>
    )
}

export { AuthContext };
export default AppUseContext;