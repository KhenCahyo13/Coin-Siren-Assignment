import { FC, memo } from "react";
import { BadgeIconProps } from "./BadgeIcon.type";

const BadgeIconView: FC<BadgeIconProps> = ({ icon, title }) => {
    const IconComponent = icon;
    return (
        <div className="badge badge-white">
            <div className="badge-icon">
                {IconComponent ? <IconComponent className="text-lg" /> : null}
            </div>
            <p className="badge-title">{title}</p>
        </div>
    )
};

export default memo(BadgeIconView);