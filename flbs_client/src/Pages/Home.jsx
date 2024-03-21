import HomeAdd from "../Components/Home/HomeAdd";
import Banner from "../Components/Home/Banner";

const Home = () => {
  return (
    <div className="homeContainer   ">
      {/* banner starts  */}

      <div className="bannerContainer">
        <Banner />
      </div>

      {/* banner ends  */}

      <div className="adContainer">
        <HomeAdd />
      </div>

      {/*  */}
    </div>
  );
};

export default Home;
