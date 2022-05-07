


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
import { useDispatch } from 'react-redux';
import {getdata} from '../Redux/services/action';
import {getdatawithparams} from '../Redux/services/action';

import {useSelector} from 'react-redux'

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

const dispatch=useDispatch()
// const [data,setdata]=React.useState([])
const data= useSelector((store)=>store.services)
const navigate=useNavigate()

console.log(data)
React.useEffect(getservices,[])






function getservices()
{

  dispatch(getdata())



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

  const [page,setpage]=React.useState(0)

  const dispacth=useDispatch()

function sendparams(param) {
  
  dispacth(getdatawithparams(param,page))


}

React.useEffect(()=>{

  dispacth(getdatawithparams("",page))


},[page])




return (
  

  <>
  <div>
    <div style={{backgroundColor:"white",marginTop:"25px",marginLeft:"25px"}}>

<select style={{height:"35px"}} name="" id=""  onChange={(e)=>{sendparams(e.target.value)}}>
  <option value="">SortTheList</option>
  <option value="pa">SortPriceByAscending</option>
  <option value="pd">SortPriceByDescending</option>
  <option value="la">SortByLocation</option>

</select>  



    </div>
    <div style={{marginTop:"30px"}} >
<Tablesetup sendparams={sendparams}/>

</div>

<div style={{display:'flex',justifyContent:"space-between",width:"50%",margin:"auto",marginTop:"30px"}}>
  <button style={{backgroundColor:"grey",height:"30px",width:"60px",borderRadius:"5px"}} onClick={()=>{setpage(page-1)}}>prev</button>
  <button style={{backgroundColor:"grey",height:"30px",width:"60px",borderRadius:"5px"}}>{page+1}</button>
  <button style={{backgroundColor:"grey",height:"30px",width:"60px",borderRadius:"5px"}} onClick={()=>{setpage(page+1)}}>next</button>
</div>
  </div>
</>


)





}