import React from 'react';

function Page404() {
  return (
    <div>
      <section className="flex items-center justify-center h-screen">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h2 className="d-flex justify-content-center align-items-center gap-2 mb-4">
                  <span className="display-1 fw-bold text-[200px]">404</span>
                </h2>
                <h3 className="h2 mb-2 text-4xl md:text-5xl max-sm:text-3xl font-serif">
                  Oops! That Page Can't Be Found.
                </h3>
                <p className=" text-lg md:text-base">
                  We're Really Sorry But We Can't Seem To Find The Page You Were Looking For.
                </p>
                <div className='mt-5'> 
                <a className="text-white bg-[#000000] hover:bg-[#e10914] rounded-pill py-2 px-3" href="/" role="button">
                  Back to Homepage
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page404;