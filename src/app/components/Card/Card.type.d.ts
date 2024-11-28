import { ReactNode } from "react";

export interface CardProps  {
    height: number;
    renderBody: () => ReactNode;
}