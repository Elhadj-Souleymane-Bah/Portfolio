"use client"
import { useSelector } from "react-redux"
import { useRouter } from "next/navigation";
import Login from "../login/page";
import Home from "../page";

const NonProtectedRoute = ({ children }) => {
    const router = useRouter()
    const token = useSelector((state) => state.auth.token);
    return (
        token ? <Home /> : <Login />
    )
}

export default NonProtectedRoute;
