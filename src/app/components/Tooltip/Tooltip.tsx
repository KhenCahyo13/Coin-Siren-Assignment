import { FC, memo } from 'react';
import TooltipView from './Tooltip.view';
import { TooltipProps } from './Tooltip.type';

const Tooltip: FC<TooltipProps> = ({ children, position }) => {
  return <TooltipView position={position}>{children}</TooltipView>;
};

export default memo(Tooltip);
