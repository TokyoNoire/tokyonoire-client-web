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

  // console.log("re-rendered")
  return (
    <>
      {gameModulesList && (
        <section className="flex flex-col gap-8">
          <DndContext sensors={sensors} onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis]}>
            <SortableContext
              items={gameModulesList}
              strategy={verticalListSortingStrategy}
            >
              <div className="w-full h-full flex flex-col justify-start item-center text-center gap-8">
                {gameModulesList &&
                  gameModulesList.map(
                    (gameModule: GameModuleWithId, moduleIndex: number) => (
                      <SortableItem key={gameModule.id} id={gameModule.id!}>
                        <div
                          className="flex items-center justify-center w-1/2 h-full border-2 border-[#353535] rounded-md"
                          style={activeModule ? (() => activeModule.id === gameModule.id ? { transition: "all 0.5s", transform: "scale(1.05)", boxShadow: "0px 0px 20px white" } : undefined)() : undefined}
                          // {...(activeModule.id === gameModule.id ? {
                          //   style: "box-shadow: 3px 3px 3px white"
                          //   // activeModule.id === gameModule.id ? "box-shadow: 3px 3px 3px white" : ""
                          // }
                          // )}
                          onClick={(event: any) => {
                            handleClick(moduleIndex);
                          }}
                        >
                          {`${gameModule.title}`}
                        </div>
                      </SortableItem>
                    )
                  )}
              </div>
            </SortableContext>
          </DndContext>

          <AddModuleButton />
        </section>
      )}
    </>
  );
};

export default DragAndDropEditor;
