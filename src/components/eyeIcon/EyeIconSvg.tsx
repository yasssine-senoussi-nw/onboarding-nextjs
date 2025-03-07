import type { SVGProps } from "react";

export function EyeIconSvg({ ...props }: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_32605_398)">
        <path
          d="M0.833496 9.99999C0.833496 9.99999 4.16683 3.33333 10.0002 3.33333C15.8335 3.33333 19.1668 9.99999 19.1668 9.99999C19.1668 9.99999 15.8335 16.6667 10.0002 16.6667C4.16683 16.6667 0.833496 9.99999 0.833496 9.99999Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_32605_398">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
