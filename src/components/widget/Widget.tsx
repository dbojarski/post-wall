import { WidgetBody, WidgetContainer, WidgetTitle } from './Widget.styles';
import { PropsWithChildren } from 'react';

type WidgetProps = PropsWithChildren & {
  title: string;
};

export function Widget({ title, children }: WidgetProps) {
  return (
    <WidgetContainer>
      <WidgetTitle>{title}</WidgetTitle>
      <WidgetBody>{children}</WidgetBody>
    </WidgetContainer>
  );
}
