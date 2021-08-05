import React from "react";
import "./Home.css";
import Background from "./images/Background.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={Background} alt="Unable to Load" />
      </div>

      <div className="home_row1">
        <Product
          id="1"
          title="Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable"
          price={19}
          rating={4}
          image="product1.jpeg"
        />
        <Product
          id="2"
          title="Wine Glasses, Large Red Wine or White Wine Glass Set of 4 - Unique, for Women, Men, Wedding, Anniversary, Christmas, Birthday - 14oz, Premium Crystal (14oz)"
          price={41}
          rating={4}
          image="product4.jpeg"
        />
        <Product
          id="3"
          title="SAMSUNG Galaxy S21 Ultra 5G Factory Unlocked Android Cell Phone 128GB US Version Smartphone Pro-Grade Camera 8K Video 108MP High Res, Phantom Black"
          price={1099}
          rating={5}
          image="product5.jpeg"
        />
      </div>

      <div className="home_row2">
        <Product
          id="4"
          title="HC Collection Queen Bed Sheets Set - Bedding Sheets & Pillowcases w/ 16 inch Deep Pockets - Fade Resistant & Machine Washable - 4-Piece 1800 Series Queen Size Sheet Sets – Cream"
          price={29}
          rating={3}
          image="product3.jpeg"
        />
        <Product
          id="5"
          title="UNO Family Card Game, with 112 Cards in a Sturdy Storage Tin, Travel-Friendly, Makes a Great Gift for 7 Year Olds and Up [Amazon Exclusive]"
          price={9}
          rating={3}
          image="product6.jpeg"
        />
        <Product
          id="6"
          title="Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black"
          price={129}
          rating={4}
          image="product2.jpeg"
        />
      </div>

      <div className="home_row3">
        <Product
          id="6"
          title="Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black"
          price={129}
          rating={4}
          image="product2.jpeg"
        />
      </div>
    </div>
  );
}

export default Home;
