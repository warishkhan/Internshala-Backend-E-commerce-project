import React,{useEffect} from 'react'
import Carousel from './Carousel'
import HeroSection from './HeroSection'
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { clearErrors, getProduct } from '../../actions/productAction';
import './Home.css'

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert(error)
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);
    
  return (
    <>
    {loading ? (<Loader/>):(
      <>
      <HeroSection/>
<Carousel data={products}/>

</>
    )}
     
 </>
  )
}

export default Home