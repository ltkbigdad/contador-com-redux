import { useDispatch } from "react-redux"
import { addNumber } from "../../store/modules/result/actions"
import { subNumber } from "../../store/modules/result/actions"
import "./style.css"

export const Counter = () =>{
    const dispatch = useDispatch()
    return(
        <div className="button_box">
            <button onClick={()=>dispatch(addNumber(1))}>Aumentar</button>
            <button onClick={()=>dispatch(subNumber(1))}>Diminuir</button>
        </div>
    )
}