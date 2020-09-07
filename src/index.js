import React from 'react';

import './index.css';

export default Image = () => {
    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    return <div className='component-container'>
        <span id="image" draggable={true} className='source' onDragStart={drag}>IMAGE</span>
        <span id="logo" draggable={true} className='source' onDragStart={drag}>LOGO</span>
        <span id="video" draggable={true} className='source' onDragStart={drag}>VIDEO</span>
        <span id="button" draggable={true} className='source' onDragStart={drag}>BUTTON</span>
    </div>
}