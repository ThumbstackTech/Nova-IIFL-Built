interface Props {
  width?: string;
  height?: string;
  color?: string;
}
import React from 'react';

export function Hamburger(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : '24'}
      height={height ? height : '24'}
      viewBox='0 0 24 24'
    >
      <path data-name='Path 77005' d='M0 0h24v24H0z' fill='none' />
      <path
        data-name='Path 77006'
        d='M4.007 17.743h16.114a.979.979 0 1 0 0-1.957H4.007a.979.979 0 1 0 0 1.957zm0-4.893h16.114a.979.979 0 1 0 0-1.957H4.007a.979.979 0 1 0 0 1.957zM3 6.979a1 1 0 0 0 1.007.979h16.114a.979.979 0 1 0 0-1.957H4.007A1 1 0 0 0 3 6.979z'
        transform='translate(-.064 .129)'
        fill={color ? color : '#6d6a8d'}
      />
    </svg>
  );
}
export function SearchIcon(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : '16'}
      height={height ? height : '16'}
      viewBox='0 0 16 16'
    >
      <g data-name='Group 26848'>
        <path
          data-name='Path 19325'
          d='M14.435 13.063h-.723l-.256-.247a5.955 5.955 0 1 0-.64.64l.247.256v.723L17.637 19 19 17.637zm-5.489 0a4.117 4.117 0 1 1 4.117-4.117 4.111 4.111 0 0 1-4.117 4.117z'
          transform='translate(-3 -3)'
          fill={color ? color : '#241f55'}
          opacity='0.65'
        />
      </g>
    </svg>
  );
}
export function WhiteBag(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      data-name='Group 26405'
      xmlns='http://www.w3.org/2000/svg'
      width='28'
      height='28'
      viewBox='0 0 28 28'
    >
      <g data-name='Group 21622'>
        <g data-name='Group 21623'>
          <path
            data-name='Path 51949'
            d='m18393.838-4348.091 1.072-7.7a1.791 1.791 0 0 1 1.813-1.409c1.51.05 8.484 0 8.484 0s1.813-.151 2.164 1.409 1.459 12.18 1.459 12.18.605 2.517-1.961 2.567-11.607 0-11.607 0a1.789 1.789 0 0 1-1.912-1.963c.15-2.014.488-5.084.488-5.084z'
            transform='translate(-18386.918 4365.294)'
            stroke='#707070'
            strokeWidth='2px'
            fill='none'
          />
          <path
            data-name='Path 51950'
            d='M18410.713-4365.424v-4.661a3.188 3.188 0 0 1 3.346-2.767 2.858 2.858 0 0 1 3.057 2.767v4.661'
            transform='translate(-18399.717 4377.227)'
            strokeLinecap='round'
            strokeLinejoin='round'
            stroke='#707070'
            strokeWidth='2px'
            fill='none'
          />
        </g>
      </g>
      <path data-name='Path 51953' d='M0 0h28v28H0z' fill='none' />
    </svg>
  );
}
export function OrangeBag(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      data-name='Group 26405'
      xmlns='http://www.w3.org/2000/svg'
      width='28'
      height='28'
      viewBox='0 0 28 28'
    >
      <g data-name='Group 21622'>
        <g data-name='Group 21623'>
          <path
            data-name='Path 51949'
            d='m18393.838-4348.091 1.072-7.7a1.791 1.791 0 0 1 1.813-1.409c1.51.05 8.484 0 8.484 0s1.813-.151 2.164 1.409 1.459 12.18 1.459 12.18.605 2.517-1.961 2.567-11.607 0-11.607 0a1.789 1.789 0 0 1-1.912-1.963c.15-2.014.488-5.084.488-5.084z'
            transform='translate(-18386.918 4365.294)'
            stroke='#ff7623'
            strokeWidth='2px'
            fill='#ff7623'
          />
          <path
            data-name='Path 51950'
            d='M18410.713-4365.424v-4.661a3.188 3.188 0 0 1 3.346-2.767 2.858 2.858 0 0 1 3.057 2.767v4.661'
            transform='translate(-18399.717 4377.227)'
            strokeLinecap='round'
            strokeLinejoin='round'
            stroke='#ff7623'
            strokeWidth='2px'
            fill='none'
          />
        </g>
      </g>
      <path data-name='Path 51953' d='M0 0h28v28H0z' fill='none' />
    </svg>
  );
}
export function AccountCircle(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : '24'}
      height={height ? height : '24'}
      viewBox='0 0 24 24'
    >
      <path data-name='Path 77026' d='M0 0h24v24H0z' fill='none' />
      <path
        data-name='Path 77027'
        d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 3a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z'
        fill={color ? color : '#ff7623'}
      />
    </svg>
  );
}
export function AddCircleOutline(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : '14'}
      height={height ? height : '14'}
      viewBox='0 0 14 14'
    >
      <g
        id='Icon_ionic-ios-add-circle-outline'
        data-name='Icon ionic-ios-add-circle-outline'
        transform='translate(-3.375 -3.375)'
      >
        <path
          id='Path_53111'
          fill={color ? color : '#000'}
          data-name='Path 53111'
          className='cls-1'
          d='M16.567 13.293h-2.29V11a.492.492 0 1 0-.984 0v2.29H11a.471.471 0 0 0-.492.492.476.476 0 0 0 .492.492h2.29v2.29a.476.476 0 0 0 .492.492.489.489 0 0 0 .492-.492v-2.29h2.29a.492.492 0 0 0 0-.984z'
          transform='translate(-3.41 -3.41)'
        />
        <path
          id='Path_53112'
          fill={color ? color : '#000'}
          data-name='Path 53112'
          className='cls-1'
          d='M10.375 4.317a6.055 6.055 0 1 1-4.284 1.774 6.018 6.018 0 0 1 4.284-1.774m0-.942a7 7 0 1 0 7 7 7 7 0 0 0-7-7z'
        />
      </g>
    </svg>
  );
}
export function Arrow(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : '14'}
      height={height ? height : '14'}
      viewBox='0 0 14 14'
    >
      <path data-name='Rectangle 5765' fill='none' d='M0 0h14v14H0z' />
      <path
        data-name='Path 51958'
        d='M9.079 5.586a.574.574 0 0 0 0 .812l2.235 2.235H2.576A.578.578 0 0 0 2 9.209a.578.578 0 0 0 .576.576h8.744L9.085 12.02a.574.574 0 0 0 0 .812.574.574 0 0 0 .812 0l3.22-3.22a.574.574 0 0 0 0-.812L9.891 5.586a.574.574 0 0 0-.812 0z'
        transform='translate(.054 -2.225)'
        fill={color ? color : '#fff'}
        stroke={color ? color : '#fff'}
        strokeWidth='.6px'
      />
    </svg>
  );
}
export function Wrench(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32.258'
      height='27.868'
      viewBox='0 0 32.258 27.868'
    >
      <path
        data-name='Path 77702'
        d='M24.484 10H14.56a7.5 7.5 0 1 1 0-5H15l1.612-1.612a1.245 1.245 0 0 1 1.762 0L20 5l1.612-1.612a1.26 1.26 0 0 1 1.775 0l3.237 3.263a1.249 1.249 0 0 1-.012 1.775l-1.241 1.212a1.28 1.28 0 0 1-.887.362zM7.5 3.75a3.75 3.75 0 1 0 3.75 3.75A3.761 3.761 0 0 0 7.5 3.75z'
        transform='rotate(150 13.945 11.074)'
        fill='none'
        stroke='#858585'
      />
    </svg>
  );
}
export function UpwordArrow(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='30.063'
      height='30'
      viewBox='0 0 30.063 30'
    >
      <path
        data-name='Subtraction 69'
        d='M-17678.7 356h0a14.479 14.479 0 0 1-9.439-4.617 14.452 14.452 0 0 1-3.859-9.855 14.545 14.545 0 0 1 14.527-14.528 14.548 14.548 0 0 1 14.533 14.528 14.476 14.476 0 0 1-3.863 9.857 14.475 14.475 0 0 1-9.443 4.614v-17.868l5.99 6.96a1.145 1.145 0 0 0 .873.415 1.141 1.141 0 0 0 .871-.415 1.6 1.6 0 0 0 0-2.009l-8.092-9.4a1.121 1.121 0 0 0-.859-.415 1.146 1.146 0 0 0-.867.415l-8.1 9.38a1.585 1.585 0 0 0 0 2.009 1.127 1.127 0 0 0 .863.419 1.138 1.138 0 0 0 .867-.419l6-6.941V356z'
        transform='translate(17692.5 -326.5)'
        fill='none'
        stroke='#858585'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}
export function Download(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='30'
      viewBox='0 0 30 30'
    >
      <path data-name='Path 77694' d='M0 0h30v30H0z' fill='none' />
      <path
        data-name='Path 77695'
        d='M23 15.5v6.25A1.254 1.254 0 0 1 21.75 23h-15a1.254 1.254 0 0 1-1.25-1.25V15.5a1.25 1.25 0 0 0-2.5 0V23a2.507 2.507 0 0 0 2.5 2.5H23a2.507 2.507 0 0 0 2.5-2.5v-7.5a1.25 1.25 0 0 0-2.5 0zm-7.5-.413 2.35-2.35a1.246 1.246 0 0 1 1.763 1.763l-4.488 4.487a1.245 1.245 0 0 1-1.762 0L8.875 14.5a1.246 1.246 0 0 1 1.762-1.762L13 15.087V4.25a1.25 1.25 0 0 1 2.5 0z'
        transform='translate(.75 .75)'
        fill='#858585'
      />
    </svg>
  );
}
export function GreyCart(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='30'
      viewBox='0 0 30 30'
    >
      <path
        data-name='Path 77636'
        d='M118.754 37.349h-1.434l4.51-11.832a.693.693 0 0 0-.1-.654.783.783 0 0 0-.618-.308h-22.88l-1.068-2.549a.766.766 0 0 0-.707-.481h-3.818a.723.723 0 1 0 0 1.443h3.31l5.939 15.348a.761.761 0 0 0 .717.481h16.149a1.615 1.615 0 0 1 1.383.755 1.44 1.44 0 0 1 0 1.51 1.616 1.616 0 0 1-1.383.755H96.706a.723.723 0 1 0 0 1.443h22.048a3.158 3.158 0 0 0 2.7-1.477 2.815 2.815 0 0 0 0-2.953 3.158 3.158 0 0 0-2.7-1.477zM98.812 25.993h21.214L115.7 37.349h-12.561z'
        transform='translate(-91.876 -21.525)'
        fill='#858585'
      />
      <path
        data-name='Path 77637'
        d='M447.933 435.14a3.513 3.513 0 1 0 2.479 1.031 3.512 3.512 0 0 0-2.479-1.031zm0 5.23a1.718 1.718 0 1 1 1.214-.5 1.723 1.723 0 0 1-1.214.5z'
        transform='translate(-425.572 -412.164)'
        fill='#858585'
      />
      <path
        data-name='Path 77638'
        d='M210.893 435.14a3.512 3.512 0 1 0 2.48 1.031 3.512 3.512 0 0 0-2.48-1.031zm0 5.23a1.723 1.723 0 1 1 1.213-.5 1.722 1.722 0 0 1-1.213.5z'
        transform='translate(-200.953 -412.164)'
        fill='#858585'
      />
    </svg>
  );
}
export function ClientCode(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='23'
      height='23'
      viewBox='0 0 23 23'
    >
      <g data-name='Group 27994'>
        <path data-name='Rectangle 7084' fill='none' d='M0 0h23v23H0z' />
        <g data-name='Group 27886'>
          <g data-name='Group 27885'>
            <path
              data-name='Path 77622'
              d='M4.633 9.532H7.9A1.638 1.638 0 0 0 9.532 7.9V4.633A1.638 1.638 0 0 0 7.9 3H4.633A1.638 1.638 0 0 0 3 4.633V7.9a1.638 1.638 0 0 0 1.633 1.632zm0-4.9H7.9V7.9H4.633z'
              transform='translate(1 1)'
              fill='#139f9a'
            />
            <path
              data-name='Path 77623'
              d='M4.633 19.532H7.9A1.638 1.638 0 0 0 9.532 17.9v-3.267A1.638 1.638 0 0 0 7.9 13H4.633A1.638 1.638 0 0 0 3 14.633V17.9a1.638 1.638 0 0 0 1.633 1.632zm0-4.9H7.9V17.9H4.633z'
              transform='translate(1 .468)'
              fill='#139f9a'
            />
            <path
              data-name='Path 77624'
              d='M13 4.633V7.9a1.638 1.638 0 0 0 1.633 1.633H17.9A1.638 1.638 0 0 0 19.532 7.9V4.633A1.638 1.638 0 0 0 17.9 3h-3.267A1.638 1.638 0 0 0 13 4.633zM17.9 7.9h-3.267V4.633H17.9z'
              transform='translate(.468 1)'
              fill='#139f9a'
            />
            <path
              data-name='Path 77625'
              d='M20.633 20.225v-.816a.4.4 0 0 0-.408-.409h-.816a.4.4 0 0 0-.408.408v.816a.4.4 0 0 0 .408.408h.816a.4.4 0 0 0 .408-.407z'
              transform='translate(-.633 -.633)'
              fill='#139f9a'
            />
            <path
              data-name='Path 77626'
              d='M13 13.408v.816a.4.4 0 0 0 .408.408h.816a.4.4 0 0 0 .408-.408v-.816a.4.4 0 0 0-.407-.408h-.816a.4.4 0 0 0-.409.408z'
              transform='translate(-.021 -.021)'
              fill='#139f9a'
            />
            <path
              data-name='Path 77627'
              d='M16.225 15h-.816a.4.4 0 0 0-.408.408v.816a.4.4 0 0 0 .408.408h.816a.4.4 0 0 0 .408-.408v-.816a.4.4 0 0 0-.408-.408z'
              transform='translate(-.225 -.225)'
              fill='#139f9a'
            />
            <path
              data-name='Path 77628'
              d='M13 17.408v.816a.4.4 0 0 0 .408.408h.816a.4.4 0 0 0 .408-.408v-.816a.4.4 0 0 0-.407-.408h-.816a.4.4 0 0 0-.409.408z'
              transform='translate(-.021 -.266)'
              fill='#139f9a'
            />
            <path
              data-name='Path 77629'
              d='M15.408 20.633h.816a.4.4 0 0 0 .408-.408v-.816a.4.4 0 0 0-.407-.409h-.816a.4.4 0 0 0-.408.408v.816a.4.4 0 0 0 .407.409z'
              transform='translate(-.225 -.633)'
              fill='#139f9a'
            />
            <path
              data-name='Path 77630'
              d='M17.408 18.633h.816a.4.4 0 0 0 .408-.408v-.816a.4.4 0 0 0-.407-.409h-.816a.4.4 0 0 0-.408.408v.816a.4.4 0 0 0 .407.409z'
              transform='translate(-.266 -.266)'
              fill='#139f9a'
            />
            <path
              data-name='Path 77631'
              d='M18.225 13h-.816a.4.4 0 0 0-.408.408v.816a.4.4 0 0 0 .408.408h.816a.4.4 0 0 0 .408-.408v-.816a.4.4 0 0 0-.408-.408z'
              transform='translate(-.266 -.021)'
              fill='#139f9a'
            />
            <path
              data-name='Path 77632'
              d='M19.408 16.633h.816a.4.4 0 0 0 .408-.408v-.816a.4.4 0 0 0-.407-.409h-.816a.4.4 0 0 0-.408.408v.816a.4.4 0 0 0 .407.409z'
              transform='translate(-.633 -.225)'
              fill='#139f9a'
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
export function MobileNum(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='23'
      height='23'
      viewBox='0 0 23 23'
    >
      <g data-name='Group 27994'>
        <path data-name='Rectangle 7084' fill='none' d='M0 0h23v23H0z' />
        <path
          data-name='Path 77609'
          d='m17.459 13.921-2.259-.258a1.773 1.773 0 0 0-1.461.508L12.1 15.809a13.4 13.4 0 0 1-5.87-5.87l1.645-1.647a1.773 1.773 0 0 0 .508-1.461l-.259-2.244A1.783 1.783 0 0 0 6.352 3.01H4.811A1.768 1.768 0 0 0 3.03 4.854a15.134 15.134 0 0 0 14.153 14.153 1.768 1.768 0 0 0 1.844-1.781v-1.542a1.765 1.765 0 0 0-1.568-1.763z'
          transform='translate(.474 .49)'
          fill='#158fe0'
        />
      </g>
    </svg>
  );
}
export function ProfileEmail(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='23'
      height='23'
      viewBox='0 0 23 23'
    >
      <g data-name='Group 27994'>
        <path data-name='Rectangle 7084' fill='none' d='M0 0h23v23H0z' />
        <path
          data-name='Path 77635'
          d='M16.4 4H3.6a1.55 1.55 0 0 0-1.592 1.5L2 14.5A1.557 1.557 0 0 0 3.6 16h12.8a1.557 1.557 0 0 0 1.6-1.5v-9A1.557 1.557 0 0 0 16.4 4zm-.32 3.188L10.424 10.5a.855.855 0 0 1-.848 0L3.92 7.188a.634.634 0 0 1-.32-.54.681.681 0 0 1 1.04-.54L10 9.25l5.36-3.143a.681.681 0 0 1 1.04.54.634.634 0 0 1-.32.541z'
          transform='translate(2 2)'
          fill='#e8532c'
        />
      </g>
    </svg>
  );
}
export function WhiteDelete(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
    >
      <path data-name='Path 77620' d='M0 0h16v16H0z' fill='none' />
      <path
        data-name='Path 77621'
        d='M5.71 13.989a1.4 1.4 0 0 0 1.42 1.374h5.678a1.4 1.4 0 0 0 1.42-1.374V7.121a1.4 1.4 0 0 0-1.42-1.374H7.129A1.4 1.4 0 0 0 5.71 7.121zm2.129-6.868H12.1a.7.7 0 0 1 .71.687V13.3a.7.7 0 0 1-.71.687H7.839a.7.7 0 0 1-.71-.687V7.808a.7.7 0 0 1 .71-.687zm4.614-3.434-.5-.488a.728.728 0 0 0-.5-.2H8.485a.728.728 0 0 0-.5.2l-.5.488H5.71a.687.687 0 1 0 0 1.374h8.518a.687.687 0 1 0 0-1.374z'
        transform='translate(-1.969 -1.181)'
        fill='#fff'
      />
    </svg>
  );
}
export function Email(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <g data-name='Group 27919' transform='translate(-278 -735)'>
        <rect
          data-name='Rectangle 7062'
          width='24'
          height='24'
          rx='4'
          transform='translate(278 735)'
          fill='#fff0de'
        />
        <path
          data-name='Path 77494'
          d='M12.464 4h-9.3a1.161 1.161 0 0 0-1.158 1.163L2 12.139A1.166 1.166 0 0 0 3.163 13.3h9.3a1.166 1.166 0 0 0 1.163-1.163V5.163A1.166 1.166 0 0 0 12.464 4zm-.233 2.471L8.122 9.04a.588.588 0 0 1-.616 0L3.4 6.471a.494.494 0 1 1 .523-.837l3.9 2.436 3.9-2.436a.494.494 0 1 1 .523.837z'
          transform='translate(282.124 738.287)'
          fill='#e8532c'
        />
      </g>
    </svg>
  );
}
export function Call(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <g data-name='Group 27907' transform='translate(-278 -735)'>
        <rect
          data-name='Rectangle 7062'
          width='24'
          height='24'
          rx='4'
          transform='translate(278 735)'
          fill='#def3ff'
        />
        <path
          data-name='Path 77491'
          d='M0 0h19.188v19.188H0z'
          fill='none'
          transform='translate(280.398 737.398)'
        />
        <path
          data-name='Path 77492'
          d='m13.8 11.152-1.688-.193a1.323 1.323 0 0 0-1.09.379l-1.227 1.223a10 10 0 0 1-4.38-4.38l1.23-1.23a1.323 1.323 0 0 0 .379-1.09L6.83 4.186A1.33 1.33 0 0 0 5.508 3.01h-1.15a1.319 1.319 0 0 0-1.329 1.376A11.293 11.293 0 0 0 13.59 14.947a1.319 1.319 0 0 0 1.376-1.329v-1.15a1.317 1.317 0 0 0-1.166-1.316z'
          transform='translate(281.006 738.003)'
          fill='#158fe0'
        />
      </g>
    </svg>
  );
}
export function Faq(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <g data-name='Group 27913' transform='translate(-278 -735)'>
        <rect
          data-name='Rectangle 7062'
          width='24'
          height='24'
          rx='4'
          transform='translate(278 735)'
          fill='#deffef'
        />
        <path
          data-name='Path 77491'
          d='M0 0h18.932v18.932H0z'
          fill='none'
          transform='translate(280.367 737.367)'
        />
        <g data-name='Group 27430'>
          <path
            data-name='Path 77495'
            d='M0 0h11.07v11.07H0z'
            fill='none'
            transform='translate(284.298 741.298)'
          />
        </g>
        <g data-name='Group 27432'>
          <g data-name='Group 27431'>
            <path
              data-name='Path 77496'
              d='M8.919 12.458h-6v-6a.461.461 0 0 0-.923 0v6a.925.925 0 0 0 .923.923h6a.461.461 0 1 0 0-.923z'
              transform='translate(283.221 738.066)'
              fill='#11b9c8'
            />
            <path
              data-name='Path 77497'
              d='M12.458 2H6.923A.925.925 0 0 0 6 2.923v5.535a.925.925 0 0 0 .923.923h5.535a.925.925 0 0 0 .923-.923V2.923A.925.925 0 0 0 12.458 2zM9.695 8a.482.482 0 1 1 0-.964.471.471 0 0 1 .48.48.48.48 0 0 1-.48.484zm1.153-2.85c-.291.429-.567.558-.72.835a.542.542 0 0 0-.074.226.349.349 0 0 1-.346.314h-.013a.348.348 0 0 1-.346-.378.937.937 0 0 1 .115-.387c.189-.337.544-.535.752-.83a.569.569 0 0 0-.526-.895.671.671 0 0 0-.581.323.331.331 0 0 1-.411.115.336.336 0 0 1-.157-.494 1.359 1.359 0 0 1 1.144-.6 1.3 1.3 0 0 1 1.158.581 1.157 1.157 0 0 1 .005 1.19z'
              transform='translate(281.066 740.221)'
              fill='#11b9c8'
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
export function RatingStar(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : '15.861'}
      height={height ? height : '14.87'}
      viewBox='0 0 15.861 14.87'
    >
      <path data-name='Rectangle 6281' fill='none' d='M0 0h15.861v14.87H0z' />
      <path
        data-name='Path 76741'
        d='M10.742 8.014 9.8 4.905a.64.64 0 0 0-1.227 0l-.952 3.109H4.762a.641.641 0 0 0-.372 1.163l2.338 1.67-.919 2.961a.642.642 0 0 0 1 .7l2.37-1.8 2.37 1.8a.642.642 0 0 0 1-.7l-.919-2.961 2.338-1.67A.641.641 0 0 0 13.6 8.02h-2.858z'
        transform='translate(-1.251 -2.114)'
        fill={color ? color : '#ffdf00'}
      />
    </svg>
  );
}
export function Group25713(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='105.318'
      height='166.963'
      viewBox='0 0 125.318 166.963'
    >
      <g
        data-name='Group 25597'
        transform='translate(-9 -.5)'
        style={{ opacity: '.5' }}
      >
        <rect
          data-name='Rectangle 6484'
          width='84.239'
          height='83.987'
          rx='41.994'
          transform='translate(49.08 .5)'
          fill='#fff'
          style={{ opacity: '.5' }}
        />
        <rect
          data-name='Rectangle 6485'
          width='125.318'
          height='124.97'
          rx='59'
          transform='translate(9 42.494)'
          fill='#fff'
          style={{ opacity: '.5' }}
        />
      </g>
    </svg>
  );
}
export function Group25713Two(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='135.318'
      height='196.963'
      viewBox='0 0 125.318 166.963'
    >
      <g
        data-name='Group 25597'
        transform='translate(-9 -.5)'
        style={{ opacity: '.5' }}
      >
        <rect
          data-name='Rectangle 6484'
          width='84.239'
          height='83.987'
          rx='41.994'
          transform='translate(49.08 .5)'
          fill='#fff'
          style={{ opacity: '.5' }}
        />
        <rect
          data-name='Rectangle 6485'
          width='125.318'
          height='124.97'
          rx='59'
          transform='translate(9 42.494)'
          fill='#fff'
          style={{ opacity: '.5' }}
        />
      </g>
    </svg>
  );
}
export function Group25704(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='131.728'
      height='153.727'
      viewBox='0 0 131.728 153.727'
    >
      <g data-name='Group 25704' transform='rotate(150 84.276 84.368)'>
        <rect
          data-name='Rectangle 6496'
          width='69.116'
          height='65.287'
          rx='32.643'
          transform='rotate(-150 89.818 63.687)'
          fill='#fff'
          style={{ opacity: '.2' }}
        />
        <rect
          data-name='Rectangle 6497'
          width='95.047'
          height='153.727'
          rx='11'
          transform='rotate(-150 65.936 79.454)'
          fill='#fff'
          opacity='1'
          style={{ opacity: '.2' }}
        />
      </g>
    </svg>
  );
}
export function Group25704Two(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='161.728'
      height='193.727'
      viewBox='0 0 131.728 153.727'
    >
      <g data-name='Group 25704' transform='rotate(150 84.276 84.368)'>
        <rect
          data-name='Rectangle 6496'
          width='69.116'
          height='65.287'
          rx='32.643'
          transform='rotate(-150 89.818 63.687)'
          fill='#fff'
          style={{ opacity: '.2' }}
        />
        <rect
          data-name='Rectangle 6497'
          width='95.047'
          height='153.727'
          rx='11'
          transform='rotate(-150 65.936 79.454)'
          fill='#fff'
          opacity='1'
          style={{ opacity: '.2' }}
        />
      </g>
    </svg>
  );
}
export function Greendot(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='8'
      height='8'
      viewBox='0 0 8 8'
    >
      <circle data-name='Ellipse 2071' cx='4' cy='4' r='4' fill='#43e348' />
    </svg>
  );
}
export function Question(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='#8100cc'
      className='bi bi-question-circle-fill'
      viewBox='0 0 16 16'
    >
      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z' />
    </svg>
  );
}
export function Group25597First(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      data-name='Group 25713'
      width='110.043'
      height='168.858'
      viewBox='0 0 129.043 168.858'
    >
      <path
        data-name='Path 76899'
        d='M37.95 4.111a6.332 6.332 0 0 1 11.868.024l37.915 99.336a6.4 6.4 0 0 1-5.917 8.726l-75.441-.153a6.448 6.448 0 0 1-5.951-8.75z'
        transform='translate(40.875)'
        fill='#fff'
        style={{ opacity: '.2' }}
      />
      <path
        data-name='Path 76900'
        d='M40.7 5.123c2.229-6.863 10.529-6.82 12.81.066l41.175 124.338c1.747 5.276-1.549 10.919-6.364 10.894L6.9 140c-4.815-.025-8.154-5.7-6.446-10.96z'
        transform='translate(0 28.437)'
        fill='#fff'
        style={{ opacity: '.2' }}
      />
    </svg>
  );
}
export function Forum(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
    >
      <path data-name='Path 51970' d='M0 0h16v16H0z' fill='none' />
      <path
        data-name='Path 51971'
        d='M12.98 4.66h-.593v4.717a.593.593 0 0 1-.593.59L5.3 9.925v.59a1.187 1.187 0 0 0 1.19 1.179h5.066l2.373 2.359V5.8c0-.652-.297-1.14-.949-1.14zM10.9 7.307V3.179A1.187 1.187 0 0 0 9.713 2H3.187A1.187 1.187 0 0 0 2 3.179v7.666l2.373-2.358h5.34a1.187 1.187 0 0 0 1.187-1.18z'
        transform='translate(.036 -.028)'
        stroke='#06c'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export function AlgoTrading(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='auto'
      height='auto'
      viewBox='0 0 40 40'
      {...props}
    >
      <defs>
        <style>{'.cls-2{fill:#ff9500;stroke:#fff}'}</style>
      </defs>
      <g
        id='Group_26410'
        data-name='Group 26410'
        transform='translate(-290 -278)'
      >
        <rect
          id='Rectangle_6447'
          data-name='Rectangle 6447'
          width={40}
          height={40}
          rx={16}
          transform='translate(290 278)'
          fill='#fff'
        />
        <g id='noun_coding_4399594' transform='translate(174.235 136.436)'>
          <g
            id='Group_25567'
            data-name='Group 25567'
            transform='translate(122.764 153.564)'
          >
            <g id='Group_25566' data-name='Group 25566'>
              <path
                id='Path_76888'
                data-name='Path 76888'
                className='cls-2'
                d='M130.671 167.006a1.721 1.721 0 00-2.414 0l-4.993 4.932a1.672 1.672 0 000 2.385l4.993 4.933a1.722 1.722 0 002.414 0 1.672 1.672 0 000-2.385l-3.786-3.74 3.786-3.74a1.672 1.672 0 000-2.385z'
                transform='translate(-122.764 -165.131)'
              />
              <path
                id='Path_76889'
                data-name='Path 76889'
                className='cls-2'
                d='M313.348 167.007a1.722 1.722 0 00-2.414 0 1.672 1.672 0 000 2.385l3.786 3.74-3.786 3.74a1.672 1.672 0 000 2.385 1.722 1.722 0 002.414 0l4.993-4.933a1.672 1.672 0 000-2.385z'
                transform='translate(-292.841 -165.132)'
              />
              <path
                id='Path_76890'
                data-name='Path 76890'
                className='cls-2'
                d='M224.045 153.679a1.712 1.712 0 00-2.209.962l-4.957 12.619a1.685 1.685 0 00.972 2.187 1.714 1.714 0 002.209-.962l4.957-12.619a1.684 1.684 0 00-.972-2.187z'
                transform='translate(-207.948 -153.564)'
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
export function AdvisorySolution(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='auto'
      height='auto'
      viewBox='0 0 40 40'
      {...props}
    >
      <g data-name='Group 26411' transform='translate(-386 -278)'>
        <rect
          data-name='Rectangle 6453'
          width={40}
          height={40}
          rx={16}
          transform='translate(386 278)'
          fill='#fff'
        />
        <path data-name='Path 51959' d='M394 286h24v24h-24z' fill='none' />
        <path
          data-name='Path 51960'
          d='M406 298a4.034 4.034 0 10-4.033-4.033A4.033 4.033 0 00406 298zm0 2.017c-2.692 0-8.067 1.352-8.067 4.034v1.008a1.011 1.011 0 001.008 1.008h14.118a1.011 1.011 0 001.008-1.008v-1.008c.001-2.682-5.374-4.034-8.067-4.034z'
          fill='#ff453a'
        />
      </g>
    </svg>
  );
}

export function PortfolioManagement(props: Props) {
  const { color, width, height } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='auto'
      height='auto'
      viewBox='0 0 40 40'
      {...props}
    >
      <g data-name='Group 26412' transform='translate(-481 -259)'>
        <rect
          data-name='Rectangle 6456'
          width={40}
          height={40}
          rx={16}
          transform='translate(481 259)'
          fill='#fff'
        />
        <path data-name='Path 51961' d='M489 266h24v24h-24z' fill='none' />
        <path
          data-name='Path 51962'
          d='M501.9 281.699h-1.8a.915.915 0 01-.9-.925h-6.291v3.7a1.831 1.831 0 001.8 1.85H507.3a1.831 1.831 0 001.8-1.85v-3.698h-6.3a.915.915 0 01-.9.923zm6.3-8.323h-3.6a3.6 3.6 0 10-7.2 0h-3.6a1.831 1.831 0 00-1.8 1.849V278a1.819 1.819 0 001.8 1.85h5.4v-.925a.915.915 0 01.9-.925h1.8a.915.915 0 01.9.925v.925h5.4A1.831 1.831 0 00510 278v-2.775a1.831 1.831 0 00-1.8-1.849zm-9 0a1.8 1.8 0 113.6 0h-3.6z'
          fill='#30d158'
        />
      </g>
    </svg>
  );
}

export function WhiteArrow(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={14}
      height={14}
      viewBox='0 0 14 14'
      {...props}
    >
      <path data-name='Rectangle 5765' d='M0 0h14v14H0z' fill='none' />
      <path
        data-name='Path 51958'
        d='M9.133 3.361a.574.574 0 000 .812l2.235 2.235H2.63a.578.578 0 00-.576.576.578.578 0 00.576.576h8.744L9.139 9.795a.574.574 0 000 .812.574.574 0 00.812 0l3.22-3.22a.574.574 0 000-.812L9.945 3.361a.574.574 0 00-.812 0z'
        fill='#fff'
        stroke='#fff'
        strokeWidth='.6px'
      />
    </svg>
  );
}
export function Twitter(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={19.492}
      viewBox='0 0 24 19.492'
      {...props}
    >
      <path
        data-name='Icon awesome-twitter'
        d='M21.533 4.858c.015.213.015.426.015.64A13.9 13.9 0 017.553 19.492 13.9 13.9 0 010 17.284a10.176 10.176 0 001.188.061 9.851 9.851 0 006.107-2.1 4.927 4.927 0 01-4.6-3.411 6.2 6.2 0 00.929.076 5.2 5.2 0 001.294-.167 4.919 4.919 0 01-3.943-4.83v-.061a4.954 4.954 0 002.223.624A4.926 4.926 0 011.675.898a13.981 13.981 0 0010.142 5.147 5.553 5.553 0 01-.117-1.126 4.923 4.923 0 018.513-3.365A9.684 9.684 0 0023.33.365a4.906 4.906 0 01-2.162 2.711A9.861 9.861 0 0024 2.319a10.573 10.573 0 01-2.467 2.543z'
        fill='#666'
      />
    </svg>
  );
}
export function TimmerBlack(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={35}
      height={35}
      viewBox='0 0 35 35'
      {...props}
    >
      <g data-name='Group 25088'>
        <path data-name='Rectangle 6272' d='M0 0h35v35H0z' fill='none' />
      </g>
      <g data-name='Group 25091'>
        <g data-name='Group 25090'>
          <g data-name='Group 25089'>
            <path
              data-name='Path 76737'
              d='M21.884 1.457H13.14v2.915h8.744zm-5.829 18.945h2.915v-8.745h-2.915zm11.7-9.633L29.826 8.7a16.1 16.1 0 00-2.055-2.055l-2.069 2.069a13.115 13.115 0 102.055 2.055zM17.512 29.146a10.2 10.2 0 1110.2-10.2 10.194 10.194 0 01-10.2 10.2z'
              fill='#082d65'
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
export function Star(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={22}
      height={22}
      viewBox='0 0 22 22'
      {...props}
    >
      <path data-name='Rectangle 6281' d='M0 0h22v22H0z' fill='none' />
      <path
        data-name='Path 76741'
        d='M13.167 8.844l-1.363-4.492a.924.924 0 00-1.771 0L8.66 8.844H4.534a.926.926 0 00-.538 1.678l3.375 2.411-1.325 4.271a.926.926 0 001.446 1.01l3.422-2.6 3.422 2.606a.926.926 0 001.446-1.011l-1.326-4.275 3.375-2.411a.925.925 0 00-.538-1.678h-4.126z'
        fill='#ffa41c'
      />
    </svg>
  );
}
export function StarRateBlack(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={23}
      height={22}
      viewBox='0 0 23 22'
      {...props}
    >
      <path data-name='Rectangle 6281' d='M0 0h23v22H0z' fill='none' />
      <path
        data-name='Path 76741'
        d='M13.56 8.844l-1.363-4.492a.924.924 0 00-1.771 0L9.053 8.844H4.927a.926.926 0 00-.538 1.678l3.375 2.411-1.325 4.271a.926.926 0 001.446 1.01l3.422-2.6 3.422 2.606a.926.926 0 001.446-1.011l-1.326-4.275 3.375-2.411a.925.925 0 00-.538-1.678H13.56z'
        stroke='#ffa41c'
        fill='none'
      />
    </svg>
  );
}
export function StackOverFlow(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        data-name='Icon metro-stackoverflow'
        d='M24 15v9H0v-9h3v6h18v-6zM4.5 16.5h15v3h-15zm.355-3.247l.649-2.929 14.644 3.248-.649 2.929zm1.7-6.021l1.268-2.719 13.593 6.339-1.267 2.72zm16.688 1.24l-1.826 2.38-11.9-9.131L10.837 0h1.365z'
        fill='#666'
      />
    </svg>
  );
}
export function Slack(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        data-name='Icon awesome-slack'
        d='M5.042 15.166a2.521 2.521 0 11-2.521-2.516h2.521zm1.271 0a2.521 2.521 0 115.042 0v6.313a2.521 2.521 0 11-5.042 0zM8.834 5.042a2.521 2.521 0 112.521-2.521v2.521H8.834zm0 1.271a2.521 2.521 0 010 5.042H2.521a2.521 2.521 0 010-5.042h6.313zm10.124 2.521a2.521 2.521 0 112.521 2.521h-2.521zm-1.271 0a2.521 2.521 0 01-5.042 0V2.521a2.521 2.521 0 015.042 0zm-2.521 10.124a2.521 2.521 0 11-2.521 2.521v-2.521zm0-1.271a2.521 2.521 0 010-5.042h6.313a2.521 2.521 0 010 5.042z'
        fill='#666'
      />
    </svg>
  );
}
export function Server(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={50}
      height={50}
      viewBox='0 0 50 50'
      {...props}
    >
      <path
        data-name='Path 53136'
        d='M44.444 27.778H5.556A5.572 5.572 0 000 33.333v11.111A5.572 5.572 0 005.556 50h38.888A5.572 5.572 0 0050 44.444V33.333a5.572 5.572 0 00-5.556-5.555zM11.111 44.444a5.556 5.556 0 115.556-5.556 5.572 5.572 0 01-5.556 5.556zM44.444 0H5.556A5.572 5.572 0 000 5.556v11.111a5.572 5.572 0 005.556 5.556h38.888A5.572 5.572 0 0050 16.667V5.556A5.572 5.572 0 0044.444 0zM11.111 16.667a5.556 5.556 0 115.556-5.556 5.572 5.572 0 01-5.556 5.556z'
        fill='#eb002e'
      />
    </svg>
  );
}
export function SavedSearchWhite(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <path data-name='Path 19358' d='M0 0h24v24H0z' fill='none' />
      <path
        data-name='Path 19359'
        d='M15.863 14.321h-.813l-.288-.278a6.7 6.7 0 10-.72.72l.278.288v.813L19.466 21l1.533-1.533zm-6.175 0A4.631 4.631 0 1114.32 9.69a4.625 4.625 0 01-4.631 4.631z'
        stroke='#ff6000'
        fill='none'
      />
    </svg>
  );
}
export function Rupee(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={15}
      height={15}
      viewBox='0 0 7 15'
      {...props}
    >
      <text
        data-name='\u20B9'
        transform='translate(0 11)'
        fill='#231e54'
        fontSize='10px'
        fontFamily='Poppins-Medium,Poppins'
        fontWeight={500}
        letterSpacing='.02em'
        opacity={0.3}
      >
        <tspan x={0} y={0}>
          {'\u20B9'}
        </tspan>
      </text>
    </svg>
  );
}
export function Python(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={40}
      height={40}
      viewBox='0 0 40 40'
      {...props}
    >
      <g data-name='Group 25231'>
        <path data-name='Rectangle 6289' d='M0 0h40v40H0z' fill='none' />
        <path
          d='M19.942 5a15.882 15.882 0 00-3.5.318c-3.1.556-3.656 1.669-3.656 3.735v2.782H20.1v.954H10.087a4.633 4.633 0 00-4.61 3.656 14.558 14.558 0 000 7.391c.556 2.225 1.828 3.735 3.894 3.735h2.543v-3.337a4.634 4.634 0 014.53-4.53h7.232a3.646 3.646 0 003.656-3.656V9.053a4.068 4.068 0 00-3.656-3.735A19.764 19.764 0 0019.942 5zm-3.974 2.225a1.359 1.359 0 011.351 1.431 1.34 1.34 0 01-1.351 1.351 1.393 1.393 0 01-1.351-1.351 1.41 1.41 0 011.351-1.431z'
          data-name='Group 25193'
          fill='#5a9fd4'
        />
        <path
          data-name='Path 76743'
          d='M20.058 35a15.882 15.882 0 003.5-.318c3.1-.556 3.656-1.669 3.656-3.735v-2.782H19.9v-.954h10.013a4.633 4.633 0 004.61-3.656 14.558 14.558 0 000-7.391c-.556-2.225-1.828-3.735-3.894-3.735h-2.544v3.337a4.634 4.634 0 01-4.53 4.53h-7.232a3.646 3.646 0 00-3.656 3.656v6.995a4.068 4.068 0 003.656 3.735 19.764 19.764 0 003.735.318zm3.974-2.225a1.359 1.359 0 01-1.351-1.431 1.34 1.34 0 011.351-1.351 1.393 1.393 0 011.351 1.351 1.41 1.41 0 01-1.351 1.431z'
          fill='#ffd43b'
        />
      </g>
    </svg>
  );
}
export function PlayBlue(props: Props) {
  return (
    <svg
      data-name='Group 23480'
      xmlns='http://www.w3.org/2000/svg'
      width={51.72}
      height={51.72}
      viewBox='0 0 51.72 51.72'
      {...props}
    >
      <g data-name='Group 19629'>
        <ellipse
          data-name='Ellipse 1854'
          cx={13.89}
          cy={12.277}
          rx={13.89}
          ry={12.277}
          transform='translate(12.412 13.912)'
          fill='#fff'
        />
        <path data-name='Path 17209' d='M0 0h51.72v51.72H0z' fill='none' />
        <path
          data-name='Path 17210'
          d='M26.134 5.565a20.17 20.17 0 1020.17 20.17 20.178 20.178 0 00-20.17-20.17zM22.1 34.812V16.659l12.1 9.077z'
          fill='#06c'
        />
      </g>
    </svg>
  );
}
export function PersonAddWhite(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <path data-name='Path 19350' d='M0 0h24v24H0z' fill='none' />
      <path
        data-name='Path 19351'
        d='M14.454 12a3.349 3.349 0 003.273-3.422 3.349 3.349 0 00-3.273-3.421 3.349 3.349 0 00-3.273 3.422A3.349 3.349 0 0014.454 12zM7.09 10.289V7.723H5.454v2.566H2.999V12h2.455v2.566H7.09V12h2.454v-1.711zm7.364 3.422c-2.185 0-6.545 1.146-6.545 3.422v1.711h13.09v-1.712c0-2.275-4.361-3.421-6.545-3.421z'
        stroke='#ff6000'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
      />
    </svg>
  );
}
export function Node(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={40}
      height={40}
      viewBox='0 0 40 40'
      {...props}
    >
      <g data-name='Group 25233'>
        <path
          d='M32.933 11.647L21.806 5.295a2.435 2.435 0 00-2.323 0L8.237 11.647a2.372 2.372 0 00-1.237 2v12.692a2.392 2.392 0 001.25 2.005l2.971 1.659a4.83 4.83 0 002.568.688c2.1 0 3.3-1.25 3.3-3.431V14.734c0-.177-.094-.44-.27-.44H15.4c-.18 0-.582.263-.582.44v12.525c0 .967-.889 1.928-2.551 1.111l-3.07-1.74a.342.342 0 01-.182-.293V13.65c0-.12.14-.24.248-.3l11.21-6.342a.4.4 0 01.363 0l11.073 6.34c.106.063.069.179.069.3v12.691c0 .121.046.239-.059.3L20.8 32.981a.321.321 0 01-.318 0l-2.853-1.674a.279.279 0 00-.271-.021 7.488 7.488 0 01-1.685.755c-.183.063-.453.172.1.479l3.734 2.172a2.388 2.388 0 002.35 0l11.074-6.347A2.225 2.225 0 0034 26.339V13.65a2.218 2.218 0 00-1.067-2zm-8.8 12.681c-2.959 0-3.611-.8-3.828-2.249-.025-.156-.16-.342-.321-.342h-1.443c-.179 0-.323.213-.323.389 0 1.852 1.024 4.1 5.918 4.1 3.543 0 5.574-1.353 5.574-3.749 0-2.375-1.632-3-5.067-3.445-3.473-.451-3.825-.679-3.825-1.479 0-.659.3-1.539 2.87-1.539 2.3 0 3.144.485 3.493 2.007a.317.317 0 00.313.246h1.452a.335.335 0 00.237-.1.318.318 0 00.085-.243c-.225-2.622-2-3.844-5.58-3.844-3.187 0-5.089 1.323-5.089 3.542 0 2.406 1.892 3.071 4.951 3.368 3.66.353 3.945.879 3.945 1.587 0 1.229-1 1.753-3.358 1.753z'
          fill='#83cd29'
        />
        <path data-name='Rectangle 6290' d='M0 0h40v40H0z' fill='none' />
      </g>
    </svg>
  );
}
export function Path76976(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={40}
      height={40}
      viewBox='0 0 40 40'
      {...props}
    >
      <path
        data-name='Path 76976'
        d='M4.444 17.778h31.112A4.458 4.458 0 0040 13.333V4.444A4.458 4.458 0 0035.556 0H4.444A4.458 4.458 0 000 4.444v8.889a4.458 4.458 0 004.444 4.445zM31.111 4.444a4.444 4.444 0 11-4.444 4.444 4.458 4.458 0 014.444-4.444zM4.444 40h31.112A4.458 4.458 0 0040 35.556v-8.889a4.458 4.458 0 00-4.444-4.444H4.444A4.458 4.458 0 000 26.667v8.889A4.458 4.458 0 004.444 40zm26.667-13.333a4.444 4.444 0 11-4.444 4.444 4.458 4.458 0 014.444-4.444z'
        fill='#eb002e'
      />
    </svg>
  );
}
export function Path76973(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={36}
      height={36}
      viewBox='0 0 36 36'
      {...props}
    >
      <path
        data-name='Path 76973'
        d='M29.667 26.75H6.333v-3.5h23.334zm0-7H6.333v-3.5h23.334zm0-7H6.333v-3.5h23.334zM.5 35.5l2.917-2.625L6.333 35.5l2.917-2.625 2.917 2.625 2.917-2.625L18 35.5l2.917-2.625 2.916 2.625 2.917-2.625 2.917 2.625 2.917-2.625L35.5 35.5V.5l-2.917 2.625L29.667.5 26.75 3.125 23.833.5l-2.916 2.625L18 .5l-2.917 2.625L12.167.5 9.25 3.125 6.333.5 3.417 3.125.5.5z'
        fill='#af0b0b'
        stroke='#ae0b0b'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export function Path76967(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={42}
      height={36}
      viewBox='0 0 42 36'
      {...props}
    >
      <path
        data-name='Path 76967'
        d='M30.946 13.239L22.585.797A1.9 1.9 0 0021 0a1.869 1.869 0 00-1.585.816l-8.361 12.423H1.909A1.909 1.909 0 000 15.136a1.588 1.588 0 00.076.512l4.849 17.583A3.793 3.793 0 008.591 36h24.818a3.833 3.833 0 003.685-2.769l4.849-17.583.057-.512a1.909 1.909 0 00-1.909-1.9zm-15.674 0L21 4.894l5.727 8.346zM21 28.413a3.794 3.794 0 113.818-3.793A3.817 3.817 0 0121 28.413z'
        fill='#af0b72'
      />
    </svg>
  );
}
export function Path76943(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={40}
      height={36}
      viewBox='0 0 40 36'
      {...props}
    >
      <path
        data-name='Path 76943'
        d='M22 26h-4a2.006 2.006 0 01-2-2H2.02v8a4.012 4.012 0 004 4H34a4.012 4.012 0 004-4v-8H24a2.006 2.006 0 01-2 2zM36 8h-8a8 8 0 10-16 0H4a4.012 4.012 0 00-4 4v6a3.986 3.986 0 004 4h12v-2a2.006 2.006 0 012-2h4a2.006 2.006 0 012 2v2h12a4.012 4.012 0 004-4v-6a4.012 4.012 0 00-4-4zM16 8a4 4 0 018 0h-8z'
        fill='#7e0baf'
      />
    </svg>
  );
}
export function Path76942(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={36}
      height={35.995}
      viewBox='0 0 36 35.995'
      {...props}
    >
      <path
        data-name='Path 76942'
        d='M10.8 28.8a3.6 3.6 0 103.6 3.6 3.594 3.594 0 00-3.6-3.6zM0 1.8a1.8 1.8 0 001.8 1.8h1.8l6.478 13.66-2.431 4.391A3.606 3.606 0 0010.8 27h19.789a1.8 1.8 0 000-3.6H10.8l1.979-3.6H26.18a3.581 3.581 0 003.149-1.854l6.442-11.68A1.793 1.793 0 0034.205 3.6H7.575L6.37 1.026A1.786 1.786 0 004.75 0H1.8A1.8 1.8 0 000 1.8zm28.789 27a3.6 3.6 0 103.6 3.6 3.594 3.594 0 00-3.6-3.6z'
        fill='#1a5fdb'
      />
    </svg>
  );
}
export function Path76940(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={128}
      height={138}
      viewBox='0 0 128 138'
      {...props}
    >
      <defs>
        <filter
          id='a'
          x={0}
          y={0}
          width={128}
          height={138}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
      </defs>
      <g filter='url(#a)'>
        <path
          data-name='Path 76940'
          d='M76 59h-2v-4a10 10 0 00-20 0v4h-2a4.012 4.012 0 00-4 4v20a4.012 4.012 0 004 4h24a4.012 4.012 0 004-4V63a4.012 4.012 0 00-4-4zM64 77a4 4 0 114-4 4.012 4.012 0 01-4 4zm6.2-18H57.8v-4a6.2 6.2 0 0112.4 0z'
          fill='#02b5b5'
        />
      </g>
    </svg>
  );
}
export function NavigateNextBlack(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={30}
      height={30}
      viewBox='0 0 30 30'
      {...props}
    >
      <g transform='rotate(180 15 15)'>
        <path data-name='Path 76772' d='M0 0h30v30H0z' fill='none' />
        <ellipse
          data-name='Ellipse 2024'
          cx={14.42}
          cy={14.019}
          rx={14.42}
          ry={14.019}
          transform='translate(0 .801)'
          fill='#efefef'
        />
        <path
          data-name='Path 76773'
          d='M12.353 7.32L10.59 9.082l5.725 5.738-5.725 5.738 1.763 1.762 7.5-7.5z'
          fill='#888'
        />
      </g>
    </svg>
  );
}
export function MenuBlack24Dp(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <path data-name='Path 77005' d='M0 0h24v24H0z' fill='none' />
      <path
        data-name='Path 77006'
        d='M3.943 17.872h16.114a.979.979 0 100-1.957H3.943a.979.979 0 100 1.957zm0-4.893h16.114a.979.979 0 100-1.957H3.943a.979.979 0 100 1.957zM2.936 7.108a1 1 0 001.007.979h16.114a.979.979 0 100-1.957H3.943a1 1 0 00-1.007.978z'
        fill='#6d6a8d'
      />
    </svg>
  );
}
export function Logo(props: Props) {
  return (
    <svg
      data-name='Group 26230'
      xmlns='http://www.w3.org/2000/svg'
      width={163.607}
      height={42.591}
      viewBox='0 0 163.607 42.591'
      {...props}
    >
      <defs>
        <linearGradient
          id='a'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f0601f' />
          <stop offset={1} stopColor='#f49266' />
        </linearGradient>
        <linearGradient
          id='b'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f16c30' />
          <stop offset={1} stopColor='#f48e60' />
        </linearGradient>
        <linearGradient
          id='c'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f16e33' />
          <stop offset={1} stopColor='#f5956a' />
        </linearGradient>
        <linearGradient
          id='d'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f16d32' />
          <stop offset={1} stopColor='#f59468' />
        </linearGradient>
        <linearGradient
          id='e'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f06223' />
          <stop offset={1} stopColor='#f4966b' />
        </linearGradient>
        <linearGradient
          id='f'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f06121' />
          <stop offset={1} stopColor='#f59468' />
        </linearGradient>
        <linearGradient
          id='g'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f05d1b' />
          <stop offset={1} stopColor='#f49468' />
        </linearGradient>
        <linearGradient
          id='h'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f05e1d' />
          <stop offset={1} stopColor='#f59265' />
        </linearGradient>
        <linearGradient
          id='i'
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#ef5713' />
          <stop offset={1} stopColor='#f5986e' />
        </linearGradient>
        <linearGradient
          id='j'
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#ef5f1f' />
          <stop offset={1} stopColor='#f5976c' />
        </linearGradient>
        <linearGradient
          id='k'
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#fff' />
          <stop offset={1} stopColor='#f05f1f' />
        </linearGradient>
      </defs>
      <text
        transform='translate(84.607 29.385)'
        data-name='Group 19605'
        fill='#151515'
        stroke='#000'
        strokeWidth='3px'
        fontSize='27px'
        fontFamily='Jura-Light,Jura'
        fontWeight={300}
        letterSpacing='.088em'
      >
        <tspan x={0} y={0}>
          {'NOVA'}
        </tspan>
      </text>
      <g data-name='Group 19606'>
        <path
          data-name='Path 16889'
          d='M24.065 19.068l-.556.566v-1.112z'
          fill='#a75eff'
        />
        <g data-name='Group 19140'>
          <path
            data-name='Rectangle 5428'
            transform='rotate(-45.569 23.282 -1.432)'
            d='M0 0h7.657v7.657H0z'
            fill='url(#a)'
          />
          <path
            data-name='Rectangle 5429'
            transform='rotate(-45.57 21.448 -13.29)'
            d='M0 0h3.877v3.877H0z'
            fill='url(#b)'
          />
          <path
            data-name='Rectangle 5430'
            transform='rotate(-45.569 31.801 -11.946)'
            d='M0 0h4.259v4.259H0z'
            fill='url(#c)'
          />
          <path
            data-name='Rectangle 5431'
            transform='rotate(-45.57 15.125 -12.577)'
            d='M0 0h2.681v2.681H0z'
            fill='url(#d)'
          />
          <path
            data-name='Rectangle 5432'
            transform='rotate(-45.568 26.937 11.315)'
            d='M0 0h1.852v1.852H0z'
            fill='url(#e)'
          />
          <path
            data-name='Rectangle 5433'
            transform='rotate(-45.569 31.827 4.96)'
            d='M0 0h5.053v5.053H0z'
            fill='url(#f)'
          />
          <path
            data-name='Rectangle 5434'
            transform='rotate(-45.569 21.609 6.979)'
            d='M0 0h3.431v3.431H0z'
            fill='url(#g)'
          />
          <path
            data-name='Rectangle 5435'
            transform='rotate(-45.57 14.25 -.157)'
            d='M0 0h5.091v5.091H0z'
            fill='url(#h)'
          />
          <path
            data-name='Path 16891'
            d='M227.286 191.642a21.3 21.3 0 00-13.376 6.324l5.328 5.224-2.613 2.665 4.63 4.539-5.226 5.331-2.665-2.613-4.923 5.022a21.376 21.376 0 0019.29 16.1l-.33-33.2h8.54l6.593 8.373v-17.765z'
            transform='translate(-195.336 -191.642)'
            fill='url(#i)'
          />
        </g>
        <path
          data-name='Path 16892'
          d='M317.842 191.645h-1.158v33.2h-8.478l-6.593-8.373v17.763h16.229c4.122 0 7.464-4.361 7.464-9.74v-23.11c0-5.379-3.342-9.74-7.464-9.74z'
          transform='translate(-261.005 -191.644)'
          fill='url(#j)'
        />
        <path
          data-name='Path 16894'
          d='M361.292 252.1h-8.622v15.355h2.453c3.407 0 6.169-3.6 6.169-8.05z'
          transform='translate(-296.991 -234.253)'
          style={{
            mixBlendMode: 'multiply',
            isolation: 'isolate',
          }}
          fill='url(#k)'
        />
      </g>
    </svg>
  );
}
export function Lock(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='auto'
      height='auto'
      viewBox='0 0 49.524 65'
      {...props}
    >
      <path
        data-name='Path 76963'
        d='M43.333 21.667h-3.1v-6.19a15.476 15.476 0 00-30.952 0v6.19h-3.1A6.209 6.209 0 000 27.857V58.81A6.209 6.209 0 006.19 65h37.143a6.209 6.209 0 006.19-6.19V27.857a6.209 6.209 0 00-6.19-6.19zM24.762 49.524a6.19 6.19 0 116.19-6.19 6.209 6.209 0 01-6.19 6.19zm9.6-27.857H15.167v-6.19a9.6 9.6 0 0119.19 0z'
        fill='#02b5b5'
      />
    </svg>
  );
}
export function Refresh(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      viewBox='0 0 14 14'
    >
      <path
        data-name='Path 77605'
        d='M15.958 6.056a7 7 0 1 0 1.366 7.952.876.876 0 0 0-.788-1.26.852.852 0 0 0-.771.464 5.249 5.249 0 1 1-4.756-7.462 5.184 5.184 0 0 1 3.7 1.557l-1.326 1.321a.875.875 0 0 0 .613 1.5h3.144a.878.878 0 0 0 .876-.875V6.108a.879.879 0 0 0-1.5-.621l-.561.569z'
        transform='translate(-4.016 -3.997)'
        fill='#fff'
        // opacity='.5'
      />
    </svg>
  );
}
export function LocalMallBlack24Dp(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='13.197'
      height='13.197'
      viewBox='0 0 13.197 13.197'
      {...props}
    >
      <g style={{ opacity: 0.3 }}>
        <path
          data-name='Path 19379'
          d='M0 0h13.2v13.2H0z'
          style={{ fill: 'transparent' }}
        />
        <path
          data-name='Path 19380'
          d='M10.7 3.357h-.963a2.407 2.407 0 0 0-4.812 0h-.963A.951.951 0 0 0 3 4.3v5.655a.955.955 0 0 0 .962.943H10.7a.955.955 0 0 0 .962-.943V4.3a.955.955 0 0 0-.962-.943zM7.331 1.943a1.427 1.427 0 0 1 1.443 1.414H5.887a1.427 1.427 0 0 1 1.444-1.414zm0 4.713A2.383 2.383 0 0 1 4.925 4.3h.962a1.444 1.444 0 0 0 2.887 0h.962a2.383 2.383 0 0 1-2.405 2.356z'
          transform='translate(-.733 .65)'
          style={{ fill: '#26205d' }}
        />
      </g>
    </svg>
  );
}
export function Java(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={40}
      height={40}
      viewBox='0 0 40 40'
      {...props}
    >
      <defs>
        <style>{'.javacls{fill:#ea2d2e}'}</style>
      </defs>
      <g
        id='Group_25235'
        data-name='Group 25235'
        transform='translate(-945 -385)'
      >
        <g id='java' transform='translate(957 391)'>
          <path
            id='Path_76744'
            data-name='Path 76744'
            className='cls-1'
            d='M47.441 60.694s-.759.465.541.622a10.817 10.817 0 004.115-.183 7.085 7.085 0 001.094.562c-3.891 1.755-8.806-.102-5.75-1.001zm-.476-2.294s-.851.664.45.806a15.263 15.263 0 005.311-.268 2.335 2.335 0 00.817.525c-4.704 1.451-9.943.116-6.578-1.063z'
            transform='translate(-42.099 -44.777)'
            style={{ fill: '#0074bd' }}
          />
          <path
            id='Path_76745'
            data-name='Path 76745'
            className='javacls'
            d='M64.987 24.611a1.533 1.533 0 01-.265 2.209s2.564-1.323 1.386-2.981c-1.1-1.545-1.943-2.313 2.622-4.96 0 0-7.165 1.789-3.743 5.732z'
            transform='translate(-56.128 -14.604)'
          />
          <path
            id='Path_76746'
            data-name='Path 76746'
            className='cls-1'
            d='M45.9 54.38s.576.488-.635.865c-2.3.716-9.584.932-11.607.028-.727-.325.637-.776 1.065-.87a2.706 2.706 0 01.7-.081c-.809-.585-5.227 1.149-2.244 1.646 8.133 1.354 14.826-.61 12.721-1.588zm-8.524-6.361s-3.7.9-1.311 1.232a27.107 27.107 0 004.9-.055c1.533-.132 3.072-.415 3.072-.415a6.485 6.485 0 00-.931.512c-3.762 1.016-11.027.543-8.936-.5a6.841 6.841 0 013.201-.774zm6.644 3.814c3.824-2.04 2.056-4 .822-3.737a2.846 2.846 0 00-.437.121.7.7 0 01.327-.259c2.441-.881 4.319 2.6-.787 3.978a.345.345 0 00.071-.103z'
            transform='translate(-31.704 -36.765)'
            style={{ fill: '#0074bd' }}
          />
          <path
            id='Path_76747'
            data-name='Path 76747'
            className='javacls'
            d='M57.433 1.313s2.175 2.176-2.063 5.521c-3.4 2.684-.775 4.214 0 5.963-1.984-1.79-3.439-3.366-2.463-4.832 1.433-2.152 5.4-3.2 4.527-6.651z'
            transform='translate(-47.367 -1.313)'
          />
          <path
            id='Path_76748'
            data-name='Path 76748'
            className='cls-1'
            d='M46.55 81.078c3.769.241 9.558-.134 9.695-1.917 0 0-.263.676-3.115 1.212a30.974 30.974 0 01-9.539.147s.482.399 2.959.558z'
            transform='translate(-40.761 -60.556)'
            style={{ fill: '#0074bd' }}
          />
          <path
            id='Path_76749'
            data-name='Path 76749'
            className='javacls'
            d='M45.623 94.665h-.112V94.6h.3v.064H45.7v.321h-.078zm.6.016l-.111.3h-.051l-.11-.3v.3h-.074V94.6h.108l.1.272.1-.272h.115v.385h-.072zm-10.489 3.6a1.65 1.65 0 01-1.042.481.674.674 0 01-.723-.751c0-.5.272-.866 1.362-.866h.4v1.136zm.957 1.107v-3.426c0-.876-.487-1.454-1.661-1.454a4.293 4.293 0 00-1.774.395l.141.607a4.032 4.032 0 011.37-.279c.676 0 .967.279.967.857v.433H35.4c-1.643 0-2.384.654-2.384 1.636a1.235 1.235 0 001.408 1.328 2.1 2.1 0 001.445-.617l.075.52h.751zm3.193 0h-1.192L37.256 94.6H38.3l.892 2.945.2.885a18.836 18.836 0 00.929-3.829h1.009a19.812 19.812 0 01-1.445 4.792zm4.578-1.107a1.656 1.656 0 01-1.043.481.673.673 0 01-.723-.751c0-.5.273-.866 1.362-.866h.4v1.136zm.957 1.107v-3.426c0-.876-.489-1.454-1.661-1.454a4.292 4.292 0 00-1.774.395l.141.607a4.036 4.036 0 011.375-.28c.676 0 .967.279.967.857v.433h-.338c-1.643 0-2.384.654-2.384 1.636a1.234 1.234 0 001.408 1.328 2.1 2.1 0 001.446-.617l.075.52h.751zm-13.457.814a2.514 2.514 0 01-1.2.914l-.472-.571a2.005 2.005 0 00.828-.8 3.149 3.149 0 00.179-1.388v-5.466h1.023v5.4a3.183 3.183 0 01-.356 1.909z'
            transform='translate(-30.296 -71.117)'
          />
        </g>
        <path
          id='Rectangle_6291'
          data-name='Rectangle 6291'
          transform='translate(945 385)'
          d='M0 0h40v40H0z'
          fill='none'
        />
      </g>
    </svg>
  );
}
export function IntegrationInstructionBlack(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <defs>
        <style>{'.cls-1{fill:none}'}</style>
      </defs>
      <g
        id='integration_instructions_black_24dp'
        transform='translate(0 -.446)'
      >
        <path
          id='Rectangle_5601'
          data-name='Rectangle 5601'
          className='cls-1'
          transform='translate(0 .446)'
          d='M0 0h24v24H0z'
        />
        <circle
          id='Ellipse_1863'
          data-name='Ellipse 1863'
          className='cls-1'
          cx={0.493}
          cy={0.493}
          r={0.493}
          transform='translate(11.69 1.923)'
        />
        <circle
          id='Ellipse_1864'
          data-name='Ellipse 1864'
          className='cls-1'
          cx={0.493}
          cy={0.493}
          r={0.493}
          transform='translate(11.69 1.923)'
        />
        <circle
          id='Ellipse_1865'
          data-name='Ellipse 1865'
          className='cls-1'
          cx={0.493}
          cy={0.493}
          r={0.493}
          transform='translate(11.69 1.923)'
        />
        <path
          id='Path_19366'
          data-name='Path 19366'
          d='M17.222 2.8h-3.715a2.645 2.645 0 00-5.013 0H4.778a1.539 1.539 0 00-.356.036 1.778 1.778 0 00-.9.5 1.8 1.8 0 00-.382.576A1.752 1.752 0 003 4.6v12.6a1.866 1.866 0 00.142.7 1.909 1.909 0 00.382.576 1.778 1.778 0 00.9.5 2.279 2.279 0 00.354.024h12.444A1.794 1.794 0 0019 17.2V4.6a1.794 1.794 0 00-1.778-1.8zm-7.111 10.053l-1.253 1.278L5.667 10.9l3.191-3.231 1.253 1.278L8.182 10.9zM11 3.925a.675.675 0 11.667-.675.676.676 0 01-.667.675zm2.142 10.206l-1.253-1.278 1.929-1.953-1.929-1.953 1.253-1.278 3.191 3.231z'
          transform='translate(1.182 2.446)'
          stroke='#ff6000'
          strokeLinecap='round'
          strokeLinejoin='round'
          fill='none'
        />
      </g>
    </svg>
  );
}
export function IconIonicIosAddCircleOutline(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={14}
      height={14}
      viewBox='0 0 14 14'
      {...props}
    >
      <defs>
        <style>{'.bluecls{fill:#06c}'}</style>
      </defs>
      <g
        id='Icon_ionic-ios-add-circle-outline'
        data-name='Icon ionic-ios-add-circle-outline'
        transform='translate(-3.375 -3.375)'
      >
        <path
          id='Path_53111'
          data-name='Path 53111'
          className='bluecls'
          d='M16.567 13.293h-2.29V11a.492.492 0 10-.984 0v2.29H11a.471.471 0 00-.492.492.476.476 0 00.492.492h2.29v2.29a.476.476 0 00.492.492.489.489 0 00.492-.492v-2.29h2.29a.492.492 0 000-.984z'
          transform='translate(-3.41 -3.41)'
        />
        <path
          id='Path_53112'
          data-name='Path 53112'
          className='bluecls'
          d='M10.375 4.317a6.055 6.055 0 11-4.284 1.774 6.018 6.018 0 014.284-1.774m0-.942a7 7 0 107 7 7 7 0 00-7-7z'
        />
      </g>
    </svg>
  );
}
export function IconIonicIosAddCircleOutlineRed(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={14}
      height={14}
      viewBox='0 0 14 14'
      {...props}
    >
      <defs>
        <style>{'.cls-1{fill:#fd681f}'}</style>
      </defs>
      <g
        id='Icon_ionic-ios-add-circle-outline'
        data-name='Icon ionic-ios-add-circle-outline'
        transform='translate(-3.375 -3.375)'
      >
        <path
          id='Path_53111'
          data-name='Path 53111'
          className='cls-1'
          d='M16.567 13.293h-2.29V11a.492.492 0 10-.984 0v2.29H11a.471.471 0 00-.492.492.476.476 0 00.492.492h2.29v2.29a.476.476 0 00.492.492.489.489 0 00.492-.492v-2.29h2.29a.492.492 0 000-.984z'
          transform='translate(-3.41 -3.41)'
        />
        <path
          id='Path_53112'
          data-name='Path 53112'
          className='cls-1'
          d='M10.375 4.317a6.055 6.055 0 11-4.284 1.774 6.018 6.018 0 014.284-1.774m0-.942a7 7 0 107 7 7 7 0 00-7-7z'
        />
      </g>
    </svg>
  );
}
export function IconIonicIosAddCircleOutlineBlack(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={14}
      height={14}
      viewBox='0 0 14 14'
      {...props}
    >
      <defs>
        <style>{'.blackcls{fill:#000}'}</style>
      </defs>
      <g
        id='Icon_ionic-ios-add-circle-outline'
        data-name='Icon ionic-ios-add-circle-outline'
        transform='translate(-3.375 -3.375)'
      >
        <path
          id='Path_53111'
          data-name='Path 53111'
          className='blackcls'
          d='M16.567 13.293h-2.29V11a.492.492 0 10-.984 0v2.29H11a.471.471 0 00-.492.492.476.476 0 00.492.492h2.29v2.29a.476.476 0 00.492.492.489.489 0 00.492-.492v-2.29h2.29a.492.492 0 000-.984z'
          transform='translate(-3.41 -3.41)'
        />
        <path
          id='Path_53112'
          data-name='Path 53112'
          className='blackcls'
          d='M10.375 4.317a6.055 6.055 0 11-4.284 1.774 6.018 6.018 0 014.284-1.774m0-.942a7 7 0 107 7 7 7 0 00-7-7z'
        />
      </g>
    </svg>
  );
}
export function IconIonicIosAddCircleOutlineWhite(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={25}
      height={25}
      viewBox='0 0 14 14'
      {...props}
    >
      <defs>
        <style>{'.whitecls{fill:#fff}'}</style>
      </defs>
      <g
        id='Icon_ionic-ios-add-circle-outline'
        data-name='Icon ionic-ios-add-circle-outline'
        transform='translate(-3.375 -3.375)'
      >
        <path
          id='Path_53111'
          data-name='Path 53111'
          className='whitecls'
          d='M16.567 13.293h-2.29V11a.492.492 0 10-.984 0v2.29H11a.471.471 0 00-.492.492.476.476 0 00.492.492h2.29v2.29a.476.476 0 00.492.492.489.489 0 00.492-.492v-2.29h2.29a.492.492 0 000-.984z'
          transform='translate(-3.41 -3.41)'
        />
        <path
          id='Path_53112'
          data-name='Path 53112'
          className='whitecls'
          d='M10.375 4.317a6.055 6.055 0 11-4.284 1.774 6.018 6.018 0 014.284-1.774m0-.942a7 7 0 107 7 7 7 0 00-7-7z'
        />
      </g>
    </svg>
  );
}
export function HalfStar(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={22}
      height={22}
      viewBox='0 0 22 22'
      {...props}
    >
      <path data-name='Rectangle 6281' d='M0 0h22v22H0z' fill='none' />
      <path
        data-name='Path 76741'
        d='M13.095 8.844l-1.363-4.492a.924.924 0 00-1.771 0L8.588 8.844H4.462a.926.926 0 00-.538 1.678l3.375 2.411-1.325 4.271a.926.926 0 001.446 1.01l3.422-2.6 3.422 2.606a.926.926 0 001.446-1.011l-1.326-4.275 3.375-2.411a.925.925 0 00-.538-1.678h-4.126z'
        stroke='#ffa41c'
        fill='none'
      />
      <path
        data-name='Path 77452'
        d='M10.842 4.352s-.621-.881-.881 0L8.588 8.844H4.462a.926.926 0 00-.538 1.678l3.375 2.411-1.325 4.271a.926.926 0 001.446 1.01l3.422-2.6V4.352z'
        fill='#ffa41c'
        stroke='#ffa41c'
      />
    </svg>
  );
}
export function Group26848(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={16}
      height={16}
      viewBox='0 0 16 16'
      {...props}
    >
      <g data-name='Group 26848'>
        <path
          data-name='Path 19325'
          d='M11.435 10.063h-.723l-.256-.247a5.955 5.955 0 10-.64.64l.247.256v.723L14.637 16 16 14.637zm-5.489 0a4.117 4.117 0 114.117-4.117 4.111 4.111 0 01-4.117 4.117z'
          fill='#241f55'
          opacity={0.65}
        />
      </g>
    </svg>
  );
}
export function Group21666(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={27}
      viewBox='0 0 24 27'
      {...props}
    >
      <g data-name='Group 21666'>
        <path data-name='Path 51976' d='M0 0h24v24H0z' fill='transparent' />
        <path
          data-name='Path 51977'
          d='M19.242 6.831h-3.6V4.937a1.843 1.843 0 00-1.8-1.895h-3.6a1.843 1.843 0 00-1.8 1.895v1.894h-3.6a1.835 1.835 0 00-1.791 1.895l-.009 10.421a1.843 1.843 0 001.8 1.895h14.4a1.843 1.843 0 001.8-1.895V8.726a1.843 1.843 0 00-1.8-1.895zm-5.4 0h-3.6V4.937h3.6z'
          fill='none'
          stroke='#ff6000'
        />
        <text
          data-name='\u20B9'
          transform='translate(11.66 21)'
          fill='#fd8034'
          fontSize='16px'
          fontFamily='Poppins-Medium,Poppins'
          fontWeight={500}
        >
          <tspan x={0} y={0}>
            {'\u20B9'}
          </tspan>
        </text>
      </g>
    </svg>
  );
}
export function Group26878(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width={194.184}
      height={215.353}
      viewBox='0 0 194.184 215.353'
      {...props}
    >
      <defs>
        <linearGradient
          id='a'
          x1={0.75}
          y1={0.6}
          x2={0.579}
          y2={1.094}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f3017a' />
          <stop offset={1} stopColor='#620eb3' />
        </linearGradient>
        <linearGradient
          id='d'
          x1={1}
          y1={0.947}
          x2={-0.182}
          y2={0.456}
          xlinkHref='#a'
        />
        <filter
          id='b'
          x={0}
          y={0}
          width={194.184}
          height={200.245}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
        <filter
          id='c'
          x={43.585}
          y={36.461}
          width={141.507}
          height={178.893}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur-2' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur-2' />
          <feComposite in='SourceGraphic' />
        </filter>
      </defs>
      <g data-name='Group 26878'>
        <g filter='url(#b)' transform='translate(.003 .001)'>
          <path
            data-name='Path 76983'
            d='M28.147 79.369a4.756 4.756 0 008.859-.039l28.48-72.939A4.68 4.68 0 0061.085 0L4.771.248a4.763 4.763 0 00-4.458 6.43z'
            transform='rotate(30 -39.376 188.93)'
            fill='url(#a)'
            opacity={0.5}
          />
        </g>
        <g filter='url(#c)' transform='translate(.003 .001)'>
          <rect
            data-name='Rectangle 6541'
            width={82.893}
            height={45.507}
            rx={10}
            transform='rotate(-90 127.97 36.38)'
            fill='url(#d)'
            opacity={0.5}
          />
        </g>
      </g>
    </svg>
  );
}
export function Group26877(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={249.764}
      height={269.035}
      viewBox='0 0 249.764 269.035'
      {...props}
    >
      <defs>
        <filter
          id='Path_76962'
          x={45.235}
          y={53.142}
          width={204.528}
          height={215.893}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
        <filter
          id='Path_76977'
          x={0}
          y={0}
          width={239.102}
          height={254.088}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur-2' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur-2' />
          <feComposite in='SourceGraphic' />
        </filter>
        <linearGradient
          id='linear-gradient'
          x1={0.794}
          y1={0.992}
          x2={0.373}
          y2={-0.115}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#c0f786' />
          <stop offset={1} stopColor='#11b9c8' />
        </linearGradient>
        <style>{'.cls-1{opacity:.7;fill:url(#linear-gradient)}'}</style>
      </defs>
      <g id='Group_26877' data-name='Group 26877'>
        <g filter='url(#Path_76962)' transform='translate(-.003 .003)'>
          <path
            id='Path_76962-2'
            data-name='Path 76962'
            className='cls-1'
            d='M33.582 3.586a5.674 5.674 0 0110.57.047l33.98 87.023a5.583 5.583 0 01-5.251 7.625l-67.188-.3a5.682 5.682 0 01-5.319-7.667z'
            transform='rotate(-159 103.476 93.587)'
          />
        </g>
        <g filter='url(#Path_76977)' transform='translate(-.003 .003)'>
          <path
            id='Path_76977-2'
            data-name='Path 76977'
            className='cls-1'
            d='M44.281 4.728a7.482 7.482 0 0113.937.061l44.8 114.747a7.362 7.362 0 01-6.918 10.055L7.506 129.2a7.493 7.493 0 01-7.013-10.115z'
            transform='rotate(-159 91.15 88.14)'
          />
        </g>
      </g>
    </svg>
  );
}
export function Group26876(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={198.093}
      height={202.353}
      viewBox='0 0 198.093 202.353'
      {...props}
    >
      <defs>
        <filter
          id='Path_76978'
          x={0}
          y={0}
          width={194.184}
          height={200.245}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
        <filter
          id='Rectangle_6540'
          x={43.586}
          y={47.461}
          width={154.507}
          height={154.893}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur-2' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur-2' />
          <feComposite in='SourceGraphic' />
        </filter>
        <linearGradient
          id='linear-gradient'
          x1={0.692}
          y1={0.5}
          x2={0.366}
          y2={0.399}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#e63add' />
          <stop offset={1} stopColor='#0b82af' />
        </linearGradient>
        <style>{'.cls-1{opacity:.5;fill:url(#linear-gradient)}'}</style>
      </defs>
      <g id='Group_26876' data-name='Group 26876'>
        <g filter='url(#Path_76978)' transform='translate(.004)'>
          <path
            id='Path_76978-2'
            data-name='Path 76978'
            className='cls-1'
            d='M28.147 79.369a4.756 4.756 0 008.859-.039l28.48-72.939A4.68 4.68 0 0061.085 0L4.771.248a4.763 4.763 0 00-4.458 6.43z'
            transform='rotate(30 -39.376 188.93)'
          />
        </g>
        <g filter='url(#Rectangle_6540)' transform='translate(.004)'>
          <rect
            id='Rectangle_6540-2'
            data-name='Rectangle 6540'
            className='cls-1'
            width={58.893}
            height={58.507}
            rx={29}
            transform='rotate(-90 121.47 29.88)'
          />
        </g>
      </g>
    </svg>
  );
}
export function Group26870(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={90}
      height={90}
      viewBox='0 0 90 90'
      {...props}
    >
      <defs>
        <filter
          id='Rectangle_6487'
          x={0}
          y={0}
          width={90}
          height={90}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={7} result='blur' />
          <feFlood floodOpacity={0.161} />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
        <style>{'.cls-3{fill:#fff}'}</style>
      </defs>
      <g
        id='Group_26870'
        data-name='Group 26870'
        transform='translate(-1088 -878.854)'
      >
        <g
          id='Group_25616'
          data-name='Group 25616'
          transform='translate(1109 895.854)'
        >
          <g
            transform='translate(-21 -17)'
            id='Group_25603'
            data-name='Group 25603'
            filter='url(#Rectangle_6487)'
          >
            <rect
              id='Rectangle_6487-2'
              data-name='Rectangle 6487'
              width={48}
              height={48}
              rx={10}
              transform='translate(21 17)'
              fill='#0f73ec'
            />
          </g>
          <g id='dns_black_24dp' transform='rotate(180 21 21)'>
            <path
              id='Path_53135'
              data-name='Path 53135'
              d='M0 0h36v36H0z'
              fill='none'
            />
          </g>
        </g>
        <g
          id='Group_25657'
          data-name='Group 25657'
          transform='translate(1119.773 906.704)'
        >
          <path
            id='Path_76928'
            data-name='Path 76928'
            className='cls-3'
            d='M17.626 16.074l7.1-7.465 1.164 1.136a.887.887 0 00.974.2.961.961 0 00.612-.795l.612-5.336a.943.943 0 00-.278-.795.91.91 0 00-.779-.255l-5.259.823a.943.943 0 00-.751.653.893.893 0 00.25.965l1.169 1.134-6.01 6.329-3.423-3.405a1.567 1.567 0 00-1.03-.454 1.633 1.633 0 00-1.252.482l-7.818 8.231a1.733 1.733 0 00.056 2.327 1.584 1.584 0 00.584.369c.083.028.195.057.306.085.083 0 .167.028.25.028a1.545 1.545 0 001.113-.482l6.706-7.1 3.422 3.377a1.6 1.6 0 002.282-.052z'
            transform='translate(-2.486 -2.749)'
          />
          <path
            id='Path_76929'
            data-name='Path 76929'
            className='cls-3'
            d='M14.1 75.8H9.3a.9.9 0 00-.908.908v4.257a.9.9 0 00.908.908h4.8a.9.9 0 00.908-.908v-4.257a.915.915 0 00-.908-.908z'
            transform='translate(-6.721 -55.576)'
          />
          <path
            id='Path_76930'
            data-name='Path 76930'
            className='cls-3'
            d='M47 62.4h-4.8a.9.9 0 00-.908.908v8.061a.9.9 0 00.908.908H47a.9.9 0 00.908-.908V63.28A.891.891 0 0047 62.4z'
            transform='translate(-30.561 -45.98)'
          />
          <path
            id='Path_76931'
            data-name='Path 76931'
            className='cls-3'
            d='M79.9 48.9h-4.8a.9.9 0 00-.908.908V61.7a.9.9 0 00.908.908h4.8a.9.9 0 00.908-.908V49.808a.9.9 0 00-.908-.908z'
            transform='translate(-54.359 -36.311)'
          />
        </g>
      </g>
    </svg>
  );
}
export function Group26869(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={304.917}
      height={311.41}
      viewBox='0 0 304.917 311.41'
      {...props}
    >
      <defs>
        <filter
          id='Path_76979'
          x={0}
          y={59.221}
          width={238.694}
          height={252.188}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
        <filter
          id='Path_76980'
          x={20.765}
          y={0}
          width={284.152}
          height={301.945}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur-2' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur-2' />
          <feComposite in='SourceGraphic' />
        </filter>
        <linearGradient
          id='linear-gradient'
          x1={1.158}
          y1={0.472}
          x2={0.75}
          y2={-0.147}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#c0f786' />
          <stop offset={1} stopColor='#11b9c8' />
        </linearGradient>
        <style>{'.cls-1{opacity:.5;fill:url(#linear-gradient)}'}</style>
      </defs>
      <g id='Group_26869' data-name='Group 26869'>
        <g filter='url(#Path_76979)' transform='translate(-.004 .001)'>
          <path
            id='Path_76979-2'
            data-name='Path 76979'
            className='cls-1'
            d='M43.945 4.9a7.315 7.315 0 0113.627.06l43.807 112.19a7.2 7.2 0 01-6.77 9.83l-86.62-.38a7.326 7.326 0 01-6.857-9.89z'
            transform='rotate(-23 377.65 -43.79)'
          />
        </g>
        <g filter='url(#Path_76980)' transform='translate(-.004 .001)'>
          <path
            id='Path_76980-2'
            data-name='Path 76980'
            className='cls-1'
            d='M57.738 6.37c3.127-8.166 14.769-8.115 17.968.079l57.762 147.935a9.491 9.491 0 01-8.927 12.961l-114.215-.5A9.66 9.66 0 011.285 153.8z'
            transform='rotate(-23 273.42 -118.426)'
          />
        </g>
      </g>
    </svg>
  );
}
export function Group26865(props: Props) {
  return (
    <svg
      id='Group_26865'
      data-name='Group 26865'
      xmlns='http://www.w3.org/2000/svg'
      width={112.999}
      height={22}
      viewBox='0 0 112.999 22'
      {...props}
    >
      <defs>
        <style>{'.cls-1{fill:none}.cls-2{fill:#ffa41c}'}</style>
      </defs>
      <g id='star_rate_black_24dp'>
        <path
          id='Rectangle_6281'
          data-name='Rectangle 6281'
          className='cls-1'
          d='M0 0h23v22H0z'
        />
        <path
          id='Path_76741'
          data-name='Path 76741'
          className='cls-2'
          d='M13.68 9.6l-1.363-4.492a.924.924 0 00-1.771 0L9.173 9.6H5.047a.926.926 0 00-.538 1.678l3.375 2.411-1.325 4.271a.926.926 0 001.446 1.01l3.422-2.6 3.422 2.606a.926.926 0 001.446-1.011l-1.326-4.275 3.375-2.411a.925.925 0 00-.538-1.678H13.68z'
          transform='translate(.022 -.756)'
        />
      </g>
      <g
        id='star_rate_black_24dp-2'
        data-name='star_rate_black_24dp'
        transform='translate(22.999)'
      >
        <path
          id='Rectangle_6281-2'
          data-name='Rectangle 6281'
          className='cls-1'
          d='M0 0h22v22H0z'
        />
        <path
          id='Path_76741-2'
          data-name='Path 76741'
          className='cls-2'
          d='M13.68 9.6l-1.363-4.492a.924.924 0 00-1.771 0L9.173 9.6H5.047a.926.926 0 00-.538 1.678l3.375 2.411-1.325 4.271a.926.926 0 001.446 1.01l3.422-2.6 3.422 2.606a.926.926 0 001.446-1.011l-1.326-4.275 3.375-2.411a.925.925 0 00-.538-1.678H13.68z'
          transform='translate(-.513 -.756)'
        />
      </g>
      <g
        id='star_rate_black_24dp-3'
        data-name='star_rate_black_24dp'
        transform='translate(44.998)'
      >
        <path
          id='Rectangle_6281-3'
          data-name='Rectangle 6281'
          className='cls-1'
          d='M0 0h23v22H0z'
        />
        <path
          id='Path_76741-3'
          data-name='Path 76741'
          className='cls-2'
          d='M13.68 9.6l-1.363-4.492a.924.924 0 00-1.771 0L9.173 9.6H5.047a.926.926 0 00-.538 1.678l3.375 2.411-1.325 4.271a.926.926 0 001.446 1.01l3.422-2.6 3.422 2.606a.926.926 0 001.446-1.011l-1.326-4.275 3.375-2.411a.925.925 0 00-.538-1.678H13.68z'
          transform='translate(-.048 -.756)'
        />
      </g>
      <g
        id='star_rate_black_24dp-4'
        data-name='star_rate_black_24dp'
        transform='translate(68)'
      >
        <path
          id='Rectangle_6281-4'
          data-name='Rectangle 6281'
          className='cls-1'
          d='M0 0h22v22H0z'
        />
        <path
          id='Path_76741-4'
          data-name='Path 76741'
          className='cls-2'
          d='M13.68 9.6l-1.363-4.492a.924.924 0 00-1.771 0L9.173 9.6H5.047a.926.926 0 00-.538 1.678l3.375 2.411-1.325 4.271a.926.926 0 001.446 1.01l3.422-2.6 3.422 2.606a.926.926 0 001.446-1.011l-1.326-4.275 3.375-2.411a.925.925 0 00-.538-1.678H13.68z'
          transform='translate(-.585 -.756)'
        />
      </g>
      <g
        id='star_rate_black_24dp-5'
        data-name='star_rate_black_24dp'
        transform='translate(89.999)'
      >
        <path
          id='Rectangle_6281-5'
          data-name='Rectangle 6281'
          className='cls-1'
          d='M0 0h23v22H0z'
        />
        <path
          id='Path_76741-5'
          data-name='Path 76741'
          d='M13.68 9.6l-1.363-4.492a.924.924 0 00-1.771 0L9.173 9.6H5.047a.926.926 0 00-.538 1.678l3.375 2.411-1.325 4.271a.926.926 0 001.446 1.01l3.422-2.6 3.422 2.606a.926.926 0 001.446-1.011l-1.326-4.275 3.375-2.411a.925.925 0 00-.538-1.678H13.68z'
          transform='translate(-.12 -.756)'
          stroke='#ffa41c'
          fill='none'
        />
      </g>
    </svg>
  );
}
export function Group26858(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width={194.184}
      height={215.353}
      viewBox='0 0 194.184 215.353'
      {...props}
    >
      <defs>
        <linearGradient
          id='a'
          x1={0.75}
          y1={0.6}
          x2={0.579}
          y2={1.094}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#8a5bfe' />
          <stop offset={1} stopColor='#31ba95' />
        </linearGradient>
        <linearGradient
          id='d'
          x1={1}
          y1={0.947}
          x2={-0.182}
          y2={0.456}
          xlinkHref='#a'
        />
        <filter
          id='b'
          x={0}
          y={0}
          width={194.184}
          height={200.245}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
        <filter
          id='c'
          x={43.586}
          y={36.461}
          width={141.507}
          height={178.893}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur-2' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur-2' />
          <feComposite in='SourceGraphic' />
        </filter>
      </defs>
      <g data-name='Group 26858'>
        <g filter='url(#b)' transform='translate(.004)'>
          <path
            data-name='Path 76978'
            d='M28.147 79.369a4.756 4.756 0 008.859-.039l28.48-72.939A4.68 4.68 0 0061.085 0L4.771.248a4.763 4.763 0 00-4.458 6.43z'
            transform='rotate(30 -39.376 188.93)'
            fill='url(#a)'
            opacity={0.5}
          />
        </g>
        <g filter='url(#c)' transform='translate(.004)'>
          <rect
            data-name='Rectangle 6540'
            width={82.893}
            height={45.507}
            rx={10}
            transform='rotate(-90 127.97 36.38)'
            fill='url(#d)'
            opacity={0.5}
          />
        </g>
      </g>
    </svg>
  );
}
export function Group26413(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='auto'
      height='auto'
      viewBox='0 0 40 40'
      {...props}
    >
      <g data-name='Group 26413' transform='translate(-481 -259)'>
        <rect
          data-name='Rectangle 6456'
          width={40}
          height={40}
          rx={16}
          transform='translate(481 259)'
          fill='#fff'
        />
        <path data-name='Path 51966' d='M489 267h24v24h-24z' fill='none' />
        <path
          data-name='Path 51967'
          d='M508.751 280.293h-6.458v6.458a1.293 1.293 0 01-2.585 0v-6.458h-6.464a1.293 1.293 0 010-2.585h6.463v-6.464a1.293 1.293 0 012.585 0v6.463h6.459a1.293 1.293 0 010 2.585z'
          fill='#cb30d1'
        />
      </g>
    </svg>
  );
}
export function Group26412(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={40}
      height={40}
      viewBox='0 0 40 40'
      {...props}
    >
      <g data-name='Group 26412' transform='translate(-481 -259)'>
        <rect
          data-name='Rectangle 6456'
          width={40}
          height={40}
          rx={16}
          transform='translate(481 259)'
          fill='#fff'
        />
        <path data-name='Path 51961' d='M489 266h24v24h-24z' fill='none' />
        <path
          data-name='Path 51962'
          d='M501.9 281.699h-1.8a.915.915 0 01-.9-.925h-6.291v3.7a1.831 1.831 0 001.8 1.85H507.3a1.831 1.831 0 001.8-1.85v-3.698h-6.3a.915.915 0 01-.9.923zm6.3-8.323h-3.6a3.6 3.6 0 10-7.2 0h-3.6a1.831 1.831 0 00-1.8 1.849V278a1.819 1.819 0 001.8 1.85h5.4v-.925a.915.915 0 01.9-.925h1.8a.915.915 0 01.9.925v.925h5.4A1.831 1.831 0 00510 278v-2.775a1.831 1.831 0 00-1.8-1.849zm-9 0a1.8 1.8 0 113.6 0h-3.6z'
          fill='#30d158'
        />
      </g>
    </svg>
  );
}
export function Group26411(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={40}
      height={40}
      viewBox='0 0 40 40'
      {...props}
    >
      <g data-name='Group 26411' transform='translate(-386 -278)'>
        <rect
          data-name='Rectangle 6453'
          width={40}
          height={40}
          rx={16}
          transform='translate(386 278)'
          fill='#fff'
        />
        <path data-name='Path 51959' d='M394 286h24v24h-24z' fill='none' />
        <path
          data-name='Path 51960'
          d='M406 298a4.034 4.034 0 10-4.033-4.033A4.033 4.033 0 00406 298zm0 2.017c-2.692 0-8.067 1.352-8.067 4.034v1.008a1.011 1.011 0 001.008 1.008h14.118a1.011 1.011 0 001.008-1.008v-1.008c.001-2.682-5.374-4.034-8.067-4.034z'
          fill='#ff453a'
        />
      </g>
    </svg>
  );
}
export function Group26410(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={40}
      height={40}
      viewBox='0 0 40 40'
      {...props}
    >
      <defs>
        <style>{'.cls-2{fill:#ff9500;stroke:#fff}'}</style>
      </defs>
      <g
        id='Group_26410'
        data-name='Group 26410'
        transform='translate(-290 -278)'
      >
        <rect
          id='Rectangle_6447'
          data-name='Rectangle 6447'
          width={40}
          height={40}
          rx={16}
          transform='translate(290 278)'
          fill='#fff'
        />
        <g id='noun_coding_4399594' transform='translate(174.235 136.436)'>
          <g
            id='Group_25567'
            data-name='Group 25567'
            transform='translate(122.764 153.564)'
          >
            <g id='Group_25566' data-name='Group 25566'>
              <path
                id='Path_76888'
                data-name='Path 76888'
                className='cls-2'
                d='M130.671 167.006a1.721 1.721 0 00-2.414 0l-4.993 4.932a1.672 1.672 0 000 2.385l4.993 4.933a1.722 1.722 0 002.414 0 1.672 1.672 0 000-2.385l-3.786-3.74 3.786-3.74a1.672 1.672 0 000-2.385z'
                transform='translate(-122.764 -165.131)'
              />
              <path
                id='Path_76889'
                data-name='Path 76889'
                className='cls-2'
                d='M313.348 167.007a1.722 1.722 0 00-2.414 0 1.672 1.672 0 000 2.385l3.786 3.74-3.786 3.74a1.672 1.672 0 000 2.385 1.722 1.722 0 002.414 0l4.993-4.933a1.672 1.672 0 000-2.385z'
                transform='translate(-292.841 -165.132)'
              />
              <path
                id='Path_76890'
                data-name='Path 76890'
                className='cls-2'
                d='M224.045 153.679a1.712 1.712 0 00-2.209.962l-4.957 12.619a1.685 1.685 0 00.972 2.187 1.714 1.714 0 002.209-.962l4.957-12.619a1.684 1.684 0 00-.972-2.187z'
                transform='translate(-207.948 -153.564)'
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
export function Group26409(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={28}
      height={28}
      viewBox='0 0 28 28'
      {...props}
    >
      <g data-name='Group 26409' transform='translate(-290 -280)'>
        <rect
          data-name='Rectangle 6447'
          width={28}
          height={28}
          rx={14}
          transform='translate(290 280)'
          fill='#ff9500'
        />
        <text
          data-name={1}
          transform='translate(300 301)'
          fill='#fff'
          fontSize='20px'
          fontFamily='Poppins-SemiBold,Poppins'
          fontWeight={600}
        >
          <tspan x={0} y={0}>
            {'1'}
          </tspan>
        </text>
      </g>
    </svg>
  );
}
export function Group26408(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='auto'
      height='auto'
      viewBox='0 0 32.669 89.963'
      {...props}
    >
      <g data-name='Group 26408'>
        <path
          data-name='Path 76947'
          d='M.279 20.455a10.981 10.981 0 1110.98 10.981A10.993 10.993 0 01.279 20.455zm21.962 29.264a10.981 10.981 0 11-10.982-10.981 10.993 10.993 0 0110.982 10.981zm-4.148 0a6.833 6.833 0 10-6.834 6.833 6.84 6.84 0 006.834-6.833zm4.148 29.264a10.981 10.981 0 11-10.982-10.981 10.993 10.993 0 0110.982 10.981zm-4.148 0a6.833 6.833 0 10-6.834 6.832 6.841 6.841 0 006.834-6.832z'
          fill='#fff'
          opacity={0.43}
        />
        <path data-name='Path 76948' d='M0 0h32.669v32.669H0z' fill='none' />
        <path
          data-name='Path 76949'
          d='M12.251 22.052l-4.765-4.765a1.348 1.348 0 10-1.906 1.906l5.7 5.7a1.356 1.356 0 001.919 0l14.433-14.412a1.348 1.348 0 00-1.906-1.906z'
          fill='#039a3a'
          stroke='#039a3a'
        />
      </g>
    </svg>
  );
}
export function Group26279(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={55}
      height={55}
      viewBox='0 0 55 55'
      {...props}
    >
      <g data-name='Group 26279'>
        <g data-name='Group 25064'>
          <g data-name='Rectangle 6002' fill='#fff' stroke='#eaeaea'>
            <rect width={55} height={55} rx={12} stroke='none' />
            <rect
              x={0.5}
              y={0.5}
              width={54}
              height={54}
              rx={11.5}
              fill='none'
            />
          </g>
        </g>
        <path
          data-name='Path 76940'
          d='M36.904 22.349h-1.648v-3.3a8.241 8.241 0 00-16.482 0v3.3H17.13a3.306 3.306 0 00-3.3 3.3v16.478a3.306 3.306 0 003.3 3.3h19.774a3.306 3.306 0 003.3-3.3V25.646a3.306 3.306 0 00-3.3-3.297zm-9.889 14.834a3.3 3.3 0 113.3-3.3 3.306 3.306 0 01-3.3 3.3zm5.109-14.834H21.906v-3.3a5.11 5.11 0 0110.219 0z'
          fill='#02b5b5'
        />
      </g>
    </svg>
  );
}
export function Group25902(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={143.471}
      height={116.009}
      viewBox='0 0 143.471 116.009'
      {...props}
    >
      <defs>
        <linearGradient
          id='linear-gradient'
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#00acee' />
          <stop offset={1} stopColor='#e90088' />
        </linearGradient>
        <style>{'.cls-1{opacity:.5;fill:url(#linear-gradient)}'}</style>
      </defs>
      <g id='Group_25902' data-name='Group 25902' transform='translate(-15 -4)'>
        <rect
          id='Rectangle_6480'
          data-name='Rectangle 6480'
          className='cls-1'
          width={116.01}
          height={116.009}
          rx={58.004}
          transform='translate(42.461 4)'
        />
        <rect
          id='Rectangle_6481'
          data-name='Rectangle 6481'
          className='cls-1'
          width={71.391}
          height={71.388}
          rx={35.694}
          transform='translate(15 42.084)'
        />
      </g>
    </svg>
  );
}
export function Group25899(props: Props) {
  return (
    <svg
      data-name='Group 25899'
      xmlns='http://www.w3.org/2000/svg'
      width={60}
      height={20}
      viewBox='0 0 60 20'
      {...props}
    >
      <defs>
        <linearGradient
          id='a'
          x1={1.1}
          y1={-0.195}
          x2={-0.1}
          y2={1.096}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f32167' />
          <stop offset={1} stopColor='#116c7a' />
        </linearGradient>
      </defs>
      <rect
        data-name='Rectangle 4749'
        width={60}
        height={20}
        rx={10}
        fill='#fff'
      />
      <path
        data-name='Path 76923'
        d='M.74 0v-7.1h3.01a2.015 2.015 0 01.9.2 2.341 2.341 0 01.715.54 2.548 2.548 0 01.47.76 2.286 2.286 0 01.17.855 2.464 2.464 0 01-.16.875 2.429 2.429 0 01-.45.755 2.211 2.211 0 01-.7.53 2.025 2.025 0 01-.9.2H2.12V0zm1.38-3.59h1.6a.79.79 0 00.635-.31 1.283 1.283 0 00.255-.84 1.383 1.383 0 00-.08-.485 1.178 1.178 0 00-.21-.365.836.836 0 00-.3-.225.894.894 0 00-.36-.075H2.12zM9.37.1a2.876 2.876 0 01-1.15-.22 2.583 2.583 0 01-.865-.6 2.626 2.626 0 01-.545-.86 2.824 2.824 0 01-.19-1.03 2.851 2.851 0 01.19-1.04 2.626 2.626 0 01.545-.865 2.583 2.583 0 01.865-.6 2.876 2.876 0 011.15-.22 2.84 2.84 0 011.145.22 2.6 2.6 0 01.86.6 2.626 2.626 0 01.545.865 2.851 2.851 0 01.19 1.04 2.824 2.824 0 01-.19 1.03 2.669 2.669 0 01-.54.865 2.529 2.529 0 01-.86.6A2.876 2.876 0 019.37.1zM8-2.61a1.826 1.826 0 00.1.635 1.552 1.552 0 00.29.5 1.3 1.3 0 00.435.325 1.276 1.276 0 00.54.115 1.276 1.276 0 00.54-.115 1.3 1.3 0 00.435-.325 1.541 1.541 0 00.29-.5 1.868 1.868 0 00.1-.64 1.837 1.837 0 00-.1-.63 1.541 1.541 0 00-.29-.5 1.3 1.3 0 00-.435-.325 1.276 1.276 0 00-.54-.115 1.232 1.232 0 00-.54.12 1.357 1.357 0 00-.435.33 1.541 1.541 0 00-.29.5 1.837 1.837 0 00-.1.625zM16.35.1a2.065 2.065 0 01-1.08-.275 1.956 1.956 0 01-.72-.745v3.05h-1.34v-7.37h1.17v.9a2.138 2.138 0 01.75-.725 2.085 2.085 0 011.06-.265 2.244 2.244 0 01.98.215 2.427 2.427 0 01.775.58 2.7 2.7 0 01.51.86 2.96 2.96 0 01.185 1.045 3.3 3.3 0 01-.17 1.07 2.738 2.738 0 01-.475.87 2.215 2.215 0 01-.725.58 2.028 2.028 0 01-.92.21zm-.45-1.14a1.2 1.2 0 00.555-.13 1.345 1.345 0 00.435-.35 1.643 1.643 0 00.28-.51 1.828 1.828 0 00.1-.6 1.693 1.693 0 00-.11-.615 1.527 1.527 0 00-.305-.495 1.421 1.421 0 00-.46-.33 1.377 1.377 0 00-.575-.12 1.258 1.258 0 00-.39.065 1.374 1.374 0 00-.37.185 1.62 1.62 0 00-.305.28 1.163 1.163 0 00-.2.35v1.23a1.781 1.781 0 00.55.745 1.258 1.258 0 00.795.295zM21.35.1a1.488 1.488 0 01-1.23-.52 2.41 2.41 0 01-.42-1.54v-3.28h1.34v2.99q0 1.21.87 1.21a1.376 1.376 0 00.755-.235 1.689 1.689 0 00.6-.715v-3.25H24.6v3.7a.471.471 0 00.075.3.329.329 0 00.245.1V0a2.83 2.83 0 01-.335.05q-.135.01-.245.01a.965.965 0 01-.585-.165.65.65 0 01-.265-.455l-.03-.42a2.233 2.233 0 01-.9.81 2.708 2.708 0 01-1.21.27zm4.77-7.4h1.34v5.62a.661.661 0 00.14.45.5.5 0 00.4.16 1 1 0 00.265-.04 1.792 1.792 0 00.275-.1l.18 1.02a2.592 2.592 0 01-.63.2 3.437 3.437 0 01-.65.07 1.342 1.342 0 01-.975-.335 1.27 1.27 0 01-.345-.955zM30.93.1a1.988 1.988 0 01-.71-.125 1.707 1.707 0 01-.57-.35 1.629 1.629 0 01-.375-.525 1.59 1.59 0 01-.135-.66 1.454 1.454 0 01.165-.685 1.571 1.571 0 01.46-.535 2.28 2.28 0 01.7-.345 3.075 3.075 0 01.9-.125 3.878 3.878 0 01.685.06 2.79 2.79 0 01.6.17v-.3a1.05 1.05 0 00-.3-.8 1.227 1.227 0 00-.875-.28 2.318 2.318 0 00-.82.15 3.808 3.808 0 00-.82.44l-.41-.85a3.869 3.869 0 012.18-.67 2.554 2.554 0 011.755.555 2.034 2.034 0 01.63 1.605v1.63a.471.471 0 00.075.3.329.329 0 00.245.1V0a2.983 2.983 0 01-.59.07.893.893 0 01-.585-.17.731.731 0 01-.255-.45l-.03-.29a2.319 2.319 0 01-.85.7 2.441 2.441 0 01-1.07.24zm.38-.98a1.746 1.746 0 00.645-.12 1.171 1.171 0 00.475-.32.481.481 0 00.22-.38v-.6a3.281 3.281 0 00-.52-.145 2.8 2.8 0 00-.54-.055 1.432 1.432 0 00-.85.235.706.706 0 00-.33.6.716.716 0 00.26.565.944.944 0 00.64.22zm7.25-3.2a2.643 2.643 0 00-1.09.235 1.376 1.376 0 00-.69.675V0h-1.34v-5.24h1.23v1.12a2.389 2.389 0 01.33-.485 2.545 2.545 0 01.41-.375 1.9 1.9 0 01.445-.245 1.228 1.228 0 01.435-.085h.165a.534.534 0 01.1.01z'
        transform='translate(10.757 13)'
        fill='url(#a)'
      />
    </svg>
  );
}
export function Group25898(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={337.266}
      height={343.095}
      viewBox='0 0 337.266 343.095'
      {...props}
    >
      <defs>
        <filter
          id='Rectangle_6480'
          x={43.341}
          y={0}
          width={293.924}
          height={232.042}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
        <filter
          id='Rectangle_6539'
          x={0}
          y={49.171}
          width={219.042}
          height={293.924}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur-2' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur-2' />
          <feComposite in='SourceGraphic' />
        </filter>
        <style>{'.cls-1{fill:#fff;opacity:.5}'}</style>
      </defs>
      <g id='Group_25898' data-name='Group 25898'>
        <g filter='url(#Rectangle_6480)' transform='translate(-.004)'>
          <rect
            id='Rectangle_6480-2'
            data-name='Rectangle 6480'
            className='cls-1'
            width={197.924}
            height={136.042}
            rx={20}
            transform='translate(91.34 45)'
          />
        </g>
        <g filter='url(#Rectangle_6539)' transform='translate(-.004)'>
          <rect
            id='Rectangle_6539-2'
            data-name='Rectangle 6539'
            className='cls-1'
            width={197.924}
            height={123.042}
            rx={20}
            transform='rotate(90 38.435 132.605)'
          />
        </g>
      </g>
    </svg>
  );
}
export function Group25858(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={185.008}
      height={202.17}
      viewBox='0 0 185.008 202.17'
      {...props}
    >
      <defs>
        <filter
          id='Rectangle_6480'
          x={0}
          y={0}
          width={185.008}
          height={183.966}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
        <filter
          id='Rectangle_6481'
          x={38.734}
          y={61.951}
          width={141.704}
          height={140.219}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur-2' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur-2' />
          <feComposite in='SourceGraphic' />
        </filter>
        <linearGradient
          id='linear-gradient'
          x1={-0.095}
          y1={-0.161}
          x2={0.967}
          y2={0.957}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#fef201' />
          <stop offset={1} stopColor='#03acef' />
        </linearGradient>
        <style>{'.cls-1{opacity:.5;fill:url(#linear-gradient)}'}</style>
      </defs>
      <g id='Group_25858' data-name='Group 25858'>
        <g filter='url(#Rectangle_6480)' transform='translate(-.002 .003)'>
          <rect
            id='Rectangle_6480-2'
            data-name='Rectangle 6480'
            className='cls-1'
            width={82.344}
            height={83.467}
            rx={41.172}
            transform='rotate(-94 88.868 41.428)'
          />
        </g>
        <g filter='url(#Rectangle_6481)' transform='translate(-.002 .003)'>
          <rect
            id='Rectangle_6481-2'
            data-name='Rectangle 6481'
            className='cls-1'
            width={41.326}
            height={42.926}
            rx={20.663}
            transform='rotate(-94 115.294 33.799)'
          />
        </g>
      </g>
    </svg>
  );
}
export function Group25847(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={186.331}
      height={188.799}
      viewBox='0 0 186.331 188.799'
      {...props}
    >
      <defs>
        <filter
          id='Path_76899'
          x={28.612}
          y={15.916}
          width={157.719}
          height={172.883}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
        <filter
          id='Path_76975'
          x={0}
          y={0}
          width={153.225}
          height={167.284}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur-2' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur-2' />
          <feComposite in='SourceGraphic' />
        </filter>
        <linearGradient
          id='linear-gradient'
          x1={0.185}
          y1={0.813}
          x2={0.739}
          y2={0.344}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#99af0b' />
          <stop offset={1} stopColor='#e92600' />
        </linearGradient>
        <style>{'.cls-1{opacity:.5;fill:url(#linear-gradient)}'}</style>
      </defs>
      <g id='Group_25847' data-name='Group 25847'>
        <g filter='url(#Path_76899)' transform='translate(-.003)'>
          <path
            id='Path_76899-2'
            data-name='Path 76899'
            className='cls-1'
            d='M26.566 74.065a4.466 4.466 0 008.308-.017L61.415 5.979A4.394 4.394 0 0057.273 0L4.463.1A4.43 4.43 0 00.3 6.1z'
            transform='translate(76.61 60.92)'
          />
        </g>
        <g filter='url(#Path_76975)' transform='translate(-.003)'>
          <path
            id='Path_76975-2'
            data-name='Path 76975'
            className='cls-1'
            d='M24.631 68.672a4.141 4.141 0 007.7-.015L56.943 5.544A4.074 4.074 0 0053.1 0L4.138.1A4.107 4.107 0 00.276 5.657z'
            transform='translate(48 45)'
          />
        </g>
      </g>
    </svg>
  );
}
export function Group25826(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={26}
      height={37.998}
      viewBox='0 0 26 37.998'
      {...props}
    >
      <defs>
        <style>{'.cls-1{fill:#99af0b}'}</style>
      </defs>
      <g
        id='Group_25826'
        data-name='Group 25826'
        transform='translate(-1109 -935.754)'
      >
        <path
          id='Exclusion_3'
          data-name='Exclusion 3'
          className='cls-1'
          d='M23.4 21.467H2.6A2.645 2.645 0 010 18.784v-16.1A2.646 2.646 0 012.6 0h20.8A2.646 2.646 0 0126 2.684v16.1a2.645 2.645 0 01-2.6 2.683zm-3.706-13.1V12.8a.649.649 0 00.193.478.677.677 0 00.5.193.65.65 0 00.682-.67V6.427a.623.623 0 00-.21-.484.692.692 0 00-.472-.187.637.637 0 00-.539.3l-2.467 3.683-2.395-3.686a.634.634 0 00-.259-.214.749.749 0 00-.324-.083.683.683 0 00-.49.2.64.64 0 00-.2.473V12.8a.684.684 0 00.175.478.588.588 0 00.452.193.6.6 0 00.462-.193.684.684 0 00.175-.478V8.264l1.815 2.871a.915.915 0 00.247.209.513.513 0 00.261.079h.064a.526.526 0 00.269-.079.915.915 0 00.247-.209l1.812-2.765zm-9.009 0V12.8a.649.649 0 00.193.478.677.677 0 00.5.193.65.65 0 00.682-.67V6.427a.623.623 0 00-.21-.484.692.692 0 00-.473-.187.637.637 0 00-.539.3L8.372 9.739 5.977 6.053a.634.634 0 00-.259-.214.749.749 0 00-.324-.083.683.683 0 00-.49.2.64.64 0 00-.2.473V12.8a.684.684 0 00.175.478.588.588 0 00.452.193.6.6 0 00.462-.193.684.684 0 00.175-.478V8.264l1.815 2.871a.915.915 0 00.248.209.513.513 0 00.261.079h.064a.526.526 0 00.269-.079.915.915 0 00.247-.209l1.811-2.765z'
          transform='translate(1109 952.285)'
        />
        <g
          id='Group_25823'
          data-name='Group 25823'
          transform='translate(1109.12 935.754)'
        >
          <path
            id='Path_76969'
            data-name='Path 76969'
            className='cls-1'
            d='M1.12-1.6h3.59v-6.952L7.164-1.6h3L12.6-8.5v6.9h3.59v-12.5h-4.319L8.7-5.982 5.461-14.1H1.12zm17.125 0h3.59v-4.9h3.81v-2.637h-3.81v-2.2H27V-14.1h-8.755z'
            transform='translate(-1.12 14.1)'
          />
        </g>
      </g>
    </svg>
  );
}
export function Group25823(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={26}
      height={37}
      viewBox='0 0 26 37'
      {...props}
    >
      <defs>
        <style>{'.cls-1{fill:#0baf89}'}</style>
      </defs>
      <g
        id='Group_25823'
        data-name='Group 25823'
        transform='translate(-831 -1260.9)'
      >
        <path
          id='Path_76969'
          data-name='Path 76969'
          className='cls-1'
          d='M1.12-1.6h3.59v-6.952L7.164-1.6h3L12.6-8.5v6.9h3.59v-12.5h-4.319L8.7-5.982 5.461-14.1H1.12zm17.125 0h3.59v-4.9h3.81v-2.637h-3.81v-2.2H27V-14.1h-8.755z'
          transform='translate(830 1275)'
        />
        <g
          id='Group_25817'
          data-name='Group 25817'
          transform='translate(831 1276.433)'
        >
          <g id='Group_25820' data-name='Group 25820'>
            <path
              id='Rectangle_6531'
              data-name='Rectangle 6531'
              className='cls-1'
              transform='translate(17.487 8.721)'
              d='M0 0h2.683v1.342H0z'
            />
            <path
              id='Path_76971'
              data-name='Path 76971'
              className='cls-1'
              d='M25.4 4H4.6A2.65 2.65 0 002 6.683v16.1a2.65 2.65 0 002.6 2.683h20.8a2.65 2.65 0 002.6-2.682V6.683A2.65 2.65 0 0025.4 4zm-13 7.715a1 1 0 01-.975 1.006H7.85v1.006h3.25a1.325 1.325 0 011.3 1.342v2.348a1.325 1.325 0 01-1.3 1.342H6.875a1 1 0 01-.975-1.007 1 1 0 01.975-1.006h3.575V15.74H7.2a1.325 1.325 0 01-1.3-1.34v-2.35a1.325 1.325 0 011.3-1.342h4.225a1 1 0 01.975 1.006zm2.6 7.044a1.325 1.325 0 01-1.3-1.342V12.05a1.325 1.325 0 011.3-1.342 1.325 1.325 0 011.3 1.342v5.367a1.325 1.325 0 01-1.3 1.342zm9.1-4.025a1.325 1.325 0 01-1.3 1.342h-3.25v1.677a1 1 0 01-.975 1.006 1 1 0 01-.975-1.006v-5.7a1.325 1.325 0 011.3-1.342h3.9a1.325 1.325 0 011.3 1.342z'
              transform='translate(-2 -4)'
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
export function Group25822(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={26}
      height={37}
      viewBox='0 0 26 37'
      {...props}
    >
      <defs>
        <style>{'.cls-1{fill:#0b82af}'}</style>
      </defs>
      <g
        id='Group_25822'
        data-name='Group 25822'
        transform='translate(-830.998 -1260.9)'
      >
        <path
          id='Path_76969'
          data-name='Path 76969'
          className='cls-1'
          d='M1.12-1.6h3.59v-6.952L7.164-1.6h3L12.6-8.5v6.9h3.59v-12.5h-4.32L8.7-5.982 5.46-14.1H1.12zm17.124 0h3.59v-4.9h3.809v-2.637h-3.81v-2.2H27V-14.1h-8.756z'
          transform='translate(830 1275)'
        />
        <path
          id='Exclusion_2'
          data-name='Exclusion 2'
          className='cls-1'
          d='M23.4 21.468H2.6A2.647 2.647 0 010 18.783V2.685A2.647 2.647 0 012.6 0h20.8A2.645 2.645 0 0126 2.685v16.1a2.645 2.645 0 01-2.6 2.683zM6.579 12.827v3.118A1.535 1.535 0 008.088 17.5h10.573a1.535 1.535 0 001.508-1.558v-3.115h-5.288a.768.768 0 01-.754.778h-1.513a.768.768 0 01-.754-.778zm6.034-2.34h1.513a.768.768 0 01.754.778v.778h4.534a1.537 1.537 0 001.513-1.557V8.147a1.539 1.539 0 00-1.513-1.562h-3.02a3.149 3.149 0 00-.887-2.2 2.962 2.962 0 00-2.138-.914 3.074 3.074 0 00-3.021 3.118H7.326a1.539 1.539 0 00-1.513 1.558v2.34a1.537 1.537 0 001.513 1.557h4.534v-.778a.768.768 0 01.754-.779zm2.267-3.9h-3.02a1.511 1.511 0 113.021 0z'
          transform='translate(830.998 1276.432)'
        />
      </g>
    </svg>
  );
}
export function Group25694(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={28}
      height={28}
      viewBox='0 0 28 28'
      {...props}
    >
      <g data-name='Group 25694'>
        <g data-name='Group 25695' transform='translate(-290 -280)'>
          <rect
            data-name='Rectangle 6447'
            width={28}
            height={28}
            rx={14}
            transform='translate(290 280)'
            fill='#ff453a'
          />
          <text
            data-name={2}
            transform='translate(298 301)'
            fill='#fff'
            fontSize='20px'
            fontFamily='Poppins-SemiBold,Poppins'
            fontWeight={600}
          >
            <tspan x={0} y={0}>
              {'2'}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
}
export function Group25688(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='auto'
      height='auto'
      viewBox='0 0 51.146 45.463'
      {...props}
    >
      <defs>
        <style>{'.cls-2{fill:#d5d5d5}'}</style>
      </defs>
      <g id='Group_25688' data-name='Group 25688' opacity={0.42}>
        <path
          id='Path_76944'
          data-name='Path 76944'
          className='cls-2'
          d='M11.366 22.732a11.366 11.366 0 1111.366-11.366 11.366 11.366 0 01-11.366 11.366zm0-17.049a5.683 5.683 0 105.683 5.683 5.683 5.683 0 00-5.683-5.683z'
          transform='translate(0 22.731)'
        />
        <path
          id='Path_76945'
          data-name='Path 76945'
          className='cls-2'
          d='M2.841 30.914a2.841 2.841 0 01-2.009-4.85L26.064.832a2.841 2.841 0 014.018 0l5.683 5.683a2.841 2.841 0 11-4.018 4.018l-3.674-3.674L4.85 30.082a2.841 2.841 0 01-2.009.833z'
          transform='translate(14.549)'
        />
        <path
          id='Path_76946'
          data-name='Path 76946'
          className='cls-2'
          d='M8.524 11.366a2.841 2.841 0 01-2.008-.832L.833 4.85A2.841 2.841 0 114.851.832l5.683 5.683a2.841 2.841 0 01-2.009 4.85z'
          transform='translate(31.256 8.524)'
        />
      </g>
    </svg>
  );
}
export function Group25616(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={90}
      height={90}
      viewBox='0 0 90 90'
      {...props}
    >
      <defs>
        <filter
          id='Rectangle_6487'
          x={0}
          y={0}
          width={90}
          height={90}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={7} result='blur' />
          <feFlood floodOpacity={0.161} />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
        <style>{'.cls-3{fill:#fff}'}</style>
      </defs>
      <g id='Group_25616' data-name='Group 25616' transform='translate(21 17)'>
        <g
          transform='translate(-21 -17)'
          id='Group_25603'
          data-name='Group 25603'
          filter='url(#Rectangle_6487)'
        >
          <rect
            id='Rectangle_6487-2'
            data-name='Rectangle 6487'
            width={48}
            height={48}
            rx={10}
            transform='translate(21 17)'
            fill='#ec0f51'
          />
        </g>
        <g id='dns_black_24dp' transform='rotate(180 21 21)'>
          <path
            id='Path_53135'
            data-name='Path 53135'
            d='M0 0h36v36H0z'
            fill='none'
          />
        </g>
        <g id='noun_analysis_286718' transform='translate(10.546 8.59)'>
          <g
            id='Group_25663'
            data-name='Group 25663'
            transform='translate(0 3)'
          >
            <path
              id='Path_76932'
              data-name='Path 76932'
              className='cls-3'
              d='M26.252 23.079l-5.689-5.688a11.161 11.161 0 00.8-10.918l-2.606 2.6a7.857 7.857 0 11-2.484-3.856l2.381-2.381a11.207 11.207 0 10-7.442 19.582 11.14 11.14 0 006.18-1.86l5.689 5.688a2.243 2.243 0 003.172-3.172z'
            />
            <path
              id='Path_76933'
              data-name='Path 76933'
              className='cls-3'
              d='M14.241 8.682l-2.624-2.624a1.144 1.144 0 00-1.954.809v6.393l-1.48-1.48a1.143 1.143 0 00-1.618 0l-2.152 2.152a6.893 6.893 0 001.221 2.015l1.74-1.74L10 16.832a1.144 1.144 0 001.954-.809V9.63l1.48 1.48a1.143 1.143 0 001.618 0l7.437-7.44 2.052 2.052V0h-5.722l2.052 2.052z'
              transform='translate(.077)'
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
export function Group25597(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={573.04}
      height={584.491}
      viewBox='0 0 573.04 584.491'
      {...props}
    >
      <defs>
        <style>{'.cls-2{fill:#fff;opacity:.5}'}</style>
      </defs>
      <g
        id='Group_25597'
        data-name='Group 25597'
        transform='rotate(-59 252.088 219.797)'
        opacity={0.22}
      >
        <path
          id='Path_76991'
          data-name='Path 76991'
          className='cls-2'
          d='M127.271 1.64l.762.01c70.268.883 127.946 59.323 128.829 130.53S201.5 260.394 131.23 259.511l-.762-.01C60.2 258.619 2.522 200.179 1.639 128.972S57 .757 127.271 1.64z'
          transform='translate(121.491 1.565)'
        />
        <path
          id='Path_76992'
          data-name='Path 76992'
          className='cls-2'
          d='M189.374 2.44l1.057.013c104.555 1.314 190.379 88.27 191.692 194.222s-82.38 190.779-186.935 189.465l-1.057-.013C89.577 384.813 3.753 297.857 2.439 191.9S84.819 1.126 189.374 2.44z'
          transform='translate(1.639 128.95)'
        />
      </g>
    </svg>
  );
}
export function Group25592(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={85.756}
      height={96.69}
      viewBox='0 0 85.756 96.69'
      {...props}
    >
      <defs>
        <linearGradient
          id='linear-gradient'
          x1={2.406}
          y1={1.151}
          x2={-0.448}
          y2={0.023}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#40f' />
          <stop offset={1} stopColor='red' />
        </linearGradient>
        <style>{'.cls-1{opacity:.5;fill:url(#linear-gradient)}'}</style>
      </defs>
      <g
        id='Group_25592'
        data-name='Group 25592'
        transform='rotate(-87 60.462 49.97)'
      >
        <rect
          id='Rectangle_6480'
          data-name='Rectangle 6480'
          className='cls-1'
          width={77.215}
          height={77.214}
          rx={38.607}
          transform='translate(30.197 -8.989)'
        />
        <rect
          id='Rectangle_6481'
          data-name='Rectangle 6481'
          className='cls-1'
          width={47.517}
          height={47.515}
          rx={23.757}
          transform='translate(15 27.676)'
        />
      </g>
    </svg>
  );
}
export function Group25589(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width={99.601}
      height={130.944}
      viewBox='0 0 99.601 130.944'
      {...props}
    >
      <defs>
        <linearGradient
          id='a'
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f3017a' />
          <stop offset={1} stopColor='#620eb3' />
        </linearGradient>
        <linearGradient id='b' y1={1} y2={0} xlinkHref='#a' />
      </defs>
      <g data-name='Group 25589' transform='translate(-19.88 3)'>
        <rect
          data-name='Rectangle 6469'
          width={73.068}
          height={113.766}
          rx={10}
          transform='translate(19.88 -3)'
          fill='url(#a)'
          opacity={0.5}
        />
        <rect
          data-name='Rectangle 6537'
          width={61.068}
          height={102.766}
          rx={7}
          transform='rotate(-180 59.74 63.972)'
          fill='url(#b)'
          opacity={0.5}
        />
      </g>
    </svg>
  );
}
export function Group25344(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={36.195}
      height={63.349}
      viewBox='0 0 36.195 63.349'
      {...props}
    >
      <defs>
        <linearGradient
          id='linear-gradient'
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#fff' />
          <stop offset={1} stopColor='#fff' stopOpacity={0.4} />
        </linearGradient>
        <linearGradient
          id='linear-gradient-2'
          x1={0.176}
          y1={1}
          x2={0.63}
          y2={-1.095}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#737373' />
          <stop offset={1} stopColor='#fff' />
        </linearGradient>
        <style>{'.cls-3{fill:url(#linear-gradient-2)}'}</style>
      </defs>
      <g id='Group_25344' data-name='Group 25344' transform='translate(9.001)'>
        <path
          id='Path_76793'
          data-name='Path 76793'
          d='M-18039.049-822.192c-2.318 3.077-3.951 4.388-3.951 7.5a9.1 9.1 0 009.1 9.1 9.1 9.1 0 009.1-9.1c0-2.947-1.344-4.152-3.574-7.229s-2.48-5.08-5.344-5.08c-2.782.001-3.011 1.732-5.331 4.809z'
          transform='translate(18043 859.941)'
          opacity={0.43}
          fill='url(#linear-gradient)'
        />
        <path
          id='Path_52886'
          data-name='Path 52886'
          d='M-18039.049-822.192c-2.318 3.077-3.951 4.388-3.951 7.5a9.1 9.1 0 009.1 9.1 9.1 9.1 0 009.1-9.1c0-2.947-1.344-4.152-3.574-7.229s-2.48-5.08-5.344-5.08c-2.782.001-3.011 1.732-5.331 4.809z'
          transform='translate(18042.844 859.94)'
          fill='#fff'
        />
        <path
          id='Path_52891'
          data-name='Path 52891'
          className='cls-3'
          d='M1 0h5.49a1 1 0 011 1v.5a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1z'
          transform='translate(5.197 32.443)'
        />
        <path
          id='Path_52890'
          data-name='Path 52890'
          className='cls-3'
          d='M1 0h5.49a1 1 0 011 1v.5a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1z'
          transform='translate(5.197 30.447)'
        />
        <path
          id='Path_52889'
          data-name='Path 52889'
          className='cls-3'
          d='M1 0h5.49a1 1 0 011 1v.5a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1z'
          transform='translate(5.197 28.45)'
        />
        <path
          id='Path_52888'
          data-name='Path 52888'
          d='M0 0h1.5v28.45H0z'
          transform='translate(8.197)'
          fill='#ff7623'
        />
      </g>
    </svg>
  );
}
export function Group25237(props: Props) {
  return (
    <svg
      data-name='Group 25237'
      xmlns='http://www.w3.org/2000/svg'
      width={50}
      height={50}
      viewBox='0 0 50 50'
      {...props}
    >
      <path data-name='Rectangle 6292' d='M0 0h50v50H0z' fill='none' />
      <path
        d='M25.4 7.61a18.41 18.41 0 00-4.054.369c-3.593.645-4.238 1.935-4.238 4.331v3.225h8.477v1.105H13.978a5.371 5.371 0 00-5.344 4.238 16.877 16.877 0 000 8.569c.645 2.58 2.119 4.331 4.515 4.331h2.948V29.91a5.372 5.372 0 015.252-5.252h8.385a4.227 4.227 0 004.238-4.238v-8.11c0-2.211-1.935-3.962-4.238-4.331A22.911 22.911 0 0025.4 7.61zm-4.607 2.58a1.576 1.576 0 011.566 1.658 1.553 1.553 0 01-1.566 1.562 1.615 1.615 0 01-1.566-1.566 1.635 1.635 0 011.566-1.654z'
        data-name='Group 25193'
        fill='#5a9fd4'
      />
      <path
        data-name='Path 76743'
        d='M25.534 42.39a18.411 18.411 0 004.054-.369c3.593-.645 4.238-1.931 4.238-4.331v-3.224h-8.477V33.36h11.607a5.371 5.371 0 005.347-4.238 16.878 16.878 0 000-8.569c-.645-2.58-2.119-4.33-4.515-4.33H34.84v3.867a5.372 5.372 0 01-5.252 5.252h-8.385a4.227 4.227 0 00-4.238 4.238v8.11c0 2.211 1.935 3.962 4.238 4.33a22.912 22.912 0 004.331.37zm4.607-2.58a1.576 1.576 0 01-1.566-1.658 1.553 1.553 0 011.566-1.562 1.615 1.615 0 011.566 1.566 1.635 1.635 0 01-1.566 1.654z'
        fill='#ffd43b'
      />
    </svg>
  );
}
export function Group23244(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={64.001}
      height={57}
      viewBox='0 0 64.001 57'
      {...props}
    >
      <defs>
        <linearGradient
          id='linear-gradient'
          x1={0.23}
          y1={-0.153}
          x2={0.624}
          y2={0.853}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#fff' stopOpacity={0.82} />
          <stop offset={1} stopColor='#fff' stopOpacity={0} />
        </linearGradient>
        <style>{'.gradcls{fill:url(#linear-gradient)}'}</style>
      </defs>
      <g
        id='Group_23244'
        data-name='Group 23244'
        transform='translate(-933.956 -202.638)'
      >
        <g
          id='Group_23242'
          data-name='Group 23242'
          transform='translate(959.263 203)'
        >
          <path
            id='Union_47'
            data-name='Union 47'
            className='gradcls'
            d='M0 57V44.9a19.5 19.5 0 0139 0V57zm19.482-33.861a11.569 11.569 0 010-23.139h.035a11.569 11.569 0 110 23.139z'
            transform='translate(-.305 -.361)'
          />
        </g>
        <g
          id='Group_23243'
          data-name='Group 23243'
          transform='translate(934 216.459)'
        >
          <path
            id='Union_47-2'
            data-name='Union 47'
            className='gradcls'
            d='M0 37v-8.015a12.5 12.5 0 1125 0V37zM5.072 7.592v-.164a7.428 7.428 0 0114.855 0v.165a7.428 7.428 0 01-14.855 0z'
            transform='translate(-.044 .18)'
          />
        </g>
      </g>
    </svg>
  );
}
export function Group23239(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={47.58}
      height={97.349}
      viewBox='0 0 47.58 97.349'
      {...props}
    >
      <defs>
        <linearGradient
          id='linear-gradient'
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#fff' />
          <stop offset={1} stopColor='#fff' stopOpacity={0.4} />
        </linearGradient>
        <linearGradient
          id='linear-gradient-2'
          x1={0.176}
          y1={1}
          x2={0.63}
          y2={-1.095}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#737373' />
          <stop offset={1} stopColor='#fff' />
        </linearGradient>
        <style>{'.cls-3{fill:url(#linear-gradient-2)}'}</style>
      </defs>
      <g id='Group_23239' data-name='Group 23239' transform='translate(9)'>
        <path
          id='Path_76793'
          data-name='Path 76793'
          d='M-18036.576-819.185c-3.77 5-6.424 7.134-6.424 12.2a14.789 14.789 0 0014.791 14.789 14.789 14.789 0 0014.789-14.789c0-4.791-2.186-6.75-5.811-11.752s-4.031-8.258-8.689-8.258c-4.508-.005-4.88 2.807-8.656 7.81z'
          transform='translate(18043 880.549)'
          opacity={0.43}
          fill='url(#linear-gradient)'
        />
        <path
          id='Path_52886'
          data-name='Path 52886'
          d='M-18036.576-819.185c-3.77 5-6.424 7.134-6.424 12.2a14.789 14.789 0 0014.791 14.789 14.789 14.789 0 0014.789-14.789c0-4.791-2.186-6.75-5.811-11.752s-4.031-8.258-8.689-8.258c-4.508-.005-4.88 2.807-8.656 7.81z'
          transform='translate(18042.58 880.548)'
          fill='#fff'
        />
        <path
          id='Path_52891'
          data-name='Path 52891'
          className='cls-3'
          d='M1.623 0h8.925a1.623 1.623 0 011.623 1.623v.811a1.623 1.623 0 01-1.623 1.623H1.623A1.623 1.623 0 010 2.434v-.811A1.623 1.623 0 011.623 0z'
          transform='translate(8.58 52.739)'
        />
        <path
          id='Path_52890'
          data-name='Path 52890'
          className='cls-3'
          d='M1.623 0h8.925a1.623 1.623 0 011.623 1.623v.811a1.623 1.623 0 01-1.623 1.623H1.623A1.623 1.623 0 010 2.434v-.811A1.623 1.623 0 011.623 0z'
          transform='translate(8.58 49.493)'
        />
        <path
          id='Path_52889'
          data-name='Path 52889'
          className='cls-3'
          d='M1.623 0h8.925a1.623 1.623 0 011.623 1.623v.811a1.623 1.623 0 01-1.623 1.623H1.623A1.623 1.623 0 010 2.434v-.811A1.623 1.623 0 011.623 0z'
          transform='translate(8.58 46.248)'
        />
        <path
          id='Path_52888'
          data-name='Path 52888'
          d='M0 0h1.5v46.248H0z'
          transform='translate(13.58)'
          fill='#ff7623'
        />
      </g>
    </svg>
  );
}
export function Group23238(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={85.324}
      height={74.226}
      viewBox='0 0 85.324 74.226'
      {...props}
    >
      <defs>
        <style>
          {
            '.cls-1{fill:#fff3ec}.cls-2{fill:#aeadac}.cls-3{fill:#595959}.cls-4{fill:#ff7623}'
          }
        </style>
      </defs>
      <g
        id='Group_23238'
        data-name='Group 23238'
        transform='rotate(41 568.74 -605.448)'
      >
        <g
          id='Group_23234'
          data-name='Group 23234'
          transform='translate(604.105 215)'
        >
          <path
            id='Path_52882'
            data-name='Path 52882'
            className='cls-1'
            d='M0 0h9.222a4.3 4.3 0 014.3 4.3v9.222a4.919 4.919 0 01-4.919 4.919H0z'
            transform='translate(2.459)'
          />
          <path
            id='Path_52881'
            data-name='Path 52881'
            className='cls-2'
            d='M2.459 0a2.459 2.459 0 012.46 2.459v13.527a2.459 2.459 0 11-4.919 0V2.459A2.459 2.459 0 012.459 0z'
          />
          <path
            id='Path_52880'
            data-name='Path 52880'
            className='cls-3'
            d='M1.23 0a1.23 1.23 0 011.23 1.23v.615A1.23 1.23 0 110 1.844V1.23A1.23 1.23 0 011.23 0z'
            transform='translate(1.23 3.689)'
          />
          <path
            id='Path_52885'
            data-name='Path 52885'
            className='cls-3'
            d='M1.23 0a1.23 1.23 0 011.23 1.23v.615A1.23 1.23 0 110 1.844V1.23A1.23 1.23 0 011.23 0z'
            transform='translate(1.23 12.297)'
          />
          <path
            id='Path_52883'
            data-name='Path 52883'
            className='cls-4'
            d='M0 0l27.476.067L28.8 1.6 0 1.844z'
            transform='translate(15.986 8.608)'
          />
        </g>
        <g
          id='Group_23235'
          data-name='Group 23235'
          transform='translate(539.075 215.222)'
        >
          <g
            id='Group_23233'
            data-name='Group 23233'
            transform='translate(27.667)'
          >
            <path
              id='Path_52876'
              data-name='Path 52876'
              className='cls-1'
              d='M4.3 0h9.222v18.445H4.919A4.919 4.919 0 010 13.526V4.3A4.3 4.3 0 014.3 0z'
            />
            <path
              id='Path_52877'
              data-name='Path 52877'
              className='cls-2'
              d='M2.459 0a2.459 2.459 0 012.46 2.459v13.527a2.459 2.459 0 11-4.919 0V2.459A2.459 2.459 0 012.459 0z'
              transform='translate(11.067)'
            />
          </g>
          <path
            id='Path_52878'
            data-name='Path 52878'
            className='cls-3'
            d='M1.23 0h6.148a1.23 1.23 0 110 2.459H1.23A1.23 1.23 0 011.23 0z'
            transform='translate(40.579 3.996)'
          />
          <path
            id='Path_52879'
            data-name='Path 52879'
            className='cls-3'
            d='M1.23 0h6.148a1.23 1.23 0 110 2.459H1.23A1.23 1.23 0 011.23 0z'
            transform='translate(40.579 12.604)'
          />
          <path
            id='Path_52884'
            data-name='Path 52884'
            className='cls-4'
            d='M2.056.151L29.066 0v1.938H0z'
            transform='translate(-1.399 8.561)'
          />
        </g>
      </g>
    </svg>
  );
}
export function Group21681(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={42}
      height={42}
      viewBox='0 0 42 42'
      {...props}
    >
      <g data-name='Group 21681'>
        <g data-name='Group 19629'>
          <ellipse
            data-name='Ellipse 1854'
            cx={10.838}
            cy={10.811}
            rx={10.838}
            ry={10.811}
            transform='translate(10.612 11.508)'
            fill='#fff'
          />
          <path data-name='Path 17209' d='M0 0h42v42H0z' fill='none' />
          <path
            data-name='Path 17210'
            d='M21.175 3.54a17.38 17.38 0 1017.38 17.38 17.386 17.386 0 00-17.38-17.38zm-3.48 25.2V13.099l10.432 7.821z'
            fill='#0071e3'
          />
        </g>
      </g>
    </svg>
  );
}
export function Group21628(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={131.999}
      height={37}
      viewBox='0 0 131.999 37'
      {...props}
    >
      <defs>
        <linearGradient
          id='a'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f0601f' />
          <stop offset={1} stopColor='#f49266' />
        </linearGradient>
        <linearGradient
          id='b'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f16c30' />
          <stop offset={1} stopColor='#f48e60' />
        </linearGradient>
        <linearGradient
          id='c'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f16e33' />
          <stop offset={1} stopColor='#f5956a' />
        </linearGradient>
        <linearGradient
          id='d'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f16d32' />
          <stop offset={1} stopColor='#f59468' />
        </linearGradient>
        <linearGradient
          id='e'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f06223' />
          <stop offset={1} stopColor='#f4966b' />
        </linearGradient>
        <linearGradient
          id='f'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f06121' />
          <stop offset={1} stopColor='#f59468' />
        </linearGradient>
        <linearGradient
          id='g'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f05d1b' />
          <stop offset={1} stopColor='#f49468' />
        </linearGradient>
        <linearGradient
          id='h'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f05e1d' />
          <stop offset={1} stopColor='#f59265' />
        </linearGradient>
        <linearGradient
          id='i'
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#ef5713' />
          <stop offset={1} stopColor='#f5986e' />
        </linearGradient>
        <linearGradient
          id='j'
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#ef5f1f' />
          <stop offset={1} stopColor='#f5976c' />
        </linearGradient>
        <linearGradient
          id='k'
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#fff' />
          <stop offset={1} stopColor='#f05f1f' />
        </linearGradient>
      </defs>
      <g data-name='Group 21628'>
        <g data-name='Group 21629'>
          <text
            transform='translate(55.999 28)'
            data-name='Group 19605'
            stroke='#000'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='3px'
            fontSize='26px'
            fontFamily='Jura'
            letterSpacing='.088em'
            opacity={0.85}
          >
            <tspan x={0} y={0}>
              {'NOVA'}
            </tspan>
          </text>
          <g data-name='Group 19606'>
            <path
              data-name='Path 16889'
              d='M16.915 17.373l-.386.393v-.772z'
              fill='#a75eff'
            />
            <g data-name='Group 19140'>
              <path
                data-name='Rectangle 5428'
                transform='rotate(-45.569 20.844 .797)'
                d='M0 0h5.315v5.315H0z'
                fill='url(#a)'
              />
              <path
                data-name='Rectangle 5429'
                transform='rotate(-45.57 19.32 -7.67)'
                d='M0 0h2.691v2.691H0z'
                fill='url(#b)'
              />
              <path
                data-name='Rectangle 5430'
                transform='rotate(-45.569 27.108 -6.53)'
                d='M0 0h2.956v2.956H0z'
                fill='url(#c)'
              />
              <path
                data-name='Rectangle 5431'
                transform='rotate(-45.57 14.266 -7.397)'
                d='M0 0h1.861v1.861H0z'
                fill='url(#d)'
              />
              <path
                data-name='Rectangle 5432'
                transform='rotate(-45.568 23.866 10.024)'
                d='M0 0h1.285v1.285H0z'
                fill='url(#e)'
              />
              <path
                data-name='Rectangle 5433'
                transform='rotate(-45.569 27.395 5.67)'
                d='M0 0h3.507v3.507H0z'
                fill='url(#f)'
              />
              <path
                data-name='Rectangle 5434'
                transform='rotate(-45.569 19.793 6.858)'
                d='M0 0h2.381v2.381H0z'
                fill='url(#g)'
              />
              <path
                data-name='Rectangle 5435'
                transform='rotate(-45.57 14.082 1.652)'
                d='M0 0h3.534v3.534H0z'
                fill='url(#h)'
              />
              <path
                data-name='Path 16891'
                d='M221.839 191.642a14.842 14.842 0 00-9.51 4.738l3.788 3.914-1.858 2 3.291 3.4-3.715 3.994-1.895-1.958-3.5 3.763a15.437 15.437 0 0013.715 12.059l-.234-24.873h6.072l4.688 6.274v-13.311z'
                transform='translate(-199.345 -188.552)'
                fill='url(#i)'
              />
            </g>
            <path
              data-name='Path 16892'
              d='M312.878 191.645h-.8v24.874h-5.885l-4.576-6.273v13.309h11.265c2.861 0 5.181-3.267 5.181-7.3v-17.312c-.005-4.031-2.324-7.298-5.185-7.298z'
              transform='translate(-272.852 -188.554)'
              fill='url(#j)'
            />
            <path
              data-name='Path 16894'
              d='M358.655 252.1h-5.985v10.658h1.7c2.365 0 4.282-2.5 4.282-5.588z'
              transform='translate(-313.448 -235.084)'
              style={{
                mixBlendMode: 'multiply',
                isolation: 'isolate',
              }}
              fill='url(#k)'
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
export function Group21627(props: Props) {
  return (
    <svg
      data-name='Group 21627'
      xmlns='http://www.w3.org/2000/svg'
      width={28}
      height={28}
      viewBox='0 0 28 28'
      {...props}
    >
      <g data-name='Group 21622'>
        <g
          data-name='Group 21623'
          stroke='#707070'
          strokeWidth='2px'
          fill='none'
        >
          <path
            data-name='Path 51949'
            d='M6.92 17.203l1.072-7.7a1.791 1.791 0 011.813-1.409c1.51.05 8.484 0 8.484 0s1.813-.151 2.164 1.409 1.459 12.18 1.459 12.18.605 2.517-1.961 2.567-11.607 0-11.607 0a1.789 1.789 0 01-1.912-1.963c.15-2.014.488-5.084.488-5.084z'
          />
          <path
            data-name='Path 51950'
            d='M10.996 11.803V7.142a3.188 3.188 0 013.346-2.767 2.858 2.858 0 013.057 2.767v4.661'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
      <path data-name='Path 51953' d='M0 0h28v28H0z' fill='none' />
    </svg>
  );
}
export function Group19733(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={22}
      height={22}
      viewBox='0 0 22 22'
      {...props}
    >
      <g data-name='Group 19733' fillRule='evenodd'>
        <path
          data-name='Path 12236'
          d='M11 0A11 11 0 110 11 11 11 0 0111 0z'
          fill='#ef5713'
        />
        <path
          data-name='Path 12237'
          d='M9.516 11.445l.446-1.047H8.785l.732 1.047zm-.192-2.149l.638 1.1.47-1.1zm0 0l.652-1.333H8.558l.766 1.333zM5.736 7.961L7.143 10.7l1.415-2.739zM7.143 10.7l-1.485 2.866h2.955l-.706-1.378-.764-1.488zm.727-1.406l.7 1.532.211-.431.539-1.1zm.7 1.532l-.666 1.362h1.291l-.624-1.362zm.942.617l-.318.746h.839l-.521-.746zm-.9 2.124h1.213l-.631-1.378-.585 1.378zm1.314 2.557l-1.313-2.555-1.092 2.557zm1.071-2.557l-.209-.3-.753-1.078h1.928L11 13.567zm-3.658-7.7l2-2.611H5.83l1.511 2.611zm2.305 0H7.342l1.216 2.094 1.089-2.093zM5.736 7.961l1.606-2.093H4.661l1.075 2.093zm0 0H1.574l2.028 2.783 2.134-2.783zm-.078 5.606l-1.325 2.559h3.188l-1.863-2.557zm-4.221 0h4.221l-2.057-2.823-2.165 2.823zm5.2 4.641h2.407l-1.519-2.084-.888 2.084zm5.851-6.765l-.446-1.047h1.178l-.732 1.047zm.192-2.149l-.638 1.1-.47-1.1zm0 0l-.656-1.333h1.418l-.766 1.333zm3.584-1.333L14.857 10.7l-1.415-2.739zM14.857 10.7l1.485 2.866h-2.955l.705-1.378.765-1.488zm-.727-1.406l-.7 1.532-.211-.431-.54-1.1zm-.7 1.532l.666 1.362h-1.29l.624-1.362zm-.942.617l.318.746h-.843l.521-.746zm.9 2.124h-1.217l.631-1.378.585 1.378zm-1.314 2.557l1.316-2.557 1.092 2.557zm-1.071-6.83h.568L11 7.961l-.568 1.333H11zm0 2.895l.143-.249.894-1.544H9.962L11 12.189zm0 3.935l1.171-2.557H9.829l.9 1.973.267.584zm3.659-10.256l-2-2.611h3.514l-1.511 2.611zm-2.306 0h2.306l-1.22 2.093-1.089-2.092zm3.908 2.093l-1.606-2.093h2.681l-1.075 2.093zm0 0h4.162l-2.028 2.783-2.134-2.783zm.078 5.606l1.325 2.557h-3.188l1.863-2.557zm4.221 0h-4.221l2.057-2.823 2.165 2.823zm-5.2 4.641H12.96l1.519-2.084.888 2.084zM11 3.261h1.656L11 1.102 9.344 3.261H11zm0 2.611h1.353L11 3.261 9.647 5.872H11zm0 2.093h1.024l-.618-1.263-.406-.83-1.024 2.089H11zm0 10.246l.276-.538.794-1.545H9.929L11 18.212zm0 2.69l1.96-2.689H9.04L11 20.901z'
          fill='#fff'
        />
      </g>
    </svg>
  );
}
export function Group19665(props: Props) {
  return (
    <svg
      data-name='Group 19665'
      xmlns='http://www.w3.org/2000/svg'
      width={234.858}
      height={60.336}
      viewBox='0 0 234.858 60.336'
      {...props}
    >
      <defs>
        <linearGradient
          id='a'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f0601f' />
          <stop offset={1} stopColor='#f49266' />
        </linearGradient>
        <linearGradient
          id='b'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f16c30' />
          <stop offset={1} stopColor='#f48e60' />
        </linearGradient>
        <linearGradient
          id='c'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f16e33' />
          <stop offset={1} stopColor='#f5956a' />
        </linearGradient>
        <linearGradient
          id='d'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f16d32' />
          <stop offset={1} stopColor='#f59468' />
        </linearGradient>
        <linearGradient
          id='e'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f06223' />
          <stop offset={1} stopColor='#f4966b' />
        </linearGradient>
        <linearGradient
          id='f'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f06121' />
          <stop offset={1} stopColor='#f59468' />
        </linearGradient>
        <linearGradient
          id='g'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f05d1b' />
          <stop offset={1} stopColor='#f49468' />
        </linearGradient>
        <linearGradient
          id='h'
          x1={-0.207}
          y1={0.5}
          x2={1.207}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f05e1d' />
          <stop offset={1} stopColor='#f59265' />
        </linearGradient>
        <linearGradient
          id='i'
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#ef5713' />
          <stop offset={1} stopColor='#f5986e' />
        </linearGradient>
        <linearGradient
          id='j'
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#ef5f1f' />
          <stop offset={1} stopColor='#f5976c' />
        </linearGradient>
        <linearGradient
          id='k'
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#fff' />
          <stop offset={1} stopColor='#f05f1f' />
        </linearGradient>
      </defs>
      <text
        transform='translate(119.858 43.795)'
        data-name='Group 19605'
        fill='#151515'
        stroke='#000'
        strokeWidth='3px'
        fontSize='40px'
        fontFamily='Jura-Light,Jura'
        fontWeight={300}
        letterSpacing='.088em'
      >
        <tspan x={0} y={0}>
          {'NOVA'}
        </tspan>
      </text>
      <g data-name='Group 19606'>
        <path
          data-name='Path 16889'
          d='M34.092 27.012l-.788.8v-1.575z'
          fill='#a75eff'
        />
        <g data-name='Group 19140'>
          <path
            data-name='Rectangle 5428'
            transform='rotate(-45.569 32.982 -2.029)'
            d='M0 0h10.848v10.848H0z'
            fill='url(#a)'
          />
          <path
            data-name='Rectangle 5429'
            transform='rotate(-45.57 30.385 -18.829)'
            d='M0 0h5.493v5.493H0z'
            fill='url(#b)'
          />
          <path
            data-name='Rectangle 5430'
            transform='rotate(-45.569 45.053 -16.923)'
            d='M0 0h6.033v6.033H0z'
            fill='url(#c)'
          />
          <path
            data-name='Rectangle 5431'
            transform='rotate(-45.57 21.426 -17.817)'
            d='M0 0h3.799v3.799H0z'
            fill='url(#d)'
          />
          <path
            data-name='Rectangle 5432'
            transform='rotate(-45.568 38.161 16.029)'
            d='M0 0h2.623v2.624H0z'
            fill='url(#e)'
          />
          <path
            data-name='Rectangle 5433'
            transform='rotate(-45.569 45.087 7.027)'
            d='M0 0h7.159v7.159H0z'
            fill='url(#f)'
          />
          <path
            data-name='Rectangle 5434'
            transform='rotate(-45.569 30.613 9.887)'
            d='M0 0h4.86v4.86H0z'
            fill='url(#g)'
          />
          <path
            data-name='Rectangle 5435'
            transform='rotate(-45.57 20.187 -.222)'
            d='M0 0h7.212v7.212H0z'
            fill='url(#h)'
          />
          <path
            data-name='Path 16891'
            d='M235.138 191.642a30.177 30.177 0 00-18.949 8.959l7.548 7.4-3.7 3.776 6.559 6.43-7.4 7.552-3.776-3.7-6.975 7.115a30.282 30.282 0 0027.328 22.8l-.467-47.03h12.1l9.34 11.862v-25.164z'
            transform='translate(-189.876 -191.642)'
            fill='url(#i)'
          />
        </g>
        <path
          data-name='Path 16892'
          d='M324.6 191.645h-1.64v47.032h-12.007l-9.34-11.861v25.164H324.6c5.84 0 10.574-6.178 10.574-13.8v-32.737c.004-7.62-4.73-13.798-10.574-13.798z'
          transform='translate(-244.086 -191.644)'
          fill='url(#j)'
        />
        <path
          data-name='Path 16894'
          d='M364.884 252.1H352.67v21.752h3.475c4.826 0 8.74-5.106 8.74-11.4z'
          transform='translate(-273.792 -226.818)'
          style={{
            mixBlendMode: 'multiply',
            isolation: 'isolate',
          }}
          fill='url(#k)'
        />
      </g>
    </svg>
  );
}
export function GreenMask(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={330}
      height={340}
      viewBox='0 0 330 340'
      {...props}
    >
      <defs>
        <filter
          id='Rectangle_6534'
          x={-48}
          y={-45}
          width={426}
          height={436}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur' />
          <feFlood floodOpacity={0.122} />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
        <filter
          id='Rectangle_6480'
          x={215.812}
          y={-85.737}
          width={185.008}
          height={183.966}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur-2' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur-2' />
          <feComposite in='SourceGraphic' />
        </filter>
        <filter
          id='Rectangle_6481'
          x={254.546}
          y={-23.786}
          width={141.704}
          height={140.219}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur-3' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur-3' />
          <feComposite in='SourceGraphic' />
        </filter>
        <linearGradient
          id='linear-gradient'
          x1={-0.095}
          y1={-0.161}
          x2={0.967}
          y2={0.957}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#fef201' />
          <stop offset={1} stopColor='#03acef' />
        </linearGradient>
        <clipPath id='clip-path' />
        <style>{'.cls-3{opacity:.5;fill:url(#linear-gradient)}'}</style>
      </defs>
      <g
        id='Mask_Group_14441'
        data-name='Mask Group 14441'
        transform='translate(-1085 -886.854)'
        clipPath='url(#clip-path)'
      >
        <g id='Group_25858' data-name='Group 25858'>
          <g
            filter='url(#Rectangle_6480)'
            transform='translate(1085.004 886.852)'
          >
            <rect
              id='Rectangle_6480-2'
              data-name='Rectangle 6480'
              className='cls-3'
              width={82.344}
              height={83.467}
              rx={41.172}
              transform='rotate(-94 156.801 -102.07)'
            />
          </g>
          <g
            filter='url(#Rectangle_6481)'
            transform='translate(1085.004 886.852)'
          >
            <rect
              id='Rectangle_6481-2'
              data-name='Rectangle 6481'
              className='cls-3'
              width={41.326}
              height={42.926}
              rx={20.663}
              transform='rotate(-94 183.222 -109.694)'
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
export function GreenCheck(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={20}
      height={20}
      viewBox='0 0 20 20'
      {...props}
    >
      <path data-name='Path 76789' d='M0 0h20v20H0z' fill='none' />
      <path
        data-name='Path 76790'
        d='M10 2.054A7.946 7.946 0 1017.946 10 7.949 7.949 0 0010 2.054zM7.846 13.408l-2.852-2.854a.792.792 0 111.12-1.12l2.3 2.288 5.463-5.468a.792.792 0 011.12 1.12l-6.03 6.034a.791.791 0 01-1.12 0z'
        fill='#8fff96'
      />
    </svg>
  );
}
export function GoLogoBlue(props: Props) {
  return (
    <svg
      id='go-logo-blue'
      xmlns='http://www.w3.org/2000/svg'
      width='auto'
      height='auto'
      viewBox='0 0 40 14.944'
      {...props}
    >
      <defs>
        <style>{'.gocls{fill:#00acd7;fill-rule:evenodd}'}</style>
      </defs>
      <path
        id='Path_76758'
        data-name='Path 76758'
        className='gocls'
        d='M15.883 21.166c-.083 0-.1-.041-.062-.1l.435-.559a.3.3 0 01.228-.1h7.386c.083 0 .1.062.062.124l-.352.538a.315.315 0 01-.207.124z'
        transform='translate(-12.675 -16.608)'
      />
      <path
        id='Path_76759'
        data-name='Path 76759'
        className='gocls'
        d='M.783 30.366c-.083 0-.1-.041-.062-.1l.435-.559a.3.3 0 01.228-.1h9.436a.1.1 0 01.1.124l-.166.5a.181.181 0 01-.186.124z'
        transform='translate(-.7 -24.022)'
      />
      <path
        id='Path_76760'
        data-name='Path 76760'
        className='gocls'
        d='M24.983 39.566c-.083 0-.1-.062-.062-.124l.29-.517a.274.274 0 01.207-.124h4.139c.083 0 .124.062.124.145l-.041.5a.155.155 0 01-.145.145z'
        transform='translate(-19.892 -31.436)'
      />
      <g id='Group_25196' data-name='Group 25196' transform='translate(11.281)'>
        <path
          id='Path_76761'
          data-name='Path 76761'
          className='gocls'
          d='M15.5 5.039c-1.3.312-2.193.545-3.476.857-.31.078-.331.1-.6-.195a2.745 2.745 0 00-.973-.74 3.787 3.787 0 00-3.745.292 4.085 4.085 0 00-2.106 3.7 3.118 3.118 0 002.792 3.057 3.945 3.945 0 003.518-1.285c.186-.214.352-.448.559-.72H7.475c-.435 0-.538-.253-.393-.584.269-.6.766-1.616 1.055-2.122a.559.559 0 01.517-.312h7.532c-.041.526-.041 1.051-.124 1.577a8.052 8.052 0 01-1.7 3.817 8.728 8.728 0 01-5.9 3.31A7.682 7.682 0 012.9 14.405a6.048 6.048 0 01-2.626-4.322 7.331 7.331 0 011.759-5.706 9.28 9.28 0 015.794-3.368 7.5 7.5 0 015.484.954 6.2 6.2 0 012.4 2.746c.124.175.041.273-.207.331z'
          transform='translate(-.215 -.866)'
        />
        <path
          id='Path_76762'
          data-name='Path 76762'
          d='M78.884 16.544a8.067 8.067 0 01-5.049-1.713 6.022 6.022 0 01-2.235-3.755A7.113 7.113 0 0173.277 5.2a8.786 8.786 0 015.794-3.25 8.082 8.082 0 015.9.992 6.032 6.032 0 012.918 4.34 7.25 7.25 0 01-2.38 6.6 9.682 9.682 0 01-4.966 2.491c-.562.093-1.121.113-1.659.171zm4.925-7.862a5.274 5.274 0 00-.062-.642 3.409 3.409 0 00-4.221-2.588A4.4 4.4 0 0075.9 8.838a3.155 3.155 0 001.9 3.678 4.008 4.008 0 003.373-.117 4.26 4.26 0 002.628-3.717z'
          transform='translate(-59.247 -1.6)'
          fill='#00acd7'
        />
      </g>
    </svg>
  );
}
export function Github(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={23.4}
      viewBox='0 0 24 23.4'
      {...props}
    >
      <path
        data-name='Icon awesome-github'
        d='M8.027 18.837c0 .1-.111.174-.252.174-.16.015-.271-.063-.271-.174s.111-.174.252-.174.271.067.271.174zm-1.5-.218c-.034.1.063.208.208.237a.227.227 0 00.3-.1c.029-.1-.063-.208-.208-.252a.248.248 0 00-.304.12zm2.134-.082c-.14.034-.237.126-.223.237s.14.16.285.126.237-.126.223-.223-.146-.15-.285-.14zM11.845 0A11.6 11.6 0 000 11.806 12.131 12.131 0 008.2 23.38c.619.111.837-.271.837-.585s-.015-1.955-.015-2.971c0 0-3.387.726-4.1-1.442 0 0-.552-1.408-1.345-1.771 0 0-1.108-.76.077-.745a2.554 2.554 0 011.868 1.248 2.558 2.558 0 003.527 1.011 2.689 2.689 0 01.774-1.631c-2.7-.3-5.434-.692-5.434-5.347a3.667 3.667 0 011.142-2.85 4.572 4.572 0 01.126-3.285C6.673 4.698 9 6.319 9 6.319a11.431 11.431 0 016.077 0s2.323-1.626 3.339-1.307a4.57 4.57 0 01.126 3.285 3.761 3.761 0 011.248 2.85c0 4.669-2.85 5.042-5.555 5.347a2.862 2.862 0 01.823 2.245c0 1.631-.015 3.648-.015 4.045 0 .315.223.7.837.585A12.019 12.019 0 0024 11.806 11.864 11.864 0 0011.845 0zM4.7 16.688c-.063.048-.048.16.034.252s.189.111.252.048.048-.16-.034-.252-.186-.111-.252-.048zm-.523-.392c-.034.063.015.14.111.189a.144.144 0 00.208-.034c.034-.063-.015-.14-.111-.189-.093-.025-.17-.014-.204.034zm1.568 1.723c-.077.063-.048.208.063.3.111.111.252.126.315.048s.034-.208-.063-.3c-.104-.111-.249-.13-.312-.048zm-.545-.711c-.077.048-.077.174 0 .285s.208.16.271.111a.221.221 0 000-.3c-.071-.111-.197-.159-.271-.096z'
        fill='#666'
      />
    </svg>
  );
}
export function ForumBlack(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <path data-name='Path 51970' d='M0 0h24v24H0z' fill='none' />
      <path
        data-name='Path 51971'
        d='M19.567 6.92h-.9v7.118a.9.9 0 01-.9.89l-9.793-.064v.89a1.79 1.79 0 001.79 1.78h7.645L21 21.093V8.636c0-.979-.448-1.716-1.433-1.716zm-3.139 3.995V4.687a1.79 1.79 0 00-1.79-1.78H4.79A1.79 1.79 0 003 4.687v11.567l3.581-3.559h8.057a1.79 1.79 0 001.791-1.78z'
        stroke='#ff6000'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
      />
    </svg>
  );
}
export function FaceBook(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={23.855}
      viewBox='0 0 24 23.855'
      {...props}
    >
      <path
        data-name='Icon awesome-facebook'
        d='M24 12a12 12 0 10-13.875 11.854v-8.386H7.076V12h3.048V9.356c0-3.007 1.79-4.668 4.532-4.668a18.468 18.468 0 012.686.234v2.951H15.83a1.734 1.734 0 00-1.955 1.874v2.252h3.328l-.532 3.469h-2.8v8.386A12 12 0 0024 12z'
        fill='#666'
      />
    </svg>
  );
}
export function ExpandMoreBlack(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        data-name='Path 76733'
        d='M24 24H0V0h24z'
        fill='none'
        opacity={0.87}
      />
      <path
        data-name='Path 76734'
        d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'
        fill='#06c'
      />
    </svg>
  );
}
export function ExpandMore(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={30}
      height={30}
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        data-name='Path 76733'
        d='M24 24H0V0h24z'
        fill='none'
        opacity={0.87}
      />
      <path
        data-name='Path 76734'
        d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'
        fill='#848484'
        transform='rotate(180 11 12)'
      />
    </svg>
  );
}
export function Back(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='auto'
      height='auto'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        data-name='Path 76733'
        d='M24 24H0V0h24z'
        fill='none'
        opacity={0.87}
      />
      <path
        data-name='Path 76734'
        d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'
        fill='#06c'
        transform='rotate(90 10 9)'
      />
    </svg>
  );
}
export function CopyLink(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      data-name='Group 26582'
      width='31'
      height='31'
      viewBox='0 0 31 31'
    >
      <g data-name='Group 26576'>
        <rect data-name='Rectangle 6254' width='31' height='31' rx='15.5' />
      </g>
      <g data-name='Group 26577'>
        <path
          data-name='Rectangle 6672'
          fill='none'
          d='M0 0h19v19H0z'
          transform='translate(6 6)'
        />
      </g>
      <g data-name='Group 26578'>
        <path
          data-name='Path 77041'
          d='M12.2 15.943H4.533V5.873a.773.773 0 0 0-.766-.773.773.773 0 0 0-.767.773v10.07a1.546 1.546 0 0 0 1.533 1.549H12.2a.773.773 0 0 0 .767-.775.773.773 0 0 0-.767-.774zm3.833-3.1v-9.3A1.546 1.546 0 0 0 14.5 2H7.6a1.546 1.546 0 0 0-1.534 1.549v9.3A1.546 1.546 0 0 0 7.6 14.394h6.9a1.546 1.546 0 0 0 1.531-1.55zm-1.533 0H7.6v-9.3h6.9z'
          transform='translate(5.887 6.067)'
          fill='#06c'
        />
      </g>
    </svg>
  );
}
export function CopyLinkWhite(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
    >
      <g data-name='Group 26577'>
        <path data-name='Rectangle 6672' fill='none' d='M0 0h16v16H0z' />
      </g>
      <g data-name='Group 26578'>
        <path
          data-name='Path 77041'
          d='M10.8 13.723H4.3V5.256a.652.652 0 0 0-.65-.651.652.652 0 0 0-.65.651v8.467a1.3 1.3 0 0 0 1.3 1.3h6.5a.652.652 0 0 0 .65-.651.652.652 0 0 0-.65-.649zm3.249-2.605V3.3a1.3 1.3 0 0 0-1.3-1.3H6.9a1.3 1.3 0 0 0-1.3 1.3v7.816a1.3 1.3 0 0 0 1.3 1.3h5.849a1.3 1.3 0 0 0 1.299-1.298zm-1.3 0H6.9V3.3h5.849z'
          transform='translate(-.664 -.199)'
          fill='#06c'
        />
      </g>
    </svg>
  );
}
export function EventWhite(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <path data-name='Path 19353' d='M0 0h24v24H0z' fill='none' />
      <path
        data-name='Path 19354'
        d='M17.999 12.581h-6.5v5.5h6.5zm-2-9.581v1.8h-8V3h-2v1.8h-1a1.9 1.9 0 00-1.99 1.8l-.01 12.6a1.907 1.907 0 002 1.8h14a1.914 1.914 0 002-1.8V6.6a1.914 1.914 0 00-2-1.8h-1V3z'
        stroke='#ff6000'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
      />
    </svg>
  );
}
export function EastBlack(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={14}
      height={14}
      viewBox='0 0 14 14'
      {...props}
    >
      <path data-name='Rectangle 5765' d='M0 0h14v14H0z' fill='none' />
      <path
        data-name='Path 51958'
        d='M9.133 3.361a.574.574 0 000 .812l2.235 2.235H2.63a.578.578 0 00-.576.576.578.578 0 00.576.576h8.744L9.139 9.795a.574.574 0 000 .812.574.574 0 00.812 0l3.22-3.22a.574.574 0 000-.812L9.945 3.361a.574.574 0 00-.812 0z'
        fill='#0071e3'
        stroke='#0071e3'
        strokeWidth='.6px'
      />
    </svg>
  );
}
export function DoneBlack(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={18.184}
      height={18.184}
      viewBox='0 0 18.184 18.184'
      {...props}
    >
      <path data-name='Path 19381' d='M0 0h18.184v18.184H0z' fill='none' />
      <path
        data-name='Path 19382'
        d='M6.819 12.274L3.637 9.092l-1.061 1.061 4.243 4.243 9.092-9.092-1.061-1.061z'
        fill='#0baf7e'
        stroke='#0baf7e'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2px'
      />
    </svg>
  );
}
export function Discord(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={27.428}
      viewBox='0 0 24 27.428'
      {...props}
    >
      <path
        data-name='Icon awesome-discord'
        d='M15.922 13.029a1.4 1.4 0 11-1.4-1.522 1.461 1.461 0 011.4 1.522zm-6.4-1.522a1.528 1.528 0 000 3.045 1.461 1.461 0 001.4-1.522 1.452 1.452 0 00-1.404-1.524zM24 2.825v24.6c-3.455-3.053-2.35-2.043-6.363-5.774l.727 2.537H2.811A2.818 2.818 0 010 21.367V2.825A2.818 2.818 0 012.811 0h18.378A2.818 2.818 0 0124 2.825zm-3.909 13a18.366 18.366 0 00-1.975-8 6.782 6.782 0 00-3.854-1.44l-.192.219a9.127 9.127 0 013.415 1.742 11.653 11.653 0 00-10.245-.4c-.507.233-.809.4-.809.4a9.252 9.252 0 013.607-1.8L9.9 6.391a6.782 6.782 0 00-3.854 1.44 18.366 18.366 0 00-1.975 8 4.972 4.972 0 004.183 2.085s.507-.617.919-1.138a4.265 4.265 0 01-2.4-1.618c.2.141.534.324.562.343a10 10 0 008.558.48 7.848 7.848 0 001.577-.809 4.328 4.328 0 01-2.48 1.626c.411.521.905 1.111.905 1.111a5.013 5.013 0 004.196-2.085z'
        fill='#666'
      />
    </svg>
  );
}
export function DescriptionBlack(props: Props) {
  return (
    <svg
      data-name='description_black_24dp (1)'
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <path data-name='Path 51968' d='M0 0h24v24H0z' fill='none' />
      <path
        data-name='Path 51969'
        d='M14.428 3.531A1.921 1.921 0 0013.1 3H6.375A1.844 1.844 0 004.5 4.8v14.4A1.836 1.836 0 006.366 21h11.259a1.844 1.844 0 001.875-1.8V9.147a1.735 1.735 0 00-.553-1.269zm.385 13.869H9.187a.9.9 0 110-1.8h5.625a.9.9 0 110 1.8zm0-3.6H9.187a.9.9 0 110-1.8h5.625a.9.9 0 110 1.8zm-1.875-5.4V4.35l5.156 4.95h-4.219a.922.922 0 01-.937-.9z'
        stroke='#ff6000'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
      />
    </svg>
  );
}
export function CodeBlack(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <path data-name='Path 51978' d='M0 0h24v24H0z' fill='none' />
      <path
        data-name='Path 51979'
        d='M8.9 15.9L5.237 12 8.9 8.1a1.029 1.029 0 000-1.4.885.885 0 00-1.318 0l-4.308 4.59a1.042 1.042 0 000 1.41l4.308 4.6a.885.885 0 001.315 0 1.029 1.029 0 000-1.4zm6.2 0l3.662-3.9-3.663-3.9a1.029 1.029 0 010-1.4.885.885 0 011.315 0l4.311 4.59a1.042 1.042 0 010 1.41l-4.311 4.6a.885.885 0 01-1.315 0 1.029 1.029 0 010-1.4z'
        stroke='#ff6000'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
      />
    </svg>
  );
}
export function Close(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={20}
      height={20}
      viewBox='0 0 20 20'
      {...props}
    >
      <path
        data-name='Path 12202'
        d='M10 0a10 10 0 1010 10A9.991 9.991 0 0010 0zm5 13.59L13.59 15 10 11.41 6.41 15 5 13.59 8.59 10 5 6.41 6.41 5 10 8.59 13.59 5 15 6.41 11.41 10z'
      />
    </svg>
  );
}
export function CloseBlack(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <path data-name='Path 77037' d='M0 0h24v24H0z' fill='none' />
      <path
        data-name='Path 77038'
        d='M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 005.7 7.11L10.59 12 5.7 16.89a1 1 0 001.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z'
        fill='#6d6a8d'
      />
    </svg>
  );
}
export function CheckCircleBlack(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={35}
      height={35}
      viewBox='0 0 35 35'
      {...props}
    >
      <path data-name='Path 76735' d='M0 0h35v35H0z' fill='none' />
      <path
        data-name='Path 76736'
        d='M17.5 2.917A14.583 14.583 0 1032.084 17.5 14.589 14.589 0 0017.5 2.917zm0 26.25A11.667 11.667 0 1129.167 17.5 11.682 11.682 0 0117.5 29.167zm6.694-18.113l-9.61 9.61-3.777-3.762-2.057 2.057 5.833 5.833L26.25 13.125z'
        fill='#ff7623'
      />
    </svg>
  );
}
export function Cart(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={36}
      height={35.995}
      viewBox='0 0 36 35.995'
      {...props}
    >
      <path
        data-name='Path 76942'
        d='M10.8 28.8a3.6 3.6 0 103.6 3.6 3.594 3.594 0 00-3.6-3.6zM0 1.8a1.8 1.8 0 001.8 1.8h1.8l6.478 13.66-2.431 4.391A3.606 3.606 0 0010.8 27h19.789a1.8 1.8 0 000-3.6H10.8l1.979-3.6H26.18a3.581 3.581 0 003.149-1.854l6.442-11.68A1.793 1.793 0 0034.205 3.6H7.575L6.37 1.026A1.786 1.786 0 004.75 0H1.8A1.8 1.8 0 000 1.8zm28.789 27a3.6 3.6 0 103.6 3.6 3.594 3.594 0 00-3.6-3.6z'
        fill='#1a5fdb'
      />
    </svg>
  );
}
export function CampaingBlack(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='13'
      height='13'
      viewBox='0 0 13 13'
      {...props}
    >
      <defs>
        <style>{'.cls-3{fill:#26205d}'}</style>
      </defs>
      <g
        id='campaign_black_24dp_1_'
        data-name='campaign_black_24dp (1)'
        transform='translate(.466 .066)'
        style={{ opacity: 0.3 }}
      >
        <g id='Group_21717' data-name='Group 21717'>
          <path
            id='Rectangle_5798'
            data-name='Rectangle 5798'
            transform='translate(-.467 -.067)'
            style={{ fill: 'none' }}
            d='M0 0h13v13H0z'
          />
        </g>
        <g
          id='Group_21718'
          data-name='Group 21718'
          transform='translate(1.154 1.378)'
        >
          <path
            id='Path_51989'
            data-name='Path 51989'
            className='cls-3'
            d='M6.949 8.5H3.65A1.654 1.654 0 0 0 2 10.147V11.8a1.654 1.654 0 0 0 1.65 1.65h.825v2.47a.827.827 0 0 0 .825.825.827.827 0 0 0 .825-.825v-2.474h.825l3.457 2.147s.638.412.667-.264V6.417s.04-.515-.454-.165S6.949 8.5 6.949 8.5z'
            transform='translate(-2 -6.13)'
            style={{ fill: '#26205d' }}
          />
          <path
            id='Path_51990'
            data-name='Path 51990'
            className='cls-3'
            d='M15.236 11.452a4.672 4.672 0 0 0-1.1-2.523c-.185-.2-.134.2-.134.2v4.852s.01.286.134.173a5.656 5.656 0 0 0 1.1-2.702z'
            transform='translate(-4.101 -6.611)'
            style={{ fill: '#26205d' }}
          />
        </g>
      </g>
    </svg>
  );
}
export function CalculateWhite(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <defs>
        <style>
          {
            '.cls-4{fill:none;stroke:#ff6000;stroke-linecap:round;stroke-linejoin:round;stroke-width:.6px}'
          }
        </style>
      </defs>
      <g id='calculate_white_24dp' transform='translate(0 .004)'>
        <g
          id='Group_19696'
          data-name='Group 19696'
          transform='translate(0 -.004)'
        >
          <path
            id='Rectangle_5600'
            data-name='Rectangle 5600'
            d='M0 0h24v24H0z'
            fill='none'
          />
        </g>
        <g
          id='Group_19697'
          data-name='Group 19697'
          transform='translate(3.1 3.101)'
          style={{
            isolation: 'isolate',
          }}
        >
          <path
            id='Path_19363'
            data-name='Path 19363'
            d='M19.145 3H5.018A2.024 2.024 0 003 5.018v14.127a2.024 2.024 0 002.018 2.018h14.127a2.024 2.024 0 002.018-2.018V5.018A2.024 2.024 0 0019.145 3z'
            transform='translate(-3 -3)'
            stroke='#ff6000'
            strokeLinecap='round'
            strokeLinejoin='round'
            fill='none'
          />
          <path
            id='Icon_awesome-arrow-right'
            data-name='Icon awesome-arrow-right'
            className='cls-4'
            d='M3.089 3.122l.36-.36a.388.388 0 01.55 0l3.152 3.15a.388.388 0 010 .55L4 9.614a.388.388 0 01-.55 0l-.36-.36A.39.39 0 013.1 8.7l1.95-1.863H.389A.388.388 0 010 6.447v-.518a.388.388 0 01.389-.389H5.05L3.1 3.678a.387.387 0 01-.011-.556z'
            transform='translate(2.947 -.107)'
          />
          <path
            id='Icon_awesome-arrow-right-2'
            data-name='Icon awesome-arrow-right'
            className='cls-4'
            d='M3.089 3.122l.36-.36a.388.388 0 01.55 0l3.152 3.15a.388.388 0 010 .55L4 9.614a.388.388 0 01-.55 0l-.36-.36A.39.39 0 013.1 8.7l1.95-1.863H.389A.388.388 0 010 6.447v-.518a.388.388 0 01.389-.389H5.05L3.1 3.678a.387.387 0 01-.011-.556z'
            transform='rotate(180 7.606 9.134)'
          />
        </g>
      </g>
    </svg>
  );
}
export function CableWhite(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <g data-name='Group 19681'>
        <path data-name='Path 19342' d='M0 0h24v24H0z' fill='none' />
      </g>
      <g data-name='Group 19683'>
        <g data-name='Group 19682'>
          <path
            data-name='Path 19343'
            d='M20.001 5V4a1 1 0 00-1-1h-2a1 1 0 00-1 1v1h-1v4a1 1 0 001 1h1v7a2 2 0 11-4 0V7a4 4 0 10-8 0v7h-1a1 1 0 00-1 1v4h1v1a1 1 0 001 1h2a1 1 0 001-1v-1h1v-4a1 1 0 00-1-1h-1V7a2 2 0 114 0v10a4 4 0 108 0v-7h1a1 1 0 001-1V5z'
            stroke='#ff6000'
            strokeLinecap='round'
            strokeLinejoin='round'
            fill='none'
          />
        </g>
      </g>
    </svg>
  );
}
export function BuildBlack(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='13.197'
      height='13.197'
      viewBox='0 0 13.197 13.197'
      {...props}
    >
      <g style={{ opacity: 0.3 }}>
        <path
          data-name='Path 51974'
          d='M0 0h13.2v13.2H0z'
          style={{ fill: 'none' }}
        />
        <path
          data-name='Path 51975'
          d='M6.171 1.895A3.038 3.038 0 0 0 2.7 1.319l1.694 1.687a.462.462 0 0 1 0 .655l-.741.739A.457.457 0 0 1 3 4.4L1.3 2.713a3.022 3.022 0 0 0 3.8 4.14l3.711 3.7a1.221 1.221 0 0 0 1.73-1.724L6.846 5.143a3.017 3.017 0 0 0-.675-3.248z'
          transform='translate(.648 .636)'
          style={{ fill: '#26205d' }}
        />
      </g>
    </svg>
  );
}
export function BriefCase(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={35.773}
      height={33.085}
      viewBox='0 0 35.773 33.085'
      {...props}
    >
      <path
        data-name='Path 51962'
        d='M19.675 23.895H16.1a1.819 1.819 0 01-1.789-1.838H1.807v7.352a3.638 3.638 0 003.577 3.676h25.023a3.638 3.638 0 003.577-3.676v-7.352h-12.52a1.819 1.819 0 01-1.789 1.838zM32.2 7.352h-7.159a7.157 7.157 0 10-14.309 0H3.577A3.638 3.638 0 000 11.028v5.514a3.615 3.615 0 003.577 3.676h10.732v-1.837a1.819 1.819 0 011.791-1.838h3.577a1.819 1.819 0 011.789 1.838v1.838H32.2a3.638 3.638 0 003.577-3.676v-5.515A3.638 3.638 0 0032.2 7.352zm-17.887 0a3.579 3.579 0 117.155 0h-7.159z'
        fill='#9000e2'
      />
    </svg>
  );
}
export function Blackbag(props: Props) {
  return (
    <svg
      data-name='Group 26405'
      xmlns='http://www.w3.org/2000/svg'
      width={28}
      height={28}
      viewBox='0 0 28 28'
      {...props}
    >
      <g data-name='Group 21622'>
        <g data-name='Group 21623' stroke='#707070' strokeWidth='2px'>
          <path
            data-name='Path 51949'
            d='M6.92 17.203l1.072-7.7a1.791 1.791 0 011.813-1.409c1.51.05 8.484 0 8.484 0s1.813-.151 2.164 1.409 1.459 12.18 1.459 12.18.605 2.517-1.961 2.567-11.607 0-11.607 0a1.789 1.789 0 01-1.912-1.963c.15-2.014.488-5.084.488-5.084z'
            fill='#707070'
          />
          <path
            data-name='Path 51950'
            d='M10.996 9.803V5.142a3.188 3.188 0 013.346-2.767 2.858 2.858 0 013.057 2.767v4.661'
            strokeLinecap='round'
            strokeLinejoin='round'
            fill='none'
          />
        </g>
      </g>
      <path data-name='Path 51953' d='M0 0h28v28H0z' fill='none' />
    </svg>
  );
}
export function Api(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={35}
      height={35}
      viewBox='0 0 35 35'
      {...props}
    >
      <g data-name='Group 26508'>
        <path data-name='Rectangle 6646' d='M0 0h35v35H0z' fill='none' />
        <g data-name='Group 25093' transform='translate(-275 -854.5)'>
          <g data-name='Path 76738' strokeDasharray='24 24' fill='none'>
            <path d='M292.5 857a14.5 14.5 0 11-14.5 14.5 14.5 14.5 0 0114.5-14.5z' />
            <path
              d='M292.5 857c3.611 0 6.914 1.32 9.452 3.504A14.466 14.466 0 01307 871.5v.033a2.315 2.315 0 010 .012v.002a10.296 10.296 0 010 .013v.013a9.793 9.793 0 010 .018v.075l-.001.009v.003a8.442 8.442 0 010 .011v.048a8.705 8.705 0 01-.001.018v.04l-.001.007v.036l-.001.004v.034l-.001.009v.033l-.001.004v.025l-.001.006a4.096 4.096 0 010 .016v.011l-.001.01v.02l-.001.005v.006a4.585 4.585 0 010 .02l-.001.005v.021l-.001.006v.005a11.96 11.96 0 01-.001.015v.021l-.001.006v.013l-.001.015v.014l-.001.007v.003a4.649 4.649 0 01-.002.035v.002a10.572 10.572 0 010 .01v.008a.63.63 0 01-.003.037v.012l-.003.046a13.07 13.07 0 01-.028.398l-2.99-.25c.027-.32.041-.646.041-.97 0-3.072-1.196-5.96-3.368-8.132A11.425 11.425 0 00292.5 860v-3zm-14.043 10.876l2.905.747A11.55 11.55 0 00281 871.5a11.5 11.5 0 009.569 11.339l-.5 2.958a14.428 14.428 0 01-6.383-2.783l-.06-.046a14.388 14.388 0 01-.069-.053v-.001a7.867 7.867 0 01-.009-.006v-.001a11.28 11.28 0 01-.017-.013 23.568 23.568 0 01-.05-.04l-.002-.001-.007-.006-.002-.001-.007-.006h-.001l-.007-.007h-.001a11.922 11.922 0 01-.05-.04l-.002-.002-.006-.005-.002-.002-.007-.005a1.433 1.433 0 01-.008-.006l-.002-.002a14.745 14.745 0 01-.04-.033c-.002 0-.002-.001-.003-.002l-.006-.005-.002-.002-.006-.004-.002-.002a12.257 12.257 0 01-.006-.005l-.003-.002-.006-.005-.002-.002-.006-.005-.002-.001a12.063 12.063 0 01-.018-.015l-.006-.006-.002-.001-.006-.005-.003-.002-.005-.005-.003-.002a6.2 6.2 0 01-.005-.005l-.003-.002a6.78 6.78 0 01-.014-.011l-.002-.002a9.237 9.237 0 01-.007-.006h-.001a8.941 8.941 0 01-.008-.008h-.001a7.103 7.103 0 01-.007-.006l-.002-.002-.006-.005-.003-.002a5.491 5.491 0 01-.005-.005l-.003-.002-.005-.004a4.69 4.69 0 01-.016-.014l-.003-.002-.005-.005-.003-.002-.006-.005-.002-.002-.008-.006-.002-.003-.006-.004-.003-.003-.005-.004-.003-.003-.005-.003a3.09 3.09 0 01-.003-.004c-.002 0-.003-.002-.004-.003l-.004-.004-.004-.004a7.092 7.092 0 01-.004-.003l-.004-.004c-.002 0-.003-.002-.004-.003l-.004-.003-.004-.004a4.84 4.84 0 00-.003-.002l-.008-.007a7.748 7.748 0 01-.004-.004l-.004-.003-.004-.003-.004-.004a5.43 5.43 0 01-.004-.003l-.004-.004-.003-.003-.005-.003-.003-.004c-.002 0-.003-.002-.005-.003l-.003-.003-.004-.004-.003-.003c-.002 0-.004-.003-.005-.004l-.003-.002a17.587 17.587 0 01-.018-.016l-.002-.001a11.242 11.242 0 01-.005-.005l-.003-.002-.004-.004-.003-.003a4.995 4.995 0 01-.005-.004l-.003-.003-.005-.004-.003-.002a12.228 12.228 0 01-.005-.005l-.002-.002-.005-.004a1.424 1.424 0 00-.03-.026 15.624 15.624 0 01-.006-.006l-.002-.001-.005-.005-.002-.002-.006-.005-.002-.002-.005-.005-.002-.001a7.368 7.368 0 01-.006-.005l-.002-.002a19.937 19.937 0 01-.043-.038l-.006-.005-.001-.002-.006-.005-.001-.001a18.345 18.345 0 01-.007-.006l-.007-.007a10.852 10.852 0 01-.05-.045h-.001a14.492 14.492 0 01-3.775-5.486v-.001l-.003-.01-.032-.083a16.772 16.772 0 01-.004-.009l-.003-.01a8.212 8.212 0 01-.028-.073v-.001a7.932 7.932 0 01-.004-.009l-.003-.01-.028-.074a11.731 11.731 0 01-.007-.018v-.001a14.24 14.24 0 01-.02-.056l-.003-.009-.003-.009v-.001l-.004-.009a14.876 14.876 0 01-.023-.065v-.001a10.333 10.333 0 01-.007-.018v-.001a6.13 6.13 0 01-.003-.009l-.003-.01-.016-.046-.004-.009v-.001l-.003-.008v-.002l-.003-.008v-.001l-.003-.009a14.636 14.636 0 01-.02-.056l-.002-.01h-.001l-.003-.009v-.002l-.003-.007v-.002l-.003-.008v-.001l-.016-.046v-.001l-.003-.008v-.002l-.003-.008v-.002l-.003-.007v-.002l-.004-.008a.815.815 0 01-.003-.01l-.016-.047a10.555 10.555 0 01-.003-.01c0-.003-.002-.006-.003-.008v-.003l-.003-.007v-.002l-.003-.008v-.002a41.5 41.5 0 00-.018-.057l-.002-.006v-.002l-.003-.008v-.002l-.003-.008a.213.213 0 01-.003-.01l-.015-.047a6.15 6.15 0 01-.005-.018v-.003c-.002-.002-.002-.005-.003-.007v-.003c-.002-.002-.002-.005-.003-.007v-.002l-.003-.008v-.001a14.96 14.96 0 01-.012-.037l-.002-.009v-.002c-.002-.002-.002-.005-.003-.008v-.002c-.002-.002-.002-.005-.003-.007v-.003l-.004-.008a1.183 1.183 0 01-.003-.01v-.002l-.003-.008v-.001a14.43 14.43 0 01-.01-.036l-.001-.002-.003-.008v-.002l-.002-.007-.001-.003-.002-.007-.001-.003-.002-.007-.001-.003-.002-.007v-.003c-.002-.002-.002-.005-.003-.007v-.001a14.421 14.421 0 01-.01-.036l-.001-.002-.002-.008-.001-.002-.002-.008-.001-.003-.002-.007v-.003l-.003-.007v-.003l-.003-.007v-.002a15.193 15.193 0 01-.01-.035v-.002l-.003-.007v-.003a16.633 16.633 0 01-.003-.01l-.002-.007-.001-.003-.002-.007v-.003a7.46 7.46 0 01-.003-.01l-.003-.008v-.001a13.261 13.261 0 01-.01-.036v-.002l-.002-.007a1.377 1.377 0 00-.003-.01v-.003a17.286 17.286 0 01-.005-.017l-.001-.003-.002-.007v-.003l-.003-.008v-.001l-.007-.027-.003-.009v-.002l-.002-.007v-.003l-.003-.007v-.003l-.002-.007-.001-.003-.002-.008a1.666 1.666 0 01-.003-.01v-.002a14.098 14.098 0 01-.01-.036v-.001a10.666 10.666 0 01-.002-.01l-.002-.008-.001-.003-.002-.007v-.003l-.002-.007-.001-.004-.002-.006v-.003l-.003-.007v-.003a14.655 14.655 0 01-.01-.037l-.001-.007-.001-.003-.001-.007v-.004a8.66 8.66 0 01-.005-.017v-.003l-.002-.007-.001-.003a7.266 7.266 0 01-.009-.036l-.002-.008v-.003l-.002-.007-.001-.003-.002-.007v-.004l-.002-.006a3.748 3.748 0 01-.003-.01v-.004l-.002-.007v-.003a13.028 13.028 0 01-.007-.026l-.002-.007v-.004l-.002-.006-.001-.004-.001-.007-.001-.004-.002-.006v-.004l-.002-.006-.001-.005-.002-.006v-.004l-.002-.006v-.004l-.002-.006-.001-.003-.003-.015-.001-.002-.002-.007v-.003l-.002-.007v-.004l-.002-.006-.001-.004-.001-.006-.001-.005-.002-.006v-.004l-.002-.006-.001-.004-.001-.007-.001-.002a15.16 15.16 0 01-.006-.025v-.003a8.5 8.5 0 01-.002-.007v-.003l-.002-.006v-.005l-.002-.006-.001-.004a5.616 5.616 0 01-.002-.01l-.002-.007v-.003l-.002-.007v-.004l-.002-.006v-.003a13.63 13.63 0 01-.006-.024v-.004l-.002-.006v-.004l-.002-.006-.001-.005-.001-.006-.001-.004-.002-.006v-.004l-.002-.007v-.004l-.002-.006v-.004a7.68 7.68 0 01-.006-.024v-.003a32.488 32.488 0 01-.008-.037v-.004l-.002-.006a4.197 4.197 0 01-.002-.01l-.001-.005-.001-.006-.001-.004a13.27 13.27 0 01-.005-.023v-.004l-.002-.006v-.004l-.002-.007v-.004l-.002-.006v-.004l-.002-.006v-.005a29.876 29.876 0 00-.003-.01l-.001-.006-.001-.005-.001-.006-.001-.005-.002-.011-.001-.004-.001-.006-.001-.005-.001-.006-.001-.004-.001-.006-.001-.005-.001-.006-.001-.004-.001-.006-.001-.005-.001-.005-.001-.005-.001-.006-.001-.005-.001-.006a4.308 4.308 0 00-.003-.015l-.001-.005-.001-.005-.001-.006-.001-.005-.001-.005-.001-.005-.001-.006v-.005l-.002-.006v-.005l-.002-.005v-.005l-.002-.006v-.004l-.002-.005v-.006l-.002-.005c0-.004 0-.007-.002-.01v-.005l-.001-.006-.001-.005-.001-.005-.001-.005-.001-.006-.001-.005v-.005l-.002-.005v-.006l-.002-.005v-.006l-.002-.005V874l-.001-.005a9.773 9.773 0 01-.004-.021v-.006l-.002-.005v-.005l-.002-.006v-.005l-.001-.005-.001-.005-.001-.006-.001-.005-.002-.006v-.004l-.002-.006v-.005l-.002-.006v-.004a12.91 12.91 0 01-.003-.016l-.001-.006v-.005l-.002-.006a12.755 12.755 0 01-.003-.02l-.001-.006v-.005l-.002-.006v-.005l-.001-.006-.001-.005a6.816 6.816 0 01-.004-.02v-.006l-.001-.005-.001-.006-.001-.005v-.005l-.002-.006v-.005l-.001-.005-.001-.006v-.005l-.001-.005a3.88 3.88 0 01-.002-.016l-.001-.006v-.004l-.003-.012v-.005l-.001-.005v-.005l-.003-.007v-.01l-.001-.005v-.005l-.002-.005v-.006l-.001-.005-.001-.006v-.005l-.002-.005v-.006l-.001-.005-.002-.007v-.01l-.001-.006v-.005l-.002-.006v-.005l-.001-.005-.001-.006v-.005l-.002-.005v-.006l-.001-.005v-.005l-.002-.006v-.005l-.001-.006v-.005a3.917 3.917 0 01-.003-.016v-.003l-.001-.007-.001-.005v-.006l-.002-.005v-.006l-.001-.005v-.006l-.002-.005a5.544 5.544 0 01-.002-.016v-.005l-.001-.006v-.005l-.002-.007v-.004l-.002-.01v-.005l-.001-.006v-.005l-.001-.006-.001-.005v-.006l-.001-.005-.001-.005v-.006l-.002-.005v-.005a3.062 3.062 0 01-.002-.011v-.011l-.002-.007v-.008a7.483 7.483 0 01-.002-.011v-.006l-.001-.005-.001-.006v-.005l-.001-.005-.001-.006v-.005l-.001-.006-.001-.005v-.005l-.001-.006-.002-.005v-.01l-.001-.01-.001-.005v-.006l-.001-.005-.001-.006v-.005l-.001-.006v-.005l-.001-.006-.001-.005v-.006l-.001-.005v-.006l-.002-.004-.001-.006v-.004l-.001-.007v-.004a9.291 9.291 0 01-.003-.015v-.012l-.001-.005-.001-.006v-.005l-.001-.006v-.005l-.001-.005v-.006l-.001-.005-.001-.006v-.005l-.001-.006v-.005l-.001-.006v-.017l-.001-.005-.001-.006v-.006l-.001-.005v-.005l-.001-.006v-.005l-.001-.006v-.005l-.002-.005v-.015a8.562 8.562 0 01-.002-.01l-.001-.011v-.004l-.001-.007v-.005l-.001-.006v-.005l-.001-.006v-.005l-.001-.006v-.005l-.001-.006v-.005l-.001-.006v-.004l-.001-.007v-.004l-.001-.008v-.003l-.003-.012v-.015l-.001-.007v-.005l-.001-.006v-.005a7.1 7.1 0 01-.002-.01v-.011l-.001-.007v-.005l-.001-.007v-.003l-.001-.01v-.003l-.001-.01v-.003l-.001-.007v-.005l-.001-.006v-.005l-.001-.006v-.011l-.001-.005v-.006l-.001-.005v-.011l-.001-.007v-.004l-.002-.01v-.016l-.001-.007v-.004l-.001-.007v-.011l-.001-.004v-.011l-.001-.007v-.004l-.001-.007v-.004a14.873 14.873 0 01-.002-.022v-.011l-.001-.004v-.012l-.001-.006v-.011l-.001-.005v-.023a8.374 8.374 0 00-.001-.01v-.01l-.001-.004v-.009l-.001-.004v-.012l-.001-.006v-.011l-.001-.005v-.011l-.001-.006v-.005a8.46 8.46 0 01-.001-.022l-.001-.01a.715.715 0 010-.016l-.001-.007v-.004a7.225 7.225 0 01-.001-.012v-.006a3.902 3.902 0 00-.001-.01v-.017l-.001-.006v-.016l-.001-.01v-.012l-.001-.004v-.018l-.001-.005v-.017l-.001-.005v-.018l-.001-.004v-.012l-.001-.01v-.022l-.001-.005v-.021l-.001-.007v-.015l-.001-.008v-.029l-.001-.008v-.022l-.001-.005v-.011a7.91 7.91 0 010-.01v-.008l-.001-.004v-.033a3.558 3.558 0 00-.001-.011v-.011a3.925 3.925 0 010-.012v-.004l-.001-.007v-.011a2.8 2.8 0 010-.027l-.001-.01v-.046l-.001-.004v-.011a8.863 8.863 0 010-.023v-.033l-.002-.004v-.053a2.776 2.776 0 000-.013v-.002a10.856 10.856 0 010-.014v-.008a2.952 2.952 0 010-.011v-.016a7.129 7.129 0 010-.011v-.139a9.122 9.122 0 010-.034v-.037a14.84 14.84 0 01.001-.035v-.01a.56.56 0 00.001-.035v-.047l.001-.01v-.04a8.77 8.77 0 01.001-.01v-.025l.001-.008v-.003a16.161 16.161 0 010-.032l.001-.003v-.023l.001-.01v-.024l.001-.01v-.023l.001-.003a13.107 13.107 0 010-.01v-.014l.001-.009v-.014l.001-.009v-.023l.001-.003v-.02l.001-.003v-.02l.001-.003v-.02l.001-.003v-.011l.001-.009v-.013l.001-.008v-.016l.001-.007v-.012l.001-.005v-.018l.001-.004v-.013l.001-.006v-.012l.001-.004v-.012l.001-.007v-.012l.001-.005v-.01l.001-.008v-.01l.001-.006v-.011l.001-.008v-.01l.001-.005v-.012l.001-.006v-.007l.001-.005v-.014l.001-.004v-.01l.001-.008v-.005l.001-.006v-.012l.001-.005v-.007l.001-.005v-.011l.001-.007v-.01l.001-.007v-.005l.001-.005v-.006l.001-.007v-.005l.001-.007v-.011a2.92 2.92 0 01.002-.012v-.014l.001-.009v-.004l.001-.008v-.005l.001-.005v-.004l.001-.009v-.004a5.393 5.393 0 00.001-.01l.001-.009a2.144 2.144 0 01.001-.015v-.007l.001-.003v-.01l.001-.003v-.006a1.204 1.204 0 00.002-.013v-.003l.001-.012v-.008l.001-.002v-.01l.001-.004v-.008a22.167 22.167 0 01.004-.033v-.002l.001-.012v-.008a13.354 13.354 0 01.004-.035v-.003l.001-.01v-.004l.001-.006v-.001a13.856 13.856 0 01.004-.036l.001-.013.002-.021v-.002l.002-.02.002-.014.002-.021v-.002l.002-.02v-.001l.002-.014.002-.02v-.002l.003-.02v-.001l.001-.013.003-.022.006-.057.003-.021.001-.015.003-.02v-.001l.003-.021.004-.035v-.001l.007-.056.003-.022.012-.092.05-.337c.013-.075.025-.15.039-.224l.01-.056c0-.007.002-.014.003-.02v-.001l.007-.035.004-.02v-.001l.006-.034v-.001l.004-.02.007-.034v-.002a16.2 16.2 0 01.007-.033l.004-.02v-.002l.004-.02v-.001l.003-.013.004-.02v-.002l.004-.02.003-.013a13.024 13.024 0 01.009-.043l.002-.011v-.002l.002-.006v-.002l.002-.011a1.177 1.177 0 01.005-.022v-.002l.003-.01v-.002a6.785 6.785 0 01.004-.019v-.003l.003-.01v-.003l.001-.005.001-.004.002-.008v-.004l.002-.005v-.004l.003-.009v-.003l.002-.008.001-.005.001-.005.001-.004.002-.007.001-.005.001-.005.001-.006.002-.006v-.005a4.1 4.1 0 00.003-.012l.001-.004.002-.006v-.005l.002-.007a2.683 2.683 0 01.003-.01v-.006l.002-.005.001-.004.002-.008v-.004l.002-.006.001-.005.002-.006v-.005l.002-.006.001-.006.002-.005v-.004l.002-.008a3.857 3.857 0 00.004-.014l.001-.008.001-.003.002-.009.001-.003.002-.006a2.235 2.235 0 01.003-.015l.002-.008v-.002l.002-.008.001-.004.002-.008v-.003l.003-.007v-.003l.002-.009a1.627 1.627 0 00.003-.01v-.002a13.003 13.003 0 01.003-.012l.002-.01v-.001l.003-.008v-.003l.003-.009a1.936 1.936 0 00.002-.01v-.002l.003-.01v-.002l.003-.009v-.002l.002-.008v-.002a7.67 7.67 0 01.006-.02v-.001l.002-.01v-.002a18.68 18.68 0 01.004-.01l.002-.01v-.001l.003-.01v-.001a12.216 12.216 0 01.006-.022l.002-.01a10.111 10.111 0 01.006-.022c0-.004.002-.008.003-.011z'
              fill='#07a8e4'
            />
          </g>
          <circle
            data-name='Ellipse 2019'
            cx={5.5}
            cy={5.5}
            r={5.5}
            transform='translate(287 866)'
            fill='#07a8e4'
          />
        </g>
      </g>
    </svg>
  );
}
export function AccountBlanceWhite(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <defs>
        <style>
          {
            '.cls-2{fill:none;stroke:#ff6000;stroke-linecap:round;stroke-linejoin:round}'
          }
        </style>
      </defs>
      <g id='account_balance_white_24dp' transform='translate(0 .002)'>
        <g
          id='Group_19693'
          data-name='Group 19693'
          transform='translate(0 -.002)'
        >
          <path
            id='Rectangle_5595'
            data-name='Rectangle 5595'
            d='M0 0h24v24H0z'
            fill='none'
          />
        </g>
        <g
          id='Group_19695'
          data-name='Group 19695'
          transform='translate(2.999 2.998)'
        >
          <g id='Group_19694' data-name='Group 19694'>
            <path
              id='Rectangle_5596'
              data-name='Rectangle 5596'
              className='cls-2'
              transform='translate(1.998 7.716)'
              d='M0 0h3v6.143H0z'
            />
            <path
              id='Rectangle_5597'
              data-name='Rectangle 5597'
              className='cls-2'
              transform='translate(7.544 7.716)'
              d='M0 0h3v6.143H0z'
            />
            <path
              id='Rectangle_5598'
              data-name='Rectangle 5598'
              className='cls-2'
              transform='translate(.267 14.429)'
              d='M0 0h17.182v3.571H0z'
            />
            <path
              id='Rectangle_5599'
              data-name='Rectangle 5599'
              className='cls-2'
              transform='translate(12.879 7.716)'
              d='M0 0h3v6.143H0z'
            />
            <path
              id='Path_19360'
              data-name='Path 19360'
              className='cls-2'
              d='M10.724 1L2 6.286V8.4h17.448V6.286z'
              transform='translate(-2 -1)'
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
export function AccountCircleBlack(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <path data-name='Path 77026' d='M0 0h24v24H0z' fill='none' />
      <path
        data-name='Path 77027'
        d='M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 3a3 3 0 11-3 3 3 3 0 013-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z'
        fill='#ff7623'
      />
    </svg>
  );
}
export function Group268651(props: Props) {
  return (
    <svg
      id='Group_26865'
      data-name='Group 26865'
      xmlns='http://www.w3.org/2000/svg'
      width={112.999}
      height={22}
      viewBox='0 0 112.999 22'
      {...props}
    >
      <defs>
        <style>{'.cls-1{fill:none}.cls-2{fill:#ffa41c}'}</style>
      </defs>
      <g id='star_rate_black_24dp'>
        <path
          id='Rectangle_6281'
          data-name='Rectangle 6281'
          className='cls-1'
          d='M0 0h23v22H0z'
        />
        <path
          id='Path_76741'
          data-name='Path 76741'
          className='cls-2'
          d='M13.68 9.6l-1.363-4.492a.924.924 0 00-1.771 0L9.173 9.6H5.047a.926.926 0 00-.538 1.678l3.375 2.411-1.325 4.271a.926.926 0 001.446 1.01l3.422-2.6 3.422 2.606a.926.926 0 001.446-1.011l-1.326-4.275 3.375-2.411a.925.925 0 00-.538-1.678H13.68z'
          transform='translate(.022 -.756)'
        />
      </g>
      <g
        id='star_rate_black_24dp-2'
        data-name='star_rate_black_24dp'
        transform='translate(22.999)'
      >
        <path
          id='Rectangle_6281-2'
          data-name='Rectangle 6281'
          className='cls-1'
          d='M0 0h22v22H0z'
        />
        <path
          id='Path_76741-2'
          data-name='Path 76741'
          className='cls-2'
          d='M13.68 9.6l-1.363-4.492a.924.924 0 00-1.771 0L9.173 9.6H5.047a.926.926 0 00-.538 1.678l3.375 2.411-1.325 4.271a.926.926 0 001.446 1.01l3.422-2.6 3.422 2.606a.926.926 0 001.446-1.011l-1.326-4.275 3.375-2.411a.925.925 0 00-.538-1.678H13.68z'
          transform='translate(-.513 -.756)'
        />
      </g>
      <g
        id='star_rate_black_24dp-3'
        data-name='star_rate_black_24dp'
        transform='translate(44.998)'
      >
        <path
          id='Rectangle_6281-3'
          data-name='Rectangle 6281'
          className='cls-1'
          d='M0 0h23v22H0z'
        />
        <path
          id='Path_76741-3'
          data-name='Path 76741'
          className='cls-2'
          d='M13.68 9.6l-1.363-4.492a.924.924 0 00-1.771 0L9.173 9.6H5.047a.926.926 0 00-.538 1.678l3.375 2.411-1.325 4.271a.926.926 0 001.446 1.01l3.422-2.6 3.422 2.606a.926.926 0 001.446-1.011l-1.326-4.275 3.375-2.411a.925.925 0 00-.538-1.678H13.68z'
          transform='translate(-.048 -.756)'
        />
      </g>
      <g
        id='star_rate_black_24dp-4'
        data-name='star_rate_black_24dp'
        transform='translate(68)'
      >
        <path
          id='Rectangle_6281-4'
          data-name='Rectangle 6281'
          className='cls-1'
          d='M0 0h22v22H0z'
        />
        <path
          id='Path_76741-4'
          data-name='Path 76741'
          className='cls-2'
          d='M13.68 9.6l-1.363-4.492a.924.924 0 00-1.771 0L9.173 9.6H5.047a.926.926 0 00-.538 1.678l3.375 2.411-1.325 4.271a.926.926 0 001.446 1.01l3.422-2.6 3.422 2.606a.926.926 0 001.446-1.011l-1.326-4.275 3.375-2.411a.925.925 0 00-.538-1.678H13.68z'
          transform='translate(-.585 -.756)'
        />
      </g>
      <g
        id='star_rate_black_24dp-5'
        data-name='star_rate_black_24dp'
        transform='translate(89.999)'
      >
        <path
          id='Rectangle_6281-5'
          data-name='Rectangle 6281'
          className='cls-1'
          d='M0 0h23v22H0z'
        />
        <path
          id='Path_76741-5'
          data-name='Path 76741'
          d='M13.68 9.6l-1.363-4.492a.924.924 0 00-1.771 0L9.173 9.6H5.047a.926.926 0 00-.538 1.678l3.375 2.411-1.325 4.271a.926.926 0 001.446 1.01l3.422-2.6 3.422 2.606a.926.926 0 001.446-1.011l-1.326-4.275 3.375-2.411a.925.925 0 00-.538-1.678H13.68z'
          transform='translate(-.12 -.756)'
          stroke='#ffa41c'
          fill='none'
        />
      </g>
    </svg>
  );
}
export function Group259021(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={143.471}
      height={116.009}
      viewBox='0 0 143.471 116.009'
      {...props}
    >
      <defs>
        <linearGradient
          id='linear-gradient'
          x1={0.449}
          y1={0.658}
          x2={-0.243}
          y2={0.185}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#ed0a86' />
          <stop offset={1} stopColor='#fff300' />
        </linearGradient>
        <style>{'.cls-1{opacity:.5;fill:url(#linear-gradient)}'}</style>
      </defs>
      <g id='Group_25902' data-name='Group 25902' transform='translate(-15 -4)'>
        <rect
          id='Rectangle_6480'
          data-name='Rectangle 6480'
          className='cls-1'
          width={116.01}
          height={116.009}
          rx={58.004}
          transform='translate(42.461 4)'
        />
        <rect
          id='Rectangle_6481'
          data-name='Rectangle 6481'
          className='cls-1'
          width={71.391}
          height={71.388}
          rx={35.694}
          transform='translate(15 42.084)'
        />
      </g>
    </svg>
  );
}
export function Group258582(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={179.467}
      height={197.913}
      viewBox='0 0 179.467 197.913'
      {...props}
    >
      <defs>
        <filter
          id='Rectangle_6480'
          x={0}
          y={0}
          width={179.467}
          height={178.344}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
        <filter
          id='Rectangle_6481'
          x={37.353}
          y={60.587}
          width={138.926}
          height={137.326}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur-2' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur-2' />
          <feComposite in='SourceGraphic' />
        </filter>
        <linearGradient
          id='linear-gradient'
          x1={-0.095}
          y1={-0.161}
          x2={0.967}
          y2={0.957}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f80078' />
          <stop offset={1} stopColor='#5e0db6' />
        </linearGradient>
        <style>{'.cls-1{opacity:.5;fill:url(#linear-gradient)}'}</style>
      </defs>
      <g id='Group_25858' data-name='Group 25858'>
        <g filter='url(#Rectangle_6480)' transform='translate(0 -.004)'>
          <rect
            id='Rectangle_6480-2'
            data-name='Rectangle 6480'
            className='cls-1'
            width={82.344}
            height={83.467}
            rx={13}
            transform='rotate(-90 87.67 39.67)'
          />
        </g>
        <g filter='url(#Rectangle_6481)' transform='translate(0 -.004)'>
          <rect
            id='Rectangle_6481-2'
            data-name='Rectangle 6481'
            className='cls-1'
            width={41.326}
            height={42.926}
            rx={7}
            transform='rotate(-90 116.13 30.78)'
          />
        </g>
      </g>
    </svg>
  );
}
export function Group258581(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={193.906}
      height={176.114}
      viewBox='0 0 193.906 176.114'
      {...props}
    >
      <defs>
        <filter
          id='Rectangle_6480'
          x={20.826}
          y={0}
          width={173.079}
          height={176.114}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
        <filter
          id='Rectangle_6481'
          x={0}
          y={2}
          width={139.168}
          height={139.168}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={16} result='blur-2' />
          <feFlood floodOpacity={0.078} />
          <feComposite operator='in' in2='blur-2' />
          <feComposite in='SourceGraphic' />
        </filter>
        <linearGradient
          id='linear-gradient'
          x1={0.027}
          y1={1}
          x2={1}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#ed0a86' />
          <stop offset={1} stopColor='#fff300' />
        </linearGradient>
        <style>{'.cls-1{opacity:.5;fill:url(#linear-gradient)}'}</style>
      </defs>
      <g id='Group_25858' data-name='Group 25858'>
        <g
          filter='url(#Rectangle_6480)'
          transform='translate(.024 .018) scale(1.002)'
        >
          <rect
            id='Rectangle_6480-2'
            data-name='Rectangle 6480'
            className='cls-1'
            width={77.079}
            height={80.114}
            rx={9}
            transform='translate(68.83 45)'
          />
        </g>
        <g
          filter='url(#Rectangle_6481)'
          transform='translate(.024 .018) scale(1.002)'
        >
          <rect
            id='Rectangle_6481-2'
            data-name='Rectangle 6481'
            className='cls-1'
            width={43.168}
            height={43.168}
            rx={21.584}
            transform='translate(48 47)'
          />
        </g>
      </g>
    </svg>
  );
}
export function Group258221(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={26}
      height={37}
      viewBox='0 0 26 37'
      {...props}
    >
      <defs>
        <style>{'.cls-1{fill:#4d0baf}'}</style>
      </defs>
      <g
        id='Group_25822'
        data-name='Group 25822'
        transform='translate(-830.998 -1260.9)'
      >
        <path
          id='Path_76969'
          data-name='Path 76969'
          className='cls-1'
          d='M1.12-1.6h3.59v-6.952L7.164-1.6h3L12.6-8.5v6.9h3.59v-12.5h-4.32L8.7-5.982 5.46-14.1H1.12zm17.124 0h3.59v-4.9h3.809v-2.637h-3.81v-2.2H27V-14.1h-8.756z'
          transform='translate(830 1275)'
        />
        <path
          id='Exclusion_2'
          data-name='Exclusion 2'
          className='cls-1'
          d='M23.4 21.468H2.6A2.647 2.647 0 010 18.783V2.685A2.647 2.647 0 012.6 0h20.8A2.645 2.645 0 0126 2.685v16.1a2.645 2.645 0 01-2.6 2.683zM6.579 12.827v3.118A1.535 1.535 0 008.088 17.5h10.573a1.535 1.535 0 001.508-1.558v-3.115h-5.288a.768.768 0 01-.754.778h-1.513a.768.768 0 01-.754-.778zm6.034-2.34h1.513a.768.768 0 01.754.778v.778h4.534a1.537 1.537 0 001.513-1.557V8.147a1.539 1.539 0 00-1.513-1.562h-3.02a3.149 3.149 0 00-.887-2.2 2.962 2.962 0 00-2.138-.914 3.074 3.074 0 00-3.021 3.118H7.326a1.539 1.539 0 00-1.513 1.558v2.34a1.537 1.537 0 001.513 1.557h4.534v-.778a.768.768 0 01.754-.779zm2.267-3.9h-3.02a1.511 1.511 0 113.021 0z'
          transform='translate(830.998 1276.432)'
        />
      </g>
    </svg>
  );
}
export function Group256941(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={28}
      height={28}
      viewBox='0 0 28 28'
      {...props}
    >
      <g data-name='Group 25694'>
        <g data-name='Group 25695' transform='translate(-290 -280)'>
          <rect
            data-name='Rectangle 6447'
            width={28}
            height={28}
            rx={14}
            transform='translate(290 280)'
            fill='#0b7eaf'
          />
          <text
            data-name={3}
            transform='translate(298 301)'
            fill='#fff'
            fontSize='20px'
            fontFamily='Poppins-SemiBold,Poppins'
            fontWeight={600}
          >
            <tspan x={0} y={0}>
              {'3'}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
}
export function Group256162(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={90}
      height={90}
      viewBox='0 0 90 90'
      {...props}
    >
      <defs>
        <filter
          id='Rectangle_6487'
          x={0}
          y={0}
          width={90}
          height={90}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={7} result='blur' />
          <feFlood floodOpacity={0.161} />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
        <style>{'.cls-3{fill:#fff}'}</style>
      </defs>
      <g id='Group_25616' data-name='Group 25616' transform='translate(21 17)'>
        <g
          transform='translate(-21 -17)'
          id='Group_25603'
          data-name='Group 25603'
          filter='url(#Rectangle_6487)'
        >
          <rect
            id='Rectangle_6487-2'
            data-name='Rectangle 6487'
            width={48}
            height={48}
            rx={10}
            transform='translate(21 17)'
            fill='#aa09a5'
          />
        </g>
        <g id='dns_black_24dp' transform='rotate(180 21 21)'>
          <path
            id='Path_53135'
            data-name='Path 53135'
            d='M0 0h36v36H0z'
            fill='none'
          />
        </g>
        <g
          id='Group_25673'
          data-name='Group 25673'
          transform='translate(7.973 8.977)'
        >
          <path
            id='Path_76939'
            data-name='Path 76939'
            className='cls-3'
            d='M27.048 5h-2V4a1 1 0 00-2 0v1h-6.019V4a1 1 0 10-2 0v1H9.014V4a1 1 0 00-2 0v1h-2A3.006 3.006 0 002 8.01v16.031a3.006 3.006 0 003.006 3.006h22.042a3.006 3.006 0 003.006-3.006V8.01A3.006 3.006 0 0027.048 5zm1 19.037a1 1 0 01-1 1H5.006a1 1 0 01-1-1V8.01a1 1 0 011-1h2v1a1 1 0 002 0v-1h6.012v1a1 1 0 102 0v-1h6.012v1a1 1 0 002 0v-1h2a1 1 0 011 1z'
          />
          <circle
            id='Ellipse_2052'
            data-name='Ellipse 2052'
            className='cls-3'
            cx={1.913}
            cy={1.913}
            r={1.913}
            transform='translate(7.231 19.466)'
          />
          <circle
            id='Ellipse_2053'
            data-name='Ellipse 2053'
            className='cls-3'
            cx={1.913}
            cy={1.913}
            r={1.913}
            transform='translate(14.114 19.466)'
          />
          <circle
            id='Ellipse_2054'
            data-name='Ellipse 2054'
            className='cls-3'
            cx={1.913}
            cy={1.913}
            r={1.913}
            transform='translate(20.997 19.466)'
          />
          <circle
            id='Ellipse_2055'
            data-name='Ellipse 2055'
            className='cls-3'
            cx={1.913}
            cy={1.913}
            r={1.913}
            transform='translate(7.231 12.14)'
          />
          <circle
            id='Ellipse_2056'
            data-name='Ellipse 2056'
            className='cls-3'
            cx={1.913}
            cy={1.913}
            r={1.913}
            transform='translate(14.114 12.14)'
          />
          <circle
            id='Ellipse_2057'
            data-name='Ellipse 2057'
            className='cls-3'
            cx={1.913}
            cy={1.913}
            r={1.913}
            transform='translate(20.997 12.14)'
          />
        </g>
      </g>
    </svg>
  );
}
export function Group256161(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={90}
      height={90}
      viewBox='0 0 90 90'
      {...props}
    >
      <defs>
        <filter
          id='Rectangle_6487'
          x={0}
          y={0}
          width={90}
          height={90}
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={7} result='blur' />
          <feFlood floodOpacity={0.161} />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
        <style>{'.cls-3{fill:#fff}'}</style>
      </defs>
      <g id='Group_25616' data-name='Group 25616' transform='translate(21 17)'>
        <g
          transform='translate(-21 -17)'
          id='Group_25603'
          data-name='Group 25603'
          filter='url(#Rectangle_6487)'
        >
          <rect
            id='Rectangle_6487-2'
            data-name='Rectangle 6487'
            width={48}
            height={48}
            rx={10}
            transform='translate(21 17)'
            fill='#09aa4a'
          />
        </g>
        <g id='dns_black_24dp' transform='rotate(180 21 21)'>
          <path
            id='Path_53135'
            data-name='Path 53135'
            d='M0 0h36v36H0z'
            fill='none'
          />
        </g>
        <g
          id='noun_Candlestick_Chart_1759317_1_'
          data-name='noun_Candlestick Chart_1759317 (1)'
          transform='translate(3.741 3.741)'
        >
          <g
            id='Group_25665'
            data-name='Group 25665'
            transform='translate(6 6)'
          >
            <path
              id='Path_76934'
              data-name='Path 76934'
              className='cls-3'
              d='M9.336 6H8.224v2.641H6v14.178h2.224v5.143h1.112v-5.143h2.224V8.641H9.336z'
              transform='translate(-6 -6)'
            />
            <path
              id='Path_76935'
              data-name='Path 76935'
              className='cls-3'
              d='M35.336 32.5h-1.112v3.336H32v14.595h2.224v1.946h1.112v-1.946h2.224V35.836h-2.224z'
              transform='translate(-24.347 -23.859)'
            />
            <path
              id='Path_76936'
              data-name='Path 76936'
              className='cls-3'
              d='M61.336 21h-1.112v5.784H58v9.343h2.224v5.19h1.112v-5.19h2.224v-9.343h-2.224z'
              transform='translate(-42.695 -16.83)'
            />
            <path
              id='Path_76937'
              data-name='Path 76937'
              className='cls-3'
              d='M89.56 42.172h-2.224V35.5h-1.112v6.672H84v8.2h2.224V52.6h1.112v-2.227h2.224z'
              transform='translate(-61.042 -26.025)'
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
export function Group252374(props: Props) {
  return (
    <svg
      id='Group_25237'
      data-name='Group 25237'
      xmlns='http://www.w3.org/2000/svg'
      width='auto'
      height='auto'
      viewBox='0 0 50 50'
      {...props}
    >
      <defs>
        <clipPath id='clip-path'>
          <path
            id='Path_76751'
            data-name='Path 76751'
            d='M31.618 73.919c11.763 0 21.3-5.107 21.3-11.407s-9.536-11.407-21.3-11.407-21.3 5.107-21.3 11.407 9.537 11.407 21.3 11.407z'
            transform='translate(-10.318 -51.106)'
          />
        </clipPath>
        <style>{'.cls-1{fill:none}'}</style>
      </defs>
      <path
        id='Rectangle_6292'
        data-name='Rectangle 6292'
        d='M0 0h50v50H0z'
        style={{ fill: '#fff' }}
      />
      <g
        id='Group_26434'
        data-name='Group 26434'
        transform='translate(3.529 3.702)'
      >
        <path
          id='Rectangle_6292-2'
          data-name='Rectangle 6292'
          transform='translate(-.272)'
          d='M0 0h42.6v42.6H0z'
          style={{ fill: '#fff' }}
        />
        <g id='php' transform='translate(.615 9.762)' fillRule='evenodd'>
          <path
            id='Path_76753'
            data-name='Path 76753'
            d='M34.095 75.512c11.275 0 20.415-4.711 20.415-10.522s-9.14-10.522-20.415-10.522S13.68 59.18 13.68 64.991s9.14 10.521 20.415 10.521z'
            transform='translate(-12.795 -53.584)'
            fill='#6e81b6'
          />
          <path
            id='Path_76754'
            data-name='Path 76754'
            d='M53.965 75.32l.989-5.558a3.025 3.025 0 00-.551-2.781 4.082 4.082 0 00-2.961-.85h-1.714l.49-2.754a.378.378 0 00-.068-.293.314.314 0 00-.25-.129h-2.364a.333.333 0 00-.318.287l-1.05 5.9a3.467 3.467 0 00-.707-1.706 3.941 3.941 0 00-3.26-1.306h-4.583a.333.333 0 00-.318.286l-2.126 11.945a.377.377 0 00.068.292.313.313 0 00.25.129h2.382a.333.333 0 00.318-.287l.514-2.889h1.773a7.062 7.062 0 002.321-.326 4.488 4.488 0 001.705-1.115 5.66 5.66 0 001.011-1.365l-.425 2.386a.376.376 0 00.068.292.313.313 0 00.25.129h2.364a.333.333 0 00.318-.286l1.167-6.556h1.622c.691 0 .894.15.949.215s.154.267.037.921l-.94 5.285a.379.379 0 00.068.292.315.315 0 00.25.129h2.4a.332.332 0 00.321-.287zM43 70.728a2.915 2.915 0 01-.832 1.766 3.009 3.009 0 01-1.949.52h-1.05l.764-4.291H41.3c1 0 1.407.234 1.569.43A2.065 2.065 0 0143 70.728zm20.917-3.291a3.94 3.94 0 00-3.26-1.306H56.08a.333.333 0 00-.318.286l-2.125 11.944a.375.375 0 00.068.292.315.315 0 00.25.129h2.383a.333.333 0 00.318-.287l.514-2.889h1.774a7.061 7.061 0 002.323-.327 4.484 4.484 0 001.705-1.115A5.654 5.654 0 0064 72.75a6.077 6.077 0 00.562-1.7 4.359 4.359 0 00-.64-3.613zM61.6 70.728a2.919 2.919 0 01-.832 1.766 3.01 3.01 0 01-1.949.52h-1.053l.763-4.291H59.9c1 0 1.407.234 1.57.43a2.068 2.068 0 01.138 1.574z'
            transform='translate(-28.626 -59.836)'
            fill='#fff'
          />
          <path
            id='Path_76755'
            data-name='Path 76755'
            d='M42.308 69.36a2.294 2.294 0 011.807.547 2.34 2.34 0 01.215 1.879 2.67 2.67 0 01-3.094 2.572H39.79l.888-5h1.63zm-5.8 10.059h2.379l.564-3.175h2.038a6.715 6.715 0 002.219-.31 4.15 4.15 0 001.592-1.039 5.275 5.275 0 00.968-1.326 5.688 5.688 0 00.526-1.6 3.993 3.993 0 00-.569-3.308 3.624 3.624 0 00-3.011-1.185h-4.579zM48.536 64.3H50.9l-.564 3.176h2.1a3.84 3.84 0 012.738.757 2.68 2.68 0 01.452 2.453l-.987 5.558h-2.4l.939-5.285a1.087 1.087 0 00-1.3-1.558h-1.889l-1.216 6.843h-2.36zm12.339 5.06a2.3 2.3 0 011.807.547 2.34 2.34 0 01.215 1.879 2.67 2.67 0 01-3.097 2.573h-1.442l.888-5zm-5.8 10.059h2.379l.564-3.175h2.042a6.715 6.715 0 002.22-.31 4.151 4.151 0 001.583-1.039 5.269 5.269 0 00.968-1.326 5.7 5.7 0 00.526-1.6 4 4 0 00-.569-3.308 3.625 3.625 0 00-3.011-1.185H57.2z'
            transform='translate(-29.616 -60.826)'
          />
        </g>
      </g>
    </svg>
  );
}
export function Group252373(props: Props) {
  return (
    <svg
      id='Group_25237'
      data-name='Group 25237'
      xmlns='http://www.w3.org/2000/svg'
      width={50}
      height={50}
      viewBox='0 0 50 50'
      {...props}
    >
      <defs>
        <style>{'.cls-2{fill:#00acd7;fill-rule:evenodd}'}</style>
      </defs>
      <path
        id='Rectangle_6292'
        data-name='Rectangle 6292'
        d='M0 0h50v50H0z'
        fill='none'
      />
      <g id='go-logo-blue' transform='translate(3.443 16.946)'>
        <path
          id='Path_76758'
          data-name='Path 76758'
          className='cls-2'
          d='M15.884 21.18c-.084 0-.105-.042-.063-.105l.443-.569a.3.3 0 01.236-.106h7.528c.084 0 .105.063.063.127l-.358.548a.321.321 0 01-.211.127z'
          transform='translate(-12.616 -16.3)'
        />
        <path
          id='Path_76759'
          data-name='Path 76759'
          className='cls-2'
          d='M.784 30.38c-.084 0-.105-.042-.063-.105l.443-.569A.3.3 0 011.4 29.6h9.615a.1.1 0 01.105.127l-.169.506a.184.184 0 01-.19.127z'
          transform='translate(-.7 -23.569)'
        />
        <path
          id='Path_76760'
          data-name='Path 76760'
          className='cls-2'
          d='M24.984 39.58c-.084 0-.105-.063-.063-.127l.3-.527a.28.28 0 01.211-.127h4.217c.084 0 .127.063.127.148l-.042.506a.158.158 0 01-.148.148z'
          transform='translate(-19.797 -30.839)'
        />
        <g
          id='Group_25196'
          data-name='Group 25196'
          transform='translate(11.495)'
        >
          <path
            id='Path_76761'
            data-name='Path 76761'
            className='cls-2'
            d='M15.794 5.365c-1.328.336-2.235.588-3.542.924-.316.084-.337.1-.611-.21a2.82 2.82 0 00-.991-.8 3.68 3.68 0 00-3.817.321 4.459 4.459 0 00-2.151 3.984 3.3 3.3 0 002.847 3.3 3.9 3.9 0 003.585-1.385c.19-.231.358-.483.569-.777h-4.07c-.443 0-.548-.273-.4-.63.274-.651.78-1.742 1.075-2.288a.569.569 0 01.527-.336h7.675c-.042.567-.042 1.134-.127 1.7a8.931 8.931 0 01-1.729 4.114 8.791 8.791 0 01-6.01 3.569 7.494 7.494 0 01-5.672-1.385A6.587 6.587 0 01.275 10.8a8.213 8.213 0 011.792-6.149 9.363 9.363 0 015.9-3.632 7.293 7.293 0 015.588 1.029 6.587 6.587 0 012.446 2.96c.127.189.042.294-.211.357z'
            transform='translate(-.215 -.866)'
          />
          <path
            id='Path_76762'
            data-name='Path 76762'
            d='M79.025 17.7a7.932 7.932 0 01-5.145-1.847 6.576 6.576 0 01-2.28-4.047 7.987 7.987 0 011.708-6.339 8.847 8.847 0 015.9-3.505 7.851 7.851 0 016.01 1.071 6.531 6.531 0 012.982 4.68 8.081 8.081 0 01-2.425 7.116 9.676 9.676 0 01-5.061 2.687c-.572.104-1.141.125-1.689.184zm5.018-8.48a6.013 6.013 0 00-.063-.693 3.473 3.473 0 00-4.3-2.792 4.6 4.6 0 00-3.69 3.652 3.453 3.453 0 001.94 3.967 3.881 3.881 0 003.437-.126 4.593 4.593 0 002.678-4.009z'
            transform='translate(-56.659 -1.596)'
            fill='#00acd7'
          />
        </g>
      </g>
    </svg>
  );
}
export function Group252372(props: Props) {
  return (
    <svg
      id='Group_25237'
      data-name='Group 25237'
      xmlns='http://www.w3.org/2000/svg'
      width={50}
      height={50}
      viewBox='0 0 50 50'
      {...props}
    >
      <defs>
        <clipPath id='clip-path'>
          <path
            id='Rectangle_6284'
            data-name='Rectangle 6284'
            d='M0 0h40.349v43.712H0z'
            fill='#fff'
            stroke='#707070'
          />
        </clipPath>
        <style>{'.cls-3{fill:#0074bd}.cls-4{fill:#ea2d2e}'}</style>
      </defs>
      <g
        id='Mask_Group_14408'
        data-name='Mask Group 14408'
        transform='translate(4.813 3.133)'
        clipPath='url(#clip-path)'
      >
        <g id='java' transform='translate(8.518)'>
          <path
            id='Path_76744'
            data-name='Path 76744'
            className='cls-3'
            d='M48.147 61.741s-1.106.678.788.907a15.761 15.761 0 006-.267 10.324 10.324 0 001.595.819c-5.674 2.557-12.836-.149-8.383-1.459zm-.693-3.341s-1.241.968.655 1.174a22.24 22.24 0 007.738-.391 3.4 3.4 0 001.191.765c-6.854 2.113-14.487.168-9.584-1.548z'
            transform='translate(-40.364 -38.55)'
          />
          <path
            id='Path_76745'
            data-name='Path 76745'
            className='cls-4'
            d='M65.41 27.231c1.472 1.694-.386 3.218-.386 3.218s3.735-1.928 2.02-4.344c-1.6-2.252-2.831-3.37 3.82-7.227.001.001-10.44 2.608-5.454 8.353z'
            transform='translate(-52.501 -12.65)'
          />
          <path
            id='Path_76746'
            data-name='Path 76746'
            className='cls-3'
            d='M52.175 57.38s.84.711-.925 1.261c-3.35 1.043-13.965 1.359-16.912.041-1.059-.473.928-1.13 1.552-1.268a3.944 3.944 0 011.024-.118c-1.178-.852-7.616 1.674-3.27 2.4 11.856 1.97 21.605-.896 18.531-2.316zm-12.42-9.268s-5.4 1.317-1.911 1.8a39.5 39.5 0 007.139-.08c2.234-.193 4.475-.6 4.475-.6a9.449 9.449 0 00-1.357.746c-5.481 1.481-16.068.791-13.02-.723a9.968 9.968 0 014.674-1.143zm9.681 5.557c5.571-2.973 3-5.829 1.2-5.445A4.147 4.147 0 0050 48.4a1.02 1.02 0 01.476-.377c3.557-1.284 6.292 3.788-1.147 5.8a.5.5 0 00.107-.154z'
            transform='translate(-31.497 -31.713)'
          />
          <path
            id='Path_76747'
            data-name='Path 76747'
            className='cls-4'
            d='M59.644 1.313s3.169 3.17-3.006 8.044c-4.951 3.911-1.129 6.14 0 8.688-2.89-2.608-5.01-4.9-3.588-7.04 2.088-3.136 7.874-4.657 6.6-9.691z'
            transform='translate(-44.978 -1.313)'
          />
          <path
            id='Path_76748'
            data-name='Path 76748'
            className='cls-3'
            d='M47.9 81.955c5.491.351 13.926-.2 14.126-2.794 0 0-.384.985-4.539 1.766a45.13 45.13 0 01-13.9.214s.706.582 4.313.814z'
            transform='translate(-39.468 -52.052)'
          />
          <path
            id='Path_76749'
            data-name='Path 76749'
            className='cls-4'
            d='M52.628 95.476h-.163v-.094h.435v.094h-.163v.467h-.114zm.877.023l-.162.444h-.075l-.161-.444v.444H53v-.561h.158l.149.4.149-.4h.157v.561h-.1zm-15.283 5.245a2.4 2.4 0 01-1.519.7.981.981 0 01-1.053-1.094c0-.729.4-1.262 1.985-1.262h.587v1.655zm1.394 1.613v-4.992c0-1.276-.71-2.118-2.42-2.118a6.255 6.255 0 00-2.585.575l.2.884a5.875 5.875 0 012-.407c.986 0 1.409.407 1.409 1.249v.631h-.493c-2.394 0-3.474.952-3.474 2.384a1.8 1.8 0 002.052 1.935 3.056 3.056 0 002.106-.9l.109.758h1.094zm4.652 0h-1.739l-2.093-6.982h1.519l1.3 4.291.289 1.289a27.445 27.445 0 001.356-5.579h1.477a28.868 28.868 0 01-2.105 6.982zm6.671-1.613a2.413 2.413 0 01-1.519.7.981.981 0 01-1.053-1.094c0-.729.4-1.262 1.984-1.262h.588v1.655zm1.395 1.613v-4.992c0-1.276-.712-2.118-2.421-2.118a6.254 6.254 0 00-2.585.575l.205.884a5.881 5.881 0 012-.407c.984 0 1.409.407 1.409 1.249v.631h-.493c-2.394 0-3.474.952-3.474 2.384a1.8 1.8 0 002.051 1.935 3.061 3.061 0 002.107-.9l.11.758h1.094zm-19.608 1.187a3.663 3.663 0 01-1.742 1.332l-.688-.832a2.922 2.922 0 001.207-1.159 4.588 4.588 0 00.26-2.022v-7.972h1.482v7.863a4.637 4.637 0 01-.519 2.79z'
            transform='translate(-30.296 -61.165)'
          />
        </g>
      </g>
      <path
        id='Rectangle_6292'
        data-name='Rectangle 6292'
        d='M0 0h50v50H0z'
        fill='none'
      />
    </svg>
  );
}
export function Group252371(props: Props) {
  return (
    <svg
      data-name='Group 25237'
      xmlns='http://www.w3.org/2000/svg'
      width={50}
      height={50}
      viewBox='0 0 50 50'
      {...props}
    >
      <path data-name='Rectangle 6292' d='M0 0h50v50H0z' fill='none' />
      <path
        d='M39.682 15.747L27.344 8.704a2.7 2.7 0 00-2.575 0L12.3 15.747a2.63 2.63 0 00-1.371 2.221v14.068a2.652 2.652 0 001.386 2.223l3.294 1.84a5.356 5.356 0 002.848.763c2.331 0 3.663-1.386 3.663-3.8V19.169c0-.2-.1-.488-.3-.488h-1.573c-.2 0-.645.292-.645.488v13.888c0 1.072-.986 2.138-2.829 1.232l-3.4-1.929a.379.379 0 01-.2-.325V17.968c0-.133.155-.266.275-.334l12.423-7.031a.442.442 0 01.4 0l12.279 7.033c.118.07.076.2.076.335v14.065c0 .134.051.265-.065.33l-12.332 7.035a.356.356 0 01-.353 0l-3.163-1.856a.309.309 0 00-.3-.024 8.3 8.3 0 01-1.868.837c-.2.07-.5.19.115.531l4.14 2.408a2.648 2.648 0 002.606 0l12.278-7.037a2.467 2.467 0 001.181-2.224V17.968a2.459 2.459 0 00-1.183-2.221zm-9.753 14.06c-3.281 0-4-.89-4.244-2.494-.028-.173-.177-.379-.356-.379h-1.6c-.2 0-.358.237-.358.431 0 2.054 1.136 4.542 6.562 4.542 3.928 0 6.18-1.5 6.18-4.156 0-2.633-1.809-3.324-5.618-3.82-3.85-.5-4.241-.753-4.241-1.64 0-.731.331-1.706 3.182-1.706 2.547 0 3.486.538 3.873 2.226a.352.352 0 00.347.273h1.61a.371.371 0 00.263-.109.352.352 0 00.094-.269c-.249-2.907-2.214-4.262-6.186-4.262-3.534 0-5.642 1.467-5.642 3.927 0 2.668 2.1 3.4 5.49 3.735 4.058.391 4.374.974 4.374 1.759 0 1.363-1.113 1.944-3.724 1.944z'
        data-name='Group 25233'
        fill='#83cd29'
      />
    </svg>
  );
}
