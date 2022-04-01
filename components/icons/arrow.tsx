interface Props {
  className?: string
  isActive?: boolean
}

export const Arrow: React.FunctionComponent<Props> = ({
  className = '',
  isActive = false,
}): JSX.Element => {
  return (
    <svg
      width="13"
      height="23"
      viewBox="0 0 13 23"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M1 22L11 11.5L1 1"
        stroke={isActive ? '#fff' : '#272F66'}
        strokeWidth="2"
      />
    </svg>
  )
}
