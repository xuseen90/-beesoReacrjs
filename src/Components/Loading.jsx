import React from 'react'
import LinearProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='mx-auto'>
        <LinearProgress />
      </div>
    </div>
  )
}

export default Loading
