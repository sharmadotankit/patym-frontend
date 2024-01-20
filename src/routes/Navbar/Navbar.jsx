import React, { useContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { ApplicationContext } from "../../context/context";
import paytmLogo from "../../assets/logo-paytm.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {  Button, Form, Modal,Nav,Tab } from "react-bootstrap";
import { login,signUp } from "../../utils/actions/authActions";
import { toast } from "react-toastify";

function NavbarComponent() {
  const { currentUser, setCurrentUser } = useContext(ApplicationContext);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLogin,setIsLogin] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name:'',
  });
  const [error, setError] = useState("");


  const handleLoginModelClose = () => {
    setShowLoginModal(false);
  };



  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser({
      name: null,
      email: null,
      token: null,
      _id: null,
      isLoggedIn: false,
    });
    localStorage.setItem("name", "");
    localStorage.setItem("email", "");
    localStorage.setItem("_id", "");
    localStorage.setItem("token", "");
    localStorage.setItem("isLoggedIn", false);
    navigate("/");
  };


  const handleOnLogin = async () => {
    try {
      setError("");
      const { email, password } = userData;
      if (
        !email ||
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      ) {
        setError("Enter a valid email");
        return;
      }

      if (!password) {
        setError("Enter a valid password");
        return;
      }

      let response = await login(userData);
      if (response.status) {
        setCurrentUser({
          name: response?.data?.name,
          email: response?.data?.email,
          token: response?.data?.token,
          _id: response?.data?._id,
          isLoggedIn: true,
        });

        localStorage.setItem("name", response?.data?.name);
        localStorage.setItem("email", response?.data?.email);
        localStorage.setItem("_id", response?.data?._id);
        localStorage.setItem("token", JSON.stringify(response?.data?.token));
        localStorage.setItem("isLoggedIn", true);

        toast.success("User login successful");
        navigate("/home");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  const handleOnSignUp =async ()=>{
    try{
        setError('')
    const {name,email,password} = userData;
    if(!name){
        setError("Enter a valid name");
        return;
    }
    if(!email || !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
        setError("Enter a valid email");
        return;
    }
    if(!password || !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)){
        setError("Enter a valid password");
        return;
    }

    let response = await signUp(userData);
    if(response.status){
        setCurrentUser({
            name:response?.data?.name,
            email:response?.data?.email,
            token:response?.data?.token,
            _id:response?.data?._id,
            isLoggedIn:true,
        });

        localStorage.setItem("name", response?.data?.name);
        localStorage.setItem("email", response?.data?.email);
        localStorage.setItem("_id", response?.data?._id);
        localStorage.setItem("token", JSON.stringify(response?.data?.token));
        localStorage.setItem("isLoggedIn", true);
        
        toast.success("User login successful");
        navigate("/home")
    }else{
        toast.error("Something went wrong while registering the user.Please try again later.")
    }
    }
    catch(err){
        console.log('error',err)
        toast.error(err?.response?.data?.message || "Something went wrong");
        return;
    }
    
}

const handleUserInfoChange = (e)=>{
    setUserData({...userData , [e.target.name] : e.target.value})
}

const handleSelect = (key) => {
  if(key=='login'){
    setIsLogin(true)
  }else if(key=='register'){
    setIsLogin(false)
  }
};

  return (
    (<React.Fragment>
      <div className="navigation">
      <Modal
        size="md"
        centered
        show={showLoginModal}
        onHide={handleLoginModelClose}
        closeButton
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <Tab.Container activeKey={isLogin} onSelect={handleSelect}>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="register">Register</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="login">
              <Form>
                <Form.Group controlId="formLoginEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formLoginPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="register">
              <Form>
                <Form.Group controlId="formRegisterEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formRegisterPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        </Modal.Body>
      </Modal>

      <nav className="nav-links-container">
        <Link to="/">
          <img src={paytmLogo} height={"90px"} style={{marginTop:'-10px'}} />
        </Link>
        <Link to="/" className="nav-item dropdown">
          <h6>Paytm for Consumer</h6>
          <div className="dropdown-content">
            <span className="content-item">
              <span>Payment</span>
              <span>{">"}</span>
            </span>

            <span className="content-item">
              <span>Ticket Booking </span>
              <span>{">"}</span>
            </span>

            <span className="content-item">
              <span>Financial Services </span>
              <span>{">"}</span>
            </span>
          </div>
        </Link>
        <Link to="/" className="nav-item dropdown">
          <h6>Paytm for Business</h6>
          <div className="dropdown-content">
            <span className="content-item">
              <span>Consumer Payment</span>
              <span>{">"}</span>
            </span>
            <span className="content-item">
              <span>Business Payment</span>
              <span>{">"}</span>
            </span>
            <span className="content-item">
              <span>Business Services</span>
              <span>{">"}</span>
            </span>
            <span className="content-item">
              <span>Financial Services</span>
              <span>{">"}</span>
            </span>
            <span className="content-item">
              <span>Developer</span>
              <span>{">"}</span>
            </span>
          </div>
        </Link>
        <Link to="/" className="nav-item dropdown">
          <h6>Investor Relations</h6>
        </Link>
        <Link to="/" className="nav-item dropdown">
          <h6>Company</h6>
          <div className="dropdown-content">
            <span className="content-item">
              <span>About</span>
              <span>{">"}</span>
            </span>
            <span className="content-item">
              <span>CSR</span>
              <span>{">"}</span>
            </span>
            <span className="content-item">
              <span>Blog</span>
              <span>{">"}</span>
            </span>
            <span className="content-item">
              <span>Contact Us</span>
              <span>{">"}</span>
            </span>
            <span className="content-item">
              <span>Terms & Conditions</span>
              <span>{">"}</span>
            </span>
            <span className="content-item">
              <span>Sustainability</span>
              <span>{">"}</span>
            </span>
          </div>
        </Link>
        <Link to="/" className="nav-item dropdown">
          <h6>Career</h6>
        </Link>
        <button className="sign-in-button" onClick={()=> setShowLoginModal(true)}>
          Sign In
          <FontAwesomeIcon icon={faUser} />
        </button>
      </nav>
 
      </div>
      <Outlet />
    </React.Fragment>)
  );
}
export default NavbarComponent;
