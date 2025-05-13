import React, { useState } from "react";
import useEditorStore from "utils/editorStore";
import { HexColorPicker } from "react-colorful";

const Options = () => {
  const { selectedLayer, textOptions, setTextOptions } = useEditorStore();
  const [openColorPicker, setOpenColorPicker] = useState(false);
  return (
    <div className='options'>
      {selectedLayer === "text" ? (
        <div className=''>
          <div className='editingOption'>
            <span>Font Size</span>
            <input
              type='number'
              value={textOptions.fontSize}
              onChange={(e) =>
                setTextOptions({ ...textOptions, fontSize: e.target.value })
              }
            />
          </div>
          <div className='editingOption'>
            <span>Color</span>
            <div className='textColor'>
              <div
                className='colorPreview'
                style={{ backgroundColor: textOptions.color }}
                onClick={() => setOpenColorPicker((prev) => !prev)}
              />
              {openColorPicker && (
                <div className='colorPicker'>
                  <HexColorPicker
                    onChange={(color) =>
                      setTextOptions({ ...textOptions, color })
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Options;
