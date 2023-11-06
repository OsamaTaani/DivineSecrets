import React from 'react'

export const Cart = () => {
  return (
    <>
    </>
    // <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    // <rect width="100" height="100" fill="url(#pattern0)"/>
    // <defs>
    // <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    // <use xlink:href="#image0_98_13" transform="scale(0.01)"/>
    // </pattern>
    // <image id="image0_98_13" width="100" height="100" xlink:href="data:image/png;base64,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"/>
    // </defs>
    // </svg>
  )
}