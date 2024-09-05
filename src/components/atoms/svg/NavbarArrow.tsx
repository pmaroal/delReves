import { IconProps } from '@/interfaces/icon'

export const NavbarArrow: React.FC<IconProps> = ({
  color,
  size = 13,
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path d="M1 1L4 4L7 1" stroke={color ? color : '#currentColor'} />
    </svg>
  )
}
