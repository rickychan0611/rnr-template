import * as React from 'react';
import { TextInput } from 'react-native';

import { cn } from '~/lib/utils';

const Input = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  React.ComponentPropsWithoutRef<typeof TextInput>
>(({ className, placeholderClassName, ...props }, ref) => {
  return (
    <TextInput
      maxFontSizeMultiplier={1.5}
      placeholderTextColor={"#969595"}
      ref={ref}
      className={cn(
        'w-full text-input rounded-xs bg-input-background py-3 px-3',
        props.editable === false && 'opacity-50 web:cursor-not-allowed',
        className
      )}
      placeholderClassName={cn('text-muted-foreground', placeholderClassName)}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export { Input };
