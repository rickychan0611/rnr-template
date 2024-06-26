import React from 'react'
import { Interact } from './Typography'
import { Center, Row } from './FlexViews'
import PressableOpacity from './PressableOpacity'
import * as Icons from './Icons';

type Props = {
  children?: React.ReactNode,
  variant?: "primary" | "secondary" | "outline",
  disabled?: boolean,
  onPress?: () => void,
  className?: string,
  icon?: keyof typeof Icons,
  circle?: boolean
}

const Button: React.FC<Props> = ({ children, variant, disabled, className, icon, circle, onPress }, props) => {
  // default
  let bgClass = 'bg-primary web:hover:bg-primary-700 border border-primary web:hover:border-primary-700'
  let textClass = "text-primary-foreground"
  const cirlceClass = circle ? " rounded-full p-sm " : " rounded py-sm px-m "

  //disabled
  if (!variant && disabled) {
    bgClass = 'bg-primary-200 order border-primary-200'
    textClass = "text-primary-400"
  }
  else if (variant === "secondary" && disabled) {
    bgClass = 'bg-secondary-300 order border-secondary-300'
    textClass = "text-secondary-100"
  }
  else if (variant === "outline" && disabled) {
    bgClass = 'border border-primary-300'
    textClass = "text-primary-300"
  }

  //normal
  else if (variant === "secondary") {
    bgClass = 'bg-secondary web:hover:bg-secondary-700 border border-secondary web:hover:border-secondary-700'
    textClass = "text-secondary-foreground"
  }
  else if (variant === "outline") {
    bgClass = 'web:hover:bg-primary-100 border border-primary'
    textClass = "text-primary"
  }

  const Icon: any = icon ? Icons[icon] : <></>

  return (
    <PressableOpacity className={className} disabled={disabled} onPress={onPress}>
      <Center className={bgClass + cirlceClass}>
        <Row className='gap-2'>
          {icon && <Icon className={textClass as string} />}
          {!circle && <Interact className={textClass}>
            {children}
          </Interact>}
        </Row>
      </Center>
    </PressableOpacity>
  )
}

export default Button
