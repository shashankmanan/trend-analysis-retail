import "../styles/Home.css"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function Home() {
  return (
    <div className="maindiv">
    <div class="container-fluid">
      <div class="division division1">
          <h2>Trending In Area</h2>
          <a href="/#/trends"><button><TrendingUpIcon fontSize="large"/></button></a>
          <p>Explore all the popular trends in your area now!</p>
      </div>

      <div class="division division2">
          <h2>Products</h2>
          <a href="/#/products"><button><ShoppingCartCheckoutIcon fontSize="large"/></button></a>
          <p>View products in store!</p>
      </div>
    </div>
    </div>
  );
}

export default Home;
