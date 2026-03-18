import { StrictMode } from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import Todolist from './components/Todolist.jsx'

let router=createBrowserRouter([{
  path:'/',
  element:<App></App>,
  children:[
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/signup',
      element:<Signup></Signup>
    },
    {
      path:'/todolist',
      element:<Todolist></Todolist>
    },
  ],
},])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}> <App /></RouterProvider>
  </Provider>
  
)
