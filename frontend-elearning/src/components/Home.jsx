import {React, useEffect, useMemo, useState} from 'react'
import AxiosInstance from './Axios'
import { MaterialReactTable } from 'material-react-table';
import Dayjs from 'dayjs';
import { Box, IconButton } from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom'

const Home = () => {

  const [allCourses, setAllCourses] = useState()
  const [loading, setLoading] = useState(true)

  const GetData = () =>{
    AxiosInstance.get(`api/course/`)
    .then((res) => {
      setAllCourses(res.data)
      console.log(res.data)
      setLoading(false)
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  }

  useEffect(() => {
    GetData();
  },[])

  const columns = useMemo(
    () => [
      {
        accessorKey: 'title', //access nested data with dot notation
        header: 'Course Name',
        size: 150,
      },
      {
        accessorKey: 'description',
        header: 'Description',
        size: 250,
      },
      {
        accessorFn: (row) => Dayjs(row.start_date).format('DD-MM-YYYY'),
        header: 'Start Date',
        size: 100,
      },
      {
        accessorFn: (row) => Dayjs(row.end_date).format('DD-MM-YYYY'),
        header: 'End Date',
        size: 150,
      },
      {
        accessorKey: 'instructor_name',
        header: 'Instructor',
        size: 150,
      },
      {
        accessorKey: 'institution_name',
        header: 'Institution',
        size: 150,
      },
      
    ],
    [],
  );
  
  return (
    <div>
      {
        loading ? <p>loading data ...</p> :
        <MaterialReactTable
        columns={columns} 
        data={allCourses} 
        
        enableRowActions
        renderRowActions={({row}) => (
          <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
            <IconButton color="secondary" component={ Link } to={`edit/${row.original.id}`}>
              <EditIcon />
            </IconButton>
            <IconButton color="error" component={ Link } to={`delete/${row.original.id}`}>
              <DeleteIcon />
            </IconButton>
          </Box>
        )}

        />
      }
      
    </div>
  )
}

export default Home