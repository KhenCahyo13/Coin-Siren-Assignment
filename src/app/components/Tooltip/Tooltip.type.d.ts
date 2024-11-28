export interface TooltipPosition {
    top: number;
    left: number;
}

export interface TooltipProps {
    children: React.ReactNode;
    position: TooltipPosition;
}