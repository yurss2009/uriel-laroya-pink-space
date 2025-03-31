
import { ReactNode } from "react";

interface KittyCardProps {
  children: ReactNode;
  className?: string;
}

const KittyCard = ({ children, className = "" }: KittyCardProps) => {
  return (
    <div className={`kitty-card ${className}`}>
      {children}
    </div>
  );
};

export default KittyCard;
