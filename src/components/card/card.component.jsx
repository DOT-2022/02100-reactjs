import './card.styles.css';

const CardComponent = ({monster}) => {
    const {name, email, id} = monster;
    return (
        <div key={id} className="card-container">
            <img src={`https://robohash.org/${id}?set=set10&size=180x180`} alt={`monster ${name}`} />
            <h1>{name}</h1>
            <p> {email} </p>
        </div>
    )
}

export default CardComponent