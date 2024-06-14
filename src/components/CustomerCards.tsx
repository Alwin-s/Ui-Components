import React from "react";
import { cva } from "class-variance-authority";

type CustomerCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
  active?: boolean;
  onClick?: () => void;
};

const customerCardVariants = cva(" rounded-xl border cursor-pointer", {
  variants: {
    active: {
      true: "bg-yellow-100 border-yellow-400 border-2",
      false: "bg-white border-gray-300",
    },
  },
  defaultVariants: {
    active: false,
  },
});

const CustomerCard: React.FC<CustomerCardProps> = ({ icon, title, description, number, active = false, onClick }) => {
  return (
    <div className={`${customerCardVariants({ active })} w-[340px] h-[70px] pl-4 pr-4`} onClick={onClick}>
      <div className="flex items-center justify-between w-full h-full">
        <div className="flex items-center">
          <div className="bg-green-200 rounded-full w-[50px] h-[50px] flex items-center justify-center">
            {icon}
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-gray-500 text-[12px]">{description}</p>
          </div>
        </div>
        <div className="text-2xl font-bold">{number}</div>
      </div>
    </div>
  );
};

export default CustomerCard;