import { useState } from "react"
import FormContainer from "./FormContainer"

export default function InputSection({ getIsGenerated, getInputsData }) {

    //adding sections
    let [edu, setEdu] = useState([])
    let [job, setJob] = useState([])
    let [course, setCourse] = useState([])
    let [certificates, setCertificates] = useState([])
    let [skills, setSkills] = useState([])
    let [langs, setLangs] = useState([])
    let [links, setLinks] = useState([])

    function findNewId(array){
        let id = 0;
        if (array.length > 0) {
          id = Math.max(...array.map(item => item.id)) + 1;
        }
        return id;
    }

    function addSection(name, label1, label2) {
        let newId
        let section = { labels: [label1, label2], name: name  }
        switch(name){
            case 'job':
                newId  = findNewId(job)
                section.id = newId
                setJob([...job, section])
                break;
            case 'education':
                newId = findNewId(edu)
                section.id = newId
                setEdu([...edu, section])
                break;
            case 'course':
                newId = findNewId(course)
                section.id = newId
                setCourse([...course, section])
                break;
            case 'certificates':
                newId = findNewId(certificates)
                section.id = newId
                setCertificates([...certificates, section])
                break;
        }

    }

    function deleteSection(id, name){
        switch(name){
            case 'job':
                setJob(job.filter(item => item.id != id))
                setJobInput(jobInput.filter(item => item.id != id))
                break;
            case 'education':
                setEdu(edu.filter(item => item.id != id))
                setEduInput(eduInput.filter(item => item.id != id))
                break;
            case 'course':
                setCourse(course.filter(item => item.id != id))
                setCoursesInput(coursesInput.filter(item => item.id != id))
                break;
            case 'certificates':
                setCertificates(certificates.filter(item => item.id != id))
                setCertificatesInput(certificatesInput.filter(item => item.id != id))
                break;
        }
    }

    function addSkillOrLang(type){
        let newId
        let newItem
        switch(type){
            case 'skill':
                newId = findNewId(skills)
                newItem = {id: newId}
                setSkills([...skills, newItem])
                break;
            case 'lang':
                newId = findNewId(langs)
                newItem = {id: newId}
                setLangs([...langs, newItem])
                break;
        }
        
    }

    function deleteSkillOrLang(id, type){
        switch(type){
            case 'skill':
                setSkills(skills.filter(skill => skill.id != id))
                setSkillsInput(skillsInput.filter(skill => skill.id != id))
                break;
            case 'lang':
                setLangs(langs.filter(lang => lang.id != id))
                setLangsInput(langsInput.filter(lang => lang.id != id))
                break;
        }
        
    }

    function addLink(){
        let newId = findNewId(links)
        let newLink = {id: newId}
        setLinks([...links, newLink])
    }

    function deleteLink(id){
        setLinks(links.filter(link => link.id != id))
        setLinksInput(linksInput.filter(link => link.id != id))
    }

    //taking user input
    //details
    let [detailsInput, setDetailsInput] = useState({
        fname: '',
        lname: '',
        email: '',
        tel: '',
        address: '',
        city: '',
        country: ''
    })
    function getDetails(key, value){
        setDetailsInput({...detailsInput, [key]: value})
    }
    //about you
    let [aboutInput, setAboutInput] = useState('')
    //certificates 
    let [certificatesInput, setCertificatesInput] = useState([])
    function getCertificates(id, value){
        let newCertificate = {id: id, cert: value}
        let index = certificatesInput.findIndex(obj => obj.id === id)
        if(index != -1){
            certificatesInput[index] = newCertificate
        }else{
            setCertificatesInput([...certificatesInput, newCertificate])
        }
    }
    //skills and languages
    let [skillsInput, setSkillsInput] = useState([])
    let [langsInput, setLangsInput] = useState([])
    function getInputName(id, value, inputType){
        let index
        switch(inputType){
            case 'skills':
                index = skillsInput.findIndex(obj => obj.id == id)
                if(index != -1){
                    skillsInput[index].skillName = value
                }else{
                    setSkillsInput([...skillsInput, {id: id, skillName: value}])
                }
                break
            case 'langs':
                index = langsInput.findIndex(obj => obj.id == id)
                if(index != -1){
                    langsInput[index].language = value
                }else{
                    setLangsInput([...langsInput, {id: id, language: value}])
                }
                break
        }
        
    }
    function getInputLvl(id, value, inputType){
        let index
        switch(inputType){
            case 'skills':
                index = skillsInput.findIndex(obj => obj.id == id)
                if(index != -1){
                    skillsInput[index].skillLvl = value
                }else{
                    setSkillsInput([...skillsInput, {id: id, skillLvl: value}])
                }
                break
            case 'langs':
                index = langsInput.findIndex(obj => obj.id == id)
                if(index != -1){
                    langsInput[index].langLvl = value
                }else{
                    setLangsInput([...langsInput, {id: id, langLvl: value}])
                }
                break
        }

    }
    //links
    let [linksInput, setLinksInput] = useState([])
    function getLink(id, value, type){
        let index = linksInput.findIndex(obj => obj.id == id)
        if(index != -1){
            linksInput[index][type] = value
        }else{
            setLinksInput([...linksInput, {id: id, [type]: value}])
        }
    }
    //taking input from FormContainer component
    let [eduInput, setEduInput] = useState([])
    let [jobInput, setJobInput] = useState([])
    let [coursesInput, setCoursesInput] = useState([])

    function generateResume(){
        getIsGenerated(true)
        let inputData = {
            details: detailsInput,
            about: aboutInput,
            certificates: certificatesInput,
            skills: skillsInput,
            languages: langsInput,
            links: linksInput,
            edu: eduInput,
            job: jobInput,
            courses: coursesInput
        }
        console.log(inputData)
        getInputsData(inputData)
    }

    return(
        <div id="inputSection" className="input-section container">
            <h3>Personal details</h3>
            <div className="form-container">
                <form>
                    <div className="input-container">
                        <label htmlFor="photo">Photo</label>
                        <input type="file" accept="image/*" id="photo" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="fname">First name</label>
                        <input onChange={(e)=>getDetails('fname', e.target.value)} type="text" id="fname" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="lname">Last name</label>
                        <input onChange={(e)=>getDetails('lname', e.target.value)} type="text" id="lname" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input onChange={(e)=>getDetails('email', e.target.value)} type="email" id="email" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="phone">Phone</label>
                        <input onChange={(e)=>getDetails('tel', e.target.value)} type="tel" id="phone" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="address">Address</label>
                        <input onChange={(e)=>getDetails('address', e.target.value)} type="text" id="address" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="city">City</label>
                        <input onChange={(e)=>getDetails('city', e.target.value)} type="text" id="city" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="country">Country</label>
                        <input onChange={(e)=>getDetails('country', e.target.value)} type="text" id="country" />
                    </div>
                </form>
            </div>
            <h3>About you</h3>
            <div className="form-container">
                <small>Max 500 characters</small>
                <textarea onChange={(e)=>setAboutInput(e.target.value)} id="about" 
                 cols="30" rows="10" maxLength={"500"} style={{width: '100%', height: '150px'}}></textarea>
            </div>
            <h3>Education</h3>
            {edu.map(section => (
                <FormContainer key={section.id} section={section} deleteSection={deleteSection} 
                    input={eduInput} setInput={setEduInput}
                />
            ))}
            <button onClick={()=>addSection('education', 'School', 'Degree')} 
                className="btn-secondary">Add education
            </button>
            <h3>Employment history</h3>
            {job.map(section => (
                <FormContainer key={section.id} section={section} deleteSection={deleteSection} 
                    input={jobInput} setInput={setJobInput}
                />
            ))}
            <button onClick={()=>addSection('job', 'Job title', 'Employer')} 
                className="btn-secondary">Add employement
            </button>
            <h3>Courses</h3>
            {course.map(section => (
                <FormContainer key={section.id} section={section} deleteSection={deleteSection} 
                    input={coursesInput} setInput={setCoursesInput}
                />
            ))}
            <button onClick={()=>addSection('course', 'Course', 'Institution')} 
                className="btn-secondary">Add course
            </button>
            <h3>Certificates</h3>
            {certificates.map(section => (
                <div key={section.id} className="form-container">
                    <small>Max 100 characters</small>
                    <textarea onChange={(e)=>getCertificates(section.id, e.target.value)} id="about" 
                     cols="30" rows="10" maxLength={"100"} style={{width: '100%', height: '50px'}}></textarea>
                    <button onClick={()=> deleteSection(section.id, 'certificates')} className="delete-btn">Delete</button>
                </div>
            ))}
            <button onClick={()=>addSection('certificates', '', '')} 
                className="btn-secondary">Add certificate
            </button>
            <h3>Skills</h3>
            <div className="container" style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
                {skills.map(skill => (
                    <div key={skill.id} className="form-container" style={{width: 'fit-content'}}>
                        <form>
                            <input onChange={(e)=>getInputName(skill.id, e.target.value, 'skills')} 
                                type="text" style={{minWidth: '150px'}}
                            />
                            <select onChange={(e)=>getInputLvl(skill.id, e.target.value, 'skills')} 
                                name="skillLvl" id="sklil"
                            >
                                <option>Choose your level</option>
                                <option value="Basics">Basics</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                                <option value="Expert">Expert</option>
                            </select>
                        </form>
                        <button onClick={()=>deleteSkillOrLang(skill.id, 'skill')} className="delete-btn">Delete</button>
                    </div>
                ))}
            </div>
            <button onClick={()=>addSkillOrLang('skill')} className="btn-secondary">Add skill</button>
            <h3>Languages</h3>
            <div className="container" style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
                {langs.map(lang => (
                    <div key={lang.id} className="form-container" style={{width: 'fit-content'}}>
                        <form>
                            <input onChange={(e)=>getInputName(lang.id, e.target.value, 'langs')} 
                                type="text" 
                            />
                            <select onChange={(e)=>getInputLvl(lang.id, e.target.value, 'langs')} 
                                id="lang" style={{minWidth: '150px'}}
                            >
                                <option>Choose your level</option>
                                <option value="Basics">Basics</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                                <option value="Expert">Expert</option>
                            </select>
                        </form>
                        <button onClick={()=>deleteSkillOrLang(lang.id, 'lang')} className="delete-btn">Delete</button>
                    </div>
                ))}
            </div>
            <button onClick={()=>addSkillOrLang('lang')} className="btn-secondary">Add language</button>
            <h3>Links</h3>
                {links.map(link => (
                    <div key={link.id} className="form-container">
                        <form style={{flexWrap: 'nowrap', flexDirection: 'column'}}>
                            <div className="input-container">
                                <label htmlFor={'linkName' + link.id}>Page name</label>
                                <input onChange={(e)=>getLink(link.id, e.target.value, 'name')} 
                                    type="text" name={'linkName' + link.id} 
                                    id={'linkName' + link.id} 
                                />
                            </div>
                            <div className="input-container">
                                <label htmlFor={'link' + link.id}>Link</label>
                                <input onChange={(e)=>getLink(link.id, e.target.value, 'link')} 
                                    type="text" name={'link' + link.id} 
                                    id={'link' + link.id} 
                                />
                            </div>
                        </form>
                        <button onClick={()=> deleteLink(link.id)} className="delete-btn">Delete</button>
                    </div>
                ))}
            <button onClick={addLink} className="btn-secondary">Add link</button>
            <div className="container" style={{display:'flex', justifyContent:'center'}}>
                <button onClick={generateResume} className="btn-primary">Generate resume</button>
            </div>
        </div>
    )
}