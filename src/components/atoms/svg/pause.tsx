import { IconProps } from '@/interfaces/icon'

interface Props extends IconProps {
  className?: string
  paused: boolean
}

export const PauseButton: React.FC<Props> = ({ paused, ...attributes }) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.3"
        d="M34.2008 18C34.2008 9.05294 26.9478 1.79995 18.0008 1.79995C9.05377 1.79995 1.80078 9.05294 1.80078 18C1.80078 26.947 9.05377 34.2 18.0008 34.2C26.9478 34.2 34.2008 26.947 34.2008 18Z"
        fill="white"
        stroke="white"
        strokeWidth="2.16"
      />
      {!paused ? (
        <svg
          x="13"
          y="12.5"
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H3V11H0V0ZM7 0H10V11H7V0Z" fill="white" />
        </svg>
      ) : (
        <svg
          x="13"
          y="12.5"
          fill="#FFFFFF"
          width="10"
          height="11"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.804 17.804"
        >
          <g>
            <g id="c98_play">
              <path
                d="M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313
			c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04
			c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z"
              />
            </g>
            <g id="Capa_1_78_"></g>
          </g>
        </svg>
      )}
    </svg>
  )
}
