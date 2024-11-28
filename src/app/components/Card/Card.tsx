import { FC, memo } from 'react';
import CardView from './Card.view';
import { CardProps } from './Card.type';

const Card: FC<CardProps> = ({ height, renderBody }) => {
  return <CardView height={height} renderBody={renderBody} />;
};

export default memo(Card);
