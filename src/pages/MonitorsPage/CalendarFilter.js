import React,{useState,useEffect} from 'react'
import moment from 'moment'
import gridOptionss from '../../components/Grid/Pagination'


function CalendarFilter(props) {

    // console.log(gridOptionss, 'gridApi')
    const [updatedDate, setUpdatedDate]=useState([])

    const onQuickFilterByCal = () =>  {
        let startDate = moment(document.getElementById('dateCal').value).format('MM/DD/YYYY');
        let endDate = moment(document.getElementById('compCal').value).format('MM/DD/YYYY');
    
        if(startDate && endDate !== 'Invalid date'){
          
          let filteredDates = props.gridInfo.filter(date=> {
            if(moment(date.created_at).isBetween(startDate, endDate)){
              return date
            }else{
              return false
            }
        })
        setUpdatedDate(filteredDates)
        console.log(updatedDate, 'filtered dates')
        return gridOptionss.api.redrawRows();
        // return filteredDates
    }
    // console.log(gridOptionss, 'gridApi')
      }


    return (
        <div>
            <div className='calContainer'>
            <input
              type='date'
              onChange={onQuickFilterByCal}
              id='dateCal'
            />
          </div>
          <div className="calContainerComp">
            <input
              type='date'
              onChange={onQuickFilterByCal}
              id='compCal'
              />
          </div> 
        </div>
    )
}

export default CalendarFilter
