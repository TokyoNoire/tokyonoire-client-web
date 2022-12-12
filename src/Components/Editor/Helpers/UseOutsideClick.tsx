import { useEffect, RefObject } from "react";
const UseOutsideClick = (ref: RefObject<HTMLButtonElement>, callback: (param: boolean) => void, param: boolean) => {

    useEffect(() => {

        const handleOutsideClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback(param);
            }
        }

        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [ref]);
}

export default UseOutsideClick;