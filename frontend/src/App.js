import "./App.css";
import { useEffect,useState} from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

   function getStripeApiKey() {
    setStripeApiKey("pk_test_51OmJJOSBDqL9B2Q7lBOe8NsFkrZFqYtnj2aFaGFsY9fgk5o5Ie7bivpsqu7Grdtj9cackjiiV9d642Xd3GedYHW600R0TM7AOv");
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());
  const[search,setSearch] = useState("block")

  return (
    <Router>
      <Header user={user} search={search} setSearch={setSearch} />

      {isAuthenticated && <UserOptions user={user}/>}

     
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
        <Routes>
          <Route exact path="/process/payment" element={<ProtectedRoute isAuthenticated={isAuthenticated} >
          <Payment/>
          </ProtectedRoute>} />
          </Routes>
        </Elements>
      )}

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/product/:id" element={<ProductDetails/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route path="/products/:keyword" element={<Products/>} />

        <Route exact path="/search" element={<Search setSearch={setSearch}/>} />

        <Route exact path="/contact" element={<Contact/>} />

        <Route exact path="/about" element={<About/>} />

        <Route exact path="/account" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Profile/>
          </ProtectedRoute>
        } />

        <Route exact path="/me/update" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <UpdateProfile/>
          </ProtectedRoute>
        } />

        <Route
          exact
          path="/password/update"
          element={<ProtectedRoute isAuthenticated={isAuthenticated}><UpdatePassword/></ProtectedRoute>}
        />

        <Route exact path="/password/forgot" element={<ForgotPassword/>} />

        <Route exact path="/password/reset/:token" element={<ResetPassword/>} />

        <Route exact path="/login" element={<LoginSignUp/>} />

        <Route exact path="/cart" element={<Cart/>} />

        <Route exact path="/login/shipping" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Shipping/></ProtectedRoute>} />

        <Route exact path="/success" element={<ProtectedRoute isAuthenticated={isAuthenticated}><OrderSuccess/></ProtectedRoute>} />

        <Route exact path="/orders" element={<ProtectedRoute isAuthenticated={isAuthenticated}><MyOrders/></ProtectedRoute>} />

        <Route exact path="/order/confirm" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
          <ConfirmOrder/>
        </ProtectedRoute>} />

        <Route exact path="/order/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated}><OrderDetails/></ProtectedRoute>} />

        <Route
          exact
          path="/admin/dashboard"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={true}><Dashboard/></ProtectedRoute>}
        />
        <Route
          exact
          path="/admin/products"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={true}><ProductList/></ProtectedRoute>}
        />
        <Route
          exact
          path="/admin/product"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={true}><NewProduct/></ProtectedRoute>}
        />

        <Route
          exact
          path="/admin/product/:id"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={true}><UpdateProduct/></ProtectedRoute>}
        />
        <Route
          exact
          path="/admin/orders"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={true}><OrderList/></ProtectedRoute>}
        />

        <Route
          exact
          path="/admin/order/:id"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={true}><ProcessOrder/></ProtectedRoute>}
        />
        <Route
          exact
          path="/admin/users"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={true}><UsersList/></ProtectedRoute>}
        />

        <Route
          exact
          path="/admin/user/:id"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={true}><UpdateUser/></ProtectedRoute>}
        />

        <Route
          exact
          path="/admin/reviews"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={true}><ProductReviews/></ProtectedRoute>}
        />

        <Route
          element={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
