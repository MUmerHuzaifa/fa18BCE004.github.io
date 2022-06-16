import React, { Component } from 'react';
import AchieveChild from './AchieveChild';
class Achievements extends Component {
    state = { 
        data:[
            {id:1, img:require("./image/1.PNG"), total:10, title:"IOT"},
            {id:2, img:require("./image/2.PNG"), total:15, title:"Machine Learning"},
            {id:3, img:require("./image/3.PNG"), total:40, title:"Artificial Intelligence"},
            {id:4, img:require("./image/4.PNG"), total:30, title:"Embeded Sytems"},
        ]
     } 
    render() { 
        return (
            <div>
                {
                    this.state.data.map(i=>(
                        <AchieveChild img={i.img} tot={i.total} title={i.title}></AchieveChild>
                    ))
                }
            </div>
        );
    };
};
 
export default Achievements;