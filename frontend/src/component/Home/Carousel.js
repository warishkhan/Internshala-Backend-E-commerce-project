import React from "react";
import "./Carousel.css";
import CarouselCard from "./CarouselCard";
const Carousel = ({ data }) => {
  return (
    <>
      {/* <!-- carousel start--> */}
      <div className="container-fluid p-5 bg-light border">
        <h1 className="text-center fs-1">Featured Products</h1>
        <div className="container mt-5">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {/* <!-- $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Slide 1 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ --> */}
              <div className="carousel-item active">
                {/* <!-- ================================For small devices===================================== --> */}
                <div className="d-flex d-sm-flex d-md-none justify-content-center align-items-center d-lg-none">
                  {data.slice(0, 1).map((elem) => (
                    <CarouselCard elem={elem} key={elem._id} />
                  ))}
                </div>
                {/* <!-- ================================For medium devices====================================== --> */}
                <div className="d-none d-md-flex d-lg-none justify-content-center align-items-center">
                  {data.slice(0, 2).map((elem) => (
                    <CarouselCard elem={elem} key={elem._id}/>
                  ))}
                </div>
                {/* <!-- ========================================For larger devices================================================== --> */}
                <div className="d-none d-md-none d-lg-flex justify-content-center align-items-center">
                  {data.slice(0, 4).map((elem) => (
                    <CarouselCard elem={elem} key={elem._id}/>
                  ))}
                </div>
              </div>

              {/* <!-- -------------------------------------- Slide 2----------------------------------------------- --> */}
              <div className="carousel-item">
                {/* <!-- =======================For small devices=============================== --> */}
                <div className="d-flex d-sm-flex d-md-none justify-content-center align-items-center d-lg-none">
                  {data.slice(5,6).map((elem) => (
                    <CarouselCard elem={elem} key={elem._id}/>
                  ))}
                </div>
                {/* <!-- =====================For medium devices========================= --> */}
                <div className="d-none d-md-flex d-lg-none justify-content-center align-items-center">
                  {data.slice(4,6).map((elem) => (
                    <CarouselCard elem={elem} key={elem._id}/>
                  ))}
                </div>
                {/* <!-- ====================For larger devices============================= --> */}
                <div className="d-none d-md-none d-lg-flex justify-content-center align-items-center">
                  {data.slice(4, 8).map((elem) => (
                    <CarouselCard elem={elem} key={elem._id}/>
                  ))}
                </div>
              </div>

              {/* <!-- -----------------------------------Slide 3--------------------------------------- --> */}
              <div className="carousel-item">
                {/* <!-- ===========================For small devices============================== --> */}
                <div className="d-flex d-sm-flex d-md-none justify-content-center align-items-center d-lg-none">
                  {data.slice(9,10).map((elem) => (
                    <CarouselCard elem={elem} key={elem._id}/>
                  ))}
                </div>
                {/* <!-- ========================For medium devices=========================== --> */}
                <div className="d-none d-md-flex d-lg-none justify-content-center align-items-center">
                  {data.slice(8,10).map((elem) => (
                    <CarouselCard elem={elem} key={elem._id}/>
                  ))}
                </div>
                {/* <!-- ==========================For larger devices========================== --> */}
                <div className="d-none d-md-none d-lg-flex justify-content-center align-items-center">
                  {data.slice(8, 12).map((elem) => (
                    <CarouselCard elem={elem} key={elem._id}/>
                  ))}
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#myCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bg-dark"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#myCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon bg-dark"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
