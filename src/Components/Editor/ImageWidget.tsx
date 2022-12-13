import React, {
  type ReactElement,
  useEffect,
  useRef,
} from "react";
type prop = {
  setImageUrl: (string: string) => void;
};
const ImageWidget = (prop: prop): ReactElement => {
  const { setImageUrl } = prop;
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
          setImageUrl(result.info.url);
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
