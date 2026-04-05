// src/pages/Dashboard.jsx
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Generator from "../components/Generator";

export default function Dashboard() {
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <Generator />
            </div>
        </div>
    );
}