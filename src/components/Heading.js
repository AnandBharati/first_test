import React from 'react'
import './Heading.css';

function Heading({ type = 'p', style = {}, children }) {

    if (type === 'h1') return <h1 style={style}>{children}</h1>
    if (type === 'h2') return <h2 style={style}>{children}</h2>
    if (type === 'h3') return <h3 style={style}>{children}</h3>
    if (type === 'h4') return <h4 style={style}>{children}</h4>
    if (type === 'h5') return <h5 style={style}>{children}</h5>
    if (type === 'h6') return <h6 style={style}>{children}</h6>

    return (
        <p style={style}>
            {children}
        </p>
    )

}

export default Heading