import React, { Component } from 'react';

class SyllabusPage extends Component {
  render() {
    return (
      <div class="row">

        <div class="column side">
          <h2>Bryon Black ll</h2>
            <div class="syllabusImage">
              <img src="../images/black.jpg" alt="Bryon Black"/>
            </div>
        <div class="syllabusInfoBox">
          <h4>JOB TITLE</h4>
            <p>Assistant Professor - Men's Chorus - KSU Gospel Choir</p>
          <h4>JOB DEPARTMENT</h4>
            <p>School of Music</p>
          <h4>Campus</h4>
            <p>Kent</p>
          <h4>EMAIL</h4>
            <p>bblack15@kent.edu</p>
          <h4>PHONE</h4>
            <p>330-672-4802</p>
          <h4>OFFICE LOCATION</h4>
            <p>C309 Center for the Performing Arts</p>
        </div>
        </div>

        <div class="column middle">
          <iframe width="100%" height="700" id="liveHtml" src="../Syllabus.pdf"></iframe>
        </div>

      </div>
    )
  }
}
export default SyllabusPage;