import Link from 'next/link'
import { FunctionComponent } from 'react'

export const Logo: FunctionComponent = () => {
  return (
    <Link href="/">
      <a className="absolute top-12 left-12 z-[2]">
        <svg
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.5506 41.8777L27.5147 23.9751C27.5147 22.5634 27.2302 21.1654 26.6774 19.8611C26.1246 18.5568 25.3144 17.3716 24.2929 16.3734C23.2715 15.3751 22.0589 14.5832 20.7243 14.0429C19.3897 13.5027 17.9593 13.2246 16.5148 13.2246C13.597 13.2246 10.7986 14.3571 8.73488 16.3731C6.67118 18.389 5.51112 21.1235 5.50977 23.9751L5.54561 27.2233C5.5369 32.4977 7.52097 37.5896 11.1173 41.5223"
            stroke="#000577"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5312 13.2241V7.71387"
            stroke="#000577"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.4277 46.3883C18.3454 48.1315 21.6225 49.1955 25.013 49.5005C28.4036 49.8054 31.8196 49.3433 35.0048 48.1489C38.1617 46.9683 41.012 45.0989 43.3456 42.6784C45.6793 40.2579 47.4369 37.3481 48.489 34.1631"
            stroke="#000577"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.50977 30.8574C5.74726 32.3452 6.15282 33.8049 6.71958 35.212C7.70412 37.6634 9.16199 39.9231 11.02 41.8778"
            stroke="#000577"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M49.5885 27.5506C49.6348 24.8211 49.1609 22.1076 48.192 19.5546C46.3454 14.6707 42.7967 10.6142 38.1961 8.12864C33.5955 5.64305 28.2512 4.89482 23.1426 6.02105"
            stroke="#000577"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </Link>
  )
}
