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
  const cloudinaryRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    console.log("HEllo");
    console.log(cloudinaryRef.current);
  }, []);
  return <h1>Hello world</h1>;
};

export default ImageWidget;
