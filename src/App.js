import "./App.css"
import axios from "axios"
import PlantsContext from "./utils/PlantsContext"
import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import SideBar from "./components/SideBar"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Posts from "./pages/Posts"
import Login from "./pages/Login"
import Categorys from "./pages/Categorys"
import Users from "./pages/Users"
function App() {
  //use state
  const [posts, setPosts] = useState([])
  const [categorys, setCategorys] = useState([])
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const getPosts = async () => {
    const response = await axios.get("http://localhost:5000/api/posts")
    setPosts(response.data)
  }

  const getCategorys = async () => {
    const response = await axios.get("http://localhost:5000/api/categorys")
    setCategorys(response.data)
  }

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/users")
    setUsers(response.data)
  }

  useEffect(() => {
    getPosts()
    getCategorys()
    getUsers()
  }, [])

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login/admin", adminBody)
      localStorage.tokenDashboardPlants = response.data
      toast.success("login success")
      navigate("/posts")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deletePost = async postId => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardPlants,
        },
      })
      toast.success("post deleted")
      getPosts()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("tokenDashboardPlants")
  }

  const addAdmin = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
        userName: form.elements.userName.value,
        nickName: form.elements.nickName.value,
        location: form.elements.location.value,
      }
      await axios.post(`http://localhost:5000/api/auth/add-admin`, adminBody, {
        headers: {
          Authorization: localStorage.tokenDashboardPlants,
        },
      })
      getUsers()
      toast.success("add admin success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteUser = async userId => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/users/${userId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardPlants,
        },
      })
      toast.success("user deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addCategory = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const categoryBody = {
        name: form.elements.name.value,
      }
      await axios.post(`http://localhost:5000/api/categorys`, categoryBody, {
        headers: {
          Authorization: localStorage.tokenDashboardPlants,
        },
      })
      getCategorys()
      toast.success("add category success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteCategory = async categoryeId => {
    try {
      await axios.delete(`http://localhost:5000/api/categorys/${categoryeId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardPlants,
        },
      })
      toast.success("category deleted")
      getCategorys()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const store = {
    posts,
    deletePost,
    deleteUser,
    login,
    categorys,
    users,
    logout,
    addAdmin,
    addCategory,
    deleteCategory,
  }
  return (
    <PlantsContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <SideBar />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/category" element={<Categorys />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Box>
      </Box>
    </PlantsContext.Provider>
  )
}

export default App
