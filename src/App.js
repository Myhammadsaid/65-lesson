import React from "react";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
  let items1 = [
    "Galaxy S24 Ultra",
    "Galaxy S24+",
    "Galaxy Book4 Ultra",
    "Galaxy Tab S9 Series",
    "Galaxy Watch6 Series",
  ];
  let items2 = ["The Frame", "The Freestyle 2nd Gen", "Music Frame"];
  let items3 = ["Bescope AI", "Bespoke Refrigerator", "Bespoke Laundry"];
  let items4 = ["Certified Re-Newed", "How to recycle"];
  return (
    <div className="App">
      <Home
        title="Mobile & Computing"
        items1={items1}
        bg="https://images.samsung.com/is/image/samsung/assets/us/home/04152024/SDSAC-7185-S24U-HP-LOB-FullBleed-DT-1440x810.jpg?$1440_810_JPG$"
        text="Galaxy S24 Ultra"
        par="Get up to $750 trade-in credit and $75 instant Samsung Credit with participating carriers."
        btn="Buy now"
      />
      <Home
        title="TV & Audio"
        items1={items2}
        bg="https://images.samsung.com/is/image/samsung/assets/us/home/04112024-2/Homepage_LOB_LifestyleWK_TheFrame_Desktop_1440x810.jpg?$1440_810_JPG$"
        text="Buy. Bezel. Beauty."
        par="Buy the Frame, get a Customizable Bezel on us."
        btn="Buy now"
      />
      <Home
        title="Home Appliances"
        items1={items3}
        bg="https://images.samsung.com/is/image/samsung/assets/us/home/04022024/LOB_Bespoke-AI.png?$1440_810_JPG$"
        text="New Bespoke AI Appliances"
        par="Pre-order and save up to $1,200 on our latest technology."
        btn="Pre-order"
      />
      <Home
        title="Sustainability"
        items1={items4}
        bg="https://images.samsung.com/is/image/samsung/assets/us/home/03252024-2/sustainability-1-dt.jpg?$1440_810_JPG$"
        text="New phone, less waste"
        par="Get a refurbished Certified Re-Newed smartphone with the features you love."
        btn="Learn more"
      />
    </div>
  );
}

export default App;
