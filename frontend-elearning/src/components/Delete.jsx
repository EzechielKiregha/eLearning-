import { React, useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import AxiosInstance from './Axios'
import { useNavigate, useParams } from 'react-router-dom'



const Delete = () => {

    const params = useParams()
    const courseId = params.id

    const [courseData, setCoursData] = useState()
    const [loading, setLoading] = useState(true)

    const GetData = () =>{
        AxiosInstance.get(`api/course/${courseId}/`)
        .then((res) => {
            setCoursData(res.data)
            console.log(res.data)
            setLoading(false)
        })
        .catch((error) => {
        console.error('Error fetching data:', error);
        });
    }
    
    useEffect(() => {
        GetData();
    },[])

    const navigate = useNavigate()
    
    const submission = (data) => {
        AxiosInstance.delete(`api/course/${courseId}/`, {
        
        })
        .then((res) => {
        navigate(`/`)
        })
    }

    return (
        <div>
            { loading ? <p>loading data ...</p> :
                <div>
                    <Box sx={{display:'flex', width:'100%', backgroundColor:'#00003f', marginBottom:'10px'}}>
                        <Typography sx={{marginLeft:'20px', color:'#fff'}}>
                            <h3>Delete : {courseData.title}</h3>
                        </Typography>
                        
                    </Box>

                    <Box sx={{display:'flex', width:'100%', boxShadow:3, flexDirection:'column', padding:4}}>
                        
                        <Box sx={{display:'flex', justifyContent:'space-around', marginBottom:'40px'}}>
                            <h3>Are you that you want to delete '{courseData.title}' ?</h3>
                        </Box>
                        <div>
                        <Button onClick={submission} variant='contained' sx={{ backgroundColor:'#892312', width:'30%', height:'40px'}}>
                            <h3>Delete</h3>
                        </Button>
                        </div>
                    </Box>
                </div>
            }
        </div>
    )
}

export default Delete