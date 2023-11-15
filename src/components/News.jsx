import React from "react";

const News = () => {
  return (
    <div className="text-primary mt-10">
      {/* Sreemongol  */}
      <div className="hero min-h-scree bg-opacity-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/images/Sreemongol.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Sreemongol</h1>
            <p className="py-6 text-lg">
              Known as the Tea Capital of Bangladesh Srimangal is famous for its
              lush tea gardens and biodiversity.
            </p>
            <button className="btn btn-primary">Booking</button>
          </div>
        </div>
      </div>

      {/* sundorbon  */}
      <div className="hero min-h-scree bg-opacity-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/images/sundorbon.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Sundorbans</h1>
            <p className="py-6 text-lg">
              The Sundarbans is the largest mangrove forest in the world, known
              for its rich biodiversity and the Royal Bengal tigers.
            </p>
            <button className="btn btn-primary">Booking</button>
          </div>
        </div>
      </div>

      {/* sajek  */}
      <div className="hero min-h-scree bg-opacity-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/images/Sajek.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Sajek</h1>
            <p className="py-6 text-lg">
              Sajek Valley is one of the most popular tourist spots in
              Bangladesh situated among the hills of the Kasalong range of
              mountains in Sajek union, Baghaichhari Upazila in Rangamati
              District.
            </p>
            <button className="btn btn-primary">Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
