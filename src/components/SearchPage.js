import { useEffect, useState } from "react"

import React from "react"

function Search(props) {
  const { data } = props
  const [input, setInput] = useState("")

  const searchHandler = e => {
    const val = e.target.value
    setInput(val)
  }
 

  return (
    <div>
      <input
        type="text"
        placeholder="Search Anime here"
        onChange={searchHandler}
      />

      <button >Search</button>

    </div>
  )
}

export default Search
