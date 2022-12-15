import React, {
  type ReactElement,
  type MutableRefObject,
} from "react";

import ContainerForm from "./FormBlocks/ContainerForm";
import BlockTitle from "./FormBlocks/BlockTitle";
import BlockImageWidget from "./FormBlocks/BlockImageWidget";
import BlockStory from "./FormBlocks/BlockStory";
import BlockLocationPicker from "./FormBlocks/BlockLocationPicker";
import BlockHint from "./FormBlocks/BlockHint";
import BlockUpdateButton from "./FormBlocks/BlockUpdateButton";

interface props {
  title: MutableRefObject<string>;
  typeOfModule: MutableRefObject<string>;
  description: MutableRefObject<string>;
  coordinates: MutableRefObject<number[] | null>;
  imageUrl: MutableRefObject<string>;
  hint: MutableRefObject<string>;
  handleModuleUpdateClick: () => void;
}

const FormLocation = (props: props): ReactElement => {
  const { title, typeOfModule, description, coordinates, imageUrl, hint, handleModuleUpdateClick } = props;

  return (
    <ContainerForm typeOfModule={typeOfModule}>

      <BlockTitle title={title} />
      <BlockImageWidget imageUrl={imageUrl} />
      <BlockStory description={description} />
      <BlockLocationPicker coordinates={coordinates} />
      <BlockHint hint={hint} />
      <BlockUpdateButton handleModuleUpdateClick={handleModuleUpdateClick} />

    </ContainerForm>
  );
};

export default FormLocation;
