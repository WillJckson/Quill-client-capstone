import { Route, Routes } from "react-router-dom";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { Authorized } from "./Authorized";
import QuotesList from "../quotes/QuotesList.js";
import QuoteDetail from "../quotes/QuoteDetail.js";
import Profile from "../profile/Profile";
import EditQuote from "../quotes/EditQuote";
import CreateQuoteForm from "../quotes/CreateQuote";
import { HomePage } from "../components/home/HomePage.js";
// import { SearchBar } from "../components/search/SearchBar.js"
export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<Authorized />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/quotes" element={<QuotesList />} />
                    <Route path="/quotes/:id" element={<QuoteDetail />} />
                    <Route path="/profile" element={<Profile />} /> 
                    <Route path="/quotes/update/:id" element={<EditQuote />} />
                    <Route path="/quotes/create" element={<CreateQuoteForm />} />
                </Route>
            </Routes>
        </>
    );
};