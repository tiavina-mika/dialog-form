import { ReactNode } from "react";

export interface ISelectOption<V = any> {
  label: string;
  value: V;
  icon?: ReactNode | string;
}

export interface IMenuOption<V = string>
  extends Omit<ISelectOption<V>, "value"> {
  onClick: (value?: V) => void;
  value?: V;
}

export interface ISwitchOption extends ISelectOption {
  checked?: boolean;
}
