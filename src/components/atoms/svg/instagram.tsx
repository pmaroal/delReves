import { IconProps } from '@/interfaces/icon'

export const Instagram: React.FC<IconProps> = ({
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
      <path
        d="M6.66667 2.5C4.36583 2.5 2.5 4.36583 2.5 6.66667V13.3333C2.5 15.6342 4.36583 17.5 6.66667 17.5H13.3333C15.6342 17.5 17.5 15.6342 17.5 13.3333V6.66667C17.5 4.36583 15.6342 2.5 13.3333 2.5H6.66667ZM15 4.16667C15.46 4.16667 15.8333 4.54 15.8333 5C15.8333 5.46 15.46 5.83333 15 5.83333C14.54 5.83333 14.1667 5.46 14.1667 5C14.1667 4.54 14.54 4.16667 15 4.16667ZM10 5.83333C12.3008 5.83333 14.1667 7.69917 14.1667 10C14.1667 12.3008 12.3008 14.1667 10 14.1667C7.69917 14.1667 5.83333 12.3008 5.83333 10C5.83333 7.69917 7.69917 5.83333 10 5.83333ZM10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5Z"
        fill={color ? color : '#currentColor'}
      />
    </svg>
  )
}
