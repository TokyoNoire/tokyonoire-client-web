import { type NextPage } from "next";
import SignInForm from "../../../Components/SignInForm";
import SignUpForm from "../../../Components/SignUpForm";
import Script from "next/script";
import ImageWidget from "../../../Components/Editor/ImageWidget";
// import Link from "next/link";
//cloudinary image widget!!!

const GameBuilder: NextPage = () => {
  return (
    <>
      <SignUpForm />
      <SignInForm />
      <div className="container">
        <ImageWidget />
      </div>
    </>
  );
};

export default GameBuilder;
