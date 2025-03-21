import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <section className="grow">
        {navigation.state === "loading" ? (
          <span className="loading  loading-dots w-12 mx-auto block my-5"></span>
        ) : (
          <Outlet></Outlet>
        )}
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Root;
