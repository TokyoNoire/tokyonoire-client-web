import React, { useEffect, useState, ReactNode } from "react";

interface props {
    show: boolean;
    children: ReactNode;
    duration: number
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
                    style={{ animation: `${show ? "fadeIn" : "fadeOut"} ${duration}s forwards`, width: "100vw", height: "100vh" }}
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