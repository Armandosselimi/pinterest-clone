import Image from "components/Image";
import React from "react";
import useEditorStore from "utils/editorStore";

const Layers = () => {
  const { selectedLayer, setSelectedLayer } = useEditorStore();

  const handleSelectedLayer = (selectedLayer) => {
    setSelectedLayer(selectedLayer);
  };

  return (
    <div className='layers'>
      <div className='layersTitle'>
        <h3>Layers</h3>
        <p>Select a layer to edit</p>
      </div>
      <div
        onClick={() => handleSelectedLayer("text")}
        className={`layer ${selectedLayer === "text" ? "selected" : ""}`}
      >
        <div className='layerImage'>
          <Image
            path='/general/text.png'
            w={48}
            h={48}
          />
        </div>
        <span>Add Text</span>
      </div>
      <div
        onClick={() => handleSelectedLayer("canvas")}
        className={`layer ${selectedLayer === "canvas" ? "selected" : ""}`}
      >
        <div
          className='layerImage'
          style={{ backgroundColor: "teal" }}
        ></div>
        <span>Canvas</span>
      </div>
    </div>
  );
};

export default Layers;
