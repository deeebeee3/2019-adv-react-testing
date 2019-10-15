import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

it('has a text area and a buttton', () => {

  //enzyme will take our component and render it into the fake DOM that is created by JSDOM
  //and will return the object we refer to as wrapped
  const wrapped = mount(<CommentBox />);

  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);

});