import React, {Component} from "react";
import axios from "axios";

class NewProduct extends Component {
    state = {
        name: "",
        price: 0
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value    
        });
    }
    addProductHandler = () => {
        const data = {
            name: this.state.name,
            price: this.state.price
        };

        axios.post("/api/", data).then(data => console.log("Success!"));
    }

    render() {
        return (
            <div>
                <input placeholder="Product Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                <input placeholder="Product Price"
                        type="number"
                        name="price"
                        value={this.state.price}
                        onChange={this.handleInputChange} />
                <button onClick={this.addProductHandler}>Add Product</button>
            </div>
        );
    }
}
export default NewProduct;