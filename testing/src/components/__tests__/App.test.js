import React from 'react';
import { shallow } from 'enzyme';
import Root from 'Root';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import App from 'components/App';


let wrapped;
beforeEach(() => {
    wrapped = shallow(
        <Root>
            <App />
        </Root>
    )
})

test('app component', () => {
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

