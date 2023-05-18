
import {useContext, useEffect} from "react";
import { useNavigate} from "react-router";

// lil fraggy
import {Fragment} from "react";

import UserContext from "../contexts/UserContext";

export default function Logout(){
    const context = useContext(UserContext);
    const navigate = useNavigate();

    // useEffect to logout
    // component did mount to fo when logout
    useEffect(() => {
        const logout = async () => {
            const response = await context.userLogout();
            if (response === 'User logged out'){
                // clear the tokens from local storage
                localStorage.removeItem("refreshToken");
                localStorage.removeItem("accessToken");
            }
            // after logout navigate to the login page
            navigate("/login");
        }
        logout();
    }, [context, navigate]);

    // function to remove from local storage
    

    return (
        <Fragment>

        </Fragment>
    )
}