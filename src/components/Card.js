import './Card.css'

export const Card = ({id, image, name, gender, status}) => {
    //imagen, el nombre del personaje, el género y el estado.
    return (
        <div id={id} className="card">
            <img src={image} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Gender: {gender}</p>
                <p className="card-text">Status: {status}</p>
            </div>
        </div>
        
    )
}
