const gridOptions = {


    // // PROPERTIES - simple boolean / string / number properties
    // pagination: true,
    // rowSelection: 'single',

    // EVENTS - add event callback handlers
    // onRowClicked: function(event) { console.log('a row was clicked'); },

    onRowClicked(event) {
        //   event.preventDefault();
          console.log('The row was clicked.');
        }

    //     return ( 
    //         onClick={onRowClicked}
    //     )
    //   }

    }

    // onColumnResized: function(event) { console.log('a column was resized'); },
    // onGridReady: function(event) { console.log('the grid is now ready'); },

//     // CALLBACKS
//     isScrollLag: function() { return false; }
// }
export default gridOptions;