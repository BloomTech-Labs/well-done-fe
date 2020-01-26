import React from 'react'
import PriceRenderer from 'components/agGrid/PriceRenderer'
import PriceEditor from 'components/agGrid/PriceEditor'
import PriceFilter from 'components/agGrid/PriceFilter'

const initialState = {
  rowData: [],
  columnDefs: [
    {
      field: 'symbol',
      editable: true,
    },
    {
      field: 'price',
      cellClass: 'align-right',
      editable: true,
      cellEditorFramework: PriceEditor,
      filterFramework: PriceFilter,
      cellRendererFramework: PriceRenderer,
    },
  ],
  Context: React.createContext()
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ROW_DATA':
      return {
        ...state,
        rowData: createRowData(),
      }
    case 'CLEAR_ROW_DATA':
      return {
        ...state,
        rowData: [{ symbol: '🍑', price: '$15' }],
      }
    default:
      return state
  }
}
export const Context = React.createContext();

const createRowData = () => {
	let rowData = [];

	for (let i = 0; i < 14; i++) {
			let newItem = createItem(rowData);
			rowData.push(newItem);
	}

	return rowData;
};

const createItem = (rowData) => {
	return {
			symbol: createUniqueRandomSymbol(rowData),
			price: Math.floor(Math.random() * 100)
	};
};

// creates a unique symbol, eg 'ADG' or 'ZJD'
const createUniqueRandomSymbol = (rowData) => {
	let symbol;
	let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	let isUnique = false;
	while (!isUnique) {
			symbol = '';
			// create symbol
			for (let i = 0; i < 3; i++) {
					symbol += possible.charAt(Math.floor(Math.random() * possible.length));
			}
			// check uniqueness
			isUnique = true;
			rowData.forEach(function (oldItem) {
					if (oldItem.symbol === symbol) {
							isUnique = false;
					}
			});
	}

	return symbol;
};
