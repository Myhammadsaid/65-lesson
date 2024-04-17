import React, { memo, useState } from "react";
import "./Home.css";

function Home(props) {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
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
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <a href="#" className="logo">
              <svg
                class="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="32"
                viewBox="0 0 120 32"
                role="presentation"
                aria-hidden="true"
                tabindex="-1"
              >
                <rect
                  id="Clear_space"
                  width="120"
                  height="32"
                  fill="none"
                ></rect>
                <path
                  id="Logo_ratio"
                  d="M0,11.651V10.511H3.994v1.45a1.334,1.334,0,0,0,1.494,1.346A1.3,1.3,0,0,0,6.932,12.3a1.833,1.833,0,0,0-.026-1.113C6.133,9.243.851,8.363.18,5.333a5.347,5.347,0,0,1-.025-2.02C.567.88,2.705,0,5.359,0c2.113,0,5.025.492,5.025,3.754V4.816H6.674V3.884A1.275,1.275,0,0,0,5.282,2.537a1.25,1.25,0,0,0-1.365,1.01,2.021,2.021,0,0,0,.026.777c.437,1.734,6.081,2.667,6.7,5.8a6.943,6.943,0,0,1,.025,2.46C10.307,15.068,8.091,16,5.412,16,2.6,16,0,14.99,0,11.651ZM48.392,11.6V10.46h3.943v1.424A1.312,1.312,0,0,0,53.8,13.23a1.286,1.286,0,0,0,1.443-.984,1.759,1.759,0,0,0-.025-1.088c-.748-1.915-5.979-2.8-6.648-5.825a5.215,5.215,0,0,1-.026-1.994C48.959.932,51.1.052,53.7.052c2.088,0,4.973.518,4.973,3.728V4.816H54.989V3.91a1.268,1.268,0,0,0-1.365-1.346,1.2,1.2,0,0,0-1.34.984,2.017,2.017,0,0,0,.025.777c.412,1.734,6,2.641,6.623,5.747a6.806,6.806,0,0,1,.025,2.434c-.361,2.486-2.551,3.392-5.2,3.392C50.97,15.9,48.392,14.887,48.392,11.6Zm14.121.545a5.876,5.876,0,0,1-.025-.985V.44H66.25V11.495a4.111,4.111,0,0,0,.025.57,1.468,1.468,0,0,0,2.835,0,3.97,3.97,0,0,0,.026-.57V.44H72.9V11.158c0,.285-.026.829-.026.985-.257,2.8-2.448,3.7-5.179,3.7S62.771,14.938,62.513,12.143Zm30.974-.156A7.808,7.808,0,0,1,93.435,11V4.712c0-.259.025-.725.051-.985C93.821.932,96.063.052,98.717.052c2.629,0,4.947.88,5.206,3.676a7.185,7.185,0,0,1,.025.985V5.2h-3.762V4.376a3.1,3.1,0,0,0-.051-.57,1.553,1.553,0,0,0-2.964,0,3.088,3.088,0,0,0-.051.7V11.34a4.17,4.17,0,0,0,.026.57A1.472,1.472,0,0,0,98.717,13a1.406,1.406,0,0,0,1.52-1.087,2.09,2.09,0,0,0,.026-.57V9.165h-1.52V6.99H104V11a7.674,7.674,0,0,1-.052.984c-.257,2.718-2.6,3.676-5.231,3.676S93.744,14.705,93.487,11.987ZM41.049,15.378l-.1-13.825L38.369,15.378H34.607L32.055,1.553l-.1,13.825H28.242L28.551.466h6.056l1.881,11.651L38.369.466h6.055l.335,14.912Zm-19.79,0L19.249,1.553,17.187,15.378H13.168L15.9.466h6.623l2.732,14.912Zm62.977-.155L80.5,2.822l.206,12.4H77.046V.466h5.514l3.5,12.013L85.859.466h3.685V15.224Z"
                  transform="translate(8 8)"
                ></path>
              </svg>
            </a>
            <div
              className={`nav-links ${showNav ? "open" : ""}`}
              id="navbar-responsive"
            >
              <a href="#" className="nav-link">
                Shop
              </a>
              <a href="#" className="nav-link">
                AI
              </a>
              <a href="#" className="nav-link">
                Mobile
              </a>
              <a href="#" className="nav-link">
                TV & Aoudio
              </a>
              <a href="#" className="nav-link">
                Appliance
              </a>
              <a href="#" className="nav-link">
                Computhing
              </a>
              <a href="#" className="nav-link">
                Display
              </a>
              <a href="#" className="nav-link">
                Accessories
              </a>
              <a href="#" className="nav-link">
                SmartThing
              </a>
            </div>
            <div className="nav-items" id="navbar-responsive">
              <a href="#" className="nav-item">
                Explore
              </a>
              <a href="#" className="nav-item">
                Support
              </a>
              <a href="#" className="nav-item">
                For Business
              </a>
              <a href="#" className="nav-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
                </svg>
              </a>
              <a href="#" className="nav-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                </svg>
              </a>
              <a href="#" className="nav-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                </svg>
              </a>
            </div>
            <button className="menu-btn" id="menu-btn" onClick={toggleNav}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </nav>
        </div>
      </header>
      <main>
        <section className="cards">
          <div className="container">
            <p className="cards-title">
              Shop all latest offers and innovations
            </p>
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
            <div className="cards-box">
              {data?.map((val) => (
                <div key={val.id} className="box">
                  <img src={val.img} alt="" />
                  <p className="card-text">{val.text}</p>
                  <p className="card-price">{val.price}</p>
                  <p className="card-price">{val.from}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="hero"
          style={{
            background: `url(${props.bg}) no-repeat center/cover`,
          }}
        >
          <div className="container">
            <div className="hero-style">
              <div className="hero-content">
                <div className="hero-box1">
                  <h1 className="hero-title">{props.title}</h1>
                  <div className="hero-links">
                    {props.items1?.map((val, inx2) => (
                      <a href="#" key={inx2} className="hero-link">
                        {val}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hero-box2">
                  <p className="hero-text">{props.text}</p>
                  <p className="hero-par">{props.par}</p>
                  <button className="hero-btn">{props.btn}</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default memo(Home);
