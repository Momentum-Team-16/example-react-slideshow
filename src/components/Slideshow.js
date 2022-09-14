import React from 'react'
import { useState } from 'react'

const Slideshow = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [onLastSlide, setOnLastSlide] = useState(false)

  const handleNext = () => {
    setCurrentSlide(currentSlide + 1)
    if (currentSlide === data.length - 2) {
      setOnLastSlide(true)
    }
  }

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleRestart = () => {
    setCurrentSlide(0)
    setOnLastSlide(false)
  }

  return (
    <div className="container">
      <div id="slide" className="section center">
        <h2 data-testid="title">{data[currentSlide].title}</h2>
        <div className="card horizontal">
          <div className="card-image">
            <img
              src={data[currentSlide].image}
              className="responsive-img"
              alt={data[currentSlide].title}
            />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h3 className="original-title">
                {data[currentSlide].original_title}
              </h3>
              <p className="release-date">{data[currentSlide].release_date}</p>
              <p data-testid="text" className="flow-text">
                {data[currentSlide].description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="navigation" className="container center nav-wrapper">
        <button
          className="waves-effect waves-light btn mx-1"
          disabled={currentSlide === 0}
          onClick={handleRestart}
        >
          <i className="material-icons left">replay</i>
          Start Over
        </button>
        <button
          className="waves-effect waves-light btn mr-1"
          disabled={currentSlide === 0}
          onClick={handlePrev}
        >
          <i className="material-icons left">chevron_left</i>
          Back
        </button>
        <button
          className="waves-effect waves-light btn"
          disabled={onLastSlide}
          onClick={handleNext}
        >
          <i className="material-icons right">chevron_right</i>
          Next
        </button>
      </div>
    </div>
  )
}

export default Slideshow
