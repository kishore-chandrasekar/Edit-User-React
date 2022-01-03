import React from 'react'
import { useFormik } from "formik"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import Userlist from './Userlist'

function Edituser() {
    const [EDITUSER, EDITUSERS] = useState([])
    let Params = useParams()
    useEffect(async () => {
        try {
            let useredit = await fetch(`https://6196d2b3af46280017e7e2d0.mockapi.io/Userlist/${Params.id}`)
            let USEREDIT = await useredit.json()
            EDITUSERS(USEREDIT)
        } catch (error) {
            console.log(error)
        }
    }, [])
    const formik = useFormik({
        initialValues: {
            Name: EDITUSER.Name,
            Age: EDITUSER.Age,
            Email: EDITUSER.Email,
            Phone: EDITUSER.Phone,
            Profile: EDITUSER.Profile,
            Password: EDITUSER.Password
        },
        onSubmit: async (values) => {
            await fetch(`https://6196d2b3af46280017e7e2d0.mockapi.io/Userlist/${Params.id}`, {
                method: "PUT",
                body: JSON.stringify(values),
                headers: {
                    "content-type": "application/json"
                }
            })
            alert("User has been Edited successfully")
        }
    })





    return (
        <>

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Edit User ID= {Params.id}</h1>
            </div>
            <div className='container'>

                <form id="form" onSubmit={formik.handleSubmit} enableReinitialize={true}>

                    <div className='column'>
                        <div class="form-floating mb-3 mt-3">
                            <input type="string" class="form-control" id="Name" placeholder="Name" value={formik.values.Name}
                                onChange={formik.handleChange} />

                        </div>
                        <div class="form-floating mb-3 mt-3">
                            <input type="number" class="form-control" id="Age" placeholder="Age" value={formik.values.Age}
                                onChange={formik.handleChange} />

                        </div>
                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" id="Email" placeholder="Email" value={formik.values.Email}
                                onChange={formik.handleChange} />

                        </div>
                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" id="Phone" placeholder="Phone Number" value={formik.values.Phone}
                                onChange={formik.handleChange} />

                        </div>
                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" id="Profile" placeholder="Choose your Profile Name" value={formik.values.Profile}
                                onChange={formik.handleChange} />

                        </div>
                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" id="Password" placeholder="Password" values={formik.values.Password}
                                onChange={formik.handleChange} />

                        </div>
                        <div class="form-floating mb-3 mt-3">
                            <input type="submit" className='btn btn-primary btn-sm'>
                            </input>
                        </div>


                    </div>

                </form>
            </div>

        </>
    )
}

export default Edituser
