import React, {
  type FC,
  type ReactElement,
  useState,
  useEffect,
  useRef,
} from "react";
import Image from "next/image";
import { ResetTvOutlined } from "@mui/icons-material";

const ImageWidget = (): ReactElement => {
  const cloudinaryRef = useRef<any>();
  const widgetRef = useRef<any>();
  const imageUrl = useRef<null | string>(null);

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current?.createUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDNAME,
        uploadPreset: process.env.NEXT_PUBLIC_UPLOADPRESET,
      },
      function (error: any, result: any) {
        if (result.info.url !== undefined) {
          imageUrl.current = result.info.url;
        }
      }
    );
  }, []);

  return (
    <button id="themeButton" onClick={() => widgetRef.current?.open()}>
      Select Photo
    </button>
  );
};

export default ImageWidget;
