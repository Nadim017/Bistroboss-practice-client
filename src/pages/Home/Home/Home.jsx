import Banner from '../Banner/Banner';
import CallUs from '../CallUs/CallUs';
import Category from '../Category/Category';
import ChefService from '../ChefService/ChefService';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Featured></Featured>
    </div>
  );
};

export default Home;
