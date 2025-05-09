import "./CreatePage.css";
import Image from "components/Image";
import React from "react";

const CreatePage = () => {
  return (
    <div className='createPage'>
      <div className='createTop'>
        <h1>Create Pin</h1>
        <button>Publish</button>
      </div>
      <div className='createBottom'>
        <div className='upload'>
          <div className='uploadTitle'>
            <Image
              path='/general/upload.svg'
              alt=''
            />
            <span>Choose a file</span>
          </div>
          <div className='uploadInfo'>
            We recommend using high quality .jpeg files less than 20 MB or .mp4
            files less than 200 MB.
          </div>
        </div>
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
    </div>
  );
};

export default CreatePage;
