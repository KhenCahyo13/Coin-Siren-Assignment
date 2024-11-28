import { FC, memo } from "react";
import { TooltipProps } from "./Tooltip.type";
import { createPortal } from "react-dom";

const TooltipView: FC<TooltipProps> = ({ children, position }) => {
    return createPortal(
        <div
            style={{
                position: "absolute",
                top: position.top,
                left: position.left,
                transform: "translate(-50%, -100%)",
                zIndex: 9999,
            }}
        >
            {children}
        </div>,
        document.getElementById("portal-root") as HTMLElement
    );
};

export default memo(TooltipView);