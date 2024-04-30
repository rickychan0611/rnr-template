import { Text } from "react-native"

export const H1 = (props: any) => {
  return (
    <Text className={'font-[mi-1000] text-[48px] web:scroll-m-20 text-text tracking-tight lg:text-5xl web:select-text ' + props.className}
      maxFontSizeMultiplier={1.2}
    >{props.children}
    </Text>
  )
}

export const H2 = (props: any) => {
  return (
    <Text className={'font-[mi-900] text-[30px] web:scroll-m-20 text-text tracking-tight first:mt-0 web:select-text ' + props.className}
      maxFontSizeMultiplier={1.4}
    >{props.children}
    </Text>
  )
}

export const H3 = (props: any) => {
  return (
    <Text className={'font-[mi-700] text-[24px] web:scroll-m-20 text-text tracking-tight web:select-text ' + props.className}
      maxFontSizeMultiplier={1.4}
    >{props.children}
    </Text>
  )
}

export const H4 = (props: any) => {
  return (
    <Text className={'font-[mi-800] text-[20px] web:scroll-m-20 text-text tracking-tight web:select-text ' + props.className}
      maxFontSizeMultiplier={1.4}
    >{props.children}
    </Text>
  )
}

export const H5 = (props: any) => {
  return (
    <Text className={'font-[mi-600] web:scroll-m-20 text-[18px] text-text tracking-tight web:select-text ' + props.className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const P = (props: any) => {
  return (
    <Text className={'font-[mi-400] mt-6 native:mt-4 border-l-2 border-border pl-6 native:pl-3 text-text italic web:select-text ' + props.className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const BlockQuote = (props: any) => {
  return (
    <Text className={'font-[mi-300] italic relative rounded-md bg-muted text-text p-4 text-[14px] web:select-text ' + props.className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const Code = (props: any) => {
  return (
    <Text className={'font-[mi-300] italic relative rounded-md bg-muted text-text p-4 text-[14px] web:select-text ' + props.className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const Interact = (props: any) => {
  return (
    <Text className={'font-[mi-500] text-[16px] text-muted-foreground web:select-text ' + props.className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const Lead = (props: any) => {
  return (
    <Text className={'ont-[mi-600] text-[20px] text-muted web:select-text ' + props.className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const Large = (props: any) => {
  return (
    <Text className={'font-[mi-700] text-[18px] text-text font-semibold web:select-text ' + props.className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const Small = (props: any) => {
  return (
    <Text className={'font-[mi-600] text-[10px] text-text font-medium web:select-text ' + props.className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const Error = (props: any) => {
  return (
    <Text className={'font-[mi-500] web:select-text text-red-500 ' + props.className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}

export const Muted = (props: any) => {
  return (
    <Text className={'font-[mi-500] text-muted web:select-text ' + props.className}
      maxFontSizeMultiplier={1.4}
    > {props.children}
    </Text >
  )
}