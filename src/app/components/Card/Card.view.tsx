import { FC, memo } from "react";
import { CardProps } from "./Card.type";

const CardView: FC<CardProps> = ({ height, renderBody }) => (
    <div className="card card-white">
        <div className={`card-body h-[${height}rem]`}>
            {renderBody()}
        </div>
    </div>
);

export default memo(CardView);