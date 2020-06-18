import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
beforeEach(() => {
    const initialState = {
        comments: ['comment1', 'comment2']
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

test('show one li per comment', () => {
    expect(wrapped.find('li').length).toBe(2);
});

// could use the text() from enzyme but .render().text() (from cheerio) is better
test('show the text for each comment', () => {
    // console.log(wrapped.render().text());
    expect(wrapped.render().text()).toContain('comment1');
    expect(wrapped.render().text()).toContain('comment2');
});
 
