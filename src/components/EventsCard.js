import React from 'react'



const EventsCard = ({title, imageUrl, body,button}) => {
    return (
     
        <div className = "eventcard-container">
            <div className = "eventimage-container">
            <img src={imageUrl} alt=''/>
            </div>
            <div className= "eventcard-content">
            <div className = "eventcard-title">
              <h3> {title}</h3>
            </div>
            <div className = "eventcard-body">
           <p> {body}</p>
            </div>
            </div>
            <div className = "eventbutn">
        <button>
            <a>
                {button}
            </a>
        </button>
        </div>
        </div>
   
    )
}
export default EventsCard