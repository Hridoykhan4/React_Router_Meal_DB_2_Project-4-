import { Outlet,  useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar></Navbar>
      <section>
        {navigation.state === "loading" ? (
          <span className="loading  loading-dots w-12 mx-auto block my-5"></span>
        ) : (
          <Outlet></Outlet>
        )}
      </section>
    </>
  );
};

export default Root;
