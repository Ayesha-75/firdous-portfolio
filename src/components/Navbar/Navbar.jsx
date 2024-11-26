import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
  const {tabDetails,clickTabItem, isActive} = props
  const {tabId, displayText, href} = tabDetails

  const activeTabClassName = isActive ? 'active-tab-btn' : 'anchor'

  const onClickTabItem =() => {
    clickTabItem(tabId)
  }

  return (
    <>
      <li>
        <a href={`#${href}`}
        className={`${activeTabClassName}`}
        onClick={onClickTabItem}
        >
          {displayText}
        </a>
      </li>

    </>
  )
}

export default Navbar