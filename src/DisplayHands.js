import React from 'react';
import leftkey from './images/left.png';
import rightkey from './images/right.png';
import qkey from './images/q.webp';
import wkey from './images/w.webp';
import ekey from './images/e.webp';
import rkey from './images/r.webp';
import tkey from './images/t.webp';
import ykey from './images/y.webp';
import ukey from './images/u.webp';
import ikey from './images/i.webp';
import okey from './images/o.webp';
import pkey from './images/p.webp';
class DisplayHands extends React.Component {
    state = {}
  render() {
    let key_hand_mappings = {
        "q":[qkey,rightkey],
        "w":[wkey,rightkey],
        "e":[ekey,rightkey],
        "r":[rkey,rightkey],
        "t":[tkey,rightkey],
        "y":[leftkey,ykey],
        "u":[leftkey,ukey],
        "i":[leftkey,ikey],
        "o":[leftkey,okey],
        "p":[leftkey,pkey]
    }
    let lefturl = leftkey
    let righturl = rightkey 
    if ("qwertyuiop".includes(this.props.current_key)){
        lefturl = key_hand_mappings[this.props.current_key][0]
        righturl = key_hand_mappings[this.props.current_key][1]
    }
    return (
        
        <div class="hands js-hands">
            <img class="hand hand--left js-left-hand" src={lefturl}/>
            <img class="hand hand--right js-right-hand" src={righturl}/>
        </div>
    );
  }
}
 
export default DisplayHands;

// console.log(detectOS());

// export default detectOS;