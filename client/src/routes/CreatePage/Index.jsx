import Editor from "components/Editor";
import "./CreatePage.css";
import IKIImage from "components/Image";
import React, { useEffect, useRef, useState } from "react";
import { data, useNavigate } from "react-router";
import useAuthStore from "utils/authStore";
import useEditorStore from "utils/editorStore";
import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import apiRequest from "utils/apiRequest";
import BoardForm from "./BoardForm";

const addPost = async (post) => {
  const res = await apiRequest.post("/pins", post);
  return res.data;
};

const CreatePage = () => {
  const [file, setFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [prevImg, setPrevImg] = useState({ url: "", height: 0, width: 0 });
  const { currentUser } = useAuthStore();
  const navigate = useNavigate();
  const formRef = useRef();
  const { textOptions, canvasOptions, resetStore } = useEditorStore();
  const [newBoard, setNewBoard] = useState("");
  const [isNewBoardOpen, setIsNewBoardOpen] = useState(false);

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

  const mutation = useMutation({
    mutationFn: addPost,
    onSuccess: (data) => {
      resetStore();
      navigate(`/pin/${data._id}`);
    },
  });

  const handleSubmit = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      const formData = new FormData(formRef.current);
      formData.append("media", file);
      formData.append("textOptions", JSON.stringify(textOptions));
      formData.append("canvasOptions", JSON.stringify(canvasOptions));
      formData.append("newBoard", newBoard);

      mutation.mutate(formData);
    }
  };

  const { data, isPending, error } = useQuery({
    queryKey: ["formBoards"],
    queryFn: () => apiRequest.get(`/boards`).then((res) => res.data),
  });

  const handleNewBoard = () => {
    setIsNewBoardOpen((prev) => !prev);
  };

  return (
    <div className='createPage'>
      <div className='createTop'>
        <h1>{isEditing ? "Design your Pin" : "Create Pin"}</h1>
        <button onClick={handleSubmit}>{isEditing ? "Done" : "Publish"}</button>
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
                  We recommend using high quality .jpg files less than 20 MB or
                  .mp4 files less than 200 MB.
                </div>
              </label>
              <input
                type='file'
                id='file'
                hidden
                onChange={(e) => setFile(e.target.files[0])}
              />
            </>
          )}
          <form
            className='createForm'
            ref={formRef}
          >
            <div className='createFormItem'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                placeholder='Add a title'
                name='title'
                id='title'
              />
            </div>
            <div className='createFormItem'>
              <label htmlFor='description'>Description</label>
              <textarea
                rows={6}
                type='text'
                placeholder='Add a detailed description'
                name='description'
                id='description'
              />
            </div>
            <div className='createFormItem'>
              <label htmlFor='link'>Link</label>
              <input
                type='text'
                placeholder='Add a link'
                name='link'
                id='link'
              />
            </div>
            {(!isPending || !error) && (
              <div className='createFormItem'>
                <label htmlFor='board'>Board</label>
                <select
                  name='board'
                  id='board'
                >
                  <option value=''>Choose a board</option>
                  {data?.map((board) => (
                    <option
                      value={board._id}
                      key={board._id}
                    >
                      {board.title}
                    </option>
                  ))}
                </select>
                <div className='newBoard'>
                  {newBoard && (
                    <div className='newBoardContainer'>
                      <div className='newBoardItem'>{newBoard}</div>
                    </div>
                  )}
                  <div
                    className='createBoardButton'
                    onClick={handleNewBoard}
                  >
                    Create new board
                  </div>
                </div>
              </div>
            )}
            <div className='createFormItem'>
              <label htmlFor='tags'>Tagged topics</label>
              <input
                type='text'
                placeholder='Add tags'
                name='tags'
                id='tags'
              />
              <small>Don&apos;t worry, people won&apos;t see your tags</small>
            </div>
          </form>
          {isNewBoardOpen && (
            <BoardForm
              setIsNewBoardOpen={setIsNewBoardOpen}
              setNewBoard={setNewBoard}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CreatePage;
