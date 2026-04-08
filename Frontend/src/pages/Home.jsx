import BestSeller from "../components/BestSeller";
import BottomBanner from "../components/BottomBanner";
import Categories from "../components/Categories";
import MainBanner from "../components/MainBanner";
import NewsLetter from "../components/Newsletter";
const Home=()=>{
 return (<div className="px-3 py-3  sm:px-10 md:px-15 mt-10"><MainBanner ></MainBanner>
 <Categories/>
 <BestSeller></BestSeller>
 <BottomBanner></BottomBanner>
 <NewsLetter ></NewsLetter>
 
 </div>)
}
export default Home;
//just add mt-10 in Home page 