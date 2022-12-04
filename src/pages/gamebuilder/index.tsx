import { type NextPage } from "next";
import SignInForm from "../../Components/SignInForm";
import SignUpForm from "../../Components/SignUpForm";
// import Link from "next/link";

const GameBuilder: NextPage = () => {
  return (
    <>
    <SignUpForm/>
    <SignInForm/>
    </>
  );
};

export default GameBuilder;