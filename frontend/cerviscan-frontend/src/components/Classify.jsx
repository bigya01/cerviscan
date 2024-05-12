import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import '../css files/classify.css';

export function Classify() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [resultObtained, setResultObtained] = useState(false);
    const [result, setResult] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setPreviewImage(URL.createObjectURL(file));
        console.log('Filename:', file.name);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/classify', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setResult(data.result);
            setResultObtained(true);
        } catch (error) {
            console.error('There was a problem with the upload:', error);
            alert('There was a problem with the upload. Please try again.');
        }
    };

    const handleContainerClick = () => {
        fileInputRef.current.click();
    };

    // Function to generate result text with bullet points and types
    const getResultText = (type) => {
        switch (type) {
            case 1:
                return (
                    <>
                        <p>TYPE 1</p>
                        <ul>
                            <li>Completely Ectocervical</li>
                            <li>Fully Visible</li>
                            <li>Small or Large Ectocervical Component</li>
                        </ul>
                    </>
                );
            case 2:
                return (
                    <>
                        <p>TYPE 2</p>
                        <ul>
                            <li>Has an Endocervical component</li>
                            <li>Fully Visible</li>
                            <li>May have Ectocervical Component (small or large)</li>
                        </ul>
                    </>
                );
            case 3:
                return (
                    <>
                        <p>TYPE 3</p>
                        <ul>
                            <li>Has an Endocervical Component</li>
                            <li>Is NOT fully visible</li>
                            <li>May have Ectocervical component (small or large)</li>
                        </ul>
                    </>
                );
            default:
                return "Unknown Type";
        }
    };

    return (
        <div>
            {resultObtained ? (
                <div>
                    <img src={selectedFile}></img>
                    <div>{getResultText(result)}</div>
                </div>
            ) : (
                <>
                    <div className="image-container" onClick={handleContainerClick}>
                        {previewImage && (
                            <img src={previewImage} alt="Preview" className="image-preview" />
                        )}
                        {!selectedFile && (
                            <label htmlFor="file-upload" className="upload-icon-container">
                                <FontAwesomeIcon icon={faCloudUploadAlt} style={{ color: "#9b005c", fontSize: "64px" }} className='cloud-icon' />
                                <p className="upload-text">Upload your image here</p>
                            </label>
                        )}
                        <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                            ref={fileInputRef}
                        />
                    </div>
                    <div className="submitbutton-container">
                        <button className="submitbutton" onClick={handleUpload}>Submit</button>
                    </div>
                </>
            )}
        </div>
    );
}





































// import React, { useState,useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
// import '../css files/classify.css'

// export function Classify() {
//     const [selectedFile, setSelectedFile] = useState(null);

//     const [resultobtained,setresultobtained] = useState(false);
//     const [result,setresult] = useState(null);

//     const [previewImage, setPreviewImage] = useState(null);

//     const fileInputRef = useRef(null);

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         setSelectedFile(file);
//         setPreviewImage(URL.createObjectURL(file));
//         console.log('Filename:', file.name);
//     };

//     const handleUpload = () => {
//         if (!selectedFile) {
//             alert('Please select a file');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('image', selectedFile);


//         fetch('http://127.0.0.1:8000/api/classify', {
//             method: 'POST',
//             body: formData,
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {

//             setresult(data.result)
//             setresultobtained(true)
//             // Handle result here

//         })
//         .catch(error => {
//             console.error('There was a problem with the upload:', error);
//             alert('There was a problem with the upload. Please try again.');
//         });
//     };

//     const handleContainerClick = () => {
//         fileInputRef.current.click();
//     };

//     return (
//         <div>
//             {resultobtained?
//             <div>
//                 <img src= {selectedFile}></img>
//                 <h1>{result}</h1>
//             </div>
//         :

//       <>
//     <div className="image-container" onClick={handleContainerClick}>
//                 {previewImage && (
//                     <img src={previewImage} alt="Preview" className="image-preview" />
//                 )}
//                 {!selectedFile && (
//                     <label htmlFor="file-upload" className="upload-icon-container">
//                         <FontAwesomeIcon icon={faCloudUploadAlt} style={{ color: "#9b005c", fontSize: "64px" }} className='cloud-icon' />
//                         <p className="upload-text">Upload your image here</p>
//                     </label>
//                 )}
//                 <input
//                     id="file-upload"
//                     type="file"
//                     className="hidden"
//                     onChange={handleFileChange}
//                     ref={fileInputRef}
//                 />
//             </div>
//             <div className="submitbutton-container">
//                 <button className="submitbutton" onClick={handleUpload}>Submit</button>
//             </div>
            
//       </>}
            
//         </div>
//     );
// }
