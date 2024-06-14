import React from "react";
import { cva } from "class-variance-authority";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
  active?: boolean;
  onClick?: () => void;
};

const cardVariants = cva("p-4 rounded-2xl border cursor-pointer", {
  variants: {
    active: {
      true: "bg-yellow-100 border-yellow-500 border-2",
      false: "bg-white border-gray-300", 
    },
  },
  defaultVariants: {
    active: false,
  },
});

const Card: React.FC<CardProps> = ({ icon, title, description, number, active = false, onClick }) => {
  return (
    <div className={cardVariants({ active })} onClick={onClick}>
      <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center mb-4" style={{ background: active ? 'white' : 'linear-gradient(to right,#fccebd,#c8ffc8)' }}>
        {icon}
      </div>

      <div className="w-[160px]">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-500 text-[12px]">{description}</p>
        <div className="text-xl font-bold mt-2">{number}</div>
      </div>
    </div>
  );
};

export default Card;
