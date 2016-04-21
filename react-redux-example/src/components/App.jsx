import React from 'react'

import Hello from './Hello'
import Poker from '../containers/Poker'


class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Poker />
            </div>
        )
    }
}

export default App
