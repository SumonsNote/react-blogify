import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";

export default function CreateBlog() {
  const [imagePreview, setImagePreview] = useState(null);
  const fileUploadRef = useRef();
  const { api } = useAxios();
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.click();
  };

  const uploadImageDisplay = () => {
    const uploadFile = fileUploadRef.current.files[0];
    const cachedURL = URL.createObjectURL(uploadFile);
    setImagePreview(cachedURL);
    console.log(uploadFile);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    try {
      const formDataToSend = new FormData();

      formDataToSend.append("title", formData.title);
      formDataToSend.append("tags", formData.tags);
      formDataToSend.append("content", formData.content);

      const imageFile = fileUploadRef.current.files[0];
      formDataToSend.append("thumbnail", imageFile);

      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/blogs`,
        formDataToSend
      );

      if (response.data.status === "success") {
        navigate("/me");
      }
    } catch (error) {
      setError("root.random", {
        type: "random",
        message: `Something went wrong: ${error.message}`,
      });
    }
  };

  return (
    <section>
      <div className="container">
        <form
          encType="multipart/form-data"
          onSubmit={handleSubmit(submitForm)}
          className="createBlog"
        >
          <div
            className="grid place-items-center rounded-md my-4 h-[150px] bg-slate-600/20"
            style={{
              backgroundImage: imagePreview ? `url(${imagePreview})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: "0.8",
            }}
          >
            <label
              onClick={handleImageUpload}
              htmlFor="file-upload"
              className="flex items-center gap-4 hover:scale-110 transition-all cursor-pointer"
            >
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <p>Upload Your Image</p>
              </>
            </label>
            <input
              type="file"
              id="file"
              hidden
              ref={fileUploadRef}
              onChange={uploadImageDisplay}
            />
          </div>
          <div className="mb-6">
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              id="title"
              name="title"
              placeholder="Enter your blog title"
            />
          </div>

          <div className="mb-6">
            <input
              {...register("tags", { required: "Tags is required" })}
              type="text"
              id="tags"
              name="tags"
              placeholder="Your Comma Separated Tags Ex. JavaScript, React, Node, Express,"
            />
          </div>

          <div className="mb-6">
            <textarea
              {...register("content", { required: "Content is required" })}
              id="content"
              name="content"
              placeholder="Write your blog content"
              rows="8"
            ></textarea>
          </div>
          <p>{errors?.root?.random?.message}</p>

          <button className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
            Create Blog
          </button>
        </form>
      </div>
    </section>
  );
}
