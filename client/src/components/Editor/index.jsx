import Layers from "./components/Layers";
import Options from "./components/Options";
import WorkSpace from "./components/WorkSpace";
import "./Editor.css";
import React from "react";

const Editor = ({ prevImg }) => {
  return (
    <div className='editor'>
      <Layers prevImg={prevImg} />
      <WorkSpace prevImg={prevImg} />
      <Options prevImg={prevImg} />
    </div>
  );
};

export default Editor;
