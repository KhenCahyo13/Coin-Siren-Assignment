import { FC, memo } from 'react';
import { PortalProps } from './Portal.type';
import { createPortal } from 'react-dom';

const Portal: FC<PortalProps> = ({ children }) => {
  return createPortal(children, document.body);
};

export default memo(Portal);
