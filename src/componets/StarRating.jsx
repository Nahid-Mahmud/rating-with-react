/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating: star = 10 }) => {
  const ratingArr = new Array(star).fill(undefined);
  //   console.log(ratingArr);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5 bg-blue-950">
      <div className="flex">
        {ratingArr?.map((_, index) => {
          index = index + 1;
          // console.log(index);
          return (
            <Fragment key={index}>
              <FaStar
                className={index <= (hover || rating) ? "text-yellow-400 cursor-pointer" : "text-white"}
                size={40}
                onMouseMove={() => {
                  handleMouseEnter(index);
                }}
                onMouseLeave={() => {
                  handleMouseLeave();
                }}
                onClick={() => {
                  handleClick(index);
                }}
              />
            </Fragment>
          );
        })}
      </div>
      <p className="text-3xl font-poppins text-white">
        Your rating is : <span className="text-green-600"> {rating} </span>
      </p>
    </div>
  );
};

export default StarRating;
