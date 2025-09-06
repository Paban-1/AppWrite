import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { login, logOut } from "./Store/authSlice";
import authService from "./AppWrite/auth";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logOut());
        }
      }).catch(()=>{
        console.log("No user loged in");
        dispatch(logOut())
        
      })
      .finally(() => {setLoading(false)});
  }, []);
  return !loading ? (
    <div className="min-h-screen w-full border border-black text-4xl bg-red-400 ">
      <Header />
      <main>
        <Outlet/>LALA
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
