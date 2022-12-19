import React, {
  type ReactElement,
  type MutableRefObject,
  useEffect,
  useState,
  useRef,
} from "react";
type props = {
  imageURL: MutableRefObject<string>;
};
const BlockImageWidget = (props: props): ReactElement => {
  const { imageURL } = props;
  const [displayImage, setDisplayImage] = useState<string | null>(imageURL ? imageURL.current : null);

  const cloudinaryRef = useRef<any>();
  const widgetRef = useRef<any>();
  const path = useRef<string>()

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current?.createUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDNAME,
        uploadPreset: process.env.NEXT_PUBLIC_UPLOADPRESET,
        styles: {
          palette: {
            window: "#FFF",
            windowBorder: "#90A0B3",
            tabIcon: "#0E2F5A",
            menuIcons: "#5A616A",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#0078FF",
            action: "#FF620C",
            inactiveTabIcon: "#0E2F5A",
            error: "#F44235",
            inProgress: "#0078FF",
            complete: "#20B832",
            sourceBg: "#E4EBF1"
          },
          frame: {
            background: "#0E2F5B99"
          },
          fonts: {
            "'Cute Font', cursive": "https://fonts.googleapis.com/css?family=Cute+Font",
          }
        }
      },
      
      function (error: any, result: any) {
       
        if (result.info.url !== undefined) {
          let path = result.info.path
          imageURL.current = `https://res.cloudinary.com/diyzmibyd/image/upload/q_auto/${path}`
          setDisplayImage(`https://res.cloudinary.com/diyzmibyd/image/upload/q_auto/${path}`)
          // setImageUrl(result.info.url);
        }
      }
    );
  }, []);

  return (
    <section className="flex flex-col justify-center gap-4">
      <div
        {...(imageURL.current && {
          className: "flex flex-col justify-center border-2 rounded-md border-dotted border-[#353535]"
        })}


      >
        {displayImage && (
          <img
            className="self-center w-9/12"
            src={`${displayImage}`}
            alt="preview"
          />
        )}
      </div>
      <div className="flex justify-center gap-2">
        <button
          id="themeButton"
          className="self-center w-9/12 uppercase font-heading"
          onClick={() => widgetRef.current?.open()}
        >
          {imageURL.current ? "Modify Photo" : "Select Photo"}
        </button>

        {imageURL.current &&
          <button
            id="themeButton"
            className="self-center w-9/12 uppercase font-heading"
            onClick={() => {
              imageURL.current = "";
              setDisplayImage("");
            }}
          >
            Delete
          </button>
        }
      </div>
    </section>
  );
};

export default BlockImageWidget;
