import React from 'react';

export default props => (<div>
    <h1>Hello {props.name}!</h1>
    <button onClick={() => { props.clickHandler('Frontend name') }}>Change in front-end side.</button>
</div>);