import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../shared/MenuItem/MenuItem';

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('/menu.json')
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category == 'popular');
        setMenu(popularItem);
      });
  }, []);
  console.log(menu);

  return (
    <section className="mb-12">
      <SectionTitle
        heading={'From our menu'}
        subHeading={'check it out'}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
