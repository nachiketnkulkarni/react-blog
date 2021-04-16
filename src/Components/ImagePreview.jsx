import React, { useState } from "react";

function ImagePreview(props) {
  const [file, setFile] = useState(null);
  const { setFieldValue, name } = props;

  const onFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // console.log(typeof reader.result);
      setFieldValue(name, reader.result);
      setFile(URL.createObjectURL(file));
    };
  };
  return (
    <div>
      <input type='file' onChange={(e) => onFileChange(e)} />
      <img src={file} alt='' style={{ maxHeight: "200px" }} />
    </div>
  );
}

export default ImagePreview;
