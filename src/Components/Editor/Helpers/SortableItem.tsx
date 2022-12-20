import React, { type ReactElement } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

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
        <div
            // key={id}
            ref={setNodeRef}
            className="h-24 text-xl flex justify-center items-center"
            style={style} {...attributes} {...listeners}
        >
            {children}
        </div>
    );
}

export default SortableItem;