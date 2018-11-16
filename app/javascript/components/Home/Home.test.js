import Home from './Home';
import { shallow } from 'enzyme';

describe('Home', () => {
  let homeComponent;

  beforeEach(() => {
    homeComponent = shallow(<Home />);
  });

  describe('rendering', () => {
    test('renders as expected', () => {
      expect(homeComponent.length).toBe(1);
      expect(homeComponent).toMatchSnapshot();
    });
  });
});
