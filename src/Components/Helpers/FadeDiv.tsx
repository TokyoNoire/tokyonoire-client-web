import React, { useEffect, useState, ReactNode } from "react";

interface props {
    show: boolean;
    children: ReactNode;
    duration?: number
}

const FadeDiv = (props: props) => {
    const { show, duration, children } = props;
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
                    className="absolute z-50"
                    style={{ animation: `${show ? "fadeIn" : "fadeOut"} ${duration ? duration : 0.5}s forwards`}}
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