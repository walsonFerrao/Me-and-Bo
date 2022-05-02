



import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router';

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
const navigate=useNavigate()

console.log(data)
React.useEffect(getservices,[])


function getservices()
{

fetch("http://localhost:1080/service")
.then((res)=>res.json())
.then((res)=>{setdata([...res])})
.catch((err)=>{console.log(err)})

}

function gotofulldetail(e)
{
    navigate(`/listing/${e._id}`)
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
         
            {data.map((e,i)=><StyledTableRow  onClick={()=>{gotofulldetail(e)}}>
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

const userdetail=JSON.parse(localStorage.getItem("userdetails"))


return (

<div style={{marginTop:"50px"}}>
{userdetail?.usertype=="user"?<button style={{width:"150px",height:"50px",fontSize:"20px",float:"right",marginBottom:"30px",backgroundColor:"green",color:"white",borderRadius:"10px"}}>helllo user</button>:<p>HelloAdmin</p> }

<Tablesetup/>
</div>



)





}