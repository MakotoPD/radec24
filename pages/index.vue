<template>
  <div class="container">
    <div class="h90 header">
        <div class="title">
          RZECZY NIEMOŻLIWE ROBIMY OD RĘKI.<br> NA CUDA TRZEBA POCZEKAĆ
        </div>
    </div>
    <div id="onas" class="h90">
       <vs-row justify="center">
        <vs-col class="auto-cont" w="5">
          <img class="auto" src="/bg/auto.jpeg" alt="">
        </vs-col>
        <vs-col w="5">
          <h1>Moje usługi:</h1>
          <vs-alert dark>
            <h3>Oferuję profesjonalne usługi budowlane przeznaczone dla klientów indywidualnych oraz wszelkich inwestorów nastawionych na najwyższą jakość wykończenia.</h3>
          </vs-alert>

          <p>Specjalizuję się w szeroko pojętej wykończeniówce i remontach wnętrz przy czym stawiam na jakość a nie szybkość powierzonego mi zadania. Z każdego poddasza nieużytkowego potrafię wyeksponować piękne wnętrze użytkowe.</p>
          <p>Oferuję usługi takie jak:</p>
          <ul>
            <li>sucha zabudowa (ścianki, sufity podwieszane z gk, amstrong, izolacja oraz zabudowa poddasza)   </li>
            <li>gładzie gipsowe,</li>
            <li>malowanie,</li>
            <li>dekoracyjne panele 3D, cegiełki, beton architektoniczny,  tynki dekoracyjne itp. </li>
            <li>elewacje, fasady,</li>
            <li>prace hydrauliczne,</li>
            <li>prace elektryczne,</li>
            <li>układanie glazury, terakoty, gresu, wszelkie montaże łazienkowe, instalacje maty grzejnej, impregnację płytek, montaż luster, uszczelnienia.</li>
            <li>transport powierzonego towaru na budowę.</li>
          </ul>
          <p>Jestem dystrybutorem oraz montażystą Sufitów Napinanych. Jest to sufit wykonany z foli która za pomocą wysokiej temperatury powietrza zostaje napięta w specjalne profile. Efektem tego jest piękny sufit przypominający taflę szkła. Możliwości sufitu są wielkie a ogranicza nas tylko wyobraźnia.</p>
        </vs-col>
      </vs-row>
      <vs-row justify="center">
        <vs-col class="mobi" w="8">
          <h1>Moje usługi:</h1>
          <vs-alert dark>
            <h3>Oferuję profesjonalne usługi budowlane przeznaczone dla klientów indywidualnych oraz wszelkich inwestorów nastawionych na najwyższą jakość wykończenia.</h3>
          </vs-alert>

          <p>Specjalizuję się w szeroko pojętej wykończeniówce i remontach wnętrz przy czym stawiam na jakość a nie szybkość powierzonego mi zadania. Z każdego poddasza nieużytkowego potrafię wyeksponować piękne wnętrze użytkowe.</p>
          <p>Oferuję usługi takie jak:</p>
          <ul>
            <li>sucha zabudowa (ścianki, sufity podwieszane z gk, amstrong, izolacja oraz zabudowa poddasza)   </li>
            <li>gładzie gipsowe,</li>
            <li>malowanie,</li>
            <li>dekoracyjne panele 3D, cegiełki, beton architektoniczny,   tynki dekoracyjne itp. </li>
            <li>elewacje, fasady,</li>
            <li>prace hydrauliczne,</li>
            <li>prace elektryczne,</li>
            <li>układanie glazury, terakoty, gresu, wszelkie montaże łazienkowe, instalacje maty grzejnej, impregnację płytek, montaż luster, uszczelnienia.</li>
            <li>transport powierzonego towaru na budowę.</li>
          </ul>
          <p>Jestem dystrybutorem oraz montażystą Sufitów Napinanych. Jest to sufit wykonany z foli która za pomocą wysokiej temperatury powietrza zostaje napięta w specjalne profile. Efektem tego jest piękny sufit przypominający taflę szkła. Możliwości sufitu są wielkie a ogranicza nas tylko wyobraźnia.</p>
        </vs-col>
      </vs-row>
    </div>


    <div class="wspolprace h60">
        <div class="wsp-cont">
          <h1>Współpracujemy z</h1>
          <div class="logo-cont">
             <a href="https://www.atlas.com.pl/" target="_blank"> <img class="logo-wsp" src="/wspolprace/atlas.png" alt=""> </a>
          </div>
          <div class="logo-cont">
            <a href="https://www.rigips.pl/" target="_blank"> <img class="logo-wsp" src="/wspolprace/rigips.png" alt=""> </a>
          </div>
          <div class="logo-cont">
            <a href="https://knauf.pl/" target="_blank"> <img class="logo-wsp" src="/wspolprace/knauf.png" alt=""> </a>
          </div>
          <div class="logo-cont">
            <a href="http://wim-chb.pl/" target="_blank"> <img class="logo-wsp" src="/wspolprace/wim.png" alt=""> </a>
          </div>
          <div class="logo-cont">
            <a href="https://www.kerakoll.com/pl/" target="_blank"> <img class="logo-wsp" src="/wspolprace/kerakol.png" alt=""> </a>
          </div>
          <div class="logo-cont">
            <a href="http://www.dev-bud.pl" target="_blank"> <img class="logo-wsp" src="/wspolprace/devbud.png" alt=""> </a>
          </div>
        </div>
    </div>
    <foter/>
  </div>
</template>

<script>
import foter from '@/components/foter.vue'

export default {
  components:{
    foter
  }
}
</script>

<style lang="scss">
  .container{
    .header{
      background: url('/bg/ciemne.jpg');
      background-attachment: fixed;
      background-position: center;
      background-size: cover;
      position: relative;

      .title{
        width: 100%;
        padding: 0 20px;
        height: auto;
        position: absolute;
        left: 0;
        top: 45%;
        color: white;
        font-weight: 800;
        font-size: 40pt;
        text-align: center;
      }
    }

    #onas{
      .vs-col{
        margin: 80px 0;
        text-align: left;

        &.mobi{
          display: none !important;
        }

        .vs-alert{
          margin: 40px 0;
        }

        p{
          margin: 15px 0;
        }

        ul{
          li{
            margin: 5px 0;
          }
        }

        &.auto-cont{
          text-align: center;

          .auto{
            width: 400px;
            border-radius: 25px;
            box-shadow: 0 10px 40px -5px rgba(255, 0, 0, 0.733);
          }
        }
      }
    }


    .wspolprace{
      padding: 80px 5%;

      .wsp-cont{
        position: relative;
        text-align: center;

        h1{
          margin-bottom: 50px;
        }

        .logo-cont{
          width: 250px;
          height: 250px;
          position: relative;
          display: inline-flex;
          margin: 10px;
          .logo-wsp{
            position: absolute;
            width: 250px;
            height: auto;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            filter: grayscale(.8);
            transition: .3s;

            &:hover{
              filter: grayscale(0);
            }
          }
        }

      }
      

      .vs-card-content.type-2 {
        display: inline-block;
        height: 300px;

        .vs-card__img{
          max-height: 100%;
        }
        .vs-card:hover {
          .vs-card__img img{
            transform: scale(1);
          }
      }
      }
    }
  }
  
</style>


<style lang="scss">
@media (max-width:1124px){
  .container{
    #onas{
      .vs-col{
        display: none !important;
        &.mobi{
          display: block !important;
        }
        &.auto-cont{
          text-align: center;
          display: block !important;

          .auto{
            width: 400px;
            border-radius: 25px;
            box-shadow: 0 10px 40px -5px rgba(255, 0, 0, 0.733);
          }
        }
      }
    }
  }
}


@media (max-width: 790px){
  .container{
    .header{
      .title{
        width: 100%;
        padding: 0 20px;
        height: auto;
        position: absolute;
        left: 0;
        top: 30%;
        color: white;
        font-weight: 800;
        font-size: 36pt;
        text-align: center;
      }
    }
    #onas{
      .vs-col{
        display: none !important;
        width: auto;
        padding: 0 20px;
        &.mobi{
          display: block !important;
        }
        &.auto-cont{
          text-align: center;
          display: block !important;

          .auto{
            width: 400px;
            border-radius: 25px;
            box-shadow: 0 10px 40px -5px rgba(255, 0, 0, 0.733);
          }
        }
      }
    }
  }
}

@media (max-width: 440px){
  .container{
    .header{
      .title{
        font-size: 32pt;
        text-align: center;
      }
    }
    #onas{
      .vs-col{
        display: none !important;
        width: auto;
        padding: 0 20px;
        &.mobi{
          display: block !important;
        }
        &.auto-cont{
          text-align: center;
          display: block !important;

          .auto{
            width: 260px;
            border-radius: 25px;
            box-shadow: 0 10px 40px -5px rgba(0, 162, 255, 0.733);
          }
        }
      }
    }
  }
}
</style>


<style>
.h100{
    min-height: 100vh;
    height: auto;
}
.h90{
    min-height: 90vh;
    height: auto;
}
.h80{
    min-height: 80vh;
    height: auto;
}
.h70{
    min-height: 70vh;
    height: auto;
}
.h60{
    min-height: 60vh;
    height: auto;
}
.h50{
    min-height: 50vh;
    height: auto;
}
.h40{
    min-height: 40vh;
    height: auto;
}
.h30{
    min-height: 30vh;
    height: auto;
}
.h20{
    min-height: 20vh;
    height: auto;
}
.h10{
    min-height: 10vh;
    height: auto;
}
</style>