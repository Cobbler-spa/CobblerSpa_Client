import React, {  useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  // MDBSpinner,
  MDBCheckbox,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  confirmPassword: "",
  newsLetterCheck:true
};

const Register = () => {
  const [formValue, setFormvalue] = useState(initialState);
  const { email, password, firstname, lastName, confirmPassword, newsLetterCheck } = formValue;

  const onInput = (e) => {
    const { name, value } = e.target;

    setFormvalue({ ...formValue, [name]: value });
  };

  const handleCheck = (e)=>{
    setFormvalue({...formValue, newsLetterCheck: !newsLetterCheck})
    console.log(formValue)
  }
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
            width:"30rem", marginInline:"1rem",
            paddingTop: "10px",
            boxShadow: "1.5px 1.5px 4px 0.2px grey",
          }}
        >
          <MDBIcon
            fas
            icon="user-circle"
            className="fa-2x"
            style={{ color: "black" }}
          />
          <h5 style={{ color: "black", marginTop: "4px" }}>Sign Up</h5>
          <MDBCardBody>
            <MDBValidation noValidate className="row g-3">
              <div className="col-md-6">
                <MDBValidationItem
                   tooltip feedback="First name cannot be blank"
                  invalid
                >
                  <MDBInput
                    label="First Name"
                    type="text"
                    name="firstName"
                    value={firstname}
                    required
                    invalid
                    onChange={onInput}
                  
                  />
                </MDBValidationItem>
              </div>
              <div className="col-md-6">
                <MDBValidationItem  tooltip feedback="Last name cannot be blank" invalid>
                  <MDBInput
                    label="Last Name"
                    type="text"
                    name="lastName"
                    value={lastName}
                    required
                    invalid
                    onChange={onInput}
                    
                  />
                </MDBValidationItem>
              </div>
              <div className="col-md-12">
                <MDBValidationItem
                   tooltip feedback="Email field cannot be blank"
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
                <MDBValidationItem  tooltip feedback="Confirm Password" invalid>
                  <MDBInput
                    label="Address"
                    type="text"
                    name="address"
                    value={confirmPassword}
                    required
                    invalid
                    onChange={onInput}
                    
                  />
                </MDBValidationItem>
              </div>
              <div className="col-md-12">
                <MDBValidationItem
                   tooltip feedback="Password field cannot be blank"
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
              <div className="col-md-12">
                <MDBValidationItem  tooltip feedback="Confirm Password" invalid>
                  <MDBInput
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    required
                    invalid
                    onChange={onInput}
                    
                  />
                </MDBValidationItem>
              </div>
              <div
                className="col-md-6 col-8"                
              >
                <MDBCheckbox
                  label="Subscribe for newsletters "
                  onChange={handleCheck}
                  defaultChecked={newsLetterCheck}
                />
              </div>
              
              <div className="col-12">
                <MDBBtn
                  style={{
                    width: "100%",
                    fontSize: "14px",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                  className="mt-2"
                  type="submit"
                >
                  {/* spinner */}
                  {/* {loading && (
                  <MDBSpinner size='sm' role="status" tag="span" className='me-2' />
                  )} */}
                  Sign Up
                </MDBBtn>
              </div>
            </MDBValidation>
            <Link to="/login" style={{textDecoration:"none"}}>
              <p >Already have an account ? Sign In</p>
            </Link>
          </MDBCardBody>
          
            
          
        </MDBCard>
      </div>
    </>
  );
};

export default Register;
