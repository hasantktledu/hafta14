import { Outlet } from "react-router-dom";

export function Sablon() {

    
    return (
        <>
            <header>Header alanı</header>
            <Outlet />
            <footer>Footer alanı</footer>
        </>
    )
}