export const orgGridColumns = [
  {
    headerName: 'Organization',
    field: 'org_name',
    sortable: true,
    filter: true,
    cellStyle: {
      'font-size': '2rem',
      'padding-top': '.75rem',
    },
  },
  {
    headerName: 'Headquarters',
    field: 'headquarter_city',
    sortable: true,
    filter: true,
    cellStyle: {
      'font-size': '2rem',
      'padding-top': '.75rem',
    },
  },
  {
    headerName: 'Contact',
    field: 'org_admin',
    sortable: true,
    filter: true,
    cellStyle: {
      'font-size': '2rem',
      'padding-top': '.75rem',
    },
  },
  {
    headerName: 'Pumps Owned',
    field: 'pumps_owned',
    sortable: true,
    filter: true,
    cellStyle: {
      'font-size': '2rem',
      'padding-top': '.75rem',
    },
  },
  {
    headerName: 'Users',
    field: 'org_users',
    sortable: true,
    filter: true,
    cellStyle: {
      'font-size': '2rem',
      'padding-top': '.75rem',
    },
  },
  {
    headerName: 'Date Joined',
    field: 'created_at',
    sortable: true,
    cellStyle: {
      'font-size': '2rem',
      'padding-top': '.75rem',
    },
    filter: 'agDateColumnFilter',
    filterParams: {
      comparator: function (filterLocalDateAtMidnight, cellValue) {
        var dateAsString = cellValue
        if (dateAsString === null) return -1
        var dateParts = dateAsString.split('/')
        var cellDate = new Date(
          Number(dateParts[2]),
          Number(dateParts[1]) - 1,
          Number(dateParts[0])
        )
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
          return 0
        }
        if (cellDate < filterLocalDateAtMidnight) {
          return -1
        }
        if (cellDate > filterLocalDateAtMidnight) {
          return 1
        }
      },
      browserDatePicker: true,
    },
  },
]
