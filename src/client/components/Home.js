import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Hi from Home component watching?</h1>
            <button onClick={() => console.log('hi')}>Click Me</button>
        </div>
    );
};

export default Home;
