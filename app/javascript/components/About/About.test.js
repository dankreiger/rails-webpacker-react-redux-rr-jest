import About from './About';
import { shallow } from 'enzyme';

describe('About', () => {
  let aboutComponent;

  beforeEach(() => {
    aboutComponent = shallow(<About />);
  });

  describe('rendering', () => {
    test('renders as expected', () => {
      expect(aboutComponent.length).toBe(1);
      expect(aboutComponent).toMatchSnapshot();
    });
  });
});
