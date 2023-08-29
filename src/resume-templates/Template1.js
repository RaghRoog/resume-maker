import React from 'react';
import { Document, Font, Image, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

import fontRegular from '../fonts/Poppins/Poppins-Regular.ttf'
import fontBold from '../fonts/Poppins/Poppins-SemiBold.ttf'

export default function Template1() {

    Font.register({ family: 'Poppins-regular', src: fontRegular })
    Font.register({ family: 'Poppins-bold', src: fontBold })

    return(
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.left}>
                    <View style={styles.leftTop}>
                        <Image style={{width: '40pt', height: 'auto', borderRadius: '50%'}} 
                                src='../imgs/template-img.jpg'/>
                        <Text style={{fontFamily: 'Poppins-bold', fontSize: '20px'}}>John Doe</Text>
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
                            <Text style={styles.textSmall}>06.2022 - 02.2023</Text>
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
                </View>
                <View style={styles.right}>
                    <View style={styles.rightSection}>
                        <Text style={styles.rightHeader}>Details</Text>
                        <Text>Address</Text>
                        <Text>City</Text>
                        <Text>Country</Text>
                        <Text>Phone number</Text>
                        <Text>e-mail</Text>
                    </View>
                    <View style={styles.rightSection}>
                        <Text style={styles.rightHeader}>Links</Text>
                        <Link style={styles.link} src=''>Link1</Link>
                        <Link style={styles.link} src=''>Link2</Link>
                    </View>
                    <View style={styles.rightSection}>
                        <Text style={styles.rightHeader}>Skills</Text>
                        <View style={styles.skillContainer}>
                            <Text>Skill1</Text>
                            <View style={{width: '100%', height: '3px', backgroundColor: 'white'}}></View>
                        </View>
                        <View style={styles.skillContainer}>
                            <Text>Skill2</Text>
                            <View style={{width: '50%', height: '3px', backgroundColor: 'white'}}></View>
                        </View>
                        <View style={styles.skillContainer}>
                            <Text>Skill3</Text>
                            <View style={{width: '25%', height: '3px', backgroundColor: 'white'}}></View>
                        </View>
                        <View style={styles.skillContainer}>
                            <Text>Skill4</Text>
                            <View style={{width: '75%', height: '3px', backgroundColor: 'white'}}></View>
                        </View>
                    </View>
                    <View style={styles.rightSection}>
                        <Text style={styles.rightHeader}>Languages</Text>
                        <View style={styles.skillContainer}>
                            <Text>Polish</Text>
                            <View style={{width: '100%', height: '3px', backgroundColor: 'white'}}></View>
                        </View>
                        <View style={styles.skillContainer}>
                            <Text>English</Text>
                            <View style={{width: '75%', height: '3px', backgroundColor: 'white'}}></View>
                        </View>
                    </View>
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

