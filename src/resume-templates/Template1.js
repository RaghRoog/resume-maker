import React from 'react';
import { Document, Font, Image, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

import fontRegular from '../fonts/Poppins/Poppins-Regular.ttf'
import fontBold from '../fonts/Poppins/Poppins-SemiBold.ttf'

export default function Template1({ inputsData }) {

    Font.register({ family: 'Poppins-regular', src: fontRegular })
    Font.register({ family: 'Poppins-bold', src: fontBold })

    function calcWidthProcent(lvl){
        let percent
        switch(lvl){
            case 'Basics':
                percent = '25%'
                break
            case 'Intermediate':
                percent = '50%'
                break
            case 'Advanced':
                percent = '75%'
                break
            case 'Expert':
                percent = '100%'
                break
        }
        return percent
    }

    return(
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.left}>
                    <View style={styles.leftTop}>
                        <Image style={{width: '40pt', height: 'auto', borderRadius: '50%'}} 
                                src='../imgs/template-img.jpg'/>
                        <Text style={{fontFamily: 'Poppins-bold', fontSize: '20px'}}>
                            {`${inputsData.details.fname} ${inputsData.details.lname}`}
                        </Text>
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
                </View>
                <View style={styles.right}>
                    <View style={styles.rightSection}>
                        <Text style={styles.rightHeader}>Details</Text>
                        <Text>{inputsData.details.address}</Text>
                        <Text>{inputsData.details.city}</Text>
                        <Text>{inputsData.details.country}</Text>
                        <Text>{inputsData.details.tel}</Text>
                        <Text>{inputsData.details.email}</Text>
                    </View>
                    {inputsData.links.length > 0 ?
                        <View style={styles.rightSection}>
                            <Text style={styles.rightHeader}>Links</Text>
                            {inputsData.links.map(link => (
                                <Link style={styles.link} src={link.link}>{link.name}</Link>
                            ))}
                        </View> : null
                    }
                    {inputsData.skills.length > 0 ?
                        <View style={styles.rightSection}>
                            <Text style={styles.rightHeader}>Skills</Text>
                            {inputsData.skills.map(skill => (
                                <View style={styles.skillContainer}>
                                    <Text>{skill.skillName}</Text>
                                    <View style={{width: calcWidthProcent(skill.skillLvl), height: '3px', 
                                                  backgroundColor: 'white'}}
                                    />
                                </View>
                            ))}
                            
                        </View> : null
                    }
                    {inputsData.languages.length > 0 ?
                        <View style={styles.rightSection}>
                            <Text style={styles.rightHeader}>Languages</Text>
                            {inputsData.languages.map(lang => (
                                <View style={styles.skillContainer}>
                                    <Text>{lang.language}</Text>
                                    <View style={{width: calcWidthProcent(lang.langLvl), height: '3px', 
                                                backgroundColor: 'white'}}
                                    />
                                </View>
                            ))}
                        </View> : null
                    }
                </View>
            </Page>
        </Document>
    )
} 

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        fontFamily: 'Poppins-regular',
        fontSize: '10px'
    },
    left:{
        width: '70%',
        flexDirection: 'column',
    },
    leftTop: {
        flexDirection: 'row',
        gap: '15pt',
        alignItems: 'center',
        padding: '20pt'
    },
    section: {
        paddingLeft: '20pt',
        paddingRight: '20pt',
        paddingTop: '5pt',
        paddingBottom: '5pt',
    },
    right: {
        width: '30%',
        backgroundColor: '#136F63',
        padding: '15px',
        paddingTop: '80px',
        color: 'white'
    },
    rightHeader: {
        fontSize: '12px',
        fontFamily: 'Poppins-bold',
        marginBottom: '3px'
    },
    header: {
        marginBottom: '5pt',
        fontFamily: 'Poppins-bold',
        fontSize: '16px',
    },
    sectionContainer: {
        flexDirection: 'column',
        gap: '5px',
        marginBottom: '5px',
    },
    textSmall: {
        fontSize: '9px',
        color: 'grey',
        fontFamily: 'Poppins-regular',
    },
    rightSection: {
        marginBottom: '5px'
    },
    link: {
        color: 'white',
    },
    skillContainer: {
        marginBottom: '3px'
    }
})

