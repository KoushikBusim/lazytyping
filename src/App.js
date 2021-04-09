import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './App.css';
import key_mappings from './key-mappings';
import DisplayKeyboard from './DisplayKeyboard';
import DisplayHands from './DisplayHands'
// import leftrestinghand from './images/leftrestinghand.png';
// import rightrestinghand from './images/right-resting-hand.png';
// import leftf from './images/left-home-row-2.png';
// import rightshift from './images/right-bottom-row-6.png';
// import qkey from './images/q.webp';
// import wkey from './images/w.webp';
// import ekey from './images/e.webp';
// import rkey from './images/r.webp';
// import tkey from './images/t.webp';
// import ykey from './images/y.webp';
// import ukey from './images/u.webp';
// import ikey from './images/i.webp';
// import okey from './images/o.webp';
// import pkey from './images/p.webp';


/**
 * ****** MAINTENANCE HISTORY ******
 * 
 * ######### SYMBOL & MEANING ##############
 * -- TODO FINISHED
 * - TODO
 * --- STATUS 
 * 
 * dark mode switch
 * anagrams (words based on keys in different rows)
 * 
 * --record key strokes, detect which key is pressed
 * 
 * key strokes recorded.
 * --keep para a string, split to a character array
 * --display each character with span tag
 * --span tag has three styles: normal(default), red text color(mistake), blinking(toggle b/w normal and black background)
 * --use state object to iterate the character array and check condition update state and move to next char 
 * 
 * blinking, mistake, current, normal styles updated
 * check condition and move to next char working and accordingly update set styles
 * 
 * -break it into small components
 * -create a dummy paras for every letter
 * -iterate paras.
 * --once a para is finished show the stats
 * -get the hand gesture style to work
 * -dynamically generate paras
 * 
 * iterated one para. showed stats after the para is finished
 * -design keyboard and hand style
 * 
 * -research hosting on github.io pages
 * 2020/05/03
 * -break into small components
 * -night mode
 * -dynamic keyboard display based on platform
 */

var lessons = {
  "toprow": ["equity","pietro","portie","pouter","protei","purity","pyrite","quoter","qwerty","torque","troupe","equip","erupt","outer","outre","perot","porty","pyotr","petri","petro"],
  "homerow": ["flags","flaks","glads","dags","dash","fads","fags","fash","flag","gads","gals","gash","glad","hags","half","jags","lads","lags","lakh","lash","salk","shad","slad","slag"],
  "bottomrow": ["zigzag","zebra","zero","zipper","zinnia","zoo","zithe","zan","zala","zalad","zajar","zaddy","zamono","zakk","zah","zomo","zanby","zabba","zamna","zaxy","zamn"],
  "allrows": ["ine","eletten","lier","eren","letter","lier","nient","rel","teet","letten","inent","ter","tell","treet","ener","ree","ten","lette","ner","nient","tree","ree","nient","tree"]
}
// var lessons = {
//   "homerow": ["flags","flash"],
//   "toprow": ["equity","Pietro"],
//   "bottomrow": ["zebra","zero","zipper"],
//   "allrows": ["ine","lier"]
// }
var lesson_names = Object.keys(lessons)

class App extends React.Component {
  state = { 
    "keys": ["alphabetic","shift+a","shift+b","shift+c","shift+d","shift+e","shift+f","shift+g","shift+h","shift+i","shift+j","shift+k","shift+l","shift+m","shift+n","shift+o","shift+p","shift+q","shift+r","shift+s","shift+t","shift+u","shift+v","shift+w","shift+x","shift+y","shift+z","space","backspace","enter","shift",";",",","."],
    "pressed_key": "start typing",
    "letters": "ine eletten lier eren letter lier nient rel teet letten inent ter tell treet ener ree ten lette ner nient tree ree nient tree",
    "len": 125,
    "error_indexes": [],
    "current_index": 0,
    "finished": false,
    "pressed_key_code": "",
    "current_lesson_no": 0,
    "lesson_running": false,
    "abc": "leftf"
  }
  getPractiseKeys = () => {
    let practise_keys = []
    this.state.error_indexes.map((keyIndex, index) => {
      let keyValue = this.state.letters.split("")[keyIndex]
      if(!practise_keys.includes(keyValue)){
        practise_keys.push(keyValue)
      }
      return null
    })
    console.log("practise_keys: ", practise_keys.join(", "))
    return practise_keys.join(", ")
  }
  clickspan = (e) => {
    e.preventDefault()
    console.log(e.target, "click")
    // alert('name');
    this.setState({ 
      lesson_running: true 
    })
  }

  render() { 
    let lesson_no = this.state.current_lesson_no;
    let lesson_name = lesson_names[lesson_no];
    let lesson = lessons[lesson_name]
  
    if(this.state.lesson_running === false){
      return (
        <div className="App">
          <p className="title-header"><b>Lesson name:</b> {lesson_name}, <span style={{'color':'blue','text-decoration': 'underline','cursor':'pointer'}} onClick={ e => this.clickspan(e)} >start lesson</span>.</p>
          <DisplayKeyboard 
            lesson_name={lesson_name} 
            pressed_key = {this.state.pressed_key} 
            key_code = {this.pressed_key_code} 
            lesson_running = {this.state.lesson_running}
          />
          {/* <div class="hands js-hands  ">
            <img class="hand hand--left js-left-hand" src={leftrestinghand}/>
            <img class="hand hand--right js-right-hand" src={rightrestinghand}/>
          </div> */}
        </div>);
    }
    // console.log("lesson:",lesson)
    else if (this.state.finished){
      return (
        <div className="App">
          <h2>Congratulations! You have finished all the lessons.</h2>
        </div> 
        // add continue button - go to next lesson
        // add practise more button - generate words based on wrong key strokes 
        
        // <div className="App">
        //   <h2>Congratulations Lesson finished!</h2>
        //   <p>Stats: {this.state.error_indexes.length} wrong key strokes </p>
        //   <p>These keys needs more practise: {this.getPractiseKeys()} </p>
        // </div>
      );
    }
    else{
      return ( 
        <div className="App">
          <p className="title-header"><b>Lesson name:</b> {lesson_name}</p>
          <div className="ContentBox">
            {
              lesson.join(" ").split("").map((letter, index) => {
                let letterStyle = "";
                if(index === this.state.current_index){
                  letterStyle = "Current"
                }
                else if(this.state.error_indexes.includes(index)){
                  letterStyle = "Wrong"
                }
                else{
                  letterStyle = "Normal"
                }
                return(<span className={letterStyle} key={index}>{letter}</span>)
              })
            }
            <KeyboardEventHandler
              handleKeys={this.state.keys}
              onKeyEvent={
                (key, e) => {
                  e.preventDefault();
                  // console.log(`do something upon keydown event of ${key}`);
                  if(key !== "shift"){
                    if(lesson.join(" ").split("")[this.state.current_index] === key_mappings[key]){ // right or wrong check
                      if(this.state.current_index === lesson.join(" ").split("").length-1){ // last letter in lesson check
                        console.log("lesson finished")
                        if(this.state.current_lesson_no === lesson_names.length-1){
                          console.log("here2")
                          this.setState({ 
                            finished: true
                          })
                        }
                        else{
                          console.log("here3")
                          this.setState({ 
                            error_indexes: [],
                            current_index: 0,
                            pressed_key_code: "",
                            current_lesson_no: this.state.current_lesson_no + 1,
                            lesson_running: false
                          })
                        }
                      }
                      else{
                        this.setState({ 
                          pressed_key: key_mappings[key],
                          current_index: this.state.current_index + 1
                        })
                      }
                    }
                    else{
                      this.setState({ 
                        pressed_key: key_mappings[key],
                        pressed_key_code: key,
                        error_indexes: [...this.state.error_indexes,this.state.current_index]
                      })
                    }
                  }
                  
                }
              } 
            />
          </div>
          <DisplayKeyboard pressed_key = {this.state.pressed_key} key_code = {this.pressed_key_code} lesson_running = {this.state.lesson_running}/>
          <DisplayHands current_key = {lesson.join(" ").split("")[this.state.current_index]}/>
        </div>
      );
    }
  }
}
 
export default App;

// hi my name is koushik kumar i wrote this code a longtime ago, may be like 3months, yeah for me 3months is enough to forget stuff
// you see it was such a nice project but that's my problem i lose interest too soon
// i get excited about stuff and all of a sudden i lose interest as i find something new interesting or may be i would start
// a new project.

// Most of the times it's both, i don't know if it is the same with everybody or it's just me fluctuating like this.