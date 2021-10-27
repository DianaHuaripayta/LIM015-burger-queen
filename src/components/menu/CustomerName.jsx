import React from "react"
import {FaUser} from "react-icons/fa"
export function CustomerName() {
    return (
        <div className="form-group">
            <div className="form-group">
                <div className="input-group mb-3">
                    <span className="input-group-text"><FaUser/></span>
                    <input type="text" className="form-control" placeholder=" Nombre del cliente" />
                </div>
            </div>
        </div>
    )
}
