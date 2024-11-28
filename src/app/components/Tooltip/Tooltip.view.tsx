import { FC, memo } from "react";
import { TooltipProps } from "./Tooltip.type";
import { createPortal } from "react-dom";

const TooltipView: FC<TooltipProps> = ({ children, position }) => {
    return createPortal(
        <div
            className="tooltip"
            style={{
                top: position.top - 8,
                left: position.left,
            }}
        >
            {children}
        </div>,
        document.getElementById("portal-root") as HTMLElement
    );
};

export default memo(TooltipView);