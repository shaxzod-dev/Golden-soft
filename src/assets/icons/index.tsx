import { SVGProps } from "react";
export const Icons = {
  Logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={51}
      height={43}
      fill="none"
      {...props}
    >
      <path
        fill="#161C24"
        d="M18.34 13.07h4.05v8.3c-2.27 2.55-5.53 3.83-9.79 3.83-3.59 0-6.59-1.2-9-3.58C1.2 19.23 0 16.25 0 12.67c0-3.58 1.21-6.58 3.65-9C6.13 1.22 9.11 0 12.6 0c3.5 0 6.4 1.01 8.71 3.03l-2.18 3.13c-1.68-1.43-3.74-2.14-6.18-2.14-2.47 0-4.55.81-6.23 2.44-1.65 1.59-2.47 3.66-2.47 6.21s.79 4.62 2.37 6.21c1.62 1.56 3.61 2.34 5.98 2.34 2.31 0 4.22-.5 5.74-1.49v-6.66Z"
      />
      <path stroke="#161C24" d="M27.1 0v16.8" />
      <path stroke="#4295E4" d="M27.1 16.8v16.8" />
      <path
        fill="#4295E4"
        d="M41.41 42c-3.93 0-7.47-1.23-10.61-3.68l2.49-4c2.79 2.14 5.55 3.21 8.26 3.21 1.13 0 2.03-.26 2.68-.78.7-.57 1.05-1.27 1.05-2.1 0-1.23-1.61-2.32-4.85-3.29-.09-.04-.2-.08-.33-.13a.494.494 0 0 0-.19-.06c-5.07-1.36-7.61-3.66-7.61-6.89 0-2.28.86-4.09 2.56-5.45 1.75-1.36 4.04-2.04 6.88-2.04 2.8 0 5.47.84 8 2.5l-1.9 3.81c-1.97-1.32-4.13-1.97-6.49-1.97-2.75 0-4.13.87-4.13 2.62 0 .75.26 1.29.79 1.64.56.31 1.48.61 2.75.92 1.92.53 3.54 1.05 4.85 1.58.87.39 1.64.81 2.29 1.24 1.66 1.14 2.5 2.87 2.5 5.19 0 2.27-.86 4.13-2.56 5.58-1.66 1.4-3.8 2.1-6.43 2.1Z"
      />
    </svg>
  ),
  CallIcon: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={19}
      fill="none"
      {...props}
    >
      <path
        fill="#4295E4"
        d="M17.77 13.12c-.05-.04-3.77-2.72-4.8-2.53-.48.09-.76.42-1.32 1.08-.09.11-.31.37-.48.55-.35-.11-.69-.25-1.03-.42a8.591 8.591 0 0 1-3.95-3.95c-.16-.33-.3-.68-.42-1.03.18-.17.44-.38.55-.48.67-.55 1-.83 1.08-1.32C7.58 4.01 4.9.26 4.87.23c-.12-.18-.28-.32-.46-.43-.19-.1-.39-.16-.6-.18-1.09 0-4.19 4.02-4.19 4.7 0 .04.06 4.04 4.99 9.06 5.02 4.93 9.02 4.99 9.06 4.99.68 0 4.7-3.1 4.7-4.19-.02-.21-.08-.41-.18-.6-.11-.18-.25-.34-.42-.46Z"
      />
    </svg>
  ),
  LikeIcon: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={23}
      fill="none"
      {...props}
    >
      <path
        stroke="#454F5B"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 6.82c0 2.6 1 8.77 10.91 15.01a1.098 1.098 0 0 0 1.17 0C22.99 15.59 24 9.42 24 6.82 24 3.6 21.42 1 18.25 1c-3.18 0-5.75 3.53-5.75 3.53S9.92 1 6.75 1C3.57 1 1 3.6 1 6.82Z"
      />
    </svg>
  ),
  CartIcon: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path fill="#fff" fillOpacity={0} d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
      <path fill="none" d="M0 0h32v32H0z" />
      <g
        stroke="#454F5B"
        strokeLinejoin="round"
        strokeWidth={2}
        clipPath="url(#a)"
      >
        <path d="M25.05 9.33a2.686 2.686 0 0 1 1.98.88c.25.27.44.6.55.95.12.36.16.73.12 1.1l-.8 8c-.06.66-.37 1.27-.86 1.71-.49.45-1.13.69-1.79.69H11.52c-.62 0-1.22-.21-1.7-.6-.47-.39-.8-.94-.92-1.54L6.66 9.33h18.39Z" />
        <path
          strokeLinecap="round"
          d="M6.66 9.33 5.58 5c-.07-.28-.24-.54-.47-.72-.24-.19-.52-.28-.82-.28"
        />
      </g>
    </svg>
  ),
};
