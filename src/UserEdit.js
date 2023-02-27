import axios from 'axios';
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UserEdit() {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
    const params = useParams();

    const myFormik = useFormik({
        initialValues: {
            username: "",
            email: "",
            country: "",
            state: "",
            city: ""
        },
        validate: (values) => {
            let errors = {};

            if (!values.username) {
                errors.username = "Please Enter the Username"
            } else if (values.username.length < 3) {
                errors.username = "Length should be Greater than 3"
            } else if (values.username.length > 15) {
                errors.username = "Length should be Less than 15"
            }

            if (!values.email) {
                errors.email = "Please Enter the Email"
            }
            // (using regular expression we do it email validate)
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Please Enter valid Email"
            }

            if (!values.country) {
                errors.country = "Please Enter the country"
            }

            if (!values.state) {
                errors.state = "Please Enter the state"
            }

            if (!values.city) {
                errors.city = "Please Enter the city"
            }

            return errors;
        },
        onSubmit: async (values) => {
            try {
                setLoading(true)
                await axios.put(`https://62b6abce42c6473c4b4653d7.mockapi.io/users/${params.id}`, values);
                setLoading(false)
                navigate("/portal/userlist")
            } catch (error) {
                alert("Something Went Wrong...😐")
                console.log(error);
            }
        }
    });

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        try {
            const user = await axios.get(`https://62b6abce42c6473c4b4653d7.mockapi.io/users/${params.id}`)
            myFormik.setValues(user.data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div>Edit User - {params.id}</div> <br />
            <div className='container'>
                <form onSubmit={myFormik.handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label for="">Name</label>
                            <input type="text" name='username' value={myFormik.values.username}
                                onChange={myFormik.handleChange} className={`form-control ${myFormik.errors.username ? 'is-invalid' : 'is-valid'}`} />
                            <span style={{ color: "red" }}>{myFormik.errors.username}</span>
                        </div>
                        <div className='col-lg-6'>
                            <label for="">E-Mail</label>
                            <input type="text" name='email' value={myFormik.values.email}
                                onChange={myFormik.handleChange} className={`form-control ${myFormik.errors.email ? 'is-invalid' : 'is-valid'}`} />
                            <span style={{ color: "red" }}>{myFormik.errors.email}</span>
                        </div>
                        <div className='col-lg-4'>
                            <label for="">Country</label>
                            <input type="text" name='country' value={myFormik.values.country}
                                onChange={myFormik.handleChange} className={`form-control ${myFormik.errors.country ? 'is-invalid' : 'is-valid'}`} />
                            <span style={{ color: "red" }}>{myFormik.errors.country}</span>
                        </div><div className='col-lg-4'>
                            <label for="">State</label>
                            <input type="text" name='state' value={myFormik.values.state}
                                onChange={myFormik.handleChange} className={`form-control ${myFormik.errors.state ? 'is-invalid' : 'is-valid'}`} />
                            <span style={{ color: "red" }}>{myFormik.errors.state}</span>
                        </div><div className='col-lg-4'>
                            <label for="">City</label>
                            <input type="text" name='city' value={myFormik.values.city}
                                onChange={myFormik.handleChange} className={`form-control ${myFormik.errors.city ? 'is-invalid' : 'is-valid'}`} />
                            <span style={{ color: "red" }}>{myFormik.errors.city}</span>
                        </div>

                        {/* <div className='col-lg-4'>
                            <label for="">Country</label>
                            <select name='country' value={myFormik.values.country}
                                onChange={myFormik.handleChange} className={`form-control ${myFormik.errors.country ? 'is-invalid' : 'is-valid'}`}>
                                <option value={""}>---Select---</option>
                                <option value={"IN"}>India</option>
                                <option value={"USA"}>United States Of America</option>
                            </select>
                            <span style={{ color: "red" }}>{myFormik.errors.country}</span>
                        </div>
                        <div className='col-lg-4'>
                            <label for="">State</label>
                            <select name='state' value={myFormik.values.state}
                                onChange={myFormik.handleChange} className={`form-control ${myFormik.errors.state ? 'is-invalid' : 'is-valid'}`}>
                                <option value={""}>---Select---</option>
                                <option value={"TN"}>Tamilnadu</option>
                                <option value={"KL"}>Kerala</option>
                                <option value={"NY"}>New York</option>
                                <option value={"WN"}>Washington</option>
                            </select>
                            <span style={{ color: "red" }}>{myFormik.errors.state}</span>
                        </div>
                        <div className='col-lg-4'>
                            <label for="">City</label>
                            <select name='city' value={myFormik.values.city}
                                onChange={myFormik.handleChange} className={`form-control ${myFormik.errors.city ? 'is-invalid' : 'is-valid'}`}>
                                <option value={""}>---Select---</option>
                                <option value={"CH"}>Chennai</option>
                                <option value={"KC"}>Kochi</option>
                                <option value={"C1"}>US City 1</option>
                                <option value={"C2"}>US City 2</option>
                            </select>
                            <span style={{ color: "red" }}>{myFormik.errors.city}</span>
                        </div> */}

                        <div className='col-lg-3 mt-3'>
                            <input type="submit" disabled={isLoading} value={isLoading ? "Updating..." : "Update"} className='btn btn-primary' />
                        </div>

                        {/* <code>
                        {JSON.stringify(myFormik.values)}
                    </code> */}

                    </div>
                </form>
            </div>
        </>
    )
}

export default UserEdit