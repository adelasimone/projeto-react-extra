import React, { Component } from 'react';
import Title from '../../components/Title/Title';

class Home extends Component{
    constructor(){
        super()

        this.state = {
            // inputValue:''
        };
    }

    render(){
        return(
            <section>
                <Title/>
            </section>
        )
    }
}

export default Home;