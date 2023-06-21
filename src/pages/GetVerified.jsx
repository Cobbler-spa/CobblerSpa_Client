import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import ReactGa from 'react-ga'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { validatePhone } from "../helper/Validator";
import { toast } from "react-toastify";

const initialState = {
  phoneNumber: "",
  OTP: "",
  Sent: false,
};
const GetVerified = () => {
  const [formValues, setFormValues] = useState(initialState);
  const { phoneNumber, OTP, Sent } = formValues;
  const navigate = useNavigate();
  const onInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };


  useEffect(()=>{
    ReactGa.pageview(window.location.pathname)
  },[])

  const sentOTP = async (e) => {
    e.preventDefault();

    if (!validatePhone) {
      return toast.error("Invalid Mobile Number");
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/users/sendToken",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber: phoneNumber,
          }),
        }
      );
  
      const data = await response.json();
      console.log(data);
      setFormValues({ ...formValues, Sent: true });
    } catch (error) {
      console.log(error);
      toast.error("Somethin")
    }
  };

  const verifyOTP = async (e) => {
    e.preventDefault();

    if (phoneNumber && OTP) {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/users/verify",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              phoneNumber: phoneNumber,
              OTP: OTP,
            }),
          }
        );

        if(response.ok){
          const data =await response.json()
          console.log(data)
          toast.success("verification Done");
          navigate('/register')
        }
        else{
          console.log("DK")
          toast.error("heh")
        }
      } catch (error) {
        console.log(error);
        toast.error("Something");
      }
    }
  };
  return (
    <>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          width: "100vw",
          height: "100vh",
          alignContent: "center",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily:"poppins, oswald, sans-serif"

        }}
      >
        <MDBCard
          alignment="center"
          style={{
            backgroundColor: "white",
            boxShadow: "1.5px 1.5px 4px 0.2px grey",
            padding: "6px",
          }}
        >
          <FaUserCircle
            style={{ color: "black", fontSize: "2.5rem", margin: "4px auto" }}
          />
          <h5 style={{ color: "black" }}>Mobile Verification</h5>
          <MDBCardBody>
            {!Sent ? (
              <>
                <MDBValidation
                  noValidate
                  className="row g-3"
                  onSubmit={sentOTP}
                >
                  <div className="col-md-12">
                    <MDBValidationItem
                      feedback="Email field cannot be blank"
                      invalid
                    >
                      <MDBInput
                        label="Mobile Number"
                        type="number"
                        name="phoneNumber"
                        value={phoneNumber}
                        required
                        invalid
                        onChange={onInput}
                      />
                    </MDBValidationItem>
                  </div>
                  <MDBBtn
                    type="submit"
                    style={{
                      width: "95%",
                      backgroundColor: "black",
                      color: "white",
                      fontWeight: "500",
                      letterSpacing: "1px",
                      display: "block",
                      margin: "auto",
                      borderRadius: "10px",
                      padding: "4px 8px",
                    }}
                    className="mt-3"
                  >
                    Get OTP
                  </MDBBtn>
                </MDBValidation>
              </>
            ) : (
              <form noValidate className="row g-3" onSubmit={verifyOTP}>
                <div className="col-md-12">
                  <MDBInput
                    label="Mobile Number"
                    type="number"
                    name="[phoneNumber"
                    value={phoneNumber}
                    required
                    onChange={onInput}
                  />

                  <MDBInput
                    label="OTP"
                    type="text"
                    name="OTP"
                    value={OTP}
                    required
                    onChange={onInput}
                    className="mt-4"
                  />
                </div>
                <MDBBtn
                  type="submit"
                  style={{
                    width: "95%",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "500",
                    letterSpacing: "1px",
                    display: "block",
                    margin: "auto",
                    borderRadius: "10px",
                    padding: "4px 8px",
                  }}
                  className="mt-3"
                >
                  Verify
                </MDBBtn>
              </form>
            )}
          </MDBCardBody>
          <MDBCardFooter>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <p>Already have an account ? Login</p>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <p>Already Verfied ? register</p>
            </Link>
          </MDBCardFooter>
        </MDBCard>
      </div>
    </>
  );
};

export default GetVerified;
