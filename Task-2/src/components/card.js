import React from 'react';
import songs from './songs';

function Card(props){
    var item = props;
    var play = false;
    var songstate = "songs";
    function onClickPlay(props){
        play =!play;
        console.log("Playing Song: " + item.name + " Play: " + play)
        if(play === true){
            songstate = "songplay";
        }
        return <p className = 'playing'>Playing</p>
    }
    return(
        <div className = {songstate}>
            <table className='table'>
                <tr>
                    <td className='songname-data'><pre className = "songname">{props.name}</pre></td>
                    <td className='singer-data'><pre className = "singername">{props.singer}</pre></td>
                    <td className='td'><button className='button' onClick = {onClickPlay}>Play</button></td>
                </tr>
            </table>
           
        </div>
    )
}

export default Card