import React, { forwardRef } from 'react';
import { Control, RichTextEditorControlProps } from '../Control/Control';

export interface RichTextEditorControlBaseProps extends RichTextEditorControlProps {
  icon: React.FC<{ size: number }>;
}

export const ControlBase = forwardRef<HTMLButtonElement, RichTextEditorControlBaseProps>(
  ({ className, active, icon: Icon, ...others }, ref) => (
    <Control active={active} ref={ref} {...others}>
      <Icon size={16} />
    </Control>
  )
);

ControlBase.displayName = '@mantine/tiptap/ControlBase';
