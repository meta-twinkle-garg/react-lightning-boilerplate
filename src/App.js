import React, { Component, useState } from 'react';
import ReactDOM from 'react';
import './App.css';

export default function App(){
    const [state, setState] = useState(
        [
            <div onMouseDown={handleMouseDown} 
                className="dragger"
                style={{top: 15, left: 15}}
                id="dont-drag">
            <p className='action-label'>Email</p>
            </div>
        ]
    );
    const [clicked, setClicked] = useState(false);
    let click = false;

    function handleMouseDown(e){
        console.log('mousedown');
        setClicked(true);
        click = true;
        if(e.target.id == 'dont-drag'){
            let newState = state;
            newState.push(
                <div style={{top: 400, left: 400}} 
                    className="dragger"
                    onMouseOut={handleMouseOut}
                    onMouseUp={handleMouseUp} 
                    onMouseMove={handleScroll}
                    onMouseDown={handleMouseDown} >
                        <p>shits and gigs</p>
                </div>
            );
        }
    }

    function handleMouseUp(){
        console.log('mouseup')
        setClicked(false);
        click = false;
    }

    function handleMouseOut(){
        setClicked(false);
        click = false;
    }

    function handleScroll(e){
        console.log('clicked? '+click);
        if(click){
            e.target.setAttribute('style','top:'+(e.clientY - 40)+'px; left:'+(e.clientX - 40)+'px;');
        }
    }

    return (
        <div className="outer-div">
            {state}
        </div>
    );
}