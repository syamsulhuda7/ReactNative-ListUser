/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';

const ProfilePage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/foto.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>SYAMSUL HUDA HARISUL MUSLIMIN</Text>
        <Text>Malang, Jawa Timur</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://github.com/syamsulhuda7')}>
          <Text>Portofolio*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://www.linkedin.com/in/syamsul-huda-harisul-muslimin-240846248/',
            )
          }>
          <Text>LinkedIn*</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('tel:+6281229670740')}>
          <Text>+6281229670740</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('mailto:syamsulhuda748@gmail.com')}>
          <Text>syamsulhuda748@gmail.com</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>SUMMARY</Text>
        <Text style={styles.text}>
          Graduate of Agroecotechnology major with cumlaude predicate with GPA
          3.72. Have an interest in the IT field, especially website and
          software programming. Explore the MERN stack (MongoDB, ExpressJS,
          ReactJS, NodeJS) and other supporting applications to become a
          full-stack web developer. Able to create dynamic websites that can be
          used on smartphones and PCs. Have learned a lot about time management,
          leadership, teamwork and communication during lectures which are very
          useful in a career, especially as a web developer.
        </Text>

        <Text style={styles.heading}>WORK EXPERIENCE</Text>
        <Text style={styles.textMid}>
          Field Assistant - Part-Time - Brawijaya University - Malang - Nov 2023
          - Jan 2024
        </Text>
        <Text style={styles.text}>
          {'\u2022'} Applied pesticides to apple and rice crops and observed
          their effectiveness, completed work on time for 3 months, managed time
          management and adjusted environmental conditions during work.
        </Text>
        <Text style={styles.text}>
          {'\u2022'} Processing data and making reports, data processing and
          reports were successfully made and accepted within 1 week, using
          Rstudio and Microsoft Office tools.
        </Text>
        <Text style={styles.textMid}>
          Field Surveyor - Part-Time - Indikator Politik Indonesia - Malang -
          Jul 2023 - Aug 2023
        </Text>
        <Text style={styles.text}>
          {'\u2022'} Interviewing residents, 100% success in conducting
          interviews with 10 people within 3 days, using Microsoft Office
          assistance to collect data and select interviewees according to the
          method.
        </Text>

        <Text style={styles.heading}>CERTIFICATION & BOOTCAMP</Text>
        <Text style={styles.textMid}>
          Bootcamp Fullstack Programming (MERN) - Eduwork - Jan 2024
          - Apr 2024
        </Text>
        <Text style={styles.text}>
          {'\u2022'} Create a simple website, completed in 1 hour, using HTML, CSS, Bootstrap, and Javascript tools.
        </Text>
        <Text style={styles.text}>
          {'\u2022'} Created a front-end website and connected to the database API and created a search system, completed in 2 days, using ReactJS, CSS in JS, and React Bootstrap tools.
        </Text>
        <Text style={styles.text}>
          {'\u2022'} Created a website database, completed in 1 day, using Mysql and MongoDB tools.
        </Text>
        <Text style={styles.text}>
          {'\u2022'} Created a back-end website and connected to a database, completed in 1 day, using ExpressJS and NodeJS tools.
        </Text>
        <Text style={styles.text}>
          {'\u2022'} Create fullstack websites using MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS) and other supporting tools.
        </Text>

        <Text style={styles.heading}>EDUCATION</Text>
        <Text style={styles.textMid}>
          Bachelor Degree (S1) Agroecotechnology - Brawijaya University - Malang - Aug 2019 - Jan 2023
        </Text>
        <Text style={styles.text}>
          {'\u2022'} Take Information and Communication Technology courses that teach about the concept of technology and its implementation.
        </Text>
        <Text style={styles.text}>
          {'\u2022'} Agroecosystem Management course that studies the concept and development of IoT, especially in agriculture.
        </Text>
        <Text style={styles.text}>
          {'\u2022'} Participated in the Merdeka Belajar Kampus Merdeka / MBKM program by doing a work internship at UB Agro Techno Park and honing leadership, teamwork, communication, and time management skills.
        </Text>
        <Text style={styles.text}>
          {'\u2022'} Participate in the community service committee.
        </Text>
        <Text style={styles.text}>
          {'\u2022'} Create an independent project in the form of a wordpress-based website.
        </Text>
        <Text style={styles.text}>
          {'\u2022'} Self-learning about HTML, CSS, and Javascript.
        </Text>

        <Text style={styles.heading}>SKILLS, INTERESTS, & LANGUAGES</Text>
        <Text style={styles.textMid}>
          Technical Skills :
        </Text>
        <Text style={styles.text}>
        Javascript | React JS | React Native | Express JS | MongoDB | CSS | Bootstrap | HTML | Git | Github | Mysql | Node JS
        </Text>
        <Text style={styles.textMid}>
          Soft Skills :
        </Text>
        <Text style={styles.text}>
        Time Management | Leadership | Teamwork | Communication
        </Text>
        <Text style={styles.textMid}>
          Interests :
        </Text>
        <Text style={styles.text}>
        Fullstack Web Developer | Mobile Developer | Front End Web Developer | Back End Web Developer | Software Engineer
        </Text>
        <Text style={styles.textMid}>
          Languages :
        </Text>
        <Text style={styles.text}>
        Indonesian language (Native) | Javanese language (Native) | English language (Intermediate)
        </Text>

        <Text style={styles.heading}>PROJECTS</Text>
        <Text style={styles.textMid}>
          Mobile Developer - Apr 2024
        </Text>
        <Text style={styles.text}>
        {'\u2022'} Details : Create a mobile app, fetch data from API and provide search and profile features
        </Text>
        <Text style={styles.text}>
        {'\u2022'} Tools : React Native, React Navigation
        </Text>
        <Text style={styles.text}>
        {'\u2022'} Link	: https://github.com/syamsulhuda7/ReactNative-ListUser.git
        </Text>

        <Text style={styles.textMid}>
          Codewars - Apr 2024
        </Text>
        <Text style={styles.text}>
        {'\u2022'} Details : Solving various problems using the JavaScript programming language
        </Text>
        <Text style={styles.text}>
        {'\u2022'} Tags : Fundamentals, Mathematics, Algorithms, Arrays, Games, Strings, etc.
        </Text>
        <Text style={styles.text}>
        {'\u2022'} Link	: https://github.com/syamsulhuda7/Codewars
        </Text>
        
        <Text style={styles.textMid}>
        Online Store Website - Fullstack (in Development) - Mar 2024 - Apr 2024
        </Text>
        <Text style={styles.text}>
        {'\u2022'} Details : Create the front end and back end of the online store website 
        </Text>
        <Text style={styles.text}>
        {'\u2022'} Tools : ReactJS, MongoDB, ExpressJS, NodeJS
        </Text>
        <Text style={styles.text}>
        {'\u2022'} Link	: https://github.com/syamsulhuda7/Front-End---ReactJS---Tugas-Akhir - [Front End]
        </Text>
        <Text style={styles.text}>
        {'\u2022'} Link : https://github.com/syamsulhuda7/BackEnd-ExpressJS-MongoDB-NodeJS - [Back End]
        </Text>

        <Text style={styles.textMid}>
        Front-end: Website Anime - Feb 2024
        </Text>
        <Text style={styles.text}>
        {'\u2022'} Details : Create the back end of the online store website and accompanying login page.
        </Text>
        <Text style={styles.text}>
        {'\u2022'} Tools : ReactJS, React Bootstrap
        </Text>
        <Text style={styles.text}>
        {'\u2022'} Link	: https://github.com/syamsulhuda7/ReactJS-WebAnime_Hook-FunctionalComponent 
        </Text>

        <Text style={styles.textMid}>
        Tanijo - Des 2023
        </Text>
        <Text style={styles.text}>
        {'\u2022'} Details : Company profile.
        </Text>
        <Text style={styles.text}>
        {'\u2022'} Tools : HTML, CSS, Javascript
        </Text>
        <Text style={styles.text}>
        {'\u2022'} Link	: https://github.com/syamsulhuda7/TANIJO 
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 25,
  },
  textMid: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 7,
  },
  text: {
    textAlign: 'justify',
  },
});

export default ProfilePage;
