import React from 'react'

const Header = (props) => {
    console.log(props)
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'React Portfolio'
}

export default Header
