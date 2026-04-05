// src/components/Sidebar.jsx
export default function Sidebar() {
    return (
        <div className="w-60 bg-gray-100 p-4">
            <ul className="space-y-4">
                <li className="cursor-pointer font-medium">New Post</li>
                <li className="cursor-pointer">History</li>
            </ul>
        </div>
    );
}