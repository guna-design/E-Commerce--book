import React from "react";
import Banner from "../componenets/banner";
import  BestSellerBooks from "./BestSellerBooks";
import FavBooks from "./FavBooks";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks";
import Review from "./Review";

const home = () => {
  return (
    <div className="">
      <Banner/>
      < BestSellerBooks/>
      <FavBooks/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>

    </div>
  );
};

export default home;
