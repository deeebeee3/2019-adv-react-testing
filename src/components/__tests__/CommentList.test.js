import React from 'react';
import { mount } from 'enzyme'; //full DOM rendering
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2', 'Comment 3']
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
});

it('creates one LI per comment', () => {
  console.log(wrapped.find('li').length);
});