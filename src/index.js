import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import CommentDetail from './CommentDetail'

const App = () => {
  const date = new Date().toLocaleTimeString()

  return (
    <div className="ui container comments">
      <CommentDetail
        authorName="Freya"
        authorAvatar={faker.image.avatar()}
        date={date}
        text="Hast Du fein gemacht :D!"
      />
      <CommentDetail
        authorName="Elisabeth"
        authorAvatar={faker.image.avatar()}
        date={date}
        text="Komm, das Essen ist fertig!"
      />
      <CommentDetail
        authorName="Friedel"
        authorAvatar={faker.image.avatar()}
        date={date}
        text="Lass uns Seidenmalen."
      />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
