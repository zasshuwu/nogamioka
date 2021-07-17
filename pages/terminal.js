import React from 'react'
import dynamic from 'next/dynamic'

const DynamicTerminal = dynamic(() => import("../components/terminal"), {
    ssr: false
})

export default function Terminal() {
    return (
        <div className="terminal-wrapper">
            <div className="terminal-header"></div>
            <div className="terminal-body">
                <DynamicTerminal />
            </div>
        </div>
    )
}