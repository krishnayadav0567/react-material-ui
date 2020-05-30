import React from 'react'
import Sidebar from './components/Sidebar'

const items = [
  { name: 'home', label: 'Home' },
  { name: 'billing', label: 'Billing' },
  { name: 'settings', label: 'Settings' },
]

function list() {
  return (
    <div>
      <Sidebar items={items} />
    </div>
  )
}

export default list;