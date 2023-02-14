import React from "react";


const Loading = () => (
    <div className="w-screen h-screen bg-black grid place-items-center absolute top-0 left-0">
        <svg 
        style={{
            margin: 'auto',
            background: 'none',
            display:' block',
            shapeRendering: 'auto',
            width: '50vmin',
            height: '50vmin'
        }} 
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        >
        <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#ff0000" stroke="none">
            <animateTransform attributeName="transform" type="rotate" dur="5s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
        </path>
        </svg>
    </div>

)

export default Loading;