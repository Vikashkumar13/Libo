import React from "react";
import { useNavigate } from "react-router-dom";

function Cards({ item }) {
  const navigate = useNavigate()

  const bookHandle = () => {
    navigate("/bookDetails")
  }
  return (
    <>
      <div className="mt-4 my-3 p-2">
        <div className="card rounded-sm w-92 shadow-xl hover:scale-105 duration-200 bg-gray-900 cursor-pointer" onClick={bookHandle}>
          <figure className="max-sm:max-h-40 md:max-h-40">
            <img src={item.image} alt="book-image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary rounded-lg">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline rounded-lg">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-sm bg-cyan-700 hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
