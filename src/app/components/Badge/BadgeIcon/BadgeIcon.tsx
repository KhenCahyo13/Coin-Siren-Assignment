'use client';

import { FC, memo } from 'react';
import BadgeIconView from './BadgeIcon.view';
import { BadgeIconProps } from './BadgeIcon.type';

const BadgeIcon: FC<BadgeIconProps> = ({ icon, title }) => {
  return <BadgeIconView icon={icon} title={title} />;
};

export default memo(BadgeIcon);
