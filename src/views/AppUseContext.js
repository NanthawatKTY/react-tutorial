import React, {useReducer, useState} from "react";
import './AppUseContext.css';
import LogInArea from "../components/login/LogInArea";

//action = obj ที่สามารถรับข้อมูลต่าง ๆ มาได้
function reducer(state, action) {
    if (action.type === 'login') {
        const { username, password } = action.payload;
        return { username, password };
    }
    if (action.type === 'logout') {
        return null
    }

    //ทะลึ่งไม่ใช่ .type จากเงื่อนไขด้านบน จะทำดังนี้
    return state
}

const AuthContext = React.createContext();

function AppUseContext () {
    
    const [authState, authDispatch] = useReducer(reducer, null);

    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
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