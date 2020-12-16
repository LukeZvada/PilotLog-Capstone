import React, { useContext, useEffect, useState } from "react"
import { FlightLogContext } from "./FlightLogProvider"
import "./FlightLogDashboard.css"


export const FlightLogList = (props) => {
    const { flights, getFlights } = useContext(FlightLogContext)

    // const currentUserId = parseInt(localStorage.getItem("tourVana_username"))

    useEffect(() => {
        getFlights()
    }, [])

    return (
        <section className="flightlog-card">
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text"></p>
                    <a href="#" className="card-link">View Full Log</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text"></p>
                    <a href="#" className="card-link">View Full Log</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text"></p>
                    <a href="#" className="card-link">View Full Log</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text"></p>
                    <a href="#" className="card-link">View Full Log</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text"></p>
                    <a href="#" className="card-link">View Full Log</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text"></p>
                    <a href="#" className="card-link">View Full Log</a>
                </div>
            </div>
        </section>
        
    )
}
