import { openUploadWidget } from "../utils/CloudingServices.js";
// import dotenv from "dotenv"
// dotenv.config()
const CloudinaryUpload = (props) => {

  const uploadImageWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: "dbk1ngrem",
        uploadPreset: "rupwihle",
        sources: ["local"]
      },
      function (error, result) {
        if (!error && result.event === "success") {
          console.log(result.info);
          props.setSongFileName(result.info.original_filename)
          props.setUrl(result.info.secure_url)
          console.log(result.info);
          alert("file uploaded successfully")
          // props.onImageUpload(result.info);

        }
        else{
          if(error){
            alert("could not upload")
            console.log(error);
          }
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className=" bg-white text-black rounded-full px-3 py-2 hover:scale-105" onClick={uploadImageWidget}>
      Upload track
    </button>
  );
};

export default CloudinaryUpload;
