import { Outlet } from "react-router-dom";
import NavBar from "./NavBar"
// import Footer from "./Footer"

const Body = () => {
  return (
  <div>
    <NavBar/>
    <Outlet/>
    {/* <Footer/> */}
     {/*Any childrens of the body will render here*/}
    </div>
    
  );
};
export default Body