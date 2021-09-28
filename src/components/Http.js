import axios from "axios";
import { useEffect, useState } from "react";

import React from 'react'

const Http = () => {


  return (
    <div>
      
      
    </div>
  )
}

export default Http


// const Http = () => {
//   const [posts, setPosts] = useState([])
  
//   async function fetchPosts () {

//     try {
//       const request = await axios.get("https://jsonplaceholder.typicode.com/posts")
//       if (!request.ok) {
//         throw new Error('Invalid request')
//       }
//       const data = await request.data  
    
//       setPosts(data)

//     } catch (error) { 
//       console.log(error.message)
//     }
//   }

//   // useEffect(() => {
//   //   fetchPosts()
//   // }, [])

//   return (
//     <div>
//       <button type="button" onClick={fetchPosts}>fetch posts</button>
//         {posts.map(post => (
//           <ul>
//             <li>{post.userId}</li>
//             <li>{post.title}</li>
//             <li>{post.body}</li>
//           </ul>
//         ))}
//     </div>
//   )
// }

// export default Http