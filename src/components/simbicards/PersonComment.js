import React, { Component} from 'react'

class PersonComment extends Component{
    render(){
        const {username, text, avatarImage } = this.props;
        return (
            <div className="container py-4">
                <div className="row">
                <img  src={avatarImage ? avatarImage : "https://www.poutstation.com/upload/photos/avatar.jpg" } alt="avatart"
                       style={{width: 60, height: 60, borderRadius: '50%'}}/>
                    <div>
                        <h5 className="text-primary">{username}</h5>
                        <h6 className="text-grey">-</h6>
                    </div>
                    
                </div>
                <div className="row">
                    <p style={{textAlign: 'justify', marginLeft: '4rem'}}>{text}</p>
                </div>
                <div className="row" style={{ marginLeft: '4rem'}}>
                    <span className="fa-icons-wrapper mx-3"><i className="far fa-thumbs-up fa-2x"></i></span>
                    <span className="fa-icons-wrapper"><i className="fas fa-reply fa-flip-horizontal fa-2x"></i></span>
                </div>
            </div>
        )
    }
}

export default PersonComment;