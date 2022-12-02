import React, {type FC, type ReactElement} from "react";
import Image from 'next/image';
import heroImage from 'public/Hero.jpg';

const Hero: FC = (): ReactElement => {
  return (
    <div className="pt-5">
       <Image
      src={heroImage}
      alt="Tokyo Noire Hero"
      
    />
    </div>
  );
};

export default Hero;