import React, { useState, useEffect } from "react";
import { request } from "../http-helper";
import M from "materialize-css";

const CreatePost = () => {
  const formData = {
    title: "",
    description: "",
  };

  const [state, setState] = useState(formData);
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (imageUrl) {
      const payload = state;
      payload.image = imageUrl;
      request("/createpost", "post", payload, true).then((res) => {
        if (res.error) {
          M.toast({ html: res.error, classes: "red darken-3" });
        } else {
          M.toast({ html: res.message, classes: "green darken-3" });
        }
      });
    }
  }, [imageUrl]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setImage(image);
  };

  const hanldeSubmit = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "cloudinaryimage");
    fetch("https://api.cloudinary.com/v1_1/cloudinaryimage/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setImageUrl(data.url))
      .catch((err) => console.log(err));
  };

  return (
    <div className="create-post card input-field">
      <input
        type="text"
        name="title"
        placeholder="title"
        value={state.title}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="description"
        placeholder="description"
        value={state.description}
        onChange={handleChange}
      ></input>
      <div className="file-field input-field">
        <div className="btn darken-1">
          <span>Upload Image</span>
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button
        className="btn waves-effect waves-light blue darken-1"
        onClick={hanldeSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default CreatePost;
