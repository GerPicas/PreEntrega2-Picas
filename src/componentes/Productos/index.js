import React from "react";
import IMG from "../../img/Margarita.jpeg";
import IMG2 from "../../img/argenta.jpg";
import IMG3 from "../../img/calabresa.jpg";
import IMG4 from "../../img/Cheesburguer.jpg";
import IMG5 from "../../img/Napolitana.jpg";
import IMG6 from "../../img/primavera.jpg";
import IMG7 from "../../img/vegana.jpg";

export const ProductosLista = () => {
    return (
        <>
            <h1 className="title">Alimentos</h1>
            <div className="productos">
                <div className="producto">
                    <a>
                        <div className="productosImg">
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className="productosFooter">
                        <h1>Margarita</h1>
                        <p>Pizza</p>
                        <p className="price">$1000</p>
                    </div>
                    <div className="bottom">
                        <button className="btn">
                            Añadir al carro 
                        </button>
                        <div>
                        <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
                <div className="producto">
                    <a>
                        <div className="productosImg">
                            <img src={IMG2} alt="" />
                        </div>
                    </a>
                    <div className="productosFooter">
                        <h1>Argenta</h1>
                        <p>Hamburguesa</p>
                        <p className="price">$1500</p>
                    </div>
                    <div className="bottom">
                        <button className="btn">
                            Añadir al carro 
                        </button>
                        <div>
                        <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
                <div className="producto">
                    <a>
                        <div className="productosImg">
                            <img src={IMG3} alt="" />
                        </div>
                    </a>
                    <div className="productosFooter">
                        <h1>Calabresa</h1>
                        <p>Pizza</p>
                        <p className="price">$1200</p>
                    </div>
                    <div className="bottom">
                        <button className="btn">
                            Añadir al carro 
                        </button>
                        <div>
                        <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
                <div className="producto">
                    <a>
                        <div className="productosImg">
                            <img src={IMG4} alt="" />
                        </div>
                    </a>
                    <div className="productosFooter">
                        <h1>Cheesburguer</h1>
                        <p>Hamburguesa</p>
                        <p className="price">$1200</p>
                    </div>
                    <div className="bottom">
                        <button className="btn">
                            Añadir al carro 
                        </button>
                        <div>
                        <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
                <div className="producto">
                    <a>
                        <div className="productosImg">
                            <img src={IMG5} alt="" />
                        </div>
                    </a>
                    <div className="productosFooter">
                        <h1>Napolitana</h1>
                        <p>Pizza</p>
                        <p className="price">$1200</p>
                    </div>
                    <div className="bottom">
                        <button className="btn">
                            Añadir al carro 
                        </button>
                        <div>
                        <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
                <div className="producto">
                    <a>
                        <div className="productosImg">
                            <img src={IMG6} alt="" />
                        </div>
                    </a>
                    <div className="productosFooter">
                        <h1>Primavera</h1>
                        <p>Pizza</p>
                        <p className="price">$1200</p>
                    </div>
                    <div className="bottom">
                        <button className="btn">
                            Añadir al carro 
                        </button>
                        <div>
                        <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
                <div className="producto">
                    <a>
                        <div className="productosImg">
                            <img src={IMG7} alt="" />
                        </div>
                    </a>
                    <div className="productosFooter">
                        <h1>Vegana</h1>
                        <p>Pizza</p>
                        <p className="price">$1200</p>
                    </div>
                    <div className="bottom">
                        <button className="btn">
                            Añadir al carro 
                        </button>
                        <div>
                        <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </>
    );
};