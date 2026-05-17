import React from "react";
import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3">
      <div className="p-6">
        <h3 className="mb-7 text-6xl font-bold">
          Prospective <br /> <span>customer</span> <br /> Segmentation
        </h3>
        <p className="text-xl font-medium text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque placeat
          dicta, facere pariatur aut cumque sapiente odio soluta velit maxime.
        </p>
      </div>
      <div>
        <ArrowUpRight size={52} />
      </div>
    </div>
  );
};

export default LeftContent;
