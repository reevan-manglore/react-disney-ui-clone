import React from 'react'

export default function Indicator({ onPressed, isActive }) {
    return (
        <button className={`w-2 h-2 mx-2 rounded-full ${isActive?"bg-white":"bg-slate-400/50"}`}
            onClick={() => onPressed()}
        >

        </button>
    )
}
