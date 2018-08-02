import React, {Component} from "react";
import "./square.css";

class Square extends Component {
    handleClick = () => {
        if (this.props.label === 0) {
            this.props.handlePlayerClick(this.props.row, this.props.col);
        }
    }

    render() {
        let classes = this.props.label === 0 ? "square" : "square clicked";

        return (
            <div onClick={this.handleClick} className={classes}>
                { this.props.label}
            </div>
        );
    }
}
export default Square;