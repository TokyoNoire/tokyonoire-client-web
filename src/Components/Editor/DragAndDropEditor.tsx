import React, {
  type FC, type ReactElement,
  useState,
  useCallback,
  useContext,
  useEffect,
} from "react";
import {
  DndContext,
  useSensor,
  useSensors,
  KeyboardSensor,
  PointerSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates
} from "@dnd-kit/sortable";
import SortableItem from "./Helpers/SortableItem";
import AddModuleButton from "./Helpers/AddModuleButton";
import AppContext from "../../AppContext";
import { type GameModule } from "../../types/global";

type GameModuleWithId = {
  id: number;
} & GameModule;

const DragAndDropEditor: FC = (): ReactElement => {
  const value = useContext(AppContext)
  const { gameData, setGameData, gameModules, setGameModules, setActiveModule } = value

  const [gameModulesList, setGameModulesList] = useState<GameModuleWithId[] | null>(
    gameModules.map((gameModule: GameModule, index: number) => ({ id: index + 1, ...gameModule })))


  useEffect(() => {
    setGameModulesList(gameModules.map((gameModule: GameModule, index: number) => ({ id: index + 1, ...gameModule })))
  }, [gameModules])

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      }
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = useCallback(
    (event: any) => {
      const { active, over } = event;
      if (over === null) {
        return;
      }
      if (active.id !== over.id && gameModulesList) {
        const oldIndex = gameModulesList
          .map((gameModule: GameModuleWithId) => gameModule.id)
          .indexOf(active.id);
        const newIndex = gameModulesList
          .map((gameModule: GameModuleWithId) => gameModule.id)
          .indexOf(over.id);
        const newModulesOrder = arrayMove(gameModulesList, oldIndex, newIndex);
        setGameModulesList(newModulesOrder);
        setGameModules(newModulesOrder)
      }
    },
    [gameModulesList]
  );

  const handleClick = (moduleIndex: number) => {
    setActiveModule(gameModules[moduleIndex])
  }

  return (
    <>
      {gameModulesList &&
        <section className="flex flex-col gap-8">
          <DndContext
            sensors={sensors}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={gameModulesList}
              strategy={verticalListSortingStrategy}
            >
              <div className="flex flex-col justify-start w-full h-full gap-8 text-center item-center">
                {gameModulesList && gameModulesList.map((gameModule: GameModuleWithId, moduleIndex: number) => (
                  <SortableItem key={gameModule.id} id={gameModule.id!}>
                    <div
                      className='flex items-center justify-center w-1/2 h-full border-4 bg-darkGrey rounded-md'
                      onClick={event => handleClick(moduleIndex)}
                    >
                      {`${gameModule.title} Index: ${gameModule.id}`}

                    </div>
                  </SortableItem>
                ))}
              </div>
            </SortableContext>
          </DndContext>

          <AddModuleButton />
        </section>
      }
    </>

  );
};

export default DragAndDropEditor;