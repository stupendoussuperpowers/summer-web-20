import React from "react";

import '../App.css'
export class Header extends React.Component{
    
    constructor(props) {
        super(props);
       
      }

    render()
    {

        return(
            <div className="album">
            <img className="album-cover" src="https://upload.wikimedia.org/wikipedia/en/c/c8/Green_Day_-_21st_Century_Breakdown_cover.jpg" alt ="album pic"></img>
            <h1 className="album-title">{this.props.albumtitle}</h1>

            </div>
        )
    }
} 

export default Header;