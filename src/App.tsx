import React from 'react';
import Greeting from './greeting'
import Counter from './counter'

const App: React.FC = () => {
    return (
        <div>
            <Greeting name="John Doe" />
            <Counter />
        </div>
    );
};

export default App;




