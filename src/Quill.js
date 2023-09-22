import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"


export const Quill = () => (
    <>
    {localStorage.getItem("ql_token") && <NavBar />}
        <ApplicationViews />
    </>
)

