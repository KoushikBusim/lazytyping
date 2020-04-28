import React from 'react';
import keyboard_data from './keyboard-data';

class KeyboardRow extends React.Component {
    state = {
        pressed_key: this.props.pressed_key,
        lesson_running: this.props.lesson_running,
        lesson_name: this.props.lesson_name
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.pressed_key !== this.state.pressed_key || nextProps.lesson_running !== this.state.lesson_running ||  nextProps.lesson_name !== this.state.lesson_name) {
            this.setState({ 
              pressed_key: nextProps.pressed_key,
              lesson_running: nextProps.lesson_running,
              lesson_name: nextProps.lesson_name
            });
          }
    }

    render() { 
        console.log(this.state.lesson_name)
    const row = this.props.row
    const row_data = keyboard_data[row]
    return (
        <div className={!this.state.lesson_running && row === this.state.lesson_name.split("row")[0]? "keyboard-row lessonrow": "keyboard-row"}>
            {row_data.map((key_data,index)=>{
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
                    return <div className={this.state.pressed_key.toUpperCase() === key_data.normal ? "key highlight": "key"}>
                            <div className="keyname">{key_data.shift}</div>
                            <div className="keyname">{key_data.normal}</div>
                        </div>
                })
            }
        </div>
    );
}
}

export default KeyboardRow;