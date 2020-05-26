import React from 'react';
import { shallow } from 'enzyme';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import App from 'components/App';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
})

test('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toBe(1);
});

test('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toBe(1);
})

