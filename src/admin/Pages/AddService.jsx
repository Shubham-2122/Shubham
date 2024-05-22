import React, { useState } from 'react'
import AHeader from '../Comon_cpomnent/AHeader'
import AFooter from '../Comon_cpomnent/AFooter'
import axios from 'axios'

function AddService() {

    const [formvalue, setfromvalue] = useState({
        id: "",
        service_name: "",
        desc: "",
        ser_img: ""
    })
    const onchangehandle = (e) => {
        setfromvalue({
            ...formvalue,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value,
        })
        console.log(formvalue)
    }

    const submithandle = async (e) => {
        e.preventDefault()

        const res = await axios.post(`http://localhost:3000/service`, formvalue)
        console.log(res)
        setfromvalue({
            ...formvalue,
            id: "",
            service_name: "",
            desc: "",
            ser_img: ""
        })
    }
    return (
        <div>
            <AHeader />
            <div className="col-lg-12 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                <div className="p-lg-5 pe-lg-0">
                    <div className="section-title text-start">
                        <h1 className="display-5 mb-4">Add service</h1>
                    </div>
                    <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                    <form onSubmit={submithandle}>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6">
                                <input name="service_name" value={formvalue.service_name} onChange={onchangehandle} type="text" className="form-control border-0" placeholder="add service" style={{ height: 55 }} />
                            </div>
                            <div className="col-12 col-sm-6">
                                <input onChange={onchangehandle} name="ser_img" value={formvalue.ser_img} type="url" className="form-control border-0" placeholder="add image" style={{ height: 55 }} />
                            </div>

                            <div className="col-12">
                                <textarea onChange={onchangehandle} name="desc" value={formvalue.desc} className="form-control border-0" placeholder="add descrition" defaultValue={""} />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <AFooter />

        </div>
    )
}

export default AddService
