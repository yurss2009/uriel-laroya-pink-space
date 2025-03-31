
import { Heart } from "lucide-react";

const KittyFooter = () => {
  return (
    <footer className="bg-white/90 backdrop-blur-sm border-t border-kitty-pink/30 p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-600 flex items-center justify-center">
          Made with <Heart size={16} className="text-kitty-pink-dark mx-1 animate-pulse" /> by Uriel Laroya &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default KittyFooter;
