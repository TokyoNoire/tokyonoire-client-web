import React, {
  type FC,
  type ReactElement,
  useState,
  useCallback,
} from "react";
import { DndContext } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const gameModules = [
  {
    _id: 231,
    typeOfModule: "question",
    title: "Akika Spotted",
    question: "",
    answer: "",
    image: "",
    description:
      "The last time she was seen was sitting on an unusual bench near the Mori Tower, in Roppongi.",
    locationCoordinates: [35.659439, 139.728384],
  },
  {
    _id: 312,
    typeOfModule: "location",
    title: "The Heiress on the Loose",
    question: "",
    answer: "",
    image: "",
    description:
      "The last time she was seen was sitting on an unusual bench near the Mori Tower, in Roppongi.",
    locationCoordinates: [35.659439, 139.728384],
  },
];
const contents = gameModules.map((gameModule, index) => ({
  id: index,
  moduleId: gameModule._id,
  title: gameModule.title,
  typeOfModule: gameModule.typeOfModule,
}));

interface SortableItemProps {
  id: number;
  children: ReactElement;
}

function SortableItem({ id, children }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div
      className="self-center"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
}

const DragAndDropEditor: FC = (): ReactElement => {
  const [state, setState] =
    useState<
      { id: number; title: string; moduleId: number; typeOfModule: string }[]
    >(contents);
  const handleDragEnd = useCallback(
    (event: any) => {
      const { active, over } = event;
      if (over === null) {
        return;
      }
      if (active.id !== over.id) {
        const oldIndex = state
          .map((item) => {
            return item.id;
          })
          .indexOf(active.id);
        const newIndex = state
          .map((item) => {
            return item.id;
          })
          .indexOf(over.id);
        const newState = arrayMove(state, oldIndex, newIndex);
        setState(newState);
      }
    },
    [state]
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={state}>
        <div className="w-full h-full flexCenterDiv">
          {state.map((item) => (
            <SortableItem key={item.moduleId} id={item.id}>
              <div className="h-32 mt-3 text-center rounded-md flexCenterDiv bg-darkGrey w-52">
                <h1 className="mb-3 ml-5 text-lg text-left text-black uppercase font-heading">
                  {item.typeOfModule}
                </h1>
                <p className="font-body1">{item.title}</p>
              </div>
            </SortableItem>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default DragAndDropEditor;
