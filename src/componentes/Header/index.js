import React from "react";

export const Header = () => {
    return (
        <header>
            <a href="#">
                <div className="logo">
                   <a>Pizza vs Patys</a>
                </div>
            </a>
            <ul>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Alimentos</a>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="itemTotal">0</span>
            </div>
        </header>
    )
}