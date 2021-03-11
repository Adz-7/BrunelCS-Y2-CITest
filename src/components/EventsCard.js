import React from 'react'



const EventsCard = ({title, imageUrl, body,button,location,date,time}) => {
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
                <a href="#ex1" rel="modal:open">
                    {button}
                </a>
            </button>
        </div>

        <div id="ex1" class="modal">
        <label>Location: </label>{location}<br />
        <label>Date: </label>{date}<br />
        <label>Time: </label>{time}<br />
        </div>

        </div>
   
    )
}
export default EventsCard