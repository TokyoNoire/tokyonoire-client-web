import React, { type ReactElement, type MutableRefObject, } from "react";

import ContainerForm from "./FormBlocks/ContainerForm";
import BlockTitle from "./FormBlocks/BlockTitle";
import BlockImageWidget from "./FormBlocks/BlockImageWidget";
import BlockStory from "./FormBlocks/BlockStory";

interface props {
  title: MutableRefObject<string>;
  typeOfModule: MutableRefObject<string>;
  description: MutableRefObject<string>;
  imageURL: MutableRefObject<string>;
  handleModuleUpdateClick: () => void;
}

const FormNarrative = (props: props): ReactElement => {
  const { title, typeOfModule, description, imageURL, handleModuleUpdateClick } = props;

  return (
    <ContainerForm typeOfModule={typeOfModule} handleModuleUpdateClick={handleModuleUpdateClick}>

      <BlockTitle title={title} />
      <BlockImageWidget imageUrl={imageUrl} />
      <BlockStory description={description} />

    </ContainerForm>
  );
};

export default FormNarrative;
