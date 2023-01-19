import Link from 'next/link'
import { FunctionComponent } from 'react'

interface Props {
  width?: string
  className?: string
}
export const Logo: FunctionComponent<Props> = ({
  width = 'w-full',
  className,
}) => {
  return (
    <Link
      href="/"
      className={`${width} block max-w-xs p-6 ${className}`}
      passHref
    >
      <svg
        version="1.1"
        id="Ebene_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 335.9 91.5"
        className="fill-darkblue"
      >
        <g>
          <path
            id="XMLID_00000088849086811810083940000003030994521791628981_"
            d="M152.3,3.3h-12.7l2.4,33.2l-8.9-33.2h-5.6
      H117h-3.4l-10.9,40.5h13.9l1.3-5h8.5l1.3,5H170V29.6h-13.7l-0.1-2.1h12v-7.8h-12.6l-0.1-2.1H170V3.3h-15.6H152.3z M120.1,31.1
      l2.2-8.2l2.2,8.2H120.1z"
          />
          <path
            d="M201.9,25.2c-0.9-0.4-2-0.7-3.4-0.7h-0.2c5.1-1.3,8.3-4.6,8.3-9.9c0-7.2-5.2-11.2-17.9-11.2h-2.3h-2.3h-12.4
      v40.5h14.7V30.2h0.2c2.7,0,3.4,1.2,3,6.5c-0.5,6.1,1,7.1,1,7.1H207c0,0-1.3-1.4-1.8-7.4C203.3,33.3,202.1,29.5,201.9,25.2z
       M188.6,21.8h-2.2v-4.7h2.2c2.3,0,2.8,1.1,2.8,2.4C191.5,20.8,190.8,21.8,188.6,21.8z"
          />
          <path d="M272.3,30C272.3,30,272.3,30,272.3,30L272.3,30" />
          <path
            d="M321.8,29.1V3.3H307v9.4c-3.4-6.4-9.8-10-17.1-10h0c-9.8,0-17.9,6.4-19.3,17.2c3.4,2.4,5.1,5.7,5.1,10l-1.1,0
      c0,0,0,0,0,0h-0.6c0,0,0,0,0,0.1c0,0,0,0,0-0.1h0c0-6.3-3.8-9.8-12.4-12c-0.6-0.1-1.1-0.3-1.7-0.4l-0.7-0.2v0l-1.1-0.2
      c-1.9-0.4-2.8-0.6-2.8-1.3c0-0.9,0.9-1.3,2.3-1.3c2.3,0,4.8,1.3,6.7,3.4l9.3-9.4C269,4.4,262,2.8,256.1,2.8h0h0
      c-9.1,0-17.3,4.5-17.4,13.2c0,6.1,4.9,11.4,16.1,13.7v0l1.1,0.2c1.4,0.3,1.7,0.5,1.7,1c0,1-1.2,1.2-2.2,1.2c-3.1,0-6.7-1.8-9.2-4.5
      l-5.7,6.4c1.1-2.2,1.8-4.7,2.1-7.5C238,23,237,18.8,237,16c0-2.2,0.5-4.2,1.4-6c-3.6-4.6-9.1-7.2-15.3-7.2c-6.3,0-12,2.7-15.5,7.5
      c0.4,1.3,0.7,2.7,0.7,4.3c0,4.1-1.7,7.3-4.7,9.4c0.2,13.2,8.9,20.4,19.6,20.4c5.4,0,10.3-1.9,13.9-5.4c4.7,3.7,12.3,5.4,18.7,5.4h0
      c8.3,0,15-3,17.3-9.3c3.4,6.1,9.7,9.3,16.8,9.3h0c10.8,0,19.6-7.4,19.6-20.8c0-1.3-0.1-2.6-0.3-3.8l0,0v0l0,0l0.6-0.1c0,0,0,0,0,0
      l1.1-0.2c0.2,1.3,0.3,2.7,0.3,4.1c0,5.6-1.5,10.5-4.2,14.2v6h23.4l0.6-14.8H321.8z M223.2,29.6c-2.5,0-4.3-2.1-4.3-6
      c0-3.7,1.9-5.9,4.3-5.9c2.5,0,4.3,2.2,4.3,5.9C227.5,27.4,225.6,29.6,223.2,29.6z M289.9,29.6c-2.5,0-4.3-2.1-4.3-6
      c0-3.7,1.9-5.9,4.3-5.9c2.5,0,4.3,2.2,4.3,5.9C294.2,27.4,292.4,29.6,289.9,29.6z"
          />
          <path
            d="M182.3,47.5v25.7h-6.1V47.5h-14.7v25.7h-6l-1.8-25.7h-14.7l2.4,33.2l-8.9-33.2h-5.6h-10.4h-3.4L102,88h13.9
      l1.3-5h8.5l1.3,5h37l0.6-14.6l1.7,0L165.7,88h19.2l0.6-14.6l1.7,0L186.5,88h10.5V47.5H182.3z M119.3,75.2l2.2-8.2l2.2,8.2H119.3z"
          />
          <path
            d="M332.9,61.8V47.5h-14.2h-3.5h-11.3v6.9c-2.9-4.5-8.3-7.5-15.7-7.5h0h0c-6.4,0-11.7,2.5-15,7v16.8l-1.7,0V47.5
      h-14.1l0.4,16.6l-6.9-16.6h-20.4l2.4,33.2l-8.9-33.2h-5.6h-10.4h-3.4l-5.8,21.6V88h8.8l1.3-5h8.5l1.3,5h28.7L245.7,70L253,88h18.5
      v-9.2c3.1,6.3,9.1,9.7,16.7,9.7h0h0c11.2,0,18.4-6.8,18.4-17.5L292,67.9c-0.1,3.6-1.4,5.7-3.8,5.7c-2.4,0-3.6-2.2-3.6-5.9
      c0-3.8,1.3-5.9,3.6-5.9c2.4,0,3.7,2.1,3.8,5.5l11.9-3.7v5.1l4.4,0.9V71c0,5.2-1.6,9.5-4.4,12.7V88h28.9V73.7h-14.2v-2.1H331v-7.8
      h-12.3v-2.1H332.9z M211,75.2l2.2-8.2l2.2,8.2H211z"
          />
          <path d="M271.5,78.8c3.1,6.3,9.1,9.7,16.7,9.7h0" />
        </g>
        <g>
          <path
            d="M4.7,45.8l-0.1-4.5C4.6,30.1,13.9,21,25.2,21c11.4,0,21,9.3,21,20.3l0.1,36.8l2.4,0l-0.1-36.8
      c0-11.9-10-22-22.2-22.7V6.5H24v12.1C11.9,19.3,2.2,29.2,2.2,41.3l0.1,4.5c0,2.2,0.2,4.4,0.5,6.5l0,0c0.5,3.1,1.3,6.1,2.4,9
      c1.9,5.1,4.7,9.8,8.4,13.8l0.7-0.6l1.1-1C8.5,65.9,4.7,56.1,4.7,45.8z"
          />
          <path
            d="M61.2,84.9c-12,4.5-25.2,3.3-36.2-3.3l-1.2,2.1c7,4.2,14.8,6.3,22.7,6.3c5.3,0,10.5-0.9,15.6-2.9
      c12.5-4.7,22.1-14.7,26.4-27.5l-2.3-0.8C82.2,70.9,73.1,80.4,61.2,84.9z"
          />
          <path
            d="M85.6,31c1.9,4.9,2.8,10.1,2.7,15.4l2.4,0c0.1-5.6-0.9-11.1-2.8-16.3C80.1,9.7,58.2-2.1,36.9,2.6l0.5,2.3
      C57.6,0.5,78.3,11.7,85.6,31z"
          />
        </g>
      </svg>
    </Link>
  )
}
