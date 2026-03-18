import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/userSlice";

function Navbar() {
    let {user}=useSelector(state=>state.userR);
    let dispatch=useDispatch();
    let navigate=useNavigate();
    useEffect(()=>{
        if(user.username){
            navigate('/todolist')
        }
    },[user])
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary text-white">
                <Link class="navbar-brand p-2" to="/">TodoList</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-around" id="navbarNavAltMarkup">
                    {
                        user.username && (
                            <>
                                <b>Welcome {user.username} !!!</b>
                                <button class="bg-danger text-white" onClick={()=>{dispatch(logout()); navigate('/login')}}>Logout</button>
                            </>
                        )
                    }
                    {
                        !user.username && (
                            <>
                                <Link class="nav-item nav-link active" to="/login">Login</Link>
                                <Link class="nav-item nav-link" to="/signup">Sign up</Link>
                            </>
                        )
                    }
                </div>
            </nav>
        </>
    )
}
export default Navbar;