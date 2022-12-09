import React, {
  type FC,
  type ReactElement,
  useState,
  useEffect,
  useRef,
} from "react";
import Image from "next/image";
import { ResetTvOutlined } from "@mui/icons-material";
type prop = {
  imageUrl: string | null;
};
const ImageWidget = (prop: prop): ReactElement => {
  let { imageUrl } = prop;
  const cloudinaryRef = useRef<any>();
  const widgetRef = useRef<any>();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current?.createUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDNAME,
        uploadPreset: process.env.NEXT_PUBLIC_UPLOADPRESET,
      },
      function (error: any, result: any) {
        if (result.info.url !== undefined) {
          console.log(result.info.url);
          imageUrl = result.info.url;
        }
      }
    );
  }, []);

  return (
    <button
      id="themeButton"
      className="uppercase font-heading"
      onClick={() => widgetRef.current?.open()}
    >
      Select Photo
    </button>
  );
};

export default ImageWidget;
