



import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





    function Tablesetup() {


const [data,setdata]=React.useState([])



React.useEffect(getservices,[])


function getservices()
{

fetch("http://localhost:1080/service")
.then((res)=>res.json())
.then((res)=>{setdata([...res])})
.catch((err)=>{console.log(err)})

}



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  align="right" >Id</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Capacity</StyledTableCell>
            <StyledTableCell align="right">Cost per day</StyledTableCell>
            <StyledTableCell align="right">verfied</StyledTableCell>
            <StyledTableCell align="right">Rating</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
         
            {data.map((e,i)=><StyledTableRow >
              <StyledTableCell align="right" component="th" scope="row">{i+1}</StyledTableCell>
              <StyledTableCell align="right" component="th" scope="row">{e.firmname}</StyledTableCell>
              <StyledTableCell align="right" component="th" scope="row">{e.city}</StyledTableCell>
              <StyledTableCell align="right" component="th" scope="row">{e.address}</StyledTableCell>
              <StyledTableCell align="right" component="th" scope="row">{`${e.restrictions[0].initialsize} to ${e.restrictions[0].finalsize}`}</StyledTableCell>
              <StyledTableCell align="right" component="th" scope="row">{e.cost}</StyledTableCell>
              <StyledTableCell align="right" component="th" scope="row">{"yes"}</StyledTableCell>
              <StyledTableCell align="right" component="th" scope="row">{"NA"}</StyledTableCell>

            </StyledTableRow>)}
  
        </TableBody>
      </Table>
    </TableContainer>
  );
}








export const Home=()=>{



return (

<div style={{marginTop:"60px"}}>
<Tablesetup/>

</div>



)





}