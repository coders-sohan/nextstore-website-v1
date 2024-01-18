import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ProductTimeCounter = ({ date }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerEnded = !Object.keys(timeLeft).length;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-2">
      {timerEnded ? (
        <span className="text-secondary font-openSans font-semibold">
          Offer is ended !
        </span>
      ) : (
        <>
          <div>
            {timeLeft.days && (
              <p className="text-sm mr-1">
                <span className="text-dark-special font-bold mr-0.5">
                  {timeLeft.days}
                </span>{" "}
                <span className="text-gray-dark text-sm">Days</span>
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-primary text-white text-sm font-raleway rounded-full w-7 h-7 flex items-center justify-center">
              {(timeLeft.hours ? timeLeft.hours : "00")
                .toString()
                .padStart(2, "0")}
            </span>
            <span className="text-gray-dark font-extrabold">:</span>
            <span className="bg-secondary text-white text-sm font-raleway rounded-full w-7 h-7 flex items-center justify-center">
              {(timeLeft.minutes ? timeLeft.minutes : "00")
                .toString()
                .padStart(2, "0")}
            </span>
            <span className="text-gray-dark font-extrabold">:</span>
            <span className="bg-tertiary text-white text-sm font-raleway rounded-full w-7 h-7 flex items-center justify-center">
              {(timeLeft.seconds ? timeLeft.seconds : "00")
                .toString()
                .padStart(2, "0")}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

ProductTimeCounter.propTypes = {
  date: PropTypes.string,
};

export default ProductTimeCounter;
