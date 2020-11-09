import React from "react";
import style from './ChoiceRemovalVD.module.scss';

export default (props) => {

    return (


                        <div className="card-content white-text">
                            <span className="card-title">Построение векторной диаграммы</span>
                            <p>Выберите опорное напряжение</p>
                            <form action="#" className={style.fromVolt}>
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span className="white-text">Uab</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span className="white-text">Фазное напряжение</span>
                                    </label>
                                </p>
                            </form>
                        </div>


    )
}