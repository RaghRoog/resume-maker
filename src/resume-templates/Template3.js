import React from 'react';
import { Document, Font, Image, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

import fontRegular from '../fonts/ibmPlexSans/IBMPlexSans-Regular.ttf'
import fontBold from '../fonts/ibmPlexSans/IBMPlexSans-Bold.ttf'

export default function Template3() {


     Font.register({ family: 'regular', src: fontRegular })
     Font.register({ family: 'bold', src: fontBold })

    return(
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.top}>
                    <Image style={{width: '60pt', height: 'auto', borderRadius: '5px'}} 
                        src='../imgs/template-img.jpg'/>
                    <Text style={{fontFamily: 'bold', fontSize: '24px'}}>John Doe</Text>
                </View>
                <View style={styles.infoSection}>
                    <Text style={styles.infoSectionItem}>Address, City, Country</Text>
                    <Text style={styles.infoSectionItem}>E-mail</Text>
                    <Text style={styles.infoSectionItem}>Phone number</Text>
                    <Link style={styles.link} src=''>link1</Link>
                    <Link style={styles.link} src=''>link2</Link>
                </View>
                <View style={styles.section}>
                    <Text style={styles.header}>Profile</Text>
                    <Text>
                        Sint eiusmod laboris adipisicing nostrud id officia ex incididunt in excepteur. Enim id laborum veniam proident anim. Reprehenderit fugiat labore eu eiusmod incididunt sunt nostrud occaecat deserunt veniam sunt ipsum non minim. Elit incididunt minim cillum anim amet laboris esse consectetur. Occaecat exercitation nisi elit pariatur voluptate irure quis.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.header}>Education</Text>
                    <View style={styles.sectionContainer}>
                        <Text>Degree, School, City</Text>
                        <Text style={styles.textSmall}>06.2020 - 05.2023</Text>
                        <Text>Description</Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text>Degree2, School2, City2</Text>
                        <Text style={styles.textSmall}>06.2020 - 05.2023</Text>
                        <Text>Description</Text>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.header}>Employment History</Text>
                    <View style={styles.sectionContainer}>
                        <Text>Job title, Employer, City</Text>
                        <Text style={styles.textSmall}>03.2019 - 03.2020</Text>
                        <Text>Description</Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text>Job Title2, Employer2, City2</Text>
                        <Text style={styles.textSmall}>03.2020 - 02.2022</Text>
                        <Text>Description</Text>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.header}>Courses</Text>
                    <View style={styles.sectionContainer}>
                        <Text>Course, Institution</Text>
                        <Text style={styles.textSmall}>03.2019 - 03.2020</Text>
                        <Text>Description</Text>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.header}>Certificates</Text>
                    <View style={styles.sectionContainer}>
                        <Text>Certificate</Text>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.header}>Skills</Text>
                    <View style={styles.skillsContainer}>
                        <View style={styles.skill}>
                            <Text>HTML</Text>
                        </View>
                        <View style={styles.skill}>
                            <Text>React</Text>
                        </View>
                        <View style={styles.skill}>
                            <Text>CSS</Text>
                        </View>
                        <View style={styles.skill}>
                            <Text>JavaScript</Text>
                        </View>
                        <View style={styles.skill}>
                            <Text>Responsive Web Design</Text>
                        </View>
                        <View style={styles.skill}>
                            <Text>PHP</Text>
                        </View>
                        <View style={styles.skill}>
                            <Text>Microsoft Office</Text>
                        </View>
                        <View style={styles.skill}>
                            <Text>Windows Server</Text>
                        </View>
                        <View style={styles.skill}>
                            <Text>Linux</Text>
                        </View>
                        <View style={styles.skill}>
                            <Text>Sass</Text>
                        </View>
                        <View style={styles.skill}>
                            <Text>Git</Text>
                        </View>
                        <View style={styles.skill}>
                            <Text>MySQL</Text>
                        </View>
                        <View style={styles.skill}>
                            <Text>Webpack</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.header}>Languages</Text>
                    <View style={styles.sectionContainer}>
                        <View>
                            <Text>Polish</Text>
                            <Text style={styles.textSmall}>Native speaker</Text>
                        </View>
                        <View>
                            <Text>English</Text>
                            <Text style={styles.textSmall}>B2</Text>
                        </View>
                    </View>
                </View>
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

