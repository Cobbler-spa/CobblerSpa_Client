import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBFooter,
  MDBBtn
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const BlogCard = ({title, image, subtitle,_id}) => {
  const truncatedSubtitle = subtitle.length > 25 ? `${subtitle.slice(0, 25)}...` : subtitle;
  return (
    <>
     <MDBCard alignment="center m-3 pb-2" className="blogBox" style={{height:"35rem",overflow:"hidden"}}>
      <div className="blogCardContainer" style={{ height: "100%" }}>
      

        <MDBCardImage src={image} alt="..." position="top" style={{height:"16rem", overflow:"hidden"}}/>
        <MDBCardBody style={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"flex-start"}} >
          <MDBCardTitle style={{ textAlign: "left", fontWeight: "bolder" }}>{title}</MDBCardTitle>
          <MDBCardText style={{ textAlign: "left" }} className="mt-3">{subtitle.slice(0,150)}.......</MDBCardText>
          <MDBBtn outline color="info" style={{ margin: "10px auto", display: "block", padding: "0.4rem 1rem", borderRadius: "20px", justifySelf:"flex-end" }}>
            <Link to={`/blog/${encodeURIComponent(_id)}`} style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>Read More</Link>
          </MDBBtn>
        </MDBCardBody>
        
      </div>
    </MDBCard>
    </>
  );
};

export default BlogCard;
