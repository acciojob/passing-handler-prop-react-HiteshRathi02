import React from 'react';
import "../styles/App.css"
const ColourSelector = (props) => {
  const { config, selectNextBackground, setKey} = props
  const { background , key } = config;
  return (
    <button data-testid={key} className={config.classname} onClick={() => {selectNextBackground({background: background})
    setKey(key)}}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
