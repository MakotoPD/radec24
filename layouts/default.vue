<template>
  <div>
    <vs-navbar shadow padding-scroll fixed center-collapsed v-model="active" >
        <template #left>
            <img class="nav_logo" src="/logo.png" alt="">
        </template>

        <vs-navbar-item :active="active == 'start'" to="/" id="start">
            Start
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'omnie'" to="/omnie" id="omnie">
            O mnie
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'kontakt'" to="/kontakt" id="kontakt">
            Kontakt
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'cennik'" to="cennik" id="cennik">
            Cennik
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'referencje'" to="referencje" id="referencje">
            Referencje
        </vs-navbar-item>

        <vs-navbar-group>
          Social media
          <template #items>
            <vs-navbar-item  href="https://www.facebook.com/radec24pl/" blank>
              Remonty i wykończenia wnętrz
            </vs-navbar-item>
            <vs-navbar-item href="https://www.facebook.com/sufitynapinaneino/" blank>
              Sufity napinane
            </vs-navbar-item>
            <vs-navbar-item href="https://www.instagram.com/radec24.pl/" blank>
              Instagram
            </vs-navbar-item>
            <vs-navbar-item href="https://www.youtube.com/channel/UCKJPSXYHxrWx0PDYVwqLGEw" blank>
              Youtube
            </vs-navbar-item>
          </template>
        </vs-navbar-group>

        <vs-navbar-item href="http://www.dev-bud.pl/" blank>
            Budowa domów
        </vs-navbar-item>

        <template #right>
            <vs-button @click="activeSidebar = !activeSidebar" flat icon>
            <i class='bx bx-menu'></i>
          </vs-button>
        </template>
    </vs-navbar>
    <vs-sidebar
        flex
        v-model="active"
        :open.sync="activeSidebar"
        >
        <template #logo>
          <img class="nav_logo" src="/logo.png" alt="">
        </template>
        <vs-sidebar-item id="start" to="/">
          <template #icon>
            <i class='bx bx-home'></i>
          </template>
          Start
        </vs-sidebar-item>
        <vs-sidebar-item to="/omnie" id="omnie">
          <template #icon>
            <i class='bx bxs-user-detail'></i>
          </template>
          O mnie
        </vs-sidebar-item>
        <vs-sidebar-item to="/kontakt" id="kontakt">
          <template #icon>
            <i class='bx bxs-contact'></i>
          </template>
          Kontakt
        </vs-sidebar-item>
        <vs-sidebar-item to="/cennik" id="cennik">
          <template #icon>
            <i class='bx bx-money' ></i>
          </template>
          Cennik
        </vs-sidebar-item>
        <vs-sidebar-item to="/referencje" id="referencje">
          <template #icon>
            <i class='bx bx-file'></i>
          </template>
          Referencje
        </vs-sidebar-item>
        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <i class='bx bx-group'></i>
              </template>
              Social media
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item id="Facebook-radec" href="https://www.facebook.com/radec24pl/" blank>
            <template #icon>
              <i class='bx bxl-facebook' ></i>
            </template>
            Remonty i wykończenia wnętrz
          </vs-sidebar-item>
          <vs-sidebar-item id="Facebook-sufity" href="https://www.facebook.com/sufitynapinaneino/" blank>
            <template #icon>
              <i class='bx bxl-facebook' ></i>
            </template>
            Sufity napinane
          </vs-sidebar-item>
          <vs-sidebar-item id="Instagram" href="https://www.instagram.com/radec24.pl/" blank>
            <template #icon>
              <i class='bx bxl-instagram' ></i>
            </template>
            Instagram
          </vs-sidebar-item>
          <vs-sidebar-item id="Youtube" href="https://www.youtube.com/channel/UCKJPSXYHxrWx0PDYVwqLGEw" blank>
            <template #icon>
              <i class='bx bxl-youtube' ></i>
            </template>
            Youtube
          </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-item href="http://www.dev-bud.pl/" blank>
          <template #icon>
            <i class='bx bxs-home'></i>
          </template>
          Budowa domów
        </vs-sidebar-item>

      </vs-sidebar>


    <Nuxt />


    <vs-dialog width="550px" blur not-center v-model="alert">
      <template #header>
        <h4 class="not-margin">
          <b>Uwaga!</b>
        </h4>
      </template>

      <div class="con-content">
        <p>
          Ta strona jest w trakcie rozwoju i jej zawartość zostanie rozszerzona lub zmieniona.
        </p>
      </div>
    </vs-dialog>
  </div>
</template>

<script>
import cookie from '@/components/cookie.vue'

export default {
  data:() => ({
    active: 'start',
    activeSidebar: false,
    alert : false
  }),
  mounted(){
    this.$vs.setColor('primary', '#e60000')
    /*
    const noti = this.$vs.notification({
      duration: 'none',
      content: cookie,
      clickClose: true
    })
    */
  }
}
</script>


<style lang="scss" >
/*         Desktop        */

.vs-navbar__right .vs-button{
  display: none;
}

.vs-navbar__center{
  display: block;
}

.vs-notification{
  box-shadow: 0 0px 10px 5px #0000002a;
}

.vs-navbar-content.paddingScroll{
  background-color: #ffffff77;
  backdrop-filter: blur(15px);
  border-radius: 25px;
  margin-top: 20px;
  width: 95%;
  left: 2.5%;
}

.vs-navbar-content.paddingScrollActive {
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, .2);
    background-color: #ffffff;
    padding: 10px 0;
  }

.nav_logo{
    width: 120px;
}

.vs-navbar__group{
  display: inline-block;

  .vs-navbar__group__item{
    color: #111;
  }
}

.vs-navbar__group__items{
  box-shadow: 0 2px 20px -5px #00000077;
}


.vs-navbar__item{
  color: #111;

  &.active{
    color: #e60000;
  }

} 

.vs-navbar__line{
  background-color: #e60000;
}

.vs-sidebar-content .vs-sidebar__logo img{
  max-height: unset;
}

#mmenu{
    width: 30px;
    height: 30px;
    margin-top: 5px;
    position: relative;

    .line{
        position: absolute;
        left: 0;
        top: 45%;
        width: 100%;
        height: 3px;
        background-color: black;

        &::before{
            content: '';
            display: block;
            position: absolute;
            left: 0;
            top: -250%;
            width: 100%;
            height: 100%;
            background-color: black;
        }

        &::after {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            top: 250%;
            width: 100%;
            height: 100%;
            background-color: black;
        }
    }
}
</style>




<style lang="scss">
/*         Mobile        */
@media (max-width: 790px){
  .vs-navbar-content{
    width: 100%;
  }
  .vs-navbar__right .vs-button{
    display: block;
  }
  .vs-navbar__center{
    display: none !important;
  }
  .vs-navbar__line{
    display: none !important;
  }
}


</style>









<style>
.con-footer {
	display: flex;
	align-items: center;
	justify-content: flex-end;
}

.con-footer .vs-button {
	margin: 0px;
}

.con-footer .vs-button .vs-button__content {
	padding: 10px 30px;
}

.con-footer .vs-button ~ .vs-button {
	margin-left: 10px;
}

.not-margin {
	margin: 0px;
	font-weight: normal;
	padding: 10px;
	padding-bottom: 0px;
}

.con-content {
	width: 100%;
}

.con-content p {
	font-size: 0.8rem;
	padding: 0px 10px;
}

.con-content .vs-checkbox-label {
	font-size: 0.8rem;
}

.con-content .vs-input-parent {
	width: 100%;
}

.con-content .vs-input-content {
	margin: 10px 0px;
	width: calc(100%);
}

.con-content .vs-input-content .vs-input {
	width: 100%;
}

.footer-dialog {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: calc(100%);
}

.footer-dialog .new {
	margin: 0px;
	margin-top: 20px;
	padding: 0px;
	font-size: 0.7rem;
}

.footer-dialog .new a {
	color: getColor('primary') !important;
	margin-left: 6px;
}

.footer-dialog .new a:hover {
	text-decoration: underline;
}

.footer-dialog .vs-button {
	margin: 0px;
}
</style>


<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
