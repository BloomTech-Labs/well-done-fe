import React from 'react'
import Test from '../../pages/Test'

const PumpData = [
    {
        id: 1,
        country_name: 'Vietnam',
        province_name: 'Daklak'
    },
    {
        id: 2,
        country_name: 'U.S',
        province_name: 'CA'
    },
    {
        id: 3,
        country_name: 'Cambodia',
        province_name: 'Pnompenh'
    },
]

class Search extends React.Component {

    constructor(){
        super();
        this.state = {
            Pump: PumpData,
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
                <Test data= {this.state.filteredList.length >=1 ? this.state.filteredList : this.state.Pump}/>

            </div>
        )
    }

}

export default Search;