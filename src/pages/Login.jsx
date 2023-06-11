import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import { useSelector,useDispatch } from "react-redux";
import { validateEmail, validatePassword } from "../helper/Validator";
import {  setToken, setUser } from "../redux/features/authSlice";
const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [formValue, setFormvalue] = useState(initialState);
  const { email, password } = formValue;
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => ({ ...state.auth }));
  const onInput = (e) => {
    const { name, value } = e.target;

    setFormvalue({ ...formValue, [name]: value });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      toast.error(
        "Password must has 8 characters (A special character, capital, lowercase, number)"
      );
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Invalid email");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/users/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      if (response.ok) {
        const resp = await response.json();
        const { user, token } = resp.data;

        // Save user details and token in localStorage
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        dispatch(setUser(user)); // Dispatch the setUser action
        dispatch(setToken(token));
        console.log(resp);
        toast.success("Logged In successfully");
        navigate("/");
      }
      else{
        const errorData = await response.json();
        toast.error(errorData.message);
      }
    } catch (error) {
      toast.error("Login failed");
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
          backgroundColor: "rgba(12, 12, 12, 0.827)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MDBCard
          alignment="center"
          style={{
            backgroundColor: "white",
            boxShadow: "1.5px 1.5px 4px 0.2px grey",
            padding: "6px",
            width: "30rem",
            marginInline: "1rem",
          }}
        >
          <MDBIcon
            fas
            icon="user-circle"
            className="fa-2x"
            style={{ color: "black" }}
          />
          <h5 style={{ color: "black  " }}>Sign In</h5>
          <MDBCardBody>
            <MDBValidation
              noValidate
              className="row g-3"
              onSubmit={handleSubmit}
            >
              <div className="col-md-12">
                <MDBValidationItem
                  tooltip
                  feedback="Email field cannot be blank"
                  invalid
                >
                  <MDBInput
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    required
                    invalid
                    onChange={onInput}
                  />
                </MDBValidationItem>
              </div>

              <div className="col-md-12">
                <MDBValidationItem
                  tooltip
                  feedback="Password field cannot be blank"
                  invalid
                >
                  <MDBInput
                    label="Password"
                    type="password"
                    name="password"
                    required
                    value={password}
                    onChange={onInput}
                  />
                </MDBValidationItem>
              </div>
              <div className="col-12">
                <MDBBtn
                  style={{
                    width: "100%",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                  className="mt-2"
                  type="submit"
                >
                  {/* spinner */}
                  {loading && (
                    <MDBSpinner
                      size="sm"
                      role="status"
                      tag="span"
                      className="me-2"
                    />
                  )}
                  Sign in
                </MDBBtn>
              </div>
            </MDBValidation>
          </MDBCardBody>
          <MDBCardFooter>
            <Link to="/verify" style={{ textDecoration: "none" }}>
              <p>Don't have an account ? Sign Up</p>
            </Link>
          </MDBCardFooter>
        </MDBCard>
      </div>
    </>
  );
};

export default Login;
