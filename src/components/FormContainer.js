
export default function FormContainer({section, deleteSection}) {

    return(
        <div className="form-container">
            <form key={section.id}>
                <div className="input-container">
                    <label htmlFor={`${section.name}${section.id}`}>{section.labels[0]}</label>
                    <input type="text" name={`${section.name}${section.id}`} id={`${section.name}${section.id}`} />
                </div>
                {section.name != 'course' ? (<div className="input-container">
                    <label htmlFor={`${section.name}City${section.id}`}>City</label>
                    <input type="text" name={`${section.name}City${section.id}`} id={`${section.name}City${section.id}`} />
                </div>) : null}
                
                <div className="input-container">
                    <label htmlFor={`employer${section.id}`}>{section.labels[1]}</label>
                    <input type="text" name={`employer${section.id}`} id={`employer${section.id}`} />
                </div>
                <div className="input-container">
                    <label htmlFor={`${section.name}Start${section.id}`}>Start date</label>
                    <input type="date" name={`${section.name}Start${section.id}`} id={`${section.name}Start${section.id}`} />
                </div>
                <div className="input-container">
                    <label htmlFor={`${section.name}End${section.id}`}>End date</label>
                    <input type="date" name={`${section.name}End${section.id}`} id={`${section.name}End${section.id}`} />
                </div>
                <div className="input-container">
                    <label htmlFor={`${section.name}Desc${section.id}`}>Description</label>
                    <textarea id={`${section.name}Desc${section.id}`} name={`${section.name}Desc${section.id}`}></textarea>
                </div>
            </form>
            <button onClick={()=>deleteSection(section.id, section.name)} className="delete-btn">Delete</button>
        </div>
    )
}