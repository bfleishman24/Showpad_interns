import React, {Component} from "react";
import axios from "axios";

class EditProduct extends Component {
    state = {
        name: "",
        price: 0
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get(`/api/${this.props.match.params.id}`)
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                     name: response.data[0].name,
                     price: response.data[0].price
                    });
                }
            }).catch(err=>{
                console.log(err);
            });
    }
    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value    
        });
    }
    updateProductHandler = () => {
        const data = {
            name: this.state.name,
            price: this.state.price
        };

        axios.put(`/api/${this.props.match.params.id}` , data).then(data => console.log("Success!"));
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
                <button onClick={this.updateProductHandler}>Save Product</button>
            </div>
        );
    }
}
export default EditProduct;