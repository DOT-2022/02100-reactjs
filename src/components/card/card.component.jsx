import { Component } from "react";
import './card.styles.css';

class CardComponent extends Component {
    render() {
        const {name, email, id} = this.props.monster;

        return (
                <div key={id} className="card-container">
                    <img src={`https://robohash.org/${id}?set=set10&size=180x180`} alt={`monster ${name}`} srcset="" />
                    <h1>{name}</h1>
                    <p> {email} </p>
                </div>
            )
    }
}

export default CardComponent