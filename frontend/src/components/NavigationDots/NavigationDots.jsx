import React from 'react'
import { list } from '../Navbar/Navbar'

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {list.map((item, i) => (
                <a href={`#${item}`}
                    key={item + i}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#313b3c' } : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots
