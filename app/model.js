// This is my model! it handles all of the service calls

var homeContent = ` <div class="home-wrapper">
<div class="home-content --centered">
  <h1 class="text--yellow">"PASS THE NIRVANA" AVAILABLE NOW</h1>
  <div id="home-img"></div>
  <button class="button--wide">LISTEN HERE</button>
</div>
</div>

<footer>
<img src="../assets/icons/apple-logo.png" alt="">
<img src="../assets/icons/icons8-amazon-50.png" alt="">
<img src="../assets/icons/icons8-facebook-30.png" alt="">
<img src="../assets/icons/icons8-instagram-24.png" alt="">
<img src="../assets/icons/icons8-spotify-30.png" alt="">
<img src="../assets/icons/icons8-tiktok-30.png" alt="">
<img src="../assets/icons/icons8-twitter-30.png" alt="">
<img src="../assets/icons/icons8-youtube-30.png" alt="">
</footer>`;

var tourContent = `      <div class="tour-wrapper">
<div class="hero"></div>
<div class="hero-info --centered">
  <h1>TOUR</h1>
  <h2>Get updates on new shows, new music, and more.</h2>
  <button class="--rounded">FOLLOW</button>
</div>

<div class="tour-dates">
  <div class="tour-row">
    <div class="info">
      <p>Friday, September 16th, 2022</p>
      <p>MYTH LIVE</p>
    </div>
    <div class="location">
      <p>MAPLEWOOD, MN</p>
    </div>
    <button class --rounded>TICKETS</button>
  </div>

  <div class="tour-row">
    <div class="info">
      <p>Saturday, September 17th, 2022</p>
      <p>RALSON ARENA</p>
    </div>
    <div class="location">
      <p>RALSON, NE</p>
    </div>
    <button class --rounded>TICKETS</button>
  </div>

  <div class="tour-row">
    <div class="info">
      <p>Friday, September 16th, 2022</p>
      <p>MYTH LIVE</p>
    </div>
    <div class="location">
      <p>MAPLEWOOD, MN</p>
    </div>
    <button class --rounded>TICKETS</button>
  </div>

  <div class="tour-row">
    <div class="info">
      <p>Sunday, September 18th, 2022</p>
      <p>WAVE</p>
    </div>
    <div class="location">
      <p>WICHITA, KS</p>
    </div>
    <button class --rounded>TICKETS</button>
  </div>

  <div class="tour-row">
    <div class="info">
      <p>Tuesday, September 20th, 2022</p>
      <p>THE CRITERION</p>
    </div>
    <div class="location">
      <p>OKLAHOMA CITY, OK</p>
    </div>
    <button class --rounded>TICKETS</button>
  </div>

  <div class="tour-row">
    <div class="info">
      <p>Wednesday, September 21st, 2022</p>
      <p>TECH E SPORTS ARENA</p>
    </div>
    <div class="location">
      <p>SAN ANTONIO, TX</p>
    </div>
    <button class --rounded>TICKETS</button>
  </div>

  <div class="tour-row">
    <div class="info">
      <p>Friday, September 23rd, 2022</p>
      <p>LONESTAR PAVILLION</p>
    </div>
    <div class="location">
      <p>LUBBOCK, TX</p>
    </div>
    <button class --rounded>TICKETS</button>
  </div>

  <div class="tour-row">
    <div class="info">
      <p>Saturday, September 24th, 2022</p>
      <p>SOUTHSIDE BALLROOM</p>
    </div>
    <div class="location">
      <p>DALLAS, TX</p>
    </div>
    <button class --rounded>TICKETS</button>
  </div>

  <div class="tour-row">
    <div class="info">
      <p>Sunday, September 25th, 2022</p>
      <p>WHITE OAK MUSIC HALL</p>
    </div>
    <div class="location">
      <p>HOUSTON, TX</p>
    </div>
    <button class --rounded>TICKETS</button>
  </div>

  <div class="tour-row">
    <div class="info">
      <p>Tuesday, September 27th, 2022</p>
      <p>JANNUS LIVE</p>
    </div>
    <div class="location">
      <p>ST PETERSBURG, GL</p>
    </div>
    <button class --rounded>TICKETS</button>
  </div>

  <div class="tour-row">
    <div class="info">
      <p>Wednesday, September 28th, 2022</p>
      <p>TABERNACLE</p>
    </div>
    <div class="location">
      <p>ATLANTA, GA</p>
    </div>
    <button class --rounded>TICKETS</button>
  </div>

  <div class="tour-row">
    <div class="info">
      <p>Thursday, September 29th, 2022</p>
      <p>HOUSE OF BLUES</p>
    </div>
    <div class="location">
      <p>ORLANDO, FL</p>
    </div>
    <button class --rounded>TICKETS</button>
  </div>

  <div class="tour-row">
    <div class="info">
      <p>Saturday, October 1st, 2022</p>
      <p>THE FILLMORE</p>
    </div>
    <div class="location">
      <p>SILVER SPRING, MD</p>
    </div>
    <button class --rounded>TICKETS</button>
  </div>

  <div class="tour-row">
    <div class="info">
      <p>Sunday, October 2nd, 2022</p>
      <p>PIER 17</p>
    </div>
    <div class="location">
      <p>NEW YORK, NY</p>
    </div>
    <button class --rounded>TICKETS</button>
  </div>

  <div class="tour-row">
    <div class="info">
      <p>Tuesday, October 4th, 2022</p>
      <p>L'OLYMPIA</p>
    </div>
    <div class="location">
      <p>MONTREAL, CANADA</p>
    </div>
    <button class --rounded>TICKETS</button>
  </div>

  <div class="tour-row">
    <div class="info">
      <p>Wednesday, October 5th, 2022</p>
      <p>REBEL</p>
    </div>
    <div class="location">
      <p>TORONTO, CANADA</p>
    </div>
    <button class --rounded>TICKETS</button>
  </div>

  <div class="tour-row">
    <div class="info">
      <p>Friday, October 7th, 2022</p>
      <p>CLYDE THEATRE</p>
    </div>
    <div class="location">
      <p>FORT WAYNE, IN</p>
    </div>
    <button class --rounded>TICKETS</button>
  </div>
</div>
</div>
<footer>
<img src="../assets/icons/apple-logo.png" alt="">
<img src="../assets/icons/icons8-amazon-50.png" alt="">
<img src="../assets/icons/icons8-facebook-30.png" alt="">
<img src="../assets/icons/icons8-instagram-24.png" alt="">
<img src="../assets/icons/icons8-spotify-30.png" alt="">
<img src="../assets/icons/icons8-tiktok-30.png" alt="">
<img src="../assets/icons/icons8-twitter-30.png" alt="">
<img src="../assets/icons/icons8-youtube-30.png" alt="">
</footer>
`;

var musicContent = `      <div class="music-wrapper">
<div class="album-block">
  <div id="album1" class="album-cover"></div>
  <div class="album-text">
    <div class="album-title"><h2>Misadventures (2016)</h2></div>
    <div class="tracklist">
      <div class="tracklist-col1">
        <p>1. Dive In</p>
        <p>2. Texas is Forever</p>
        <p>3. The Divine Zero</p>
        <p>4. Floral & Fading</p>
        <p>
          5. Phantom Power and Ludicrous <br />
          Speed
        </p>
        <p>6. Circles</p>
      </div>
      <div class="tracklist-col2">
        <p>7. Today I Saw the Whole World</p>
        <p>8. Gold Medal Ribbon</p>
        <p>9. Bedless</p>
        <p>10. Sambuka</p>
        <p>11. Song for Isabelle</p>
        <p></p>
      </div>
    </div>
  </div>
</div>

<div class="album-block">
  <div id="album2" class="album-cover"></div>
  <div class="album-text">
    <div class="album-title"><h2>Collide With The Sky (2012)</h2></div>
    <div class="tracklist">
      <div class="tracklist-col1">
        <p>
          1. May These Noises Startle You <br />
          In Your Sleep Tonight
        </p>
        <p>2. Hell Above</p>
        <p>3. A Match Into Water</p>
        <p>4. King For a Day</p>
        <p>5. Bulls In The Bronx</p>
        <p>6. Props & Mayhem</p>
      </div>
      <div class="tracklist-col2">
        <p>7. Tangled In The Great Escape</p>
        <p>8. I'm Low On Gas And You Need A Jacket</p>
        <p>9. The First Punch</p>
        <p>10. One Hundred Sleepless Nights</p>
        <p>11. Stained Glass Eyes and Colorful Tears</p>
        <p>12. Hold On Till May</p>
      </div>
    </div>
  </div>
</div>

<div class="album-block">
  <div id="album3" class="album-cover"></div>
  <div class="album-text">
    <div class="album-title"><h2>Selfish Machines (2010)</h2></div>
    <div class="tracklist">
      <div class="tracklist-col1">
        <p>1. Besitos</p>
        <p>2. Southern Constellations</p>
        <p>3. The Boy Who Could Fly</p>
        <p>4. Caraphernelia</p>
        <p>5. Fast Times at Clairemont High</p>
        <p>6. The New National Anthem</p>
      </div>
      <div class="tracklist-col2">
        <p>7. Bulletproof Love</p>
        <p>8. Stay Away From My Friends</p>
        <p>9. I Don't Care If You're Contagious</p>
        <p>10. Disasterology</p>
        <p>11. Million Dollar Houses (The Painter)</p>
        <p>12. The Sky Under The Sea</p>
      </div>
    </div>
  </div>
</div>

<div class="album-block">
  <div id="album4" class="album-cover"></div>
  <div class="album-text">
    <div class="album-title">
      <h2>A Flair For The Dramatic (2007)</h2>
    </div>
    <div class="tracklist">
      <div class="tracklist-col1">
        <p>1. Chemical Kids and Mechanical Brides</p>
        <p>2. Currents Convulsive</p>
        <p>3. Yeah Boy and Doll Face</p>
        <p>4. I'd Rather Die Than Be Famous</p>
        <p>5. The Cheap Bouquet</p>
        <p>6. Falling Asleep on a Stranger</p>
      </div>
      <div class="tracklist-col2">
        <p>7. She Sings in the Morning</p>
        <p>8. The Balcony Scene</p>
        <p>9. Drella</p>
        <p>10. Diamonds and Why Men Buy Them</p>
        <p>11. Wonderless</p>
        <p></p>
      </div>
    </div>
  </div>
</div>
</div>

<footer>
<img src="../assets/icons/apple-logo.png" alt="">
<img src="../assets/icons/icons8-amazon-50.png" alt="">
<img src="../assets/icons/icons8-facebook-30.png" alt="">
<img src="../assets/icons/icons8-instagram-24.png" alt="">
<img src="../assets/icons/icons8-spotify-30.png" alt="">
<img src="../assets/icons/icons8-tiktok-30.png" alt="">
<img src="../assets/icons/icons8-twitter-30.png" alt="">
<img src="../assets/icons/icons8-youtube-30.png" alt="">
</footer>`;

var newsletterContent = `      <div class="newsletter-wrapper">
<div class="newsletter-photo"></div>
<div class="newsletter-text">
  <div class="ptv-logo">
  </div>
  <h1 --black>STAY UP TO DATE</h1>
  <li>
    <p>EMAIL ADDRESS</p>
    <input type="text" size="70">
  </li> <br>
  <li>

    <label for="consent" class="consent">             <input type="checkbox" id="consent" name="consent"> <p>By checking this box I consent to the use of my information provided for email marketing purpose</p></label>
  </li>
  <button class="button--wide">SIGN UP</button>
</div>
</div>

<footer>
<img src="../assets/icons/apple-logo.png" alt="">
<img src="../assets/icons/icons8-amazon-50.png" alt="">
<img src="../assets/icons/icons8-facebook-30.png" alt="">
<img src="../assets/icons/icons8-instagram-24.png" alt="">
<img src="../assets/icons/icons8-spotify-30.png" alt="">
<img src="../assets/icons/icons8-tiktok-30.png" alt="">
<img src="../assets/icons/icons8-twitter-30.png" alt="">
<img src="../assets/icons/icons8-youtube-30.png" alt="">
</footer>`;

function setCurrentPageContent(pageId) {
  let contentName = pageId + "Content";
  $("#app").html(eval(contentName));
}

export { setCurrentPageContent };
