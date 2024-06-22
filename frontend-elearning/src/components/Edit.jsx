import { React, useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import MyTextFiled from './forms/myTextField'
import MyDatePickerField from './forms/myDatePickerField'
import MyMultilineField from './forms/myMultilineField'
import MySelectFieldInstructor from './forms/mySelectField-Instructor'
import MySelectFieldInstutition from './forms/mySelectField-Institution'
import { useForm } from 'react-hook-form'
import AxiosInstance from './Axios'
import Dayjs from 'dayjs'
import { useNavigate, useParams } from 'react-router-dom'



const Edit = () => {

    const params = useParams()
    const courseId = params.id
    const [courseData, setCoursData] = useState()
    
    const [loading, setLoading] = useState(true)

    const GetData = () =>{
        AxiosInstance.get(`api/course/${courseId}/`)
        .then((res) => {
        console.log(res.data)
        setCoursData(res.data)
        setLoading(false)
        setValue('title', res.data.title)
        setValue('description', res.data.description)
        setValue('instructor', res.data.instructor)
        setValue('institution', res.data.institution)
        setValue('start_date', Dayjs(res.data.start_date))
        setValue('end_date', Dayjs(res.data.end_date))
        })
        .catch((error) => {
        console.error('Error fetching data:', error);
        });
    }
    
    useEffect(() => {
        GetData();
    },[])

    const navigate = useNavigate()

    const defaultValues = {
        title : '',
        description : '',
        instructor : '',
        institution : ''
    }
    const {handleSubmit, setValue, control} = useForm({defaultValues:defaultValues})

    
    const submission = (data) => {
        const startDate = Dayjs(data.start_date["$d"]).format("YYYY-MM-DD")
        const endDate = Dayjs(data.end_date["$d"]).format("YYYY-MM-DD")
        AxiosInstance.put(`api/course/${courseId}/`, {
        title : data.title,
        description : data.description,
        instructor : data.instructor,
        institution : data.institution,
        start_date : startDate,
        end_date : endDate
        })
        .then((res) => {
        navigate(`/`)
        })
    }

    return (
        <div>
            {
                loading ? <p>loading data ...</p> :

                <form onSubmit={handleSubmit(submission)}>
                    <Box sx={{display:'flex', width:'100%', backgroundColor:'#00003f', marginBottom:'10px'}}>
                        <Typography sx={{marginLeft:'20px', color:'#fff'}}>
                            <h3>Edit : {courseData.title}</h3>
                        </Typography>
                        
                    </Box>

                    <Box sx={{display:'flex', width:'100%', boxShadow:3, flexDirection:'column', padding:4}}>
                        
                        <Box sx={{display:'flex', justifyContent:'space-around', marginBottom:'40px'}}>

                        <MyTextFiled 
                            label="Course Name"
                            name="title"
                            control={control}
                            placeholder="Provide Course Name"
                            width={'30%'}

                        />

                        <MyDatePickerField
                            label="Start Date"
                            name="start_date"
                            control={control}
                            width={'30%'}
                        />

                        <MyDatePickerField
                            label="End Date"
                            name="end_date"
                            control={control}
                            width={'30%'}
                        />
                        </Box>
                        
                        <Box sx={{display:'flex', justifyContent:'space-around' , marginBottom:'40px'}}>

                        <MyMultilineField
                            label="Course Description"
                            placeholder="Provide a description for this course here"
                            name="description"
                            control={control}
                            width={'30%'}
                            
                        />

                        <MySelectFieldInstutition
                            label="Institution"
                            name="institution"
                            control={control}
                            width={'30%'}
                        />

                        <MySelectFieldInstructor
                            label="Intructor"
                            name="instructor"
                            control={control}
                            width={'30%'}
                        />
                        </Box>
                        <div>
                        <Button type='submit' variant='contained' sx={{width:'30%', height:'40px'}}>
                            <h3>Save Changes</h3>
                        </Button>
                        </div>
                    </Box>
                    </form>
            }

        
        </div>
    )
}

export default Edit