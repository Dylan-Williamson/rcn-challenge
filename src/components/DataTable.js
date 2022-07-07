import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUsers } from '../redux/Users/actions';
import DataTableHead from './DataTableHead';

const DataTable = () => {

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('first');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [search, setSearch] = React.useState('');
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const filteredUsers = useSelector(state => state.users.filteredUsers);
  const navigate = useNavigate();

  const createData = (first, last, email, gender, id, name) => {
    return { first, last, email, gender, id, name };
  }

  const rows = () => {
    let rows = [];
    
    filteredUsers.map(user => {
      rows.push(createData(user.name.first, user.name.last, user.email, user.gender, user.login.username, user.login.username));
    });
    
    return rows;
  }
  
  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  const getComparator = (order, orderBy) => {
    return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  
  const handleClick = (e, name) => {
    e.preventDefault();
    navigate('/users/' + name);
  };
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filterUsers = (input) => {
    return users.filter(user => {
      return user.name.first.toLowerCase().includes(input.toLowerCase()) || user.name.last.toLowerCase().includes(input.toLowerCase()) || user.email.toLowerCase().includes(input.toLowerCase());
    });
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(setUsers(filterUsers(e.target.value)));
  }
  
  const emptyRows = 0;

  return (
    <Box sx={{ width: '100%', maxWidth: '1600px', marginLeft: 'auto', marginRight: 'auto' }}>
      <input className="h-8 outline-transparent w-1/3 max-w-xs rounded-md drop-shadow-lg fixed right-10 top-4 z-20 p-2 font-teko" type="text" placeholder="Search" onChange={handleSearch} value={search}/>
      <Paper sx={{ width: '100%', mb: 2, pl: 2 }} id="table">
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <DataTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows(), getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      tabIndex={-1}
                      key={row.name}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.first}
                      </TableCell>
                      <TableCell align="right">{row.last}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.gender}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, { label: 'All', value: -1 }]}
          component="div"
          count={rows().length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          id="pagination"
        />
      </Paper>
    </Box>
  );
}

export default DataTable;
