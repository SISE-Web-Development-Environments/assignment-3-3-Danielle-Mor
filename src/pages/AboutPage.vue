<template>
  <div class="containerAbout">
    <span style="color: transparent;">r</span>
    <b-row align-h="around" class="details"
      >This Website Is Brought To You by
    </b-row>
    <b-row align-h="around" class="details"><b>Mor & Danielle Gaming</b></b-row>
    <b-row align-h="around" class="details"
      >As Part Of Our Assignment In The Course "Web Development Enviroments"
    </b-row>
    <b-row align-h="around" class="details"></b-row>
    <b-row align-h="around" class="aboutHead">
      <b-col cols="0.5"></b-col>
      <b-col cols="5" class="about">
        <div class="imgDiv">
          <img class="m1 Myimg" src="../assets/morImage.jpeg" alt="" />
        </div>
        <span class="aboutName">
          Mor Nahum
        </span>
        <b-row class="aboutMe">
          I'm in my third year of studies towards a Software and Information
          Systems Engineering first degree in Ben Gurion University.
        </b-row>
        <b-row class="aboutMe">
          Check Out My First Website In This Course Here:
          <span style="color: transparent;">r</span>
          <a
            class="aboutMe LinkIcon"
            href="https://sise-web-development-environments.github.io/205996747/"
          >
            <b-icon shift-v="3" icon="gem"></b-icon>
          </a>
        </b-row>
        <b-row class="aboutMe">
          For Any Question Please Do Not Hasitate To Contact Me:
          namor@post.bgu.ac.il
        </b-row>
      </b-col>
      <b-col cols="5" class="about">
        <div class="imgDiv">
          <img class="Myimg2" src="../assets/DanielImage2.jpeg" alt="" />
        </div>
        <span class="aboutName">
          Danielle Lavi
        </span>
        <b-row class="aboutMe">
          I'm in my third year of studies towards a Software and Information
          Systems Engineering first degree in Ben Gurion University.
        </b-row>
        <b-row class="aboutMe">
          Check Out My First Website In This Course Here:
          <span style="color: transparent;">r</span>

          <a
            class="aboutMe LinkIcon"
            href="https://sise-web-development-environments.github.io/203097225/"
          >
            <b-icon shift-v="3" icon="gem"></b-icon>
          </a>
        </b-row>
        <b-row class="aboutMe">
          For Any Question Please Do Not Hasitate To Contact Me:
          lavida@post.bgu.ac.il
        </b-row>
      </b-col>
    </b-row>
    <b-row class="details2"
      >This Is Our Second Project Together. Check Out Our Ms.PacMan Game Here:
      <span style="color: transparent;">r</span>

      <a
        class="aboutMe LinkIcon"
        href="https://sise-web-development-environments.github.io/203097225_205996747/"
      >
        <b-icon shift-v="3" icon="gem"></b-icon>
        <p class="h1 mb-2"></p>
      </a>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style>
.containerAbout .avatarAbout img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.details2 {
  color: azure;
  text-align: center;
  font-family: "Sofia";
  text-shadow: 2px 2px 4px #000000;
  font-size: 30px;
  margin-left: 20%;
}
.details {
  color: azure;
  text-align: center;
  font-family: "Sofia";
  text-shadow: 2px 2px 4px #000000;
  font-size: 30px;
}

.aboutName {
  display: block;
  letter-spacing: 4px;
  color: azure;
  text-align: center;
  font-family: "Sofia";
  text-shadow: 2px 2px 4px #000000;
  font-size: 30px;
  overflow: visible;
}
.aboutName::after {
  content: "";
  display: flex;
  width: 40%;
  height: 2px;
  background: azure;
  margin-top: 5px;
  margin-left: 30%;
}
.about {
  vertical-align: top;
  display: inline-block;
  width: 120px;
}
.aboutHead {
  margin-top: 5%;
}
.avatarAbout {
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
}
.imgDiv {
  text-align: center;
}
.Myimg2 {
  height: 176px;
  width: 176px;
  border-radius: 20px;
  border: 2px solid #fff;
}
.Myimg {
  border-radius: 20px;

  border: 2px solid #fff;
}
.LinkIcon:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
  color: blanchedalmond;
}
.aboutMe {
  color: azure;
  text-align: left;
  font-family: "Sofia";
  text-shadow: 2px 2px 4px #000000;
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
