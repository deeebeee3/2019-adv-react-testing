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
  expect(wrapped.find('li').length).toEqual(3);
});

it('shows the text for each comment', () => {
  //render() will return a Cheerio wrapper
  //console.log(wrapped.render().text());

  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
  expect(wrapped.render().text()).toContain('Comment 3');

});