import Editor from "components/Editor";
import "./CreatePage.css";
import IKIImage from "components/Image";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAuthStore from "utils/authStore";

const CreatePage = () => {
  const [file, setFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [prevImg, setPrevImg] = useState({ url: "", height: 0, width: 0 });
  const { currentUser } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/auth");
    }
  }, [navigate, currentUser]);

  useEffect(() => {
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    const img = new Image();
    img.src = objectUrl;

    img.onload = () => {
      setPrevImg({
        url: objectUrl,
        width: img.width,
        height: img.height,
      });
    };

    return () => {
      URL.revokeObjectURL(objectUrl); // Clean up
    };
  }, [file]);

  return (
    <div className='createPage'>
      <div className='createTop'>
        <h1>{isEditing ? "Design your Pin" : "Create Pin"}</h1>
        <button>{isEditing ? "Done" : "Publish"}</button>
      </div>

      {isEditing ? (
        <Editor prevImg={prevImg} />
      ) : (
        <div className='createBottom'>
          {prevImg.url ? (
            <div className='preview'>
              <img
                src={prevImg.url}
                alt=''
              />
              <div
                className='editIcon'
                onClick={() => setIsEditing(true)}
              >
                <IKIImage
                  path='/general/edit.svg'
                  alt=''
                />
              </div>
            </div>
          ) : (
            <>
              <label
                htmlFor='file'
                className='upload'
              >
                <div className='uploadTitle'>
                  <IKIImage
                    path='/general/upload.svg'
                    alt=''
                  />
                  <span>Choose a file</span>
                </div>
                <div className='uploadInfo'>
                  We recommend using high quality .jpeg files less than 20 MB or
                  .mp4 files less than 200 MB.
                </div>
              </label>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                type='file'
                id='file'
                hidden
              />
            </>
          )}
          <form className='createForm'>
            <div className='createFormItem'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                name='title'
                id='title'
                placeholder='Add a title'
              />
            </div>
            <div className='createFormItem'>
              <label htmlFor='description'>Description</label>
              <textarea
                rows={6}
                type='text'
                name='description'
                id='description'
                placeholder='Add a detailed description'
              />
            </div>
            <div className='createFormItem'>
              <label htmlFor='link'>Link</label>
              <input
                type='text'
                name='link'
                id='link'
                placeholder='Add a link'
              />
            </div>
            <div className='createFormItem'>
              <label htmlFor='board'>Board</label>
              <select
                name='board'
                id='board'
              >
                <option value='1'>Board 1</option>
                <option value='2'>Board 2</option>
                <option value='3'>Board 3</option>
              </select>
            </div>
            <div className='createFormItem'>
              <label htmlFor='tag'>Tagged topics</label>
              <input
                type='text'
                name='tag'
                id='tag'
                placeholder='Search for a tag'
              />
              <small>Don't worry, people won't see your tags.</small>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreatePage;
