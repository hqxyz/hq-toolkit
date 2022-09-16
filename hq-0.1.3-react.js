import './hq-0.1.3.min.js'
import React, { useEffect } from 'react'
export function Multisend ({ config, recipients, label, purpose }) {
  const elem = 'hq-toolkit-multisend'
  useEffect(() => window.hq.init(config), [])
  useEffect(() => window.hq.multisend({ elem, purpose, label, recipients }))
  return <div id={elem}></div>
}