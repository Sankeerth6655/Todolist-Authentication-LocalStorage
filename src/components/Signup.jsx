import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Yup from 'yup'
import { signup } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

function Signup() {
    let dispatch=useDispatch();
    let navigate=useNavigate();
    let signupForm = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required()
                .test(
                    "Username Validity",
                    "Username already exists..!!!",
                    function (value) {
                        let prevDetails = JSON.parse(localStorage.getItem("users"));
                        if (prevDetails) {
                            let exists = prevDetails.some((user) => user.username === value)
                            if (exists) return false;
                            return true;
                        }
                        else return true;
                    }
                )
        }),
        onSubmit: (details) => {
           dispatch(signup(details))
           navigate('/login')
        }
    })
    return (
        <>
            <h1>Signup Form</h1>
            <form onSubmit={signupForm.handleSubmit}>
                <input type="text" {...signupForm.getFieldProps("username")} placeholder="Enter Username" />
                <br />
                {
                    signupForm.touched.username && signupForm.errors.username &&
                    <>
                        <p class="text-danger">{signupForm.errors.username}</p>
                    </>
                }
                <input type="password" {...signupForm.getFieldProps("password")} placeholder="Enter Password" />
                <br />
                <button disabled={!(signupForm.isValid && signupForm.dirty)}>SignUp</button>

            </form>
        </>
    )
}
export default Signup;