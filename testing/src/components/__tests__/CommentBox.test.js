import React from 'react';
import { shallow } from 'enzyme';

import CommentBox from 'components/CommentBox';

test('show a div', () => {
    const wrapped = shallow(<CommentBox />);
    expect(wrapped.find('div').length).toBe(1);
})