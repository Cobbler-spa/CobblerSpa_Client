
import React from 'react'

export const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" , borderRadius:"50%"}}
        onClick={onClick}
      />
    );
}
export const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius:"50%" }}
        onClick={onClick}
      />
    );
  }