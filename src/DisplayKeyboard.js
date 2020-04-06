import React from 'react';
import keyboard_data from './keyboard-data';
// const rows = keyboard_data.rows;
class DisplayKeyboard extends React.Component {
  state = {
    pressed_key: this.props.pressed_key
  }
  detectOS = () => {
    return navigator.platform
  }
  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.pressed_key !== this.state.pressed_key) {
      this.setState({ pressed_key: nextProps.pressed_key });
    }
  }
  render() { 
    console.log("pressed key:", this.props.pressed_key)
    console.log("state key:", this.state.pressed_key)
    return (  
      <div className="keyboard">
        <div className="keyboard-row">
          {keyboard_data.num.map((key_data,index)=>{
            if ("ctrl" in key_data)
              return  <div className={key_data.ctrl}>
                        <div className="ctrlkeyname">{key_data.ctrl}</div>
                      </div>
            else
              return <div className={this.state.pressed_key.toUpperCase() === key_data.normal ? "key highlight": "key"}>
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
              return <div className={this.state.pressed_key.toUpperCase() === key_data.normal ? "key highlight": "key"}>
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
              return <div className={this.state.pressed_key.toUpperCase() === key_data.normal ? "key highlight": "key"}>
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
              return <div className={this.state.pressed_key.toUpperCase() === key_data.normal ? "key highlight": "key"}>
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
                return  <div className={this.state.pressed_key === " " ? key_data.ctrl + " highlight" :key_data.ctrl}>
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