
const KittyBow = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="w-16 h-8 bg-kitty-pink-dark rounded-full rotate-[35deg] absolute -left-2"></div>
      <div className="w-16 h-8 bg-kitty-pink-dark rounded-full rotate-[-35deg] absolute -right-2"></div>
      <div className="w-6 h-6 bg-kitty-pink-dark rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
    </div>
  );
};

export default KittyBow;
