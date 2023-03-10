import App from '../App'
import { shallow } from 'enzyme'

//calling shallow, sets up app
const setup = () => shallow(<App />)

//this test is failing
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

it('App Component Renders Without Error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, "component-app")

  expect(appComponent.length).toBe(1)
})