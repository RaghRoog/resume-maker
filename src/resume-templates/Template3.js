import React from 'react';
import { Document, Font, Image, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

import fontRegular from '../fonts/ibmPlexSans/IBMPlexSans-Regular.ttf'
import fontBold from '../fonts/ibmPlexSans/IBMPlexSans-Bold.ttf'

export default function Template3({ inputsData }) {


     Font.register({ family: 'regular', src: fontRegular })
     Font.register({ family: 'bold', src: fontBold })

    return(
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.top}>
                    <Image style={{width: '60pt', height: 'auto', borderRadius: '5px'}} 
                        src='../imgs/template-img.jpg'/>
                    <Text style={{fontFamily: 'bold', fontSize: '24px'}}>
                        {`${inputsData.details.fname } ${inputsData.details.lname}`}
                    </Text>
                </View>
                <View style={styles.infoSection}>
                    <Text style={styles.infoSectionItem}>
                        {`${inputsData.details.address} ${inputsData.details.city} 
                        ${inputsData.details.country}`}
                    </Text>
                    <Text style={styles.infoSectionItem}>{`${inputsData.details.email}`}</Text>
                    <Text style={styles.infoSectionItem}>{`${inputsData.details.tel}`}</Text>
                    {inputsData.links.map(link => (
                        <Link style={styles.link} src={link.link}>{link.name}</Link>
                    ))}
                </View>
                {inputsData.about != '' ?  
                    <View style={styles.section}>
                        <Text style={styles.header}>Profile</Text>
                        <Text>
                            {inputsData.about}
                        </Text>
                    </View> : null
                }   
                {inputsData.edu.length > 0 ? 
                    <View style={styles.section}>
                        <Text style={styles.header}>Education</Text>
                        {inputsData.edu.map(edu => (
                            <View style={styles.sectionContainer}>
                                <Text>
                                    {`${edu.Degree || ''}${edu.Degree && edu.School ? ', ' : ' '}${edu.School || ''}${edu.School && edu.City ? ', ' : ' '}${edu.City || ''}`}
                                </Text>
                                <Text style={styles.textSmall}>
                                    {`${edu.StartDate || ''} - ${edu.EndDate || 'present'}`}
                                </Text>
                                <Text>{edu.desc || ''}</Text>
                            </View>
                        ))}  
                    </View> : null
                } 
                {inputsData.job.length > 0 ?
                    <View style={styles.section}>
                        <Text style={styles.header}>Employment History</Text>
                        {inputsData.job.map(job => (
                            <View style={styles.sectionContainer}>
                                <Text>
                                    {`${job['Job title'] || ''}${job['Job title'] && job.Employer ? ', ' : ' '}${job.Employer || ''}${job.Employer && job.City ? ', ' : ' '}${job.City || ''}`}
                                </Text>
                                <Text style={styles.textSmall}>
                                    {`${job.StartDate || ''} - ${job.EndDate || 'present'}`}
                                </Text>
                                <Text>{job.desc || ''}</Text>
                            </View>
                        ))}
                    </View> : null
                }
                {inputsData.courses.length > 0 ? 
                    <View style={styles.section}>
                        <Text style={styles.header}>Courses</Text>
                        {inputsData.courses.map(course => (
                            <View style={styles.sectionContainer}>
                                <Text>
                                    {`${course.Course || ''}${course.Course && course.Institution ? ', ' : ' '}${course.Institution || ''}`}
                                </Text>
                                <Text style={styles.textSmall}>
                                    {`${course.StartDate || ''} - ${course.EndDate || 'present'}`}
                                </Text>
                                <Text>{course.desc || ''}</Text>
                            </View>
                        ))}
                    </View> : null
                }
                {inputsData.certificates.length > 0 ? 
                    <View style={styles.section}>
                        <Text style={styles.header}>Certificates</Text>
                        {inputsData.certificates.map(certificate => (
                            <View style={styles.sectionContainer}>
                                <Text>{certificate.cert || ''}</Text>
                            </View>
                        ))}
                    </View> : null
                }
                {inputsData.skills.length > 0 ?
                    <View style={styles.section}>
                    <Text style={styles.header}>Skills</Text>
                    <View style={styles.skillsContainer}>
                        {inputsData.skills.map(skill => (
                            <View style={styles.skill}>
                                <Text>{skill.skillName || ''}</Text>
                            </View>
                        ))}
                    </View>
                    </View> : null
                }
                {inputsData.languages.length > 0 ?
                    <View style={styles.section}>
                    <Text style={styles.header}>Languages</Text>
                        {inputsData.languages.map(lang => (
                            <View style={styles.sectionContainer}>
                                <View>
                                    <Text>{lang.language || ''}</Text>
                                    <Text style={styles.textSmall}>{lang.langLvl || ''}</Text>
                                </View>
                            </View>
                        ))}
                    </View> : null
                }
            </Page>
        </Document>
    )
} 

const styles = StyleSheet.create({
    page: {
        padding: '20px',
        fontSize: '10px',
        fontFamily: 'regular'
    },
    textSmall: {
        fontSize: '9px',
        fontFamily: 'regular',
        color: 'grey',
    },
    header: {
        fontFamily: 'bold',
        fontSize: '16px',
        marginBottom: '5px'
    },
    top: {
        flexDirection: 'row',
        gap: '20px',
        alignItems: 'center',
        borderBottom: '1px solid black',
        paddingBottom: '20px',
        paddingLeft: '10px',
        paddingRight: '10px',
    },
    infoSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: '10px',
        paddingBottom: '20px',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderBottom: '1px solid black'
    },
    infoSectionItem: {
        width: '50%',
        marginTop: '10px'
    },
    link: {
        width: '50%',
        marginTop: '10px',
        color: 'black',
        textDecoration: 'none'
    },
    section: {
        paddingTop: '20px',
        paddingBottom: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderBottom: '1px solid black'
    },
    sectionContainer: {
        marginBottom: '10px'
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '5px'
    },
    skill: {
        backgroundColor: 'grey',
        color: 'white',
        fontFamily: 'bold',
        padding: '2px',
        borderRadius: '2px',
    }
})

