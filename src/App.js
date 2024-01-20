import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./routes/Home/Home";
import {  useContext, useEffect, useState } from "react";
import { ApplicationContext } from "./context/context";
import NavbarComponent from "./routes/Navbar/Navbar";
import ServerConnectingComponent from "./component/ServerConnectingComponent";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { connectToServer } from "./utils/actions/allActions";
import {jwtDecode} from "jwt-decode";

function App() {
  const {setCurrentUser} = useContext(ApplicationContext);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const _id = localStorage.getItem("_id"); 
  const navigate = useNavigate();
  const [isServerConnected, setIsServerConnected] = useState(false);

  const handleLogout = () => {
    setCurrentUser({
      name: null,
      email: null,
      token: null,
      _id: null,
      isLoggedIn: false,
    });
    localStorage.setItem("name","");
    localStorage.setItem("email", "");
    localStorage.setItem("_id", "");
    localStorage.setItem("token", "");
    localStorage.setItem("isLoggedIn", false);
    navigate('/login')
  }


  useEffect(() => {
    try {
      const connectFunction = async () => {
        const connectionResponse = await connectToServer();
        if (connectionResponse.status===200) {
          setIsServerConnected(true);
        }
      };

      connectFunction();

      if (!token) {
        handleLogout();
        return;
      } else {
        let decode = jwtDecode(token);
        if (decode.exp * 1000 < Date.now()) {
          handleLogout();
          return;
        }
        if (decode.exp * 1000 - Date.now() < 1800) {
          handleLogout();
          return;
        }
      }

      if (isLoggedIn != "true") {
        handleLogout();
        return;
      }

      setCurrentUser({
        name: name,
        email: email,
        token: token,
        _id: _id,
        isLoggedIn: true,
      });
    } catch (err) {
      console.log("error", err);
    }
  }, []);




  return (
    <>
    {isServerConnected ? (
      <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<NavbarComponent />}>
        {!isLoggedIn || (!token && <Route path="/" element={<Home />}></Route>)}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />}></Route>
        </Route>
      </Routes>
      </> ) : (
        <>
          <Routes>
            <Route path="*" element={<ServerConnectingComponent />}></Route>
          </Routes>
        </>
      )}
      </>
  );
}

export default App;
