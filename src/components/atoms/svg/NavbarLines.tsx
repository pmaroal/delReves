import { IconProps } from '@/interfaces/icon'

export const NavbarLines: React.FC<IconProps> = ({
  color,
  size = 30,
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 6"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-white"
    >
      <path d="M0 1L16 1" stroke="#FFFFFF" />
      <path d="M0 5L10 5" stroke="#FFFFFF" />
    </svg>
  )
}
