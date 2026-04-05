// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">TextAI ✍️</h1>
            <p className="mt-2 text-gray-600">
                Generate LinkedIn posts in seconds
            </p>

            <button
                onClick={() => navigate("/login")}
                className="mt-6 bg-blue-500 text-white px-6 py-2 rounded"
            >
                Get Started
            </button>
        </div>
    );
}