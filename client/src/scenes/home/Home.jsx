import MainCarousel from './MainCarousel';
import ShoppingList from './ShopingList';
import Subscribe from './Subscribe';

const Home = () => {
  return (
    <div className="home">
      <MainCarousel />
      <ShoppingList />
      <Subscribe />
    </div>
  );
};

export default Home;
