// src/components/OutputBox.jsx
export default function OutputBox({ output }) {
    return (
        <div className="mt-6 p-4 border rounded bg-gray-50 min-h-[150px]">
            {output || "Your generated post will appear here..."}
        </div>
    );
}