import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install(); //intercept / turnoff any requests being issued by axios

  //return mock data - make axios think this was the data returned
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', /* intercept request to this url */
    {
      status: 200,
      response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }, { name: 'Fetched #3' }]
    });
});

afterEach(() => {
  //uninstall the mock - don't attempt to use stubbed request in some other location insiode our test suite
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  //Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  //find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');

  //introduce a TINY little pause - to allow moxios to kick in and do it's stuff before calling our expect
  moxios.wait(() => {
    wrapped.update();

    expect(wrapped.find('li').length).toEqual(3);

    done();
    wrapped.unmount();
  });

  //Expect to find a list of comments!
  //expect(wrapped.find('li').length).toEqual(3); // three comments

});