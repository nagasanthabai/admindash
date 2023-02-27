import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Userlist() {
    // const [timer, setTimer] = useState(0);

    const [userlist, setUserlist] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const users = await axios.get("https://62b6abce42c6473c4b4653d7.mockapi.io/users")
            setUserlist(users.data);
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    // delete button function

    let handleDelete = async (id) => {
        try {
            const deleteData = window.confirm("Are you sure  do you want delete this Data ?");
            if (deleteData) {
                await axios.delete(`https://62b6abce42c6473c4b4653d7.mockapi.io/users/${id}`);
            }
            getUsers();  // after delete the data page will refresh automatically
        } catch (error) {
            alert("Something Went Wrong");
            console.log(error);
        }
    }

    return (
        <>
            {/* <button type="" onClick={() => { setTimer(timer + 1) }}>click</button>
            {timer} */}

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">User-list</h1>
                <Link to="/portal/create-user" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
            </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    {
                        isLoading ? <img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif" alt="Please Wait 😊 ..." /> : <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>E-MAIL</th>
                                        <th>COUNTRY</th>
                                        <th>STATE</th>
                                        <th>CITY</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>E-MAIL</th>
                                        <th>COUNTRY</th>
                                        <th>STATE</th>
                                        <th>CITY</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>

                                    {userlist.map((user, index) => {
                                        return <tr key={index}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.country}</td>
                                            <td>{user.state}</td>
                                            <td>{user.city}</td>
                                            <td>
                                                <Link to={`/portal/user-view/${user.id}`} className='btn btn-primary btn-sm mr-1 mt-1'>View</Link>
                                                <Link to={`/portal/user-edit/${user.id}`} className='btn btn-info btn-sm mr-1 mt-1'>Edit</Link>
                                                <button onClick={() => handleDelete(user.id)} className='btn btn-danger btn-sm mr-1 mt-1'>Delete</button>
                                            </td>
                                        </tr>
                                    })}

                                </tbody>
                            </table>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default Userlist