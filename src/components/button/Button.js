import { memo } from 'react';

import { AccentButton, CustomButton, GhostButton } from './Button.styles';

export const BUTTON_TYPES = {
  DEFAULT: 'default',
  ACCENT: 'accent',
  GHOST: 'ghost',
};

export const Button = memo(function Button(props) {
  const ButtonComponent =
    {
      [BUTTON_TYPES.DEFAULT]: CustomButton,
      [BUTTON_TYPES.ACCENT]: AccentButton,
      [BUTTON_TYPES.GHOST]: GhostButton,
    }[props.variant] || CustomButton;

  return <ButtonComponent {...props}>{props.children}</ButtonComponent>;
});
