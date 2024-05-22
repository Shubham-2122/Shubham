import React, { useEffect, useState } from 'react'
import AHeader from '../Comon_cpomnent/AHeader'
import AFooter from '../Comon_cpomnent/AFooter'
import axios from 'axios'

function Manageservice() {
    useEffect(() => {
        fetch()
    }, [])

    const [data1, setdata1] = useState()

    // Edit option
    const [editingService, setEditingService] = useState(null);
    const [editedService, setEditedService] = useState({
        id: '',
        service_name: '',
        desc: '',
        ser_img:''
    });

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/service`)
        console.log(res.data)
        setdata1(res.data)
    }

    //delete 
    const deletehandle = async (id) => {
        const res = await axios.delete(`http://localhost:3000/service/${id}`)
        fetch()
    }


    // edit update
    const editService = (service) => {
        setEditingService(service);
        setEditedService(service);
    };

    const saveEditedService = async () => {
        try {
            await axios.put(`http://localhost:3000/service/${editingService.id}`, editedService);
            fetch(); // Refresh data after editing
            setEditingService(null);
        } catch (error) {
            console.error("Error editing service:", error);
        }
    };

    return (
        <div>
            <AHeader />
            <div className="container">
                <h1 className='text-center'>Manage service</h1>
                <table className="table my-5">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">service_name</th>
                            <th scope="col">Desc</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data1 && data1.map((value, index) => {
                                return (
                                    <tr>
                                        <th scope="row" key={index}>{value.id}</th>
                                        <td>{value.service_name}</td>
                                        <td>{value.desc}</td>
                                        <td>
                                            <button className='btn btn-primary'>view</button>
                                            <button className='btn btn-success mx-3' onClick={() => editService(value)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => { deletehandle(value.id) }}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                {/* Edit Form or Modal */}
                {editingService && (
                    <div className="edit-form">
                        <div className="col-lg-12 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 pe-lg-0">
                                <div className="section-title text-start">
                                    <h1 className="display-5 mb-4">Edit service</h1>
                                </div>
                                <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                                <form >
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input type="text" value={editedService.service_name}
                                                onChange={(e) => setEditedService({ ...editedService, service_name: e.target.value })} className="form-control border-0" placeholder="update service" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            
                                            <input value={editedService.ser_img} onChange={(e)=> setEditedService({...editedService,ser_img:e.target.value})} type="url" className="form-control border-0" placeholder="update image" style={{ height: 55 }} />
                                        </div>

                                        <div className="col-12">
                                            <textarea value={editedService.desc}
                                                onChange={(e) => setEditedService({ ...editedService, desc: e.target.value })} className="form-control border-0" placeholder="update descrition" defaultValue={""} />
                                        </div>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-6">
                                                    <button className="btn btn-primary w-100 py-3" onClick={saveEditedService} type="submit">Update</button>
                                                </div>
                                                <div className="col-6">
                                                    <button className="btn btn-primary w-100 py-3" onClick={() => setEditingService(null)}>Cancel</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                )}
            </div>

            <AFooter />
        </div>
    )
}

export default Manageservice
