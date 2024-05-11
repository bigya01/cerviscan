import React, {useState} from "react";

import { FileInput, Label, Button} from "flowbite-react";

export function Classify() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [resultobtained,setresultobtained] = useState(false);
    const [result,setresult] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    fetch('http://127.0.0.1:8000/api/classify', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setresult(data.result)
        setresultobtained(true)

        // console.log('File uploaded successfully:', data);
        // Handle success, update UI etc.
      })
      .catch(error => {
        console.error('There was a problem with the upload:', error);
        // Handle error, show error message etc.
      });
  };
  return (
    <div>

    {resultobtained?
      <div>
        <img src= {selectedFile}></img>
        <h1>{result}</h1>
      </div>
      :

      <>

    <div className="flex w-full items-center justify-center">
      <Label
        htmlFor="dropzone-file"
        className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <FileInput id="dropzone-file" className="hidden" onChange={handleFileChange}/>
      </Label>
    </div>
    <Button color='Blue' onClick={handleUpload}>Click me</Button>

    </>
    }
        </div>

  );
}




































// import React, { useState } from 'react';
// import '../css files/classify.css';

// export const Classify = () => {
//   const [image, setImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const submitImage = async () => {
//     try {
//       if (!image) {
//         alert("Please select an image");
//         return;
//       }

//       setLoading(true);

//       const formData = new FormData();
//       formData.append("file", image);
//       formData.append("upload_preset", "cerviscan");
//       formData.append("cloud_name", "dbx2fafex");

//       const response = await fetch("https://api.cloudinary.com/v1_1/dbx2fafex/image/upload", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         alert("Image uploaded successfully");
//         setPreviewImage(null);
//       } else {
//         const errorData = await response.json();
//         console.error("Upload failed:", errorData);
//         alert("Upload failed. Please try again.");
//       }

//       setLoading(false);
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       alert("Error uploading image. Please try again later.");
//       setLoading(false);
//     }
//   };

//   const handleFileChange = (e) => {
//     const selectedImage = e.target.files[0];
//     setImage(selectedImage);
//     setPreviewImage(URL.createObjectURL(selectedImage)); // Preview selected image
//   };

//   return (
//     <div className="container">
//       <div className="image-preview">
//         {previewImage ? (
//           <img src={previewImage} alt="Preview" />
//         ) : (
//           <img src="../assets/upload.png" alt="Image Icon" />
//         )}
//         {loading && <div className="loading"></div>}
//       </div>
//       <div>
//         <input type="file" onChange={handleFileChange} />
//       </div>
//       <button onClick={submitImage} disabled={loading}>Upload Image</button>
//     </div>
//   );
// };
