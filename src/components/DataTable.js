import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../redux/Users/actions';
import { useNavigate } from 'react-router-dom';

const DataTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [search, setSearch] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const columns = [
    { id: 'firstName', label: 'First Name', minWidth: 150 },
    { id: 'lastName', label: 'Last Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 180 },
    { id: 'gender', label: 'Gender', minWidth: 50 },
    // {
    //   id: 'population',
    //   label: 'Population',
    //   minWidth: 170,
    //   align: 'right',
    //   format: (value) => value.toLocaleString('en-US'),
    // }
  ];
  
  const users = useSelector(state => state.users.users);
  const filteredUsers = useSelector(state => state.users.filteredUsers);
  
  const createData = (firstName, lastName, email, gender, id) => {
    return { firstName, lastName, email, gender, id };
  }
  
  const rows = () => {
    let rows = [];

    filteredUsers.map(user => {
      rows.push(createData(user.name.first, user.name.last, user.email, user.gender, user.login.username));
    });

    return rows;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(setUsers(filterUsers(e.target.value)));
  }

  const handleUserClick = (e, id) => {
    e.preventDefault();
    navigate('/users/' + id)
  }

  const filterUsers = (input) => {
    return users.filter(user => {
      return user.name.first.toLowerCase().includes(input.toLowerCase()) || user.name.last.toLowerCase().includes(input.toLowerCase()) || user.email.toLowerCase().includes(input.toLowerCase());
    });
  }

  React.useEffect(() => {
    
  }, [users]);

  return (
    <>
    <input className="h-8 outline-transparent w-48 rounded-md drop-shadow-lg absolute right-12 top-4 p-2 font-teko" type="text" placeholder="Search" onChange={handleSearch} value={search}/>
    <Paper sx={{ width: '100%', maxWidth: '1600px', overflow: 'hidden', marginLeft: 'auto', marginRight: 'auto', background: '#536B78'}}>
      <TableContainer sx={{maxHeight: 'calc(100vh - 198px)'}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead id="tableHead">
            <TableRow>
              {columns.map((column) => (
                <TableCell
                key={column.id}
                style={{ minWidth: column.minWidth }}
                id="tableHeader"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows()
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={(e) => handleUserClick(e, row.id)}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100, {label: 'All', value: -1 }]}
        component="div"
        count={rows().length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        id="pagination"
      />
    </Paper>
    </>
  );
}

export default DataTable;