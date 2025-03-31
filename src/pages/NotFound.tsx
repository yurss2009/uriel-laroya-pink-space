
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KittyCard from "../components/KittyCard";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-kitty-gray p-4">
      <KittyCard className="text-center max-w-md">
        <div className="text-7xl mb-6 animate-bounce-slow">😿</div>
        <h1 className="text-3xl font-bold text-pink-800 mb-4">Oops! Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Oh no! The page you're looking for seems to have wandered off.
        </p>
        <button 
          onClick={() => navigate("/")}
          className="kitty-button"
        >
          Return to Home
        </button>
      </KittyCard>
    </div>
  );
};

export default NotFound;
