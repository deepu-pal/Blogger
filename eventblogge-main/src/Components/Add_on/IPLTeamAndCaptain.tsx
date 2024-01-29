import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';
import { teamVenue } from '../Content/IplContents';

export interface teamAndCity{
    id:number;
    city: string;
    venue:string;  
  }

export interface ColumnData {
    dataKey: keyof teamAndCity;
    label: string;
    numeric?: boolean;
    width: number;
  }
function createData(
  id: number,
  city: string,
  venue: string,
): teamAndCity {
  return { id,city, venue};
}

const columns: ColumnData[] = [
  {
    width: 200,
    label: 'City Name',
    dataKey: 'city',
  },
  {
    width: 120,
    label: 'Venue',
    dataKey: 'venue',

  },
 
];

const rows: teamAndCity[] = Array.from({ length: 9 }, (_, index) => {
  const randomSelection = teamVenue[index % teamVenue.length];
  return createData(index, ...randomSelection);
});

const VirtuosoTableComponents: TableComponents<teamAndCity> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell className='fw-bold fs-6'
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index: number, row: teamAndCity) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell 
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function TeamAndCaptain() {
  return (
    <Paper style={{ height: 400, width: '100%' }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}