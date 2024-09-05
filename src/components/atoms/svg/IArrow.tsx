import { IconProps } from '@/interfaces/icon'

interface Props extends IconProps {
  large?: boolean
  isHovered?: boolean
  footer?: boolean
  arrowColor: string
  white?: boolean
}

export const IArrow: React.FC<Props> = ({
  color,
  size = 13,
  large = false,
  isHovered = false,
  footer = false, // default value added

  white,
  ...attributes
}) => {
  const arrowColor = isHovered ? '#FFFFFF' : '#262628'

  return (
    <svg
      width={size} // Use the size prop
      height={7} // Adjust the height proportionally
      viewBox="0 0 16 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d={large ? ' M0 3.5L16 3.5' : `M0 3.5L8 3.5`}
        stroke={white ? '#FFFFFF' : arrowColor}
        strokeWidth="0.75"
        style={{ transition: 'all 0.3s ease-in-out' }}
      />
      <path
        d={large ? 'M13 0.5L16 3.5L13 6.5' : 'M5 0.5L8 3.5L5 6.5'}
        stroke={white ? '#FFFFFF' : arrowColor}
        strokeWidth="0.75"
        style={{ transition: 'all 0.3s ease-in-out' }}
      />
    </svg>
  )
}
