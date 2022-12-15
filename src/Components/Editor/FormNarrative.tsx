import React, { type ReactElement, type MutableRefObject, } from "react";

import ContainerForm from "./FormBlocks/ContainerForm";
import BlockTitle from "./FormBlocks/BlockTitle";
import BlockImageWidget from "./FormBlocks/BlockImageWidget";
import BlockStory from "./FormBlocks/BlockStory";
import BlockUpdateButton from "./FormBlocks/BlockUpdateButton";

interface props {
  title: MutableRefObject<string>;
  typeOfModule: MutableRefObject<string>;
  description: MutableRefObject<string>;
  imageUrl: MutableRefObject<string>;
  handleModuleUpdateClick: () => void;
}

const FormNarrative = (props: props): ReactElement => {
  const { title, typeOfModule, description, imageUrl, handleModuleUpdateClick } = props;

  return (
    <ContainerForm typeOfModule={typeOfModule}>

      <BlockTitle title={title} />
      <BlockImageWidget imageUrl={imageUrl} />
      <BlockStory description={description} />
      <BlockUpdateButton handleModuleUpdateClick={handleModuleUpdateClick} />

    </ContainerForm>
  );
};

export default FormNarrative;
