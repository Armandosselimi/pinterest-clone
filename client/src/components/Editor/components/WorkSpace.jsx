import Image from "components/Image";
import React from "react";
import useEditorStore from "utils/editorStore";

const WorkSpace = ({ prevImg }) => {
  const { textOptions, setTextOptions } = useEditorStore();
  return (
    <div className='workspace'>
      <div className='canvas'>
        <img
          src={prevImg.url}
          alt=''
        />
        {textOptions.text && (
          <div
            className='text'
            style={{
              left: textOptions.left,
              top: textOptions.top,
              fontSize: `${textOptions.fontSize}px`,
            }}
          >
            <input
              type='text'
              value={textOptions.text}
              onChange={(e) =>
                setTextOptions({ ...textOptions, text: e.target.value })
              }
              style={{ color: textOptions.color }}
            />
            <div
              className='deleteTextButton'
              onClick={() => setTextOptions({ ...textOptions, text: "" })}
            >
              <Image
                path='/general/delete.svg'
                alt=''
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkSpace;
