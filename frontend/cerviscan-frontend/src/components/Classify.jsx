import React, { useState } from 'react';
import '../css files/classify.css';

export const Classify = () => {
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitImage = async () => {
    try {
      if (!image) {
        alert("Please select an image");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "cerviscan");
      formData.append("cloud_name", "dbx2fafex");

      const response = await fetch("https://api.cloudinary.com/v1_1/dbx2fafex/image/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Image uploaded successfully");
        setPreviewImage(null);
      } else {
        const errorData = await response.json();
        console.error("Upload failed:", errorData);
        alert("Upload failed. Please try again.");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image. Please try again later.");
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    setPreviewImage(URL.createObjectURL(selectedImage)); // Preview selected image
  };

  return (
    <div className="container">
      <div className="image-preview">
        {previewImage ? (
          <img src={previewImage} alt="Preview" />
        ) : (
          <img src="../assets/upload.png" alt="Image Icon" />
        )}
        {loading && <div className="loading"></div>}
      </div>
      <div>
        <input type="file" onChange={handleFileChange} />
      </div>
      <button onClick={submitImage} disabled={loading}>Upload Image</button>
    </div>
  );
};