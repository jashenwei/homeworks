import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    const priorityClass = s[props.affair.priority]
    return (
        <div>
            <div className={s.affair}>
                <div className={s.item}>
                    <div className={priorityClass}>
                        {props.affair.name}
                        <button onClick={deleteCallback} className={s.buttonFromItem}>X</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Affair
