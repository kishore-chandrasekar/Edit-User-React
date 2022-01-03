import React from 'react'
import { useState, useEffect } from "react"
import { Link, Params, useParams } from 'react-router-dom'
function Userlist() {
    const [userlist, setuserlist] = useState([])
    useEffect(async () => {
        try {
            let user = await fetch("https://6196d2b3af46280017e7e2d0.mockapi.io/Userlist")
            let userdata = await user.json()
            setuserlist(userdata)
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">User-List</h1>
            </div>

            <div >
                <div >
                    <div class="table table-bordered" >
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>User-ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Profile-Name</th>

                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userlist.map((element) => {
                                        return <tr>
                                            <td>{element.id}</td>
                                            <td>{element.Name}</td>
                                            <td>{element.Age}</td>
                                            <td>{element.Email}</td>
                                            <td>{element.Phone}</td>
                                            <td>{element.Profile}</td>

                                            <td><Link to={`/edituser/${element.id}`}><button className='btn btn-primary'>EDIT</button></Link></td>





                                        </tr>
                                    })
                                }
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Userlist
