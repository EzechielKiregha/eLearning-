import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import MyTextFiled from './forms/myTextField'
import MyDatePickerField from './forms/myDatePickerField'
import MyMultilineField from './forms/myMultilineField'
import MySelectFieldInstructor from './forms/mySelectField-Instructor'
import MySelectFieldInstutition from './forms/mySelectField-Institution'
import { useForm } from 'react-hook-form'
import AxiosInstance from './Axios'
import Dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"



const Create = () => {

  const navigate = useNavigate()

  const defaultValues = {
    title : '',
    description : '',
    instructor : '',
    institution : ''
  }

  const schema = yup.object({
    title: yup.string().required('Course name is required'),
    description: yup.string().required('Course description is required'),
    institution: yup.string().required('Institution is required'),
    instructor: yup.string().required('Course instructor is required'),
    start_date: yup.date().required('Course starting date is required'),
    end_date: yup.date().required('Course ending date is required').min(yup.ref('start_date'), 'The end date can not be before the start date'),
  })

  const {handleSubmit, control} = useForm({defaultValues:defaultValues, resolver:yupResolver(schema)})

  
  const submission = (data) => {
    
    const startDate = Dayjs(data.start_date["$d"]).format("YYYY-MM-DD")
    const endDate = Dayjs(data.end_date["$d"]).format("YYYY-MM-DD")

    AxiosInstance.post(`api/course/`, {
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

      <form onSubmit={handleSubmit(submission)}>
      <Box sx={{display:'flex', width:'100%', backgroundColor:'#00003f', marginBottom:'10px'}}>
        <Typography sx={{marginLeft:'20px', color:'#fff'}}>
          Create New Course
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
            <h3>Submit</h3>
          </Button>
        </div>
      </Box>
      </form>
    </div>
  )
}

export default Create