import { CustomButton } from './Button.styles';

export function Button(props) {
  return <CustomButton {...props}>{props.children}</CustomButton>;
}
