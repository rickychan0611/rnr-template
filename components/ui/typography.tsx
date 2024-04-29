import * as Slot from '~/components/primitives/slot';
import { SlottableTextProps, TextRef } from '~/components/primitives/types';
import * as React from 'react';
import { Platform, Text as RNText, TextInput } from 'react-native';
import { cn } from '~/lib/utils';
import { useTranslation } from 'react-i18next';
import { Text } from './text';

const H1 = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = Text;
    return (
      <Component
        maxFontSizeMultiplier={1.2}
        role='heading'
        aria-level='1'
        className={cn(
          'font-[mi-1000] text-[48px] web:scroll-m-20 text-foreground tracking-tight lg:text-5xl web:select-text',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

H1.displayName = 'H1';

const H2 = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = Text;
    return (
      <Component
        maxFontSizeMultiplier={1.4}
        role='heading'
        aria-level='2'
        className={cn(
          'font-[mi-900] text-[30px] web:scroll-m-20text-foreground tracking-tight first:mt-0 web:select-text',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
H2.displayName = 'H2';


const H3 = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = Text;
    return (
      <Component
        maxFontSizeMultiplier={1.4}
        role='heading'
        aria-level='3'
        className={cn(
          'font-[mi-700] text-[24px] web:scroll-m-20 text-foreground tracking-tight web:select-text',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
H3.displayName = 'H3';


const H4 = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = Text;
    return (
      <Component
        maxFontSizeMultiplier={1.4}
        role='heading'
        aria-level='4'
        className={cn(
          'font-[mi-800] text-[20px] web:scroll-m-20 text-foreground tracking-tight web:select-text',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

H4.displayName = 'H4';

const H5 = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = Text;
    return (
      <Component
        maxFontSizeMultiplier={1.4}
        role='heading'
        aria-level='4'
        className={cn(
          'font-[mi-600] web:scroll-m-20 text-[18px] text-foreground tracking-tight web:select-text',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

H4.displayName = 'H5';

const P = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const { t } = useTranslation("common")
    const Component = Text;
    return (
      <Component
        maxFontSizeMultiplier={1.4}
        className={cn('font-[mi-500] text-[16px] text-foreground web:select-text', className)}
        ref={ref}
        {...props}
      />
    );
  }
);
P.displayName = 'P';

const BlockQuote = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = Text;
    return (
      <Component
        maxFontSizeMultiplier={1.4}
        // @ts-ignore - role of blockquote renders blockquote element on the web
        role={Platform.OS === 'web' ? 'blockquote' : undefined}
        className={cn(
          'font-[mi-400] mt-6 native:mt-4 border-l-2 border-border pl-6 native:pl-3 text-foreground italic web:select-text',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

BlockQuote.displayName = 'BlockQuote';

const Code = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = Text;
    return (
      <Component
        maxFontSizeMultiplier={1.4}
        // @ts-ignore - role of code renders code element on the web
        role={Platform.OS === 'web' ? 'code' : undefined}
        className={cn(
          'font-[mi-300] italic relative rounded-md bg-muted text-foreground p-4 text-[14px] web:select-text',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Code.displayName = 'Code';

const Interact = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = Text;
    return (
      <Component
        maxFontSizeMultiplier={1.4}
        className={cn('font-[mi-500] text-[16px] text-muted-foreground web:select-text', className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Interact.displayName = 'Interact';

const Lead = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = Text;
    return (
      <Component
        maxFontSizeMultiplier={1.4}
        className={cn('font-[mi-600] text-[20px] text-muted-foreground web:select-text', className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Lead.displayName = 'Lead';

const Large = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = Text;
    return (
      <Component
        maxFontSizeMultiplier={1.4}
        className={cn('font-[mi-700] text-[18px] text-foreground font-semibold web:select-text', className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Large.displayName = 'Large';

const Small = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = Text;
    return (
      <Component
        maxFontSizeMultiplier={1.4}
        className={cn(
          'font-[mi-600] text-[10px] text-foreground font-medium web:select-text',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Small.displayName = 'Small';

const Error = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = Text;
    return (
      <Component
        maxFontSizeMultiplier={1.4}
        className={cn(
          'font-[mi-500] web:select-text text-red-500',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Error.displayName = 'Error';

const Muted = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = Text;
    return (
      <Component
        maxFontSizeMultiplier={1.4}
        className={cn('font-[mi-500] text-muted-foreground web:select-text', className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Muted.displayName = 'Muted';

export { BlockQuote, Code, H1, H2, H3, H4, H5, Interact, Large, Lead, Muted, P, Small, Error };
