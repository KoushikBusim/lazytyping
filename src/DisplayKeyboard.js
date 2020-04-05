import React from 'react';
import keyboard_data from './keyboard-data';
const rows = keyboard_data.rows;
class DisplayKeyboard extends React.Component {
  state = {  }
  detectOS = () => {
    return navigator.platform
  }
  render() { 
    console.log("pressed key:", this.props.pressed_key)
    return (  
      <div className="keyboard">
        <div className="keyboard-row">
          {keyboard_data.num.map((key_data,index)=>{
            if ("ctrl" in key_data)
              return  <div className={key_data.ctrl}>
                        <div className="ctrlkeyname">{key_data.ctrl}</div>
                      </div>
            else
              return <div className="key">
                      <div className="keyname">{key_data.shift}</div>
                      <div className="keyname">{key_data.normal}</div>
                    </div>
            })
          }
        </div>
        <div className="keyboard-row">
          {keyboard_data.top.map((key_data,index)=>{
            if ("ctrl" in key_data)
              return  <div className={key_data.ctrl}>
                        <div className="ctrlkeyname">{key_data.ctrl}</div>
                      </div>
            else
              return <div className="key">
                      <div className="keyname">{key_data.shift}</div>
                      <div className="keyname">{key_data.normal}</div>
                    </div>
            })
          }
        </div>
        <div className="keyboard-row">
          {keyboard_data.hme.map((key_data,index)=>{
            if ("ctrl" in key_data)
              return  <div className={key_data.ctrl}>
                        <div className="ctrlkeyname">{key_data.ctrl}</div>
                      </div>
            else
              return <div className="key">
                      <div className="keyname">{key_data.shift}</div>
                      <div className="keyname">{key_data.normal}</div>
                    </div>
            })
          }
        </div>
        <div className="keyboard-row">
          {keyboard_data.btm.map((key_data,index)=>{
            if ("ctrl" in key_data)
              return  <div className={key_data.ctrl}>
                        <div className="ctrlkeyname">{key_data.ctrl}</div>
                      </div>
            else
              return <div className="key">
                      <div className="keyname">{key_data.shift}</div>
                      <div className="keyname">{key_data.normal}</div>
                    </div>
            })
          }
        </div>
        <div className="keyboard-row">
          {keyboard_data.ctrl.map((key_data,index)=>{
            if ("ctrl" in key_data)
              if (key_data.ctrl === "space")
                return  <div className={key_data.ctrl}>
                          <div className="ctrlkeyname"></div>
                        </div>
              else
                return  <div className={key_data.ctrl}>
                          <div className="ctrlkeyname">{key_data.ctrl}</div>
                        </div>
            else
              return <div className="key">
                      <div className="keyname">{key_data.shift}</div>
                      <div className="keyname">{key_data.normal}</div>
                    </div>
            })
          }
        </div>
      </div>
    );
  }
}
 
export default DisplayKeyboard;

// console.log(detectOS());

// export default detectOS;