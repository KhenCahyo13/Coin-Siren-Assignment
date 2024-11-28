import { FC, memo } from "react";
import ReactDOM from "react-dom";
import TooltipView from "./Tooltip.view";
import { TooltipProps } from "./Tooltip.type";

const Tooltip: FC<TooltipProps> = ({ children, position }) => {
    return <TooltipView
        children={children}
        position={position}
    />
};

export default memo(Tooltip);