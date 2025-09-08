import { Outlet } from "react-router";

function App() {
    return (
        <main id="main">
            <div id="sidebar"></div>
            <div id="content">
                <Outlet />
            </div>
        </main>
    );
}

export default App;
