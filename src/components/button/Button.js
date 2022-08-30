import { AccentButton, CustomButton, GhostButton } from './Button.styles';

export const BUTTON_TYPES = {
  DEFAULT: 'default',
  ACCENT: 'accent',
  GHOST: 'ghost',
};

export function Button(props) {
  const ButtonComponent =
    {
      [BUTTON_TYPES.DEFAULT]: CustomButton,
      [BUTTON_TYPES.ACCENT]: AccentButton,
      [BUTTON_TYPES.GHOST]: GhostButton,
    }[props.type] || CustomButton;

  return <ButtonComponent {...props}>{props.children}</ButtonComponent>;
}
