import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Slider></Slider>
        <Products></Products>
        <Categories></Categories>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </div>
  )
}

export default Home