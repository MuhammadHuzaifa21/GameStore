import React from 'react'

function Hero({ title, subtitle, buttonText = "Shop Now", buttonLink = "/products"}) {
  return (
    <>
      <div className="bg-primary text-white text-center py-5">
        <div className="container">
            <h1 className="display-4 fw-bold">{title}</h1>
            <p className="lead">{subtitle}</p>
            <a href={buttonLink} className="btn btn-light btn-lg mt-3">{buttonText}</a>
        </div>
    </div>
    </>
  )
}

export default Hero
