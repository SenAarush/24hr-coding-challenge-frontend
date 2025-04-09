import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gray-950 px-4"
        >
            <div className="bg-gray-900 shadow-lg rounded-lg p-10 max-w-md text-center">
                <h1 className="text-5xl text-white font-bold mb-4">404</h1>
                <p className="text-slate-400 text-lg mb-6">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <Link
                    to="/"
                    className="border-2 border-purple-500 text-purple-500 px-6 py-2 rounded-full hover:bg-purple-500 hover:text-white transition duration-300"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
