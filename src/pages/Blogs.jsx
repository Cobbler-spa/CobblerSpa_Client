import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import BlogCard from "../components/BlogCard";
import { SampleNextArrow, SamplePrevArrow } from "../helper/Btns";
const Blogs = () => {
  const [blogs,setBlogs] = useState([])
  const numBlogs = blogs.length;
const slidesToShow = numBlogs > 2 ? 3 : numBlogs;
  useEffect(()=>{
    
    const getAllBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/blogs/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (response.ok) {
          const resp = await response.json();
          setBlogs(resp.blogs);
        } else {
          throw new Error("Failed to fetch blogs");
        }
      } catch (error) {
        console.log(error);
        // Handle the error state here
        setBlogs([]);
      }
    };
    getAllBlogs()
  },[])
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    swipeToSlide: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerPadding: "60px",
    pauseOnHover: true,
    initialSlide: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          fade:false,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          fade:true,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          fade:true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section style={{ width: "100vw", backgroundColor: "white", paddingBlock: "5rem" }}>
      <div className="p-5">
        <h2 style={{textAlign:"center", textTransform:"uppercase", fontFamily:"oswald, poppins", letterSpacing:"5px", fontSize:"3rem", color:"black"}}>Our Blogs</h2>
        <div style={{height: "0.25rem", width: "10rem", marginInline:"auto",marginBottom:"2rem", backgroundColor:"black"}}></div>
        {
          blogs.length >0 ? (<Slider {...settings}>
            {blogs.map((item, index) => (
              <BlogCard key={item._id} {...item}/>
            ))}
          </Slider>):(
            <p style={{textAlign:"center", color:"white"}}>No Blogs yet</p>
          )
        }
      </div>
    </section>
    </>
  );
};

export default Blogs;
