import { WidgetBody, WidgetContainer, WidgetTitle } from './Widget.styles';

export function Widget({ title, children }) {
  return (
    <WidgetContainer>
      <WidgetTitle>{title}</WidgetTitle>
      <WidgetBody>{children}</WidgetBody>
    </WidgetContainer>
  );
}
