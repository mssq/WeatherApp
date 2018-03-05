import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Header from './Header';

describe('Header', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Header title="test title" />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
