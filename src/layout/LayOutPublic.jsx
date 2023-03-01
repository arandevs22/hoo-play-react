import { Outlet } from "react-router-dom"
import { BottomNav } from "../components/BottomNav";


const LayOutPublic = () => {
    return (
        <>
            <main>
                <Outlet />
                <BottomNav />
            </main>
        </>
    )
}

export default LayOutPublic;