import { useFormik } from 'formik'
import React from 'react'
import { useParams } from 'react-router-dom'
function Createuser() {
    const params = useParams()
    const formik = useFormik({
        initialValues: {
            Name: "",
            Age: "",
            Email: "",
            Phone: "",
            Profile: "",
            Password: "",

        },
        onSubmit: async (values) => {
            await fetch("https://6196d2b3af46280017e7e2d0.mockapi.io/Userlist", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-type": "application/json"
                }
            })
            alert("User has been created successfully ;)")


        }

    })
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Create a User</h1>

            </div>
            <div className='container'>
                <form id="form" onSubmit={formik.handleSubmit}>
                    <div className='column'>

                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" id="Name" placeholder="Name"
                                onChange={formik.handleChange}
                                values={formik.values.Name} />

                        </div>
                        <div class="form-floating mb-3 mt-3">
                            <input type="number" class="form-control" id="Age" placeholder="Age"
                                onChange={formik.handleChange}
                                values={formik.values.Age} />

                        </div>
                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" id="Email" placeholder="Email"
                                onChange={formik.handleChange}
                                values={formik.values.Email} />

                        </div>
                        <div class="form-floating mb-3 mt-3">
                            <input type="Number" class="form-control" id="Phone" placeholder="Phone Number"
                                onChange={formik.handleChange}
                                values={formik.values.Phone} />

                        </div>
                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" id="Profile" placeholder="Choose your Profile Name"
                                onChange={formik.handleChange}
                                values={formik.values.Profile} />

                        </div>
                        <div class="form-floating mb-3 mt-3">
                            <input type="password" class="form-control" id="Password" placeholder="Password"
                                onChange={formik.handleChange}
                                values={formik.values.Password} />

                        </div>
                        <div className="col-lg-6 mt-3">
                            <input type="submit" className='btn btn-primary btn-sm'>
                            </input>

                        </div>

                    </div>
                </form>

                <form onClick={formik.values.handleReset} >
                    <div className="col-lg-6 mt-3">
                        <button id="clear" className='btn btn-danger btn-sm'
                            onClick={function (e) {
                                return formik.values.handleReset(e)
                            }} >Clear</button>

                    </div>
                </form>
            </div>



        </>
    )
}

export default Createuser
