import { useEffect, useState } from "react"
import Anime from "./Anime"
import React from "react"

function Search(props) {
  const { data } = props
  const [input, setInput] = useState("")

  const searchHandler = e => {
    const val = e.target.value
    setInput(val)
  }
  const search = e => {
    data.filter(x => {
      if (input == "") {
        return x
      } else if (x.titles.en) {
        return anime
      }
    })
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search Anime here"
        onChange={searchHandler}
      />

      <button onClick={search}>Search</button>

      <div>
        {
          props.data.map((animeData, i) => (
            <div>
              <Anime data={animeData} key={props.anilist_id} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Search
