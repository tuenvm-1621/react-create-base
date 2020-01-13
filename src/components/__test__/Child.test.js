import React from 'react';
import renderer from 'react-test-renderer';

import ChildComponent from '../Child';

it('renders correctly', () => {
  const tree = renderer.create(<ChildComponent myProp="test" />).toJSON();
  expect(tree).toMatchSnapshot();
});
