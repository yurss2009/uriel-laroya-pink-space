
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import KittyCard from "../components/KittyCard";
import KittyBow from "../components/KittyBow";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <div className={`max-w-3xl mx-auto text-center transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="w-40 h-40 bg-white rounded-full border-4 border-kitty-pink flex items-center justify-center mx-auto kawaii-shadow animate-bounce-slow">
              <div className="text-6xl font-comic font-bold text-pink-800">UL</div>
            </div>
            <KittyBow className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-10" />
          </div>
          
          <KittyCard className="mb-8 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6">
              Welcome to Uriel&apos;s World!
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Hi there! I&apos;m <span className="font-bold text-pink-800">Uriel Laroya</span>, a Grade 10 student at San Beda College Alabang.
              Welcome to my kawaii little corner of the internet!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => navigate("/profile")}
                className="kitty-button"
              >
                About Me
              </button>
              <button 
                onClick={() => navigate("/hobbies")}
                className="kitty-button"
              >
                My Hobbies
              </button>
              <button 
                onClick={() => navigate("/skills")}
                className="kitty-button"
              >
                My Skills
              </button>
              <button 
                onClick={() => navigate("/contact")}
                className="kitty-button"
              >
                Get In Touch
              </button>
            </div>
          </KittyCard>
          
          <div className="text-sm text-gray-500 italic animate-pulse">
            (Psst! Click the buttons to learn more about me!)
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
