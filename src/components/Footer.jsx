import React, { useState } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const {user} = useSelector((state)=>({ ...state.auth }))
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email) {
      try {
        setLoading(true)
        const response = await fetch("http://localhost:5000/api/v1/users/newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
          }),
        });

        if(response.ok){
          setLoading(false);
          toast.success("Email saved successfully!");
          setEmail("")
        }
      } catch (error) {
        console.log(error)
        toast.error("Something Went Wrong!")
      }
    } else {
      toast.error("Invalid email");
    }
  };
  return (
    <MDBFooter bgColor="dark" className="text-center text-white text-lg-left">
      <MDBContainer className="p-4 pb-0">
        <form action="">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol size="auto" className="mb-4 mb-md-0">
              <p className="pt-2">
                <p style={{fontFamily:"poppins", letterSpacing:"2px"}}>Sign up for offers</p>
              </p>
            </MDBCol>

            <MDBCol md="5" size="12" className="mb-4 mb-md-0">
              <MDBInput
                type="text"
                id="form5Example2"
                label="Email address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                contrast
                style={{ color: "black", background:"black" }}
              />
            </MDBCol>

            <MDBCol size="auto" className="mb-4 mb-md-0">
              <MDBBtn outline color="light" onClick={handleSubmit}>
                {
                  loading ? "Loading" : "Subscribe"
                }
                
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <MDBContainer style={{fontFamily:"poppins"}}>
        <Link
          to="/"
          style={{ margin: "8px", textDecoration: "none", color: "whitesmoke" }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{ margin: "8px", textDecoration: "none", color: "whitesmoke" }}
        >
          About Us
        </Link>
        {
          (user && user.role === 'admin') ? (<>
          <Link
            to="/addblog"
            style={{ margin: "8px", textDecoration: "none", color: "whitesmoke" }}
          >
            Add Blog
          </Link>
          <Link
            to="/addadmin"
            style={{ margin: "8px", textDecoration: "none", color: "whitesmoke" }}
          >
            Add Admin
          </Link>
          </>):(<Link
            to="/services"
            style={{ margin: "8px", textDecoration: "none", color: "whitesmoke" }}
          >
            Services
          </Link>)
        }
        <Link
          to="/policy"
          style={{ margin: "8px", textDecoration: "none", color: "whitesmoke" }}
        >
          Policy
        </Link>
        
        <Link
          to="/pricing"
          style={{ margin: "8px", textDecoration: "none", color: "whitesmoke" }}
        >
          Price Guide
        </Link>
        <div
          style={{
            width: "8rem",
            height: "0.20rem",
            color: "whitesmoke",
            backgroundColor: "white",
            margin: " 12px auto",
          }}
        ></div>
      </MDBContainer>
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", fontFamily:"poppins" }}
      >
        © 2023 Copyright:
        <a className="text-white" href="mailto:support@cobblerspa.com">
          CobblerSpa.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
