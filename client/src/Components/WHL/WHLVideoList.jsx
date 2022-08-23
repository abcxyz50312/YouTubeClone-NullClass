import React from 'react'
import ShwoVideoList from '../ShowVideoList/ShwoVideoList'

function WHLVideoList({ page, CurrentUser,videoList }) {
  // console.log(videoList)
  return (
    <>
     { CurrentUser ?(<>
     {
              videoList?.data?.filter(q=>q?.Viewer === CurrentUser).reverse().map(m=>{
                return(
                    <>
                    <ShwoVideoList videoId={m?.videoId} key={m?._id}/>
                    </>
    
                )
            })
     }
      </>) :(<> 
      <h2 style={{color:"white"}}>Plz Login To Watch Your {page} </h2>
      </>)

     }
    </>
  )
}

export default WHLVideoList