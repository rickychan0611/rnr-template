import React from 'react'
import { Interact } from './ui/typography'
import { Center, Row } from './FlexViews'
import PressableOpacity from './PressableOpacity'
// import Icons from 'lucide-react-native';

type Props = {
  children: React.ReactNode,
  varient?: "primary" | "secondary" | "outline",
  disabled?: boolean,
  onPress?: () => void,
  className?: string,
  // icon?: keyof typeof Icons
}

const Button: React.FC<Props> = ({ children, varient, disabled, className }, props) => {
  // default
  let bgClass = 'bg-primary web:hover:bg-primary-700 border border-primary web:hover:border-primary-700'
  let textClass = "text-primary-foreground"

  //disabled
  if (!varient && disabled) {
    bgClass = 'bg-primary-200 order border-primary-200'
    textClass = "text-primary-400"
  }
  else if (varient === "secondary" && disabled) {
    bgClass = 'bg-secondary-300 order border-secondary-300'
    textClass = "text-secondary-100"
  }
  else if (varient === "outline" && disabled) {
    bgClass = 'border border-primary-300'
    textClass = "text-primary-300"
  }

  //normal
  else if (varient === "secondary") {
    bgClass = 'bg-secondary web:hover:bg-secondary-700 border border-secondary web:hover:border-secondary-700'
    textClass = "text-secondary-foreground"
  }
  else if (varient === "outline") {
    bgClass = 'web:hover:bg-primary-100 border border-primary'
    textClass = "text-primary"
  }

  // const Iconx = Icons.Sun

  
  return (
    <PressableOpacity {...props} className={className}>
      <Center className={bgClass + " py-sm px-m rounded"}>
        <Row className='gap-4'>
          {/* {icon && <Iconx />} */}
          <Interact className={textClass}>
            {children}
          </Interact>
        </Row>
      </Center>
    </PressableOpacity>
  )
}

export default Button
