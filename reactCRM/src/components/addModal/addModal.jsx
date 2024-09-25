import React from "react";
import "./addModal.scss"

const props = {
    setOpen: Boolean,
    columns: [],
    heading: ""
}

export default function AddModal(props) {
    const handleSubmit = (e) => {
        e.preventDefault()

        //add
    }

    return (
        <div className="addModal">
            <div className="modal">
                <span className="title">Add New {props.heading}</span>
                <span className="close" onClick={() => props.setOpen(false)}>X</span>             
                <form onSubmit={handleSubmit}>
                    {props.columns.filter(item => item.field !== "id" && item.field !== "img").map(columns => (
                        <div className="item">
                            <label>{columns.headerName}</label>
                            <input type={columns.type}></input>
                        </div>
                    ))}
                    <button>Add {props.slug}</button>
                </form>
            </div>
        </div>
    )
}