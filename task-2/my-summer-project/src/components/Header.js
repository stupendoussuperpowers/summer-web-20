import React from "react";

import '../App.css'
export class Header extends React.Component{
    
    constructor(props) {
        super(props);
        this.state={
            albumtitle:""
        }
       
      }
    componentDidMount(){
        fetch("https://musicbrainz.org/ws/2/release/9d6d1e4c-bc3b-4a8e-82bc-5ea5ef36bc02?inc=aliases+artist-credits+labels+discids+recordings&fmt=json")
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            // console.log(data.title);
            this.setState({
                albumtitle:data.title
            })
        })
    }
    render()
    {

        return(
            <div className="album">
            <img className="album-cover" src="https://upload.wikimedia.org/wikipedia/en/c/c8/Green_Day_-_21st_Century_Breakdown_cover.jpg" alt ="album pic"></img>
            <h1 className="album-title">{this.state.albumtitle}</h1>

            </div>
        )
    }
} 

export default Header;