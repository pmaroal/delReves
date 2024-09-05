import { IconProps } from '@/interfaces/icon'

export const Facebook: React.FC<IconProps> = ({
  color,
  size = 20,
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      className="fill-black hover:fill-orange"
      {...attributes}
    >
      <g clip-path="url(#clip0_273_68)">
        <path
          d="M18.3337 9.99984C18.3337 5.39984 14.6003 1.6665 10.0003 1.6665C5.40033 1.6665 1.66699 5.39984 1.66699 9.99984C1.66699 14.0332 4.53366 17.3915 8.33366 18.1665V12.4998H6.66699V9.99984H8.33366V7.9165C8.33366 6.30817 9.64199 4.99984 11.2503 4.99984H13.3337V7.49984H11.667C11.2087 7.49984 10.8337 7.87484 10.8337 8.33317V9.99984H13.3337V12.4998H10.8337V18.2915C15.042 17.8748 18.3337 14.3248 18.3337 9.99984Z"
          fill={color ? color : '#currentColor'}
        />
      </g>
      <defs>
        <clipPath id="clip0_273_68">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
