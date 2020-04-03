import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail firstName={faker.name.firstName()} avatar={faker.image.avatar()} comment={faker.lorem.sentence()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail firstName={faker.name.firstName()} avatar={faker.image.avatar()} comment={faker.lorem.sentence()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail firstName={faker.name.firstName()} avatar={faker.image.avatar()} comment={faker.lorem.sentence()} />
      </ApprovalCard>

    </div>
  )
}


ReactDOM.render(<App />, document.querySelector("#root"));