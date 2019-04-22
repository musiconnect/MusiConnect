import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div class="row">

        <div class="column side">
          <h1>Site Creators</h1>
          <div class="list-style">
            <ul>



              <div class="box">
                <li>Colin   Mehring</li>
                <a href="https://www.instagram.com"><img src="../images/InstaLogo.png" alt="InstaGram Logo"/></a>
                  <a href="https://www.twitter.com"><img src="../images/TwitterLogo.png" alt="Twitter Logo"/></a>
              </div>


              <div class="box">
                <li>Daniel  Loftus</li>
                <a href="https://www.instagram.com"><img src="../images/InstaLogo.png" alt="InstaGram Logo"/></a>
                    <a href="https://www.twitter.com"><img src="../images/TwitterLogo.png" alt="Twitter Logo"/></a>
              </div>

              <div class="box">
                <li>Ryan    Stewart</li>
                <a href="https://www.instagram.com"><img src="../images/InstaLogo.png" alt="InstaGram Logo"/></a>
                    <a href="https://www.twitter.com"><img src="../images/TwitterLogo.png" alt="Twitter Logo"/></a>
              </div>

              <div class="box">
                <li>Brian   Selle</li>
                <a href="https://www.instagram.com"><img src="../images/InstaLogo.png" alt="InstaGram Logo"/></a>
                    <a href="https://www.twitter.com"><img src="../images/TwitterLogo.png" alt="Twitter Logo"/></a>
              </div>

              <div class="box">
                <li>Alex    Calco</li>
                <a href="https://www.instagram.com"><img src="../images/InstaLogo.png" alt="InstaGram Logo"/></a>
                    <a href="https://www.twitter.com"><img src="../images/TwitterLogo.png" alt="Twitter Logo"/></a>
              </div>

              <div class="box">
                <li>Charles Evans</li>
                <a href="https://www.instagram.com"><img src="../images/InstaLogo.png" alt="InstaGram Logo"/></a>
                    <a href="https://www.twitter.com"><img src="../images/TwitterLogo.png" alt="Twitter Logo"/></a>
              </div>



            </ul>
          </div>
        </div>

        <div class="column middle">
          <div class="homeLogo">
            <img src="../images/Logo.png" alt="Musiconnect Logo"/>
          </div>
          <h3>Welcome to the new hub of communictaion for the Kent State choir department.</h3>
        </div>
      </div>
    )
  }
}
export default HomePage;