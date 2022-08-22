import './hq-0.1.1.min.js'
import React, { useEffect } from 'react'
export function Multisend ({ config, recipients, label, purpose }) {
  const elem = 'hq-tools-multisend'
  useEffect(() => window.hq.init(config), [])
  useEffect(() => window.hq.multisend({ elem, purpose, label, recipients }))
  return <div id={elem}></div>
}