import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let appComponent;

  beforeEach(() => {
    appComponent = shallow(<App />);
  });

  describe('rendering', () => {
    test('renders as expected', () => {
      expect(appComponent.length).toBe(1);
      expect(appComponent).toMatchSnapshot();
    });
  });
});
