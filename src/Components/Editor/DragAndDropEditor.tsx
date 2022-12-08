import React, {type FC, type ReactElement, useState, useCallback} from "react";

import { DndContext } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const gameModules = [{id:1, string:"hello"}, {id:2, string:"friend"}, {id:3, string:"turtle"}, {id:4, string:"poop"}];
const contents = gameModules.map((gameModule) => ({
  id: gameModule.id,
  content: gameModule.string,
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
      transition
    };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}

const DragAndDropEditor: FC = (): ReactElement => {
  const [state, setState] = useState<{ id: number; content: string }[]>(contents);
console.log(state)
  const handleDragEnd = useCallback(
    (event:any) => {
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
            <SortableItem key={item.id} id={item.id}>
              <div>
                {item.content}
              </div>
            </SortableItem>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default DragAndDropEditor;