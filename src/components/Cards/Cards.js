import React, { memo } from "react";
import "./Cards.css";

function Cards() {
  const data = [
    {
      id: 1,
      img: "https://image-us.samsung.com/SamsungUS/home/home-appliances/ranges/gas/nsg6dg8500sraa/gallery/NSG6DG8500SR_01_SCOM.jpg?$product-card-small-jpg$",
      text: "Bespoke 6 cu. ft. Smart Slide-In Gas Range with Smart Oven Camera & Illuminated Precision Knobs",
      price: "600$",
      from: "400$",
    },
    {
      id: 2,
      img: "https://image-us.samsung.com/us/mobile-audio/galaxy-buds2-pro/gallery/graphite/Q4B4B2C-86-SM-R510_001_Front_Graphite_RGB-GalleryImage-1600x1200.jpg?$product-card-small-jpg$",
      text: "Galaxy Budds 2 Pro",
      price: "Save ap to 400$",
      from: "From 189.99$",
    },
    {
      id: 3,
      img: "https://image-us.samsung.com/SamsungUS/home/television-home-theater/tvs/the-frame-limited-edition/11132023-frame/The_Frame22_23.jpg?$product-card-small-jpg$",
      text: "55 They Frame",
      price: "Save 500$",
      from: "From 999.99$",
    },
    {
      id: 4,
      img: "https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/4-door-flex/02082024/RF23DB990012_01_White_Glass_SCOM.jpg?$product-card-small-jpg$",
      text: "Bespoke 6 cu. ft. Smart Slide-In Gas Range with Smart Oven Camera & Illuminated Precision Knobs",
      price: "600$",
      from: "400$",
    },
    {
      id: 5,
      img: "https://image-us.samsung.com/us/smartphones/galaxy-s24/all-gallery/01_E3_OnlineExclusive_TitaniumGreen_Lockup_1600x1200.jpg?$product-card-small-jpg$",
      text: "Galaxy Budds 2 Pro",
      price: "Save ap to 400$",
      from: "From 189.99$",
    },
    {
      id: 6,
      img: "https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming/06072023/gi/S49CG950SN_002_Front1_Silver_SCOM.jpg?$product-card-small-jpg$",
      text: "55 They Frame",
      price: "Save 500$",
      from: "From 999.99$",
    },
  ];
  const data2 = data?.map((val) => (
    <div key={val.id} className="box">
      <img src={val.img} alt="" />
      <p className="card-text">{val.text}</p>
      <p className="card-price">{val.price}</p>
      <p className="card-price">{val.from}</p>
    </div>
  ));
  return (
    <div>
      <section className="cards">
        <div className="container">
          <p className="cards-title">Shop all latest offers and innovations</p>
          <div className="cards-links">
            <a href="#" className="cards-link">
              For You
            </a>
            <a href="#" className="cards-link">
              Mobile
            </a>
            <a href="#" className="cards-link">
              Tv & Audio
            </a>
            <a href="#" className="cards-link">
              Home Appliance
            </a>
            <a href="#" className="cards-link">
              Samsung Live
            </a>
            <a href="#" className="cards-link">
              For Bussince
            </a>
          </div>
          <div className="cards-box">{data2}</div>
        </div>
      </section>
    </div>
  );
}

export default memo(Cards);
