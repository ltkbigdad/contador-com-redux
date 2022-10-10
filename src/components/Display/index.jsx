import { useSelector } from "react-redux"

export const Display = () =>{

    const result = useSelector(store => store.result)

    return(
        <div>
            <p>Contador atual</p>
            <p>{result}</p>
        </div>
    )
}