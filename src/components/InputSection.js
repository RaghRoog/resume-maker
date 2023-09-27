import { useState } from "react"
import FormContainer from "./FormContainer"

export default function InputSection() {

    let [edu, setEdu] = useState([])
    let [job, setJob] = useState([])
    let [course, setCourse] = useState([])
    let [certificates, setCertificates] = useState([])
    let [skills, setSkills] = useState([])
    let [langs, setLangs] = useState([])
    let [links, setLinks] = useState([])

    function addSection(name, label1, label2, sectionType) {
        let newId = sectionType.length + 1
        let section = { id: newId, labels: [label1, label2], name: name  }
        switch(name){
            case 'job':
                setJob([...job, section])
                break;
            case 'education':
                setEdu([...edu, section])
                break;
            case 'course':
                setCourse([...course, section])
                break;
            case 'certificates':
                setCertificates([...certificates, section])
                break;
        }

    }

    function deleteSection(id, name){
        switch(name){
            case 'job':
                setJob(job.filter(item => item.id != id))
                break;
            case 'education':
                setEdu(edu.filter(item => item.id != id))
                break;
            case 'course':
                setCourse(course.filter(item => item.id != id))
                break;
            case 'certificates':
                setCertificates(certificates.filter(item => item.id != id))
                break;
        }
    }

    function addSkillOrLang(type){
        let newId
        let newItem
        switch(type){
            case 'skill':
                newId = skills.length + 1
                newItem = {id: newId}
                setSkills([...skills, newItem])
                break;
            case 'lang':
                newId = langs + 1
                newItem = {id: newId}
                setLangs([...langs, newItem])
                break;
        }
        
    }

    function deleteSkillOrLang(id, type){
        switch(type){
            case 'skill':
                setSkills(skills.filter(skill => skill.id != id))
                break;
            case 'lang':
                setLangs(langs.filter(lang => lang.id != id))
                break;
        }
        
    }

    function addLink(){
        let newId = links.length + 1
        let newLink = {id: newId}
        setLinks([...links, newLink])
    }

    function deleteLink(id){
        setLinks(links.filter(link => link.id != id))
    }

    return(
        <div id="inputSection" className="input-section container">
            <h3>Personal details</h3>
            <div className="form-container">
                <form>
                    <div className="input-container">
                        <label htmlFor="photo">Photo</label>
                        <input type="file" accept="image/*" name="photo" id="photo" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="fname">First name</label>
                        <input type="text" name="fname" id="fname" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="lname">Last name</label>
                        <input type="text" name="lname" id="lname" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" name="phone" id="phone" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" id="address" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" id="city" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" id="country" />
                    </div>
                </form>
            </div>
            <h3>About you</h3>
            <div className="form-container">
                <small>Max 500 characters</small>
                <textarea name="about" id="about" 
                 cols="30" rows="10" maxLength={"500"} style={{width: '100%', height: '150px'}}></textarea>
            </div>
            <h3>Education</h3>
            {edu.map(section => (
                <FormContainer section={section} deleteSection={deleteSection}/>
            ))}
            <button onClick={()=>addSection('education', 'School', 'Degree', edu)} className="btn-secondary">Add education</button>
            <h3>Employment history</h3>
            {job.map(section => (
                <FormContainer section={section} deleteSection={deleteSection}/>
            ))}
            <button onClick={()=>addSection('job', 'Job title', 'Employer', job)} className="btn-secondary">Add employement</button>
            <h3>Courses</h3>
            {course.map(section => (
                <FormContainer section={section} deleteSection={deleteSection}/>
            ))}
            <button onClick={()=>addSection('course', 'Course', 'Institution', course)} className="btn-secondary">Add course</button>
            <h3>Certificates</h3>
            {certificates.map(section => (
                <div key={section.id} className="form-container">
                    <small>Max 100 characters</small>
                    <textarea name="about" id="about" 
                     cols="30" rows="10" maxLength={"100"} style={{width: '100%', height: '50px'}}></textarea>
                    <button onClick={()=> deleteSection(section.id, 'certificates')} className="delete-btn">Delete</button>
                </div>
            ))}
            <button onClick={()=>addSection('certificates', '', '', certificates)} className="btn-secondary">Add certificate</button>
            <h3>Skills</h3>
            <div className="container" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                {skills.map(skill => (
                    <div key={skill.id} className="form-container" style={{width: 'fit-content'}}>
                        <form style={{flexWrap: 'nowrap'}}>
                            <input type="text" />
                            <select name="skillLvl" id="sklil">
                                <option value="basics">Basics</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                                <option value="expert">Expert</option>
                            </select>
                        </form>
                        <button onClick={()=>deleteSkillOrLang(skill.id, 'skill')} className="delete-btn">Delete</button>
                    </div>
                ))}
            </div>
            <button onClick={()=>addSkillOrLang('skill')} className="btn-secondary">Add skill</button>
            <h3>Languages</h3>
            <div className="container" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                {langs.map(lang => (
                    <div key={lang.id} className="form-container" style={{width: 'fit-content'}}>
                        <form style={{flexWrap: 'nowrap'}}>
                            <input type="text" />
                            <select name="langLvl" id="lang">
                                <option value="basics">Basics</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                                <option value="expert">Expert</option>
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
                        <form style={{flexWrap: 'nowrap'}}>
                            <div className="input-container">
                                <label htmlFor={'linkName' + link.id}>Page name</label>
                                <input type="text" name={'linkName' + link.id} id={'linkName' + link.id} />
                            </div>
                            <div className="input-container">
                                <label htmlFor={'link' + link.id}>Link</label>
                                <input type="text" name={'link' + link.id} id={'link' + link.id} />
                            </div>
                        </form>
                        <button onClick={()=> deleteLink(link.id)} className="delete-btn">Delete</button>
                    </div>
                ))}
            <button onClick={addLink} className="btn-secondary">Add link</button>
        </div>
    )
}