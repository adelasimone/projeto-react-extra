import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import SearchBar from '../../components/SearchBar/SearchBar';
// import api from '../../api/service';

class Home extends Component{
    constructor(){
        super()

        this.state = {
            inputValue: "",
        }
    }

    inpuUser = e => {
        const value = e.target.value
        console.log(value);
        this.setState({inputValue: value})
    }
    
    clickBtn = () => {
        console.log('clicou');
    }

    render(){
        return(
            <section>
                <Title/>
                <SearchBar
                  value={this.state.inputValue}
                  placeholder="Digite um nome de usuário"
                  onChange={this.inpuUser}
                  onClick={this.clickBtn}
                />
            </section>
        )
    }
}

export default Home;