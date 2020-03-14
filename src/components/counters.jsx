import React, { Component } from 'react';
import Counter from './counter';

class Counters  extends Component {

 
    render() { 

        const { onReset, counters, onDelete, onIncrement } =  this.props;

        return ( 
        <div>
            <button 
            onClick={onReset}
            className="btn btn-primary-sm m-2">Reset</button>
                { this.props.counters.map(counter => 
                <Counter 
                    key={counter.id} 
                    onDelete={this.props.onDelete} 
                    onIncrement={this.props.onIncrement}
                    onDecrement = {this.props.onDecrement}
                    counter={counter}
                    value = {this.props.value}
                    id={counter.id} >
                    <h4>{this.props.id}</h4>
                    </Counter>
                )}
        </div> 
        );
    }






    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
        };
        
        handleReset = () =>{
            const counters = this.state.counters.map(c =>{
                c.value = 0;
                return c;
            });
        
            this.setState({ counters});
        };
        
        handleReset = () =>{
           const counters =  this.state.counters.map(c => {
                c.value = 0;
                return c;
            });
            this.setState({ counters });
        };
        
        handleDelete = counterId => {
            console.log('Event Handler Called' , counterId);
            const counters = this.state.counters.filter(c => c.id !== counterId);
            this.setState({ counters });
        };
        


}
 
export default Counters;