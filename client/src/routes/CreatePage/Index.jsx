import Editor from "components/Editor";
import "./CreatePage.css";
import Image from "components/Image";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAuthStore from "utils/authStore";

const CreatePage = () => {
  const [file, setFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const { currentUser } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/auth");
    }
  }, [navigate, currentUser]);

  const previewImgURL = file ? URL.createObjectURL(file) : null;

  return (
    <div className='createPage'>
      <div className='createTop'>
        <h1>{isEditing ? "Design your Pin" : "Create Pin"}</h1>
        <button>{isEditing ? "Done" : "Publish"}</button>
      </div>

      {isEditing ? (
        <Editor />
      ) : (
        <div className='createBottom'>
          {previewImgURL ? (
            <div className='preview'>
              <img
                src={previewImgURL}
                alt=''
              />
              <div
                className='editIcon'
                onClick={() => setIsEditing(true)}
              >
                <Image
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
                  <Image
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
