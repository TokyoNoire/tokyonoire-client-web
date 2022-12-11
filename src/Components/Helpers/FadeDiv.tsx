import React, { useEffect, useState, type ReactNode } from "react";

interface props {
    show: boolean;
    children: ReactNode;
    duration?: number;
    className?: string;
}

const FadeDiv = (props: props) => {
    const { show, duration, children, className } = props;
    const [shouldRender, setRender] = useState(show);

    useEffect(() => {
        if (show) setRender(true);
    }, [show]);

    const onAnimationEnd = () => {
        if (!show) setRender(false);
    };

    if (shouldRender) {
        return (
            shouldRender && (
                <div
                    className={`${className ? className : ""}`}
                    style={{ animation: `${show ? "fadeIn" : "fadeOut"} ${duration ? duration : 1}s forwards`}}
                    onAnimationEnd={onAnimationEnd}
                >
                    {children}
                </div>
            )
        );
    } else {
        return <></>
    }
};

export default FadeDiv;