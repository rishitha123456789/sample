import React, { Component } from 'react'

export default class Carousel extends Component {
  render() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={1} aria-label="Slide 2"  />
          <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="data:image/jpeg;base64,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" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>React JS</h5>
              <p>It is a JavaScript Frontend library.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY0AAAB/CAMAAAAkVG5FAAAA8FBMVEUYUqT/1gD/3AAAAAD/3gAFTaNueo8RT6YRT6M/ZY1AaZAAAANiUgJNQAAAAAkAAAUAAA3/2QP/////5AD+1Ab/4QgZVKMZVJ0YTqgfW6JIZJIGT59ufpBjWAs4KwA8LwAuLAp6ZQq9oAR8bgVKPQO9pQqpkQuaiAvPsAxHPQYpJQYnFw3qxAhwaAmgiAhJPxXCoQXWtgrwzwWLdg1uXgfdvgY4LhPRsQiVfgh9awmwlwTyzg4fFAXUugtpYQqHdwgREggmIxcAQJ+7yt3f7fBQdLAyY7EAP6MvXq5AarDQ1+UAM5qLpcx+nMmPqs9xj75hhO1bAAAD8klEQVR4nO3cgW7aRgCAYTg7xZvTO59ru1DSZqSBwkbZCmHLIG030nWlS7f3f5vdGbplSRZZNCefov9TpDRGSFZ+nX13uGk0AAAAAAAAAAAAAAAAAAAAAAAA6hIVX/Dm4ovejauix+1od+3HdZ//PdPuPPl6V0867bpP/57pHjwSu3p00K379O+ZvQeiuSvxYK/u079nqOETaviEGj6hhk+o4RNq+IQaPqGGT6jhE2r4hBo+oYZPqOETaviEGj6hhk+o4RNq+IQaPqGGT6jhE2r45JYa2rr0c2YOZZcPUOOu3TY2RB7m4T8vayHCUFzOQY27dkuN8Omzw8NvesKOCq3F0fOHh8fPF1nY1NRw5JYa4mEQBPF+aC9QYV/GQRwESiWDPKOGI5VqNMWLJAlKSspeTg1Hqo2NoR0WsbLDIw6Sic6o4USlGmKkzD+l/DZJYpXI74SmhhNVauixtDFeijAfJFJO8kxk1HChUg17oQoCO7kNT79fCuZUrlSq8YO9UMV2Zmtmuk1muM5UqvHKjo1kEZbLcZ01qeFIpRpTWc5tZ9NQsDPiUqU5VbgflHMqNRsLdkYcqrbeGNupbWDuHvLNPNTUcKVKjUzooZSfl+InU+7irlQaG1lTzJ/ZO3msZKCS14IablTbp7JTqcGZUqocIPFcUMOJijW0vVz1R9vr1Y85NZy4uYa+WiPTZp2hxU/H5lIVKDXU1HDhxhrlNpQOjy+Njc3OlA575eg4FdRw4XoNracDUX4/tL/4soZezjYTKT0tb+Y/U8OJazW0WKikn5sr07LcuT0xr4f9M3m62RfJ7adO6iU1nLhW4/UoMYuKyXg5fmNvEfaitDyRiVQLIbTO+3Zapd5y33DiSg2tezJOAinjX6S9Yceyr83STynz08lwPB/YT2RV3KeGE1dqZHoayM2qYmtqLlSbW7edTJmXYjNg+OzPjWs19Hy7qNgs9MobuhhtnlGIt0f7rP7cuHqlMjnGv26e1QniWPbE5uh+uWtoDqhYyYXgKQU3bpjhNrNTlZhfvJRni88vhkcju0Vl7x9P5+waunLT6k8LPZzMZoNX+t/XhBgfvZjNJv2p0NRw5X/2qbQQ4j+PRG+P8dmfU/yPAZ9QwyfU8Ak1PFK0DvJwV/lBi79qf6fana92x99Rv1tRETVau4oa5t0AAAAAAAAAAAAAAACAV4pWI+KRL28U7Q5P4HmhaETd1fm7FQ99+SBqFKvz9Lf366hV96nA5Pj9PF0XafqhW/eZwPiYrtfpx/P0fd0ngkbLlPjjwnyln+o+FZgrlcmxWv2ZflrVfSYw9jomx8UFMfzQ/ZC+W7UL5lReiPbWf7VMjL8BhsxZFtHRGO8AAAAASUVORK5CYII=" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Express JS</h5>
              <p>It is a run time environment for Javascript</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-H3Nev3-iBGM9ij-mPGubz4imcjuwkJVMw&usqp=CAU" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Node JS</h5>
              <p>It is a Backend Framework for JavaScript</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
}