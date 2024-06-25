import React from 'react'
import Link from 'next/link'

interface IButton {
    linkTo: string,
    text: string
}

const Button = ({text, linkTo}: IButton) => {
    return <Link href={linkTo} className="button" >{text}</Link>
}

export default Button;