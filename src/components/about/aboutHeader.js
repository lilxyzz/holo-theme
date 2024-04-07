import React from "react"
import Fade from "react-reveal/Fade"

import Image3 from "../../images/holographic-background-1.webp"

const AboutHeader = () => {
  return (
    <Fade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl max-h-96 m-4">
          <img alt="Image" src={Image3}></img>
        </div>
        <div className="mt-10 px-8">
          <h1 className="font-bold text-xl text-black text-gradient bg-gradient-to-r from-pink to-purple">
            What is Holo?
          </h1>
          <h2 className="text-black text-6xl font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-3xl lg:text-6xl">
            A visually captivating and lightning-fast open-source theme crafted
            on the Gatsby framework.
          </h2>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader
