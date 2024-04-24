import * as Slot from '~/components/primitives/slot';
import type { SlottableTextProps, TextRef } from '~/components/primitives/types';
import * as React from 'react';
import { Text as RNText } from 'react-native';
import { cn } from '~/lib/utils';
import { useTranslation } from 'react-i18next';

const TextClassContext = React.createContext<string | undefined>(undefined);
const Text = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const textClass = React.useContext(TextClassContext);
    const { t } = useTranslation("common")
    const Component = asChild ? Slot.Text : RNText;
    const translation: string = children + ""
    return (
      <Component
        maxFontSizeMultiplier={1.5}
        className={cn('text-base text-foreground web:select-text', textClass, className)}
        ref={ref}
        children={t(translation)}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

export { Text, TextClassContext };
