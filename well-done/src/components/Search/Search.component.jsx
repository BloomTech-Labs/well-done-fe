import React from 'react'

class Search extends React.Component {

    constructor(props){
        console.log('props in Search', props)
        super();
        this.state = {
            Pump: props.PumpData,
            searchValue: '',
            filteredList: [],
            searching: false
        }

        console.log(this.state)
    }

    handleSearchChange = event => {
        console.log('length', this.state.searchValue.length)
        console.log(event.target.value)
        if (this.state.searchValue.length > 0) {
            let filtered = this.state.Pump.filter(pump => pump.country_name.toLowerCase().includes(event.target.toLowerCase()))
            this.setState({
                searchValue: event.target.value,
                filteredList: filtered
            })
        } else {
            const filtered = []
            this.setState({
                searchValue: event.target.value,
                filteredList: filtered
            })
        }
        
    }

    render(){
        return (
            <div class="search">
                <input 
                    type="text"
                    name="pump"
                    value={this.state.searchValue}
                    onChange={this.handleSearchChange}
                    placeholder="Search..."
                
                />
                {/* <Test data= {this.state.filteredList.length >=1 ? this.state.filteredList : this.state.Pump}/> */}

            </div>
        )
    }

}

export default Search;