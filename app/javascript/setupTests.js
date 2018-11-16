import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/* make react accessible to all tests (I don't usually need this) */

global.React = React;

configure({ adapter: new Adapter() });
