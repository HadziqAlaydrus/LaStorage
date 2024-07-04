import React from "react";

const HomeCard = () => {
  return (
    <section className="flex p-10">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Create Storage</h2>
          <p>Masukkan data makanan Frozen Food kamu!</p>
          <div className="card-actions justify-end">
            <a href="/form" className="btn btn-primary">Create</a>
          </div>
        </div>
      </div>
      {/* <div className="mt-10 mx-5 card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HomeCard;
