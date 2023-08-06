import "./Task.css"

export default function Task({title}){

    const STATUS = "PLANNED";

    return(
        <div className="task">
            <div>{title}</div>
            <div className="bottomWrapper">
                <div></div>
                <div className="status">{STATUS}</div>
            </div>
            
            </div>
    )
}