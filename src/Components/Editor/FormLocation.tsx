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

interface props {
  title: MutableRefObject<string>;
  typeOfModule: MutableRefObject<string>;
  description: MutableRefObject<string>;
  locationCoordinates: MutableRefObject<number[] | null>;
  imageURL: MutableRefObject<string>;
  hint: MutableRefObject<string>;
  handleModuleUpdateClick: () => void;
}

const FormLocation = (props: props): ReactElement => {
  const { title, typeOfModule, description, locationCoordinates, imageURL, hint, handleModuleUpdateClick } = props;

  return (
    <ContainerForm typeOfModule={typeOfModule} handleModuleUpdateClick={handleModuleUpdateClick}>

      <BlockTitle title={title} />
      <BlockImageWidget imageURL={imageURL} />
      <BlockStory description={description} />
      <BlockLocationPicker locationCoordinates={locationCoordinates} />
      <BlockHint hint={hint} />

    </ContainerForm>
  );
};

export default FormLocation;
