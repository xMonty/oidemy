import React from "react";
import styles from './UdInput.module.scss';

export enum UdInputType {
  primary = 1,
}

interface Props {
  inputType: UdInputType;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  name?: string;
  type?: 'email' | 'password' | 'text';
}

const UdInput = ({ inputType, onChange, ...rest }: Props) => {
  var className;
  switch(inputType) {
    case UdInputType.primary:
      className = styles.primary;
      break;
    default:
      break;
  }

  return (
    <input
      className={className}
      onChange={({ target: { value } }) => onChange(value)}
      {...rest}
    />
  );
};

export default UdInput;
