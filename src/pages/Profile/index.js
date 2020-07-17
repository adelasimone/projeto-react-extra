import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import api from '../../api/service';

class Home extends Component{
    constructor(){
        super()

        this.state = {
            // ghData: []
        }
    }

    // componentDidMount = async user => {
    //     const pegaApi = await api.get(`/${user}`)
    // }

    render(){
        return(
            <section>
                <Title/>
                
            </section>
        )
    }
}

export default Home;