import React from 'react';

class RouletteGun extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            chamber: null,
            spinningTheChamber: false,
            default: 'spinning the chamber and pulling the trigger! ...',
            renderBang: 'BANG!!!!',
            renderSafe: "you're safe"
        }
    }

    bulletInChamber() {
        return Math.ceil(Math.random() * 8);
    }

    handleEventClick() {
        this.setState({chamber: this.bulletInChamber()})
        console.log(this.state.chamber)
    }

    renderRouletteGun() {

        if (this.state.chamber === this.bulletInChamber) {
            return console.log(this.state.renderBang)
        } else if (this.state.chamber !== this.bulletInChamber) {
             return console.log(this.state.renderSafe, this.state.chamber, this.bulletInChamber)
        }
    }

    render() { 
        return (
            <div>
                <p>{this.renderRouletteGun()}</p>
                <input onClick={(e) => this.handleEventClick()} type="button" value="Pull the trigger!" />
            </div>
        )

    }
}

export default RouletteGun;