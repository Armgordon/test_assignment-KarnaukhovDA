import React, {useEffect, useState} from 'react';
import classes from "./AssignmentList.module.scss";





const AssignmentList = () => {
    const [showTask, setShowTask] = useState(false)

    function showAssignment(){
        setShowTask(prevState => {
            return !prevState
        })
    }

    useEffect(()=>{

    },[showTask])


    return (
        <div
            className={`${classes.AssignmentList} ${showTask ? classes.AssignmentList_shown : ''} `}
            onClick={showAssignment}
        >
            {showTask
                ? (<>
                    <h2>Требуется спроектировать модуль отображения заявок на перевозку.</h2>

                    <p>Надо создать произвольный набор заявок и точек погрузки/разгрузки. Реализовать экранную форму, в которой слева будет таблица со списком заявок, а справа карта.
                        При выборе в таблице строки с заявкой выбранная строка должна подсветиться, а на карте отобразиться точки погрузки и разгрузки заявки в виде маркеров и полилиния трека движения между этими точками, полученная из произвольного сервиса построения треков по дорогам. Точки погрузки/разгрузки заявок в таблице должны быть редактируемыми (в виде селекта из справочника точек). Граница между таблицей и картой должна быть изменяемая с помощью мышки (перемещается влево и вправо). Столбцы таблицы должны иметь минимальную ширину, при недостатке места для отображения таблицы с учетом минимальной ширины столбцов, таблица должна получить возможность горизонтальной прокрутки.
                    </p>

                    <p>В качестве основы приложения желательно использовать React create app. Не использовать классы, только функциональные компоненты.
                        <ul>
                            <li>для отображения карты желательно использовать пакет Leaflet</li>
                            <li>для компонетов — AntdDesign</li>
                            <li>для хранения стейта компонентов и данных — Redux</li>
                            <li>для реакции на события — Saga</li>
                        </ul>
                    </p>
                </>)
            : <h2>Кликни, чтобы посмотреть задание</h2>
            }


        </div>
    );
};

export default AssignmentList;