import React from 'react';
import { ViewProps } from 'react-native';

interface CardViewProps extends ViewProps {
  cardElevation: number;
  cornerRadius: number;
  cardMaxElevation?: number;
  useCompatPadding?: number;
  cornerOverlap?: any;
}

export default class CardView extends React.Component<CardViewProps, any> {}