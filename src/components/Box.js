
import React,{useState} from "react"

const Box = props => {
    const {colors} = props
    const updateColor = (e) => {
        e.preventDefault()
        props.setColor(e.target.colorInput.value)
        e.target.colorInput.value = ""
    }

    return (
        <div>
            <div>
                <form onSubmit = {updateColor}>
                <label>Color</label>
                <input id = "colorInput" type="text"></input>
                <input type="submit"></input>
                </form>
            </div>
            <div className = "flex">
            {colors.map((color) => <div className = "box" style={{background: color}}></div>)}
            </div>
        </div>
    )
}
export default Box