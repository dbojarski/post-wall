import { ElementType, HTMLProps, memo, PropsWithChildren } from 'react';

import { AccentButton, CustomButton, GhostButton } from './Button.styles';

export enum ButtonType {
  default = 'default',
  accent = 'accent',
  ghost = 'ghost',
}

const BUTTON_COMPONENT: Record<ButtonType, ElementType> = {
  [ButtonType.default]: CustomButton,
  [ButtonType.accent]: AccentButton,
  [ButtonType.ghost]: GhostButton,
};

type ButtonProps = HTMLProps<HTMLButtonElement> &
  PropsWithChildren & {
    variant?: ButtonType;
  };

export const Button = memo(function Button(props: ButtonProps) {
  const propsWithDefaults = { variant: ButtonType.default, ...props };
  const ButtonComponent =
    BUTTON_COMPONENT[propsWithDefaults.variant] || CustomButton;

  return <ButtonComponent {...props}>{props.children}</ButtonComponent>;
});
