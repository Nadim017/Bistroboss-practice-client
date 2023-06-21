import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured_item text-white py-8 mt-10">
      <SectionTitle
        heading={'Featured Item'}
        subHeading={'check it out'}
      ></SectionTitle>

      <div className="md:flex justify-center  items-center pt-12 pb-20 py-20 px-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-8">
          <p>Aug 20,2023</p>
          <p className="uppercase">Where i can get some ?</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            nostrum provident illum, suscipit animi veritatis inventore dicta
            culpa minima sint maxime vitae. Dicta quia quasi beatae, eum tempora
            doloribus minus error, numquam repudiandae alias illo officiis natus
            dolorem blanditiis!
          </p>
          <button className="btn btn-outline text-yellow-300 border-bottom">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
