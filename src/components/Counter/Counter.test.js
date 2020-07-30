import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Counter from './Counter'

enzyme.configure({ adapter: new Adapter() })

const setup = (props = {}, state = null) => {
    const wrapper = shallow(<Counter {...props} />)
    if (state) wrapper.setState(state)
    return wrapper
}

const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`)
}

describe('Counter', () => {
    test('should render without errors', () => {
        const wrapper = setup()
        
        expect(wrapper.length).toBe(1)
    })
    
    test('should have "counter-output"', () => {
        const wrapper = setup()
        const output = findByTestAttr(wrapper, 'counter-output')
        
        expect(output.length).toBe(1)
    })

    test('should have increment "increment-btn"', () => {
        const wrapper = setup()
        const incrementBtn = findByTestAttr(wrapper, 'increment-btn')
        
        expect(incrementBtn.length).toBe(1)
    })

    test('should have initial counter state of 1', () => {
        const wrapper = setup()
        
        expect(wrapper.state('counter')).toBe(1)
    })

    test('should increment counter by one', () => {
        let counter = 1
        const wrapper = setup(null, { counter })

        findByTestAttr(wrapper, 'increment-btn').simulate('click')

        expect(findByTestAttr(wrapper, 'counter-output').text()).toContain(counter + 1)
    })

    test('should decrement counter by one', () => {
        let counter = 6
        const wrapper = setup(null, { counter })

        findByTestAttr(wrapper, 'decrement-btn').simulate('click')

        expect(findByTestAttr(wrapper, 'counter-output').text()).toContain(counter - 1)
    })

    test('should not decrement under 0', () => {
        let counter = 0
        const wrapper = setup(null, { counter })

        findByTestAttr(wrapper, 'decrement-btn').simulate('click')

        expect(wrapper.state('counter')).toBe(0)
    })

    test('should display "decrement-error" message when decrementing below 0', () => {
        let counter = 0
        const wrapper = setup(null, { counter });

        findByTestAttr(wrapper, 'decrement-btn').simulate('click')

        expect(findByTestAttr(wrapper, 'decrement-error').length).toBe(1)
    })

    test('should not display "decrement-error" after counter increment', () => {
        let counter = 0
        const wrapper = setup(null, { counter })

        findByTestAttr(wrapper, 'decrement-btn').simulate('click')
        findByTestAttr(wrapper, 'increment-btn').simulate('click')

        expect(findByTestAttr(wrapper, 'decrement-error').length).toBe(0)
    })
})