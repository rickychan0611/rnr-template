import { ReactNode } from "react";
import { Text, TextProps } from "react-native"

interface Props extends TextProps {
  children: ReactNode;
  className?: string 
};

export const H1 = ({ className, ...props }: Props) => {
  return (
    <Text {...props} className={'font-[mi-1000] text-[48px] web:scroll-m-20 text-black lg:text-5xl web:select-text ' + className}
      maxFontSizeMultiplier={1.2}
      {...props}
    >{props.children}
    </Text>
  )
}

export const H2 = ({ className, ...props }: Props) => {
  return (
    <Text {...props} className={'font-[mi-900] text-[30px] web:scroll-m-20 text-black first:mt-0 web:select-text ' + className}
      maxFontSizeMultiplier={1.4}
    >{props.children}
    </Text>
  )
}

export const H3 = ({ className, ...props }: Props) => {
  return (
    <Text
      {...props}
      maxFontSizeMultiplier={1.4}
      className={"font-[mi-700] text-[24px] text-black web:scroll-m-20 " + className}
    > {props.children}
    </Text >
  )
}

export const H4 = ({ className, ...props }: Props) => {
  return (
    <Text {...props} className={'font-[mi-800] text-[20px] web:scroll-m-20 text-black web:select-text ' + className}
      maxFontSizeMultiplier={1.4}
    >{props.children}
    </Text>
  )
}

export const H5 = ({ className, ...props }: Props) => {
  return (
    <Text {...props} className={'font-[mi-600] web:scroll-m-20 text-[18px] text-black web:select-text ' + className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const P = ({ className, ...props }: Props) => {
  return (
    <Text {...props} className={'font-[mi-400] text-[16px] text-black web:select-text ' + className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const BlockQuote = ({ className, ...props }: Props) => {
  return (
    <Text {...props} className={'font-[mi-300] italic relative rounded-md bg-muted text-black p-4 text-[14px] web:select-text ' + className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const Code = ({ className, ...props }: Props) => {
  return (
    <Text {...props} className={'font-[mi-300] italic relative rounded-md bg-muted text-black p-4 text-[14px] web:select-text ' + className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const Interact = ({ className, ...props }: Props) => {
  return (
    <Text {...props} className={'font-[mi-500] text-[16px] text-muted-foreground web:select-text ' + className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const Lead = ({ className, ...props }: Props) => {
  return (
    <Text {...props} className={'ont-[mi-600] text-[20px] text-muted web:select-text ' + className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const Large = ({ className, ...props }: Props) => {
  return (
    <Text {...props} className={'font-[mi-700] text-[18px] text-black font-semibold web:select-text ' + className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const Small = ({ className, ...props }: Props) => {
  return (
    <Text {...props} className={'font-[mi-600] text-[10px] text-black font-medium web:select-text ' + className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const Error = ({ className, ...props }: Props) => {
  return (
    <Text {...props} className={'font-[mi-500] web:select-text text-red-500 ' + className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const Muted = ({ className, ...props }: Props) => {
  return (
    <Text {...props} className={'font-[mi-500] text-muted web:select-text ' + className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const Subtle = ({ className, ...props }: Props) => {
  return (
    <Text {...props} className={'font-[mi-500] text-[14px] text-black web:select-text ' + className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}