import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props);
        this.state = { chamber: null,
            spinningTheChamber: false
        }
    }

    clickEventHandler() {
        this.setState = () => {
            return true
        }
    }

    render() {
        return(
            <div>
                <p>spinning the chamber and pulling the trigger! ...</p>
                <input onClick={() => this.clickEventHandler()} type="button" value="Pull the trigger!" />
            </div>
        )
    }
}

export default RouletteGun;