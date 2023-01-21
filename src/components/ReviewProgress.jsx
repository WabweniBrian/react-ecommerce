import React from "react";

const ReviewProgress = ({ percentage, stars }) => {
  return (
    <div className="flex-align-center gap-2 mt-2">
      <h5 className="text-sm opacity-70 flex1 text-right">{stars} Star</h5>
      <div className="w-full h-2 bg-slate-200 rounded overflow-hidden flex-5">
        <div className={`h-full bg-accent w-[${percentage}%]`}></div>
      </div>
      <h5 className="text-sm opacity-70 flex1">{percentage}%</h5>
    </div>
  );
};

export default ReviewProgress;
