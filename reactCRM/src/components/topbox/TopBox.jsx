import "./topBox.scss"
import { Customers } from "../../data.js"
import React from "react";


export function TopBox() {
    return (
        <>
        <div className="topBox">
            <h2>Top Customers</h2>
            <div className="list">
                {Customers.map(customer=>(
                    <div className="listItem" key={customer.id}>
                        <div className="customer">
                            <img src={customer.img} alt="" />
                            <div className="customerText">
                                <span className="username">{customer.username}</span>
                                <span className="email">{customer.email}</span>
                            </div>
                        </div>
                        <span className="amount">${customer.amount}</span>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}