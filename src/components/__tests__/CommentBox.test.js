import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  //enzyme will take our component and render it into the fake DOM that is created by JSDOM
  //and will return the object we refer to as wrapped
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  //remove component from fake DOM
  wrapped.unmount();
});

it('has a text area and two butttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {

  //this beforeEach will only apply to the tests inside this describe block
  beforeEach(() => {

    // {target: { value: 'new comment' }} - fake event we are passing / merging to the event object handleChange 
    // in CommentBox recieves
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapped.update();
  });

  it('has a text area that users can type in', () => {

    //we want to check that the 'value' prop recieves the correct string, not the textarea value
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

  });

  it('when form is submitted, text area gets emptied', () => {

    //simulate calling handleSubmit on CommentBox - which empties the text area
    wrapped.find('form').simulate('submit');
    wrapped.update();
    //expect it to be an empty string
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });

});