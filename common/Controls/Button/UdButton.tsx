import React from "react";
import styles from './UdButton.module.scss';

export enum UdButtonType {
  primaryBk = 1,
  secondaryBk
}

interface Props {
  type: UdButtonType
  children?: React.ReactNode;
  onClick: () => void;
}

const UdButton: React.FC<Props> = ({ 
    children,
    onClick, 
    type
  }) => { 
    
  var styleClass;
  switch(type) {
    case UdButtonType.primaryBk:
      styleClass = styles.primaryBk;
      break;
    case UdButtonType.secondaryBk:
      styleClass = styles.secondaryBk;
      break;
    default:
      break;
  }

  return (
    <button 
      className={styleClass}
      onClick={onClick}
    >
    {children}
    </button>
  );
}

export default UdButton;
