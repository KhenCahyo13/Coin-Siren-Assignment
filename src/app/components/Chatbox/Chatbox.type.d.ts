import { ReactNode } from "react";

export interface ChatboxProps {
    title: string;
    type: 'Primary' | 'Success' | 'White';
    icon?: ReactNode | null;
    centered?: boolean
}