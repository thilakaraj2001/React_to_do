import React from 'react'

const Footer = ({length}) => {
    const year = new Date().getFullYear();
  return (
    <footer>
        <p>{length} List {length <= 1 ? 'item' : 'items'}</p>
        <p>Copyright &copy; {year}</p>
    </footer>
  )
}

export default Footer