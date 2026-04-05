// src/components/Generator.jsx
import { useState } from "react";
import OutputBox from "./OutputBox";

export default function Generator() {
    const [prompt, setPrompt] = useState("");
    const [tone, setTone] = useState("Professional");
    const [length, setLength] = useState("Short");
    const [output, setOutput] = useState("");

    const handleGenerate = () => {
        // later API call
        setOutput("Generated LinkedIn post will appear here...");
    };

    return (
        <div className="flex-1 p-6">
            <textarea
                className="w-full p-3 border rounded"
                placeholder="Enter your topic..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />

            <div className="flex gap-4 mt-4">
                <select
                    className="p-2 border rounded"
                    onChange={(e) => setTone(e.target.value)}
                >
                    <option>Professional</option>
                    <option>Casual</option>
                    <option>Motivational</option>
                </select>

                <select
                    className="p-2 border rounded"
                    onChange={(e) => setLength(e.target.value)}
                >
                    <option>Short</option>
                    <option>Medium</option>
                    <option>Long</option>
                </select>
            </div>

            <button
                onClick={handleGenerate}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Generate
            </button>

            <OutputBox output={output} />
        </div>
    );
}