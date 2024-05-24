import React, { useEffect, useState } from 'react'
import AHeader from '../Comon_cpomnent/AHeader'
import AFooter from '../Comon_cpomnent/AFooter'
import axios from 'axios'
import { toast } from 'react-toastify'

function AMangeuser() {

    const [userdata,setuserdata] = useState()

    useEffect(()=>{
        fetch()
    })

    const fetch=async()=>{
        const res =await axios.get(`http://localhost:3000/user`)
        console.log(res.data)
        setuserdata(res.data)
    }
    // delete user 
    const handledelete=async(id)=>{
        const res = await axios.delete(`http://localhost:3000/user/${id}`)
    }
    const statushandle = async (id)=>{
        const res = await axios.get(`http://localhost:3000/user/${id}`)
        const currntStatus = res.data.status;

        try {
            if(currntStatus === "block")
                {
                    const res = await axios.patch(`http://localhost:3000/user/${id}`,{status:"unblock"})
                    if(res.status === 200)
                        {
                            toast.success("Status changed to unblock successfull")
                            fetch()
                        }
                        
                }
                else if(currntStatus === "unblock")
                    {
                        const res = await axios.patch(`http://localhost:3000/user/${id}`,{status:"block"})
                        if(res.status === 200)
                            {
                                toast.success("Status changed to block successfull")
                                fetch()
                            }
                            
                    }

                
        } catch (error) {
            toast.error("Error updating status.please try agian")
        }
    }

  return (
    <div>
      <AHeader/>
        <div className="container">
                <h1 className='text-center'>Manager users</h1>
                <table className="table my-5">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">User_name</th>
                            <th scope="col">Email</th>
                            <th scope="col">status</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userdata && userdata.map((value,index)=>{
                                return(
                                    <tr key={index}>
                                        <th scope="row">{value.id}</th>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.mobile}</td>
                                        <td><button className='btn btn-success' onClick={()=>statushandle(value.id)} >{value.status}</button></td>
                                        <td>
                                            <button className='btn btn-primary mx-3'>view</button>
                                            <button className='btn btn-danger' onClick={()=>handledelete(value.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        <AFooter/>
    </div>
  )
}

export default AMangeuser
