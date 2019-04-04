import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  const date = new Date().toLocaleTimeString()

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          authorName="Freya"
          authorAvatar={faker.image.avatar()}
          date={date}
          text="Hast Du fein gemacht :D!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          authorName="Elisabeth"
          authorAvatar={faker.image.avatar()}
          date={date}
          text="Komm, das Essen ist fertig!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          authorName="Friedel"
          authorAvatar={faker.image.avatar()}
          date={date}
          text="Lass uns Seidenmalen."
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
