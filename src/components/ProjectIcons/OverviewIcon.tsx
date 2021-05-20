import React, {FC} from 'react';

import {CustomIconProps} from './types';

const OverviewIcon: FC<CustomIconProps> = ({size, state}) => {
  return (
    <svg width={size} height={size} viewBox={`0 0 32 32`}>
      <g clipPath="url(#overviewIconClip0)">
        <path
          d="M3.29347 21.0901C6.211 27.8893 13.9124 30.8098 19.9465 30.3119C21.5941 30.1759 24.909 29.9024 27.4974 27.4618C32.4681 22.775 31.7026 12.9784 26.9442 7.21062C26.3314 6.4679 22.0898 1.49137 15.48 1.55804C10.6407 1.60678 7.24403 4.33244 6.83097 4.67196C6.30932 5.10097 5.1585 6.12028 4.12141 7.73745C1.68445 11.537 1.47027 16.8412 3.29347 21.0901Z"
          fill="url(#overviewIcon0_linear)"
        />
        <path
          opacity="0.72"
          d="M4.55675 6.30677C4.55675 5.29749 5.37741 4.47925 6.38969 4.47925H21.9768C22.8367 4.47925 23.5458 5.15114 23.5895 6.00746L24.7401 28.5391C24.7744 29.2092 24.2453 29.7744 23.5725 29.7866L5.70756 30.1102C5.0754 30.1216 4.55664 29.6139 4.55664 28.9834V6.30677H4.55675Z"
          fill="url(#overviewIcon1_linear)"
        />
        <path
          d="M8.31818 29.7272C8.31818 29.7272 8.31775 29.7272 8.31765 29.7272L6.31867 29.7013C5.65024 29.6927 5.10645 29.1435 5.10645 28.477V25.4679C5.10645 25.4444 5.1256 25.4253 5.14913 25.4253C5.17267 25.4253 5.19182 25.4443 5.19182 25.4679V28.477C5.19182 29.0972 5.69785 29.6082 6.31974 29.6162L8.31872 29.642C8.34225 29.6424 8.36119 29.6617 8.36087 29.6851C8.36055 29.7085 8.3415 29.7272 8.31818 29.7272Z"
          fill="#91B3FA"
        />
        <path
          d="M5.14913 24.5783C5.1256 24.5783 5.10645 24.5594 5.10645 24.5358V24.0484C5.10645 24.025 5.1256 24.0059 5.14913 24.0059C5.17267 24.0059 5.19182 24.0248 5.19182 24.0484V24.5358C5.19182 24.5594 5.17267 24.5783 5.14913 24.5783Z"
          fill="#91B3FA"
        />
        <path
          d="M5.83399 4.82589C5.83207 4.50301 6.11696 4.25309 6.43781 4.29639C8.56634 4.58418 15.8859 5.47431 21.9377 5.01117C22.2137 4.99005 22.4531 5.19858 22.4679 5.4741L23.6744 28.1061C23.6909 28.4164 23.4532 28.6818 23.1421 28.7001C20.5969 28.8503 10.1148 29.4309 6.37597 29.0404C6.14842 29.0166 5.97564 28.8256 5.97436 28.5975L5.83399 4.82589Z"
          fill="url(#overviewIcon2_linear)"
        />
        <path
          d="M6.08497 5.39316C6.08315 5.08244 6.35724 4.84191 6.6661 4.88362C8.7145 5.16063 15.7585 6.01716 21.5823 5.5714C21.8479 5.55103 22.0784 5.75167 22.0925 6.01695L23.2535 27.7968C23.2694 28.0955 23.0407 28.3508 22.7412 28.3684C20.2919 28.513 10.2045 29.0717 6.6064 28.6959C6.38741 28.6731 6.22116 28.4892 6.21988 28.2696L6.08497 5.39316Z"
          fill="#91B3FA"
        />
        <path
          d="M14.4818 6.89698L14.7204 11.5663C14.7283 11.7216 14.8663 11.8451 15.0373 11.8495C15.9885 11.8739 18.9525 11.9396 20.6262 11.8603C20.8155 11.8513 20.9653 11.7121 20.9715 11.5399C21.0034 10.6641 21.0733 8.11543 20.8537 7.04994C20.8183 6.87778 20.6556 6.7517 20.463 6.74562L14.8406 6.56684C14.638 6.56044 14.4724 6.71277 14.4818 6.89698Z"
          fill="url(#overviewIcon3_linear)"
        />
        <g opacity="0.6">
          <path
            opacity="0.6"
            d="M13.7405 7.47889C13.8291 7.47889 13.8995 7.40839 13.8969 7.3222C13.8943 7.23601 13.8199 7.16423 13.7313 7.16273L8.06633 7.06204C7.97775 7.06044 7.92939 7.12732 7.95882 7.21063L8.00011 7.32743C8.02953 7.41073 8.12603 7.47889 8.21461 7.47889H13.7405Z"
            fill="white"
          />
        </g>
        <g opacity="0.6">
          <path
            opacity="0.6"
            d="M13.8342 11.1774C13.9228 11.1774 13.9932 11.1069 13.9906 11.0207C13.9881 10.9345 13.9136 10.8627 13.825 10.8612L8.16008 10.7605C8.0715 10.7589 8.02314 10.8258 8.05257 10.9091L8.09386 11.0259C8.12328 11.1092 8.21978 11.1774 8.30836 11.1774H13.8342Z"
            fill="white"
          />
        </g>
        <g opacity="0.6">
          <path
            opacity="0.6"
            d="M8.06633 7.93265C7.97775 7.93105 7.92939 7.99793 7.95882 8.08123L8.00011 8.19803C8.02953 8.28134 8.12603 8.3495 8.21461 8.3495H13.7404C13.829 8.3495 13.8994 8.27899 13.8968 8.19281C13.8942 8.10662 13.8198 8.03483 13.7312 8.03334L8.06633 7.93265Z"
            fill="white"
          />
        </g>
        <g opacity="0.6">
          <path
            opacity="0.6"
            d="M8.06633 8.8157C7.97775 8.8141 7.92939 8.88098 7.95882 8.96429L8.00011 9.08109C8.02953 9.16439 8.12603 9.23255 8.21461 9.23255H13.7404C13.829 9.23255 13.8994 9.16204 13.8968 9.07586C13.8942 8.98967 13.8198 8.91789 13.7312 8.91639L8.06633 8.8157Z"
            fill="white"
          />
        </g>
        <g opacity="0.6">
          <path
            opacity="0.6"
            d="M8.12297 9.74832C8.03439 9.74672 7.98604 9.8136 8.01546 9.89691L8.05675 10.0137C8.08617 10.097 8.18267 10.1652 8.27125 10.1652H13.797C13.8856 10.1652 13.956 10.0947 13.9534 10.0085C13.9509 9.92229 13.8764 9.85051 13.7878 9.84901L8.12297 9.74832Z"
            fill="white"
          />
        </g>
        <g opacity="0.6">
          <path
            opacity="0.6"
            d="M21.3741 13.266C21.4627 13.266 21.5304 13.1955 21.5247 13.1093C21.5191 13.0231 21.4419 12.9521 21.3533 12.9514L8.14 12.8477C8.05142 12.8469 8.02414 12.9029 8.07934 12.9719L8.21392 13.1405C8.26913 13.2096 8.3867 13.266 8.47518 13.266H21.3741Z"
            fill="white"
          />
        </g>
        <g opacity="0.6">
          <path
            opacity="0.6"
            d="M8.14 14.8447C8.05142 14.844 8.02414 14.9 8.07934 14.9691L8.21392 15.1376C8.26913 15.2068 8.3867 15.2632 8.47518 15.2632H21.3741C21.4627 15.2632 21.5304 15.1927 21.5247 15.1065C21.5191 15.0203 21.4419 14.9493 21.3533 14.9486L8.14 14.8447Z"
            fill="white"
          />
        </g>
        <g opacity="0.6">
          <path
            opacity="0.6"
            d="M8.05211 16.8914C7.96353 16.8906 7.93625 16.9466 7.99145 17.0157L8.12603 17.1843C8.18124 17.2534 8.29881 17.3098 8.38729 17.3098H21.2862C21.3748 17.3098 21.4425 17.2393 21.4368 17.1531C21.4312 17.0669 21.354 16.9959 21.2654 16.9953L8.05211 16.8914Z"
            fill="white"
          />
        </g>
        <g opacity="0.6">
          <path
            opacity="0.6"
            d="M7.69195 19.2946C7.73388 19.4161 7.87671 19.4998 8.03889 19.498L21.2573 19.349C21.4068 19.3473 21.526 19.251 21.5222 19.1351C21.5184 19.0224 21.3997 18.9326 21.2543 18.9329L8.03493 18.9477C7.8016 18.9478 7.63161 19.1197 7.69195 19.2946Z"
            fill="white"
          />
        </g>
        <g opacity="0.6">
          <path
            opacity="0.6"
            d="M7.70269 21.6696C7.74463 21.7911 7.88745 21.8748 8.04963 21.873L21.268 21.724C21.4176 21.7223 21.5368 21.626 21.5329 21.5101C21.5292 21.3974 21.4104 21.3076 21.265 21.3079L8.04568 21.3227C7.81235 21.3228 7.64235 21.4947 7.70269 21.6696Z"
            fill="white"
          />
        </g>
        <g opacity="0.6">
          <path
            opacity="0.6"
            d="M7.71441 24.0451C7.75635 24.1666 7.89917 24.2503 8.06135 24.2485L21.2797 24.0995C21.4293 24.0978 21.5485 24.0015 21.5446 23.8856C21.5409 23.7728 21.4221 23.6831 21.2767 23.6833L8.05739 23.6982C7.82407 23.6984 7.65407 23.8703 7.71441 24.0451Z"
            fill="white"
          />
        </g>
        <g opacity="0.6">
          <path
            opacity="0.6"
            d="M7.72515 26.4201C7.76709 26.5416 7.90991 26.6253 8.0721 26.6235L21.2905 26.4745C21.44 26.4728 21.5592 26.3765 21.5554 26.2606C21.5516 26.1478 21.4329 26.0581 21.2875 26.0583L8.06814 26.0732C7.83481 26.0734 7.66481 26.2453 7.72515 26.4201Z"
            fill="white"
          />
        </g>
        <path
          opacity="0.72"
          d="M15.1501 1.40705C14.587 1.01654 14.0975 1.02422 13.7529 1.12566C13.4385 1.21814 13.2348 1.52076 13.2646 1.8462L13.4132 3.46358L15.1817 3.62006C15.1819 3.62017 16.2543 2.17292 15.1501 1.40705ZM14.3724 2.7119C14.1288 2.7119 13.9314 2.5151 13.9314 2.27222C13.9314 2.02934 14.1288 1.83254 14.3724 1.83254C14.616 1.83254 14.8134 2.02934 14.8134 2.27222C14.8134 2.5151 14.6159 2.7119 14.3724 2.7119Z"
          fill="url(#overviewIcon4_linear)"
        />
        <path
          d="M13.5901 2.78318C13.5683 2.78318 13.5496 2.76665 13.5476 2.74446L13.524 2.48686C13.5218 2.4635 13.5391 2.44281 13.5626 2.44057C13.5866 2.43833 13.6069 2.45561 13.609 2.47907L13.6327 2.73667C13.6348 2.76003 13.6176 2.78073 13.594 2.78297C13.5927 2.78318 13.5914 2.78318 13.5901 2.78318ZM13.5437 2.27843C13.5218 2.27843 13.5032 2.2619 13.5012 2.23971L13.4832 2.0442C13.4548 1.73422 13.6504 1.44548 13.9484 1.3578C14.1595 1.29572 14.3769 1.28676 14.5948 1.33134C14.6179 1.33604 14.6327 1.35854 14.628 1.38158C14.6233 1.40452 14.601 1.41924 14.5776 1.41465C14.3736 1.37305 14.17 1.38126 13.9726 1.4394C13.7134 1.51566 13.5434 1.76676 13.5682 2.03641L13.5861 2.23193C13.5883 2.25529 13.571 2.27598 13.5475 2.27822C13.5463 2.27833 13.545 2.27843 13.5437 2.27843Z"
          fill="#91B3FA"
        />
        <path
          opacity="0.72"
          d="M10.999 4.50888V3.69565C10.999 3.41491 11.2324 3.19016 11.5137 3.19976L17.1369 3.39187C17.3865 3.4004 17.5886 3.59677 17.6035 3.84531L17.6505 4.62664L10.999 4.50888Z"
          fill="url(#overviewIcon5_linear)"
        />
        <path
          d="M13.097 3.50658H12.8544C12.8307 3.50658 12.8115 3.48752 12.8115 3.46386C12.8115 3.4402 12.8307 3.42114 12.8544 3.42114H13.097C13.1207 3.42114 13.1399 3.4402 13.1399 3.46386C13.1398 3.48752 13.1207 3.50658 13.097 3.50658Z"
          fill="#91B3FA"
        />
        <path
          d="M11.3034 4.25357C11.2799 4.25357 11.2607 4.23458 11.2607 4.21101V3.88205C11.2607 3.62786 11.4682 3.42114 11.7231 3.42114H12.6121C12.6357 3.42114 12.6548 3.44013 12.6548 3.4637C12.6548 3.48717 12.6357 3.50626 12.6121 3.50626H11.7231C11.5153 3.50626 11.3461 3.6749 11.3461 3.88216V4.21111C11.3461 4.23458 11.327 4.25357 11.3034 4.25357Z"
          fill="#91B3FA"
        />
        <path
          d="M8.70774 4.71443C8.72133 4.43283 8.95423 4.2115 9.23699 4.2115L19.0702 4.21118C19.4238 4.21118 19.726 4.46483 19.7863 4.81225L19.7947 4.86014C19.8607 5.24062 19.5669 5.58857 19.1796 5.58857H9.09138C8.85966 5.58857 8.6749 5.39539 8.68602 5.16457L8.70774 4.71443Z"
          fill="url(#overviewIcon6_linear)"
        />
        {state === 'default' && (
          <g style={{mixBlendMode: 'saturation'}}>
            <rect width="32" height="32" fill="white" />
          </g>
        )}
      </g>
      <defs>
        <linearGradient
          id="overviewIcon0_linear"
          x1="0.334521"
          y1="34.1116"
          x2="21.4998"
          y2="11.1989"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DAE3FE" />
          <stop offset="1" stopColor="#E9EFFD" />
        </linearGradient>
        <linearGradient
          id="overviewIcon1_linear"
          x1="14.6426"
          y1="28.5967"
          x2="13.2174"
          y2="-13.7127"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#09005D" />
          <stop offset="1" stopColor="#1A0F91" />
        </linearGradient>
        <linearGradient
          id="overviewIcon2_linear"
          x1="2.48934"
          y1="34.5266"
          x2="20.5946"
          y2="7.73575"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4F52FF" />
          <stop offset="1" stopColor="#4042E2" />
        </linearGradient>
        <linearGradient
          id="overviewIcon3_linear"
          x1="21.0079"
          y1="9.23248"
          x2="14.4815"
          y2="9.23248"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DAE3FE" />
          <stop offset="1" stopColor="#E9EFFD" />
        </linearGradient>
        <linearGradient
          id="overviewIcon4_linear"
          x1="16.8892"
          y1="-0.912704"
          x2="9.74651"
          y2="8.51114"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#09005D" />
          <stop offset="1" stopColor="#1A0F91" />
        </linearGradient>
        <linearGradient
          id="overviewIcon5_linear"
          x1="17.675"
          y1="-0.316694"
          x2="10.5324"
          y2="9.10714"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#09005D" />
          <stop offset="1" stopColor="#1A0F91" />
        </linearGradient>
        <linearGradient
          id="overviewIcon6_linear"
          x1="16.7715"
          y1="0.258735"
          x2="11.8437"
          y2="9.33407"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4F52FF" />
          <stop offset="1" stopColor="#4042E2" />
        </linearGradient>
        <clipPath id="overviewIconClip0">
          <rect width="32" height="32" fill="white" transform="translate(0.486328)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default OverviewIcon;
