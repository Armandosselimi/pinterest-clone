import React from "react";

const WorkSpace = ({ prevImg }) => {
  return (
    <div className='workspace'>
      <div className='canvas'>
        <img
          src={prevImg.url}
          alt=''
        />
      </div>
    </div>
  );
};

export default WorkSpace;
