import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import QuotesView from "../quotes/QuotesView";

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
          {/* Add Routes here */}
          <Route path="/quotes" element={<QuotesView />} /> {/* Add this line */}
        </Route>
        </Routes>
    </>
}
