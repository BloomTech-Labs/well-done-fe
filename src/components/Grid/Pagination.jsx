const gridOptionss = {
  onRowClicked(event) {},
  onQuickFilterChanged: function(event) {
    console.log('filter')
  },
  onGridReady: function(event) {
    console.log('the grid is now ready')
  },
  setQuickFilter: function(event) {},
  refreshCells: function(event) {
    console.log('ok')
  },
  rowHeight: 40,
}

export default gridOptionss
