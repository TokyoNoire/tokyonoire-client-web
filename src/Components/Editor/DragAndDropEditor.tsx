import React, {
  type FC,
  type ReactElement,
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
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import SortableItem from "./Helpers/SortableItem";
import AddModuleButton from "./Helpers/AddModuleButton";
import AppContext from "../../AppContext";
import { type GameModule } from "../../types/global";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

type GameModuleWithId = {
  id: number;
} & GameModule;

const DragAndDropEditor: FC = (): ReactElement => {
  const value = useContext(AppContext);
  const { gameModules, setGameModules, activeModule, setActiveModule } = value;

  const [gameModulesList, setGameModulesList] = useState<
    GameModuleWithId[] | null
  >(null);

  useEffect(() => {
    if (gameModules) {
      setGameModulesList(
        gameModules.map((gameModule: GameModule, index: number) => ({
          id: index + 1,
          ...gameModule,
        }))
      );
    }
  }, [gameModules]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
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
        setGameModules(newModulesOrder);
      }
    },
    [gameModulesList]
  );

  const handleClick = (moduleIndex: any) => {
    setActiveModule(gameModulesList![moduleIndex]);
  };

  return (
    <>
      {gameModulesList && (
        <section className="flex flex-col gap-8">

          {gameModulesList && gameModulesList[0] &&
            <SortableItem key={gameModulesList[0].id} id={gameModulesList[0].id}>
              <div
                className="flex items-center justify-center w-1/2 h-full border-2 border-[#353535] rounded-md transition-all duration-500"
                style={activeModule ? (() => activeModule.id === 1
                  ? { transition: "all 0.5s", transform: "scale(1.05)", boxShadow: "0px 0px 20px white" }
                  : undefined)() : undefined}
                onClick={(event: any) => {
                  setActiveModule(gameModulesList![0]);
                }}
              >
                {`${gameModulesList[0].title}`}
              </div>
            </SortableItem>
          }

          <DndContext sensors={sensors} onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis]}>
            <SortableContext
              items={gameModulesList}
              strategy={verticalListSortingStrategy}
            >
              <div className="flex flex-col justify-start w-full h-full gap-8 text-center item-center">
                <>
                  {gameModulesList && gameModulesList.slice(1, -1).map(
                    (gameModule: GameModuleWithId, moduleIndex: number) => (
                      <SortableItem key={gameModule.id} id={gameModule.id!}>
                        <div
                          className="flex items-center justify-center w-1/2 h-full border-2 border-[#353535] rounded-md transition-all duration-500"
                          style={activeModule ? (() => activeModule.id === gameModule.id
                            ? { transition: "all 0.5s", transform: "scale(1.05)", boxShadow: "0px 0px 20px white" }
                            : undefined)() : undefined}
                          onClick={(event: any) => {
                            handleClick(moduleIndex + 1);
                          }}
                        >
                          {`${gameModule.title}`}
                        </div>
                      </SortableItem>
                    )
                  )}
                </>
              </div>
            </SortableContext>
          </DndContext>

          <AddModuleButton />

          {gameModulesList && gameModulesList[gameModulesList.length - 1] &&
            <SortableItem key={gameModulesList[gameModulesList.length - 1]!.id} id={gameModulesList[gameModulesList.length - 1]!.id}>
              <div
                className="flex items-center justify-center w-1/2 h-full border-2 border-[#353535] rounded-md transition-all duration-500"
                style={activeModule ? (() => activeModule.id === gameModulesList[gameModulesList.length - 1]!.id
                  ? { transition: "all 0.5s", transform: "scale(1.05)", boxShadow: "0px 0px 20px white" }
                  : undefined)() : undefined}
                onClick={(event: any) => {
                  setActiveModule(gameModulesList![gameModulesList.length - 1]);
                }}
              >
                {`${gameModulesList[gameModulesList.length - 1]!.title}`}
              </div>
            </SortableItem>
          }


        </section>
      )}
    </>
  );
};

export default DragAndDropEditor;
