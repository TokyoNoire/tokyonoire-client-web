import React, {
  type FC,
  type ReactElement,
  useState,
  useEffect,
  useRef,
} from "react";
import Image from "next/image";
import Script from "next/script";

const ImageWidget = (): ReactElement => {
  const cloudinaryRef = useRef<any>();
  const widgetRef = useRef<any>();
  const [imageUrl, setImageUrl] = useState<null | string>(null);
  useEffect(() => {
    // if (cloudinaryRef.current.url !== "url") {
    //   console.log(cloudinaryRef.current.url);
    // }
    cloudinaryRef.current = window.cloudinary;
    //console.log("🍎", cloudinaryRef.current.WIDGET_SOURCES.URL);
    widgetRef.current = cloudinaryRef.current?.createUploadWidget(
      {
        cloudName: "diyzmibyd",
        uploadPreset: "xc76wyzc",
      },
      function (error: any, result: any) {
        setImageUrl(result.info.url);
        console.log(imageUrl);
      },
      []
    );
  }, []);
  return (
    <button id="themeButton" onClick={() => widgetRef.current?.open()}>
      Select Photo
    </button>
  );
};

export default ImageWidget;
