import React from 'react';
import { shallow } from 'enzyme';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import App from 'components/App';

let wrapped;

test('app component', () => {
    wrapped = shallow(<App />)
    expect(wrapped.find(App).length).toBe(1);
})

// beforeEach(() => {
//     wrapped = shallow(<App />);
// })

// afterEach(() => {
//     wrapped.unmount();
// });

// test('shows a comment box', () => {
//     expect(wrapped.find(CommentBox).length).toBe(1);
// });

// test('shows a comment list', () => {
//     expect(wrapped.find(CommentList).length).toBe(1);
// })

