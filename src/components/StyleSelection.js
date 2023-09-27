import { useEffect, useState } from "react"


export default function StyleSelection({ getTemplate }) {

    let [template, setTemplate] = useState(0)
    let [isBtnDisabled, setIsBtnDisabled] = useState(true)

    function chooseTemplate(template) {
        setTemplate(template)
        getTemplate(template)
    }

    function selectedTemplate() {
        let templatesImgs = document.querySelectorAll('#template-img')
        templatesImgs.forEach(template => { template.classList.remove('template-selected') })
        if(template != 0){
            templatesImgs[template-1].classList.add('template-selected')
        }
    }

    function setBtnDisabled() {
        if (template != 0){
            setIsBtnDisabled(false)
        }
    }

    useEffect(() => {
        selectedTemplate()
        setBtnDisabled()
    }, [template])

    return(
        <div id="styleSelection" className="style-selectoin container">
            <h1>Choose your template</h1>
            <div className="img-container">
                <img id="template-img" onClick={()=> chooseTemplate(1)} src="imgs/templates/template1.png" alt="template 1" />
                <img id="template-img" onClick={()=> chooseTemplate(2)} src="imgs/templates/template2.png" alt="template 1" />
                <img id="template-img" onClick={()=> chooseTemplate(3)} src="imgs/templates/template3.png" alt="template 1" />
            </div>
            <a href="#inputSection"><button disabled={isBtnDisabled} className="btn-primary">Next</button></a>
        </div>
    )
}