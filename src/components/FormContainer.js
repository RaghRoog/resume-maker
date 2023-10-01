import { useState } from "react"

export default function FormContainer({section, deleteSection, input, setInput}) {

    function getInput(inputType, id, key, value, setFunc){
        let index = inputType.findIndex(obj => obj.id == id)
        if(index != -1){
            inputType[index][key] = value
        }else{
            setFunc([...inputType, {id: id, [key]: value}])
        }
    }

    return(
        <div id={section.id} className="form-container">
            <form>
                <div className="input-container">
                    <label htmlFor={`${section.name}${section.id}`}>{section.labels[0]}</label>
                    <input onChange={(e)=>getInput(input, section.id, section.labels[0],
                        e.target.value, setInput)} type="text"
                        id={`${section.name}${section.id}`} 
                    />
                </div>
                {section.name != 'course' ? (<div className="input-container">
                    <label htmlFor={`${section.name}City${section.id}`}>City</label>
                    <input onChange={(e)=>getInput(input, section.id, 'City', 
                        e.target.value, setInput)} type="text" 
                        id={`${section.name}City${section.id}`} 
                    />
                </div>) : null}
                <div className="input-container">
                    <label htmlFor={`${section.name}${section.id}`}>{section.labels[1]}</label>
                    <input onChange={(e)=>getInput(input, section.id, section.labels[1], 
                        e.target.value, setInput)} type="text" 
                        id={`${section.name}${section.id}`} 
                    />
                </div>
                <div className="input-container">
                    <label htmlFor={`${section.name}Start${section.id}`}>Start date</label>
                    <input onChange={(e)=>getInput(input, section.id, 'StartDate', 
                        e.target.value, setInput)} type="month" 
                        id={`${section.name}Start${section.id}`} 
                    />
                </div>
                <div className="input-container">
                    <label htmlFor={`${section.name}End${section.id}`}>End date</label>
                    <input onChange={(e)=>getInput(input, section.id, 'EndDate', 
                        e.target.value, setInput)} type="month" 
                        id={`${section.name}End${section.id}`} 
                    />
                </div>
                <div className="input-container">
                    <label htmlFor={`${section.name}Desc${section.id}`}>Description</label>
                    <textarea onChange={(e)=>getInput(input, section.id, 'desc', 
                        e.target.value, setInput)} id={`${section.name}Desc${section.id}`}>
                    </textarea>
                </div>
            </form>
            <button onClick={()=>deleteSection(section.id, section.name)} 
                className="delete-btn">Delete
            </button>
        </div>
    )
}