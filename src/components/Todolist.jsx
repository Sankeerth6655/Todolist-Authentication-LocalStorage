import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo } from "../features/todoSlice";
import { useNavigate } from "react-router-dom";

function Todolist() {
    let { user } = useSelector(state => state.userR)
    let navigate=useNavigate();
    let [isChanged,setIsChanged]=useState(false);
    let [alltodos,setAlltodos]=useState([])
    useEffect(()=>{
        if(!user.username){
            navigate('/login')
        }
    })
    useEffect(()=>{
        let users = JSON.parse(localStorage.getItem("users"))
        let index = users.findIndex(u => u.username === user.username)
        setAlltodos([...(users[index]?.todos || [])]);
        setIsChanged(false);
    },[isChanged])

    let dispatch = useDispatch();
    let [todo, setTodo] = useState("")
    return (
        <>
            <h1>Todolist</h1>
            <input type="text" placeholder="Enter todo" onChange={(e) => { setTodo(e.target.value) }}/>
            <button onClick={() => { dispatch(addTodo([todo, user.username])); setIsChanged(true) }} class="bg-success-subtle m-2">Add Todo</button>
            <ul>
                {
                   alltodos?.map((t,i) => {
                        return <li key={i} class="m-2">{t} <button class="bg-danger-subtle" onClick={()=>{dispatch(deleteTodo([i,user.username])); setIsChanged(true)}}>Delete Todo</button></li>
                    })
                }
            </ul>
        </>
    )
}
export default Todolist;