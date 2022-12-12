import React, { type FC, type ReactElement, useState, useCallback } from "react";
import {
  DndContext,
  useSensor,
  useSensors,
  KeyboardSensor,
  PointerSensor
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates
} from "@dnd-kit/sortable";
import SortableItem from "./Helpers/SortableItem";
import MockGameModules from "./Helpers/MockGameModules";
import AddModuleButton from "./Helpers/AddModuleButton";

// Make an array of mock modules to be displayed.
const contents = MockGameModules.map((gameModule, index) => ({
  id: index + 1,
  moduleId: gameModule._id,
  title: gameModule.title,
  typeOfModule: gameModule.typeOfModule,
}));

const DragAndDropEditor: FC = (): ReactElement => {

  const [gameModules, setGameModules] = useState<{ id: number, title: string, moduleId: number }[]>(contents);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = useCallback(
    (event: any) => {
      // console.log(event)
      const { active, over } = event;
      if (over === null) {
        return;
      }
      if (active.id !== over.id) {
        const oldIndex = gameModules
          .map((item) => item.id)
          .indexOf(active.id);
        const newIndex = gameModules
          .map((item) => item.id)
          .indexOf(over.id);

        console.log(oldIndex)
        console.log(newIndex)
        const newModulesOrder = arrayMove(gameModules, oldIndex, newIndex);
        setGameModules(newModulesOrder);
      }
    },
    [gameModules]
  );

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={gameModules}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex flex-col justify-start w-full h-full gap-8 text-center item-center">
          {gameModules.map((item) => (
            <SortableItem key={item.id} id={item.id}>
              <div className='flex items-center justify-center w-1/2 h-full bg-darkGrey'>
                {item.title}
                {item.id}
              </div>
            </SortableItem>
          ))}

          <AddModuleButton />

        </div>
      </SortableContext>
    </DndContext>
  );
};

export default DragAndDropEditor;
