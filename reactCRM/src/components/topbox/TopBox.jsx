import "./topBox.scss"
import { Sellers } from "../../data.js"
import React from "react";


export function TopBox() {
    return (
        <>
        <div className="topBox">
            <h2>Top Sellers</h2>
            <div className="list">
                {Sellers.map(seller=>(
                    <div className="listItem" key={seller.id}>
                        <div className="customer">
                            <img src={seller.img} alt="" />
                            <div className="customerText">
                                <span className="username">{seller.username}</span>
                                <span className="email">{seller.email}</span>
                            </div>
                        </div>
                        <span className="amount">${seller.amount}</span>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}