import "./App.css";
import MainHeading from "./components/MainHeading/MainHeading";
import BasicIdeaBox from "./components/Basic Idea box/BasicIdeaBox";
import BoxWithPictures from "./components/TechnologyBox/BoxWithPictures";
import ComponentWithListAndImages from "./components/HoverImageList/ComponentWithListAndImages";
import MethodologyBox from "./components/Methodology/MethodologyBox";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import ImagesCarousel from "./components/ImagesCarousel/ImagesCarousel";

function App() {
  return (
    <>
      <NavBar />
      <MainHeading />
      <BasicIdeaBox />
      <BoxWithPictures />
      <ComponentWithListAndImages />
      <MethodologyBox />
      <ImagesCarousel />
      <Footer />
    </>
  );
}

export default App;
