import React from 'react'

import './editor-styles.scss'

const Editor = () => {
  return (
    <div className="fountain-editor">
      <h1 contentEditable={true}>Editor</h1>
    </div>
  )
}

export default Editor
