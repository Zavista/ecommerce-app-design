import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import HomeProducts from "../components/HomeProducts";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
      <HomeProducts></HomeProducts>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
