import React from 'react';
import chef from '../../../assets/home/chef-service.jpg';
const ChefService = () => {
  return (
    <div>
      <div className="w-full relative">
        <img src={chef} alt="" />
        <div className="text-black bg-white rounded-lg  text-center w-[70%] h-[50%] mx-auto absolute top-32 left-40 flex items-center justify-center">
          <div>
            <h3 className="text-3xl font-semibold uppercase">Bistro Boss</h3>
            <p className="text-xl ">
              lorem ipsum dolor sit amet, consectetur adip
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefService;
