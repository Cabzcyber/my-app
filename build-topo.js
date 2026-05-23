const fs = require('fs');
const hp = require('hero-patterns');

let s = hp.topography('#3a3a3a', 1);
s = decodeURIComponent(s.replace(/^url\('data:image\/svg\+xml,/, '').replace(/'\)$/, ''));

const match = s.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
const paths = match ? match[1] : '';

const component = `"use client";
import React from 'react';

export default function TopographyBackground() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.6 }}>
      <style>{\`
        svg#topographic path {
          fill: none !important;
          stroke: #3a3a3a !important;
          stroke-width: 1 !important;
          stroke-miterlimit: 0;
          stroke-dasharray: 500;
          stroke-dashoffset: 1000;
          animation: dash 20s linear alternate infinite;
        }
        @keyframes dash {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
      \`}</style>
      <svg id="topographic" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="topo" x="0" y="0" width="600" height="600" patternUnits="userSpaceOnUse">
             <g dangerouslySetInnerHTML={{ __html: \`${paths.replace(/`/g, '\\`')}\` }} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo)" />
      </svg>
    </div>
  );
}
`;

fs.writeFileSync('c:/Users/Pc/cabzzportfolio/my-app/components/TopographyBackground.tsx', component);
