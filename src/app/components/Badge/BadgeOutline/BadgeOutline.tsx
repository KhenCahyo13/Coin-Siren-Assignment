import { FC, memo } from "react";
import { BadgeOutlineProps } from "./BadgeOutline.type";
import BadgeOutlineView from "./BadgeOutline.view";

const BadgeOutline: FC<BadgeOutlineProps> = ({ title, type }) => {
    return <BadgeOutlineView 
        title={title}
        type={type}
    />;
};

export default memo(BadgeOutline);