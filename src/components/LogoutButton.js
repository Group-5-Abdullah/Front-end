import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
    const { logout ,isAuthenticated} = useAuth0();

    if(!isAuthenticated){
        localStorage.removeItem('user_email')
    }
    return (
        <button onClick={()=> logout({ returnTo: window.location.origin})}>Log out</button>
    )
};

export default LogoutButton;