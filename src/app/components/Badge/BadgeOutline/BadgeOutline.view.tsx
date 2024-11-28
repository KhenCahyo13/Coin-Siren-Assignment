import { FC, memo } from "react";
import { BadgeOutlineProps } from "./BadgeOutline.type";

const BadgeOutlineView: FC<BadgeOutlineProps> = ({ title, type }) => (
    <div className={`badge ${type === 'Secondary' ? 'badge-outline-secondary' : type === 'Success' ? 'badge-outline-success' : type === 'Info' ? 'badge-outline-info' : ''}`}>
        <p>{title}</p>
    </div>
);

export default memo(BadgeOutlineView);