import React, {memo} from 'react'

function Content() {
  console.log("re-render")

  return (
    <div>Hello</div>
  )
}

export default memo(Content)