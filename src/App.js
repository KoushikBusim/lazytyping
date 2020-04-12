import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './App.css';
import key_mappings from './key-mappings';
import DisplayKeyboard from './DisplayKeyboard';

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
 * 
 * -break into small components
 * -night mode
 * -dynamic keyboard display based on platform
 */

let lessons = {
  "sample": ["ine","eletten","lier","eren","letter","lier","nient","rel","teet","letten","inent","ter","tell","treet","ener","ree","ten","lette","ner","nient","tree","ree","nient","tree"],
  "homerow": ["flags","flaks","flash","flask","glads","dags","dash","Fahd","fads","fags","fash","flag","flak","gads","gals","gash","glad","Hals","hags","half","jags","lads","lags","lakh","lash","salk","shad","shag","slad","slag","flags"],
  "toprow": ["equity","Pequot","Pietro","Poiret","Portie","piquet","poetry","pouter","protei","puerto","purity","pyrite","quoter","qwerty","torque","troupe","equip","erupt","outer","outre","Perot","Piotr","Porty","Pyotr","petri","petro","pewit","piety"],
  "bottomrow": ["zigzag","zebra","zero","zipper","zinnia","zoo","zithe","zan","zala","zalad","zajar","zaddy","zamono","zakk","zah","zomo","zanby","zabba","zamna","zaxy","zamn"]
}
let lesson_names = Object.keys(lessons)

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
    "current_lesson": 1
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
  render() { 
    if (this.state.finished){
      return ( 
        <div className="App">
          <h2>Congratulations Lesson finished!</h2>
          <p>Stats: {this.state.error_indexes.length} wrong key strokes </p>
          <p>These keys needs more practise: {this.getPractiseKeys()} </p>
        </div>
      );
    }
    else{
      return ( 
        <div className="App">
          {/* console.log(this.state.letters.length) 
            console.log(key_mappings)*/
            // console.log("error_indexes",this.state.error_indexes)
          }
          <h1>Pressed key: {this.state.pressed_key}</h1>
          <div className="ContentBox">
            {
              this.state.letters.split("").map((letter, index) => {
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
                  console.log(`do something upon keydown event of ${key}`);
                  if(key !== "shift"){
                    if(this.state.letters.split("")[this.state.current_index] === key_mappings[key]){
                      if(this.state.current_index === this.state.letters.split("").length-1){
                        console.log("finished")
                        this.setState({ 
                          finished: true
                        })
                      }
                      else{
                        console.log("not yet finished")
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
          <DisplayKeyboard pressed_key = {this.state.pressed_key} key_code = {this.pressed_key_code}/>
        </div>
      );
    }
  }
}
 
export default App;