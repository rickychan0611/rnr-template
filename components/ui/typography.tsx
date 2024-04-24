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
        maxFontSizeMultiplier={1.4}
        role='heading'
        aria-level='1'
        className={cn(
          'font-[mi-900] web:scroll-m-20 text-5xl text-foreground tracking-tight lg:text-5xl web:select-text',
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
          'font-[mi-800] web:scroll-m-20 text-3xl text-foreground tracking-tight first:mt-0 web:select-text',
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
        maxFontSizeMultiplier={1.5}
        role='heading'
        aria-level='3'
        className={cn(
          'font-[mi-700] web:scroll-m-20 text-2xl text-foreground tracking-tight web:select-text',
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
        maxFontSizeMultiplier={1.6}
        role='heading'
        aria-level='4'
        className={cn(
          'font-[mi-800] web:scroll-m-20 text-xl text-foreground tracking-tight web:select-text',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

H4.displayName = 'H4';

const P = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const { t } = useTranslation("common")
    const Component = Text;
    return (
      <Component
        maxFontSizeMultiplier={2.2}
        className={cn('font-[mi-400] text-foreground web:select-text', className)}
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
        maxFontSizeMultiplier={2.2}
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
        maxFontSizeMultiplier={2.2}
        // @ts-ignore - role of code renders code element on the web
        role={Platform.OS === 'web' ? 'code' : undefined}
        className={cn(
          'font-[mi-300] italic relative rounded-md bg-muted text-muted-foreground text-black p-4 text-sm web:select-text',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Code.displayName = 'Code';

const Lead = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = Text;
    return (
      <Component
        maxFontSizeMultiplier={2.2}
        className={cn('font-[mi-500] text-xl text-muted-foreground web:select-text', className)}
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
        maxFontSizeMultiplier={2.2}
        className={cn('font-[mi-500] text-xl text-foreground font-semibold web:select-text', className)}
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
        maxFontSizeMultiplier={2.2}
        className={cn(
          'font-[mi-500] text-sm text-foreground font-medium leading-none web:select-text',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Small.displayName = 'Small';

const Muted = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = Text;
    return (
      <Component
        maxFontSizeMultiplier={1.5}
        className={cn('font-[mi-500] text-muted-foreground web:select-text', className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Muted.displayName = 'Muted';

export { BlockQuote, Code, H1, H2, H3, H4, Large, Lead, Muted, P, Small };
