
import { ReactNode } from "react";

interface KittyHeadingProps {
  children: ReactNode;
  className?: string;
}

const KittyHeading = ({ children, className = "" }: KittyHeadingProps) => {
  return (
    <div className={`relative mb-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-pink-800 inline-block relative z-10">
        {children}
      </h2>
      <div className="absolute -bottom-2 left-0 w-full h-3 bg-kitty-pink/50 -z-10 rounded-full"></div>
      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-kitty-pink rounded-full hidden md:block"></div>
      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-kitty-pink rounded-full hidden md:block"></div>
    </div>
  );
};

export default KittyHeading;
