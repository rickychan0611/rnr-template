import React from 'react'
import { Interact } from './ui/typography'
import { Center } from './FlexViews'
import PressableOpacity from './PressableOpacity'

type Props = {
  children: React.ReactNode,
  varient?: "primary" | "secondary" | "outline"
}

const Button = ({ children, varient }: Props) => {
  let bgClass = 'bg-primary web:hover:bg-primary-700 border border-primary web:hover:border-primary-700'
  let textClass = "text-primary-foreground"
  if (varient === "secondary") {
    bgClass = 'bg-secondary web:hover:bg-secondary-700 border border-secondary web:hover:border-secondary-700'
    textClass = "text-secondary-foreground"
  }
  if (varient === "outline") {
    bgClass = 'web:hover:bg-primary-100 border border-primary'
    textClass = "text-primary"
  }
  return (
    <PressableOpacity onPress={() => { }}>
      <Center className={bgClass + " py-sm px-m rounded"}>
        <Interact className={textClass}>
          {children}
        </Interact>
      </Center>
    </PressableOpacity>
  )
}

export default Button