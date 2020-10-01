<template>
    <div id="kontakt">
        <div class="h70 header">
            <div class="title">
                Kontakt
            </div>
        </div>
        <div class="cont">
            <div class="container">
                <img src="/wizytówka.jpg" alt="">
                <vs-row justify="center">
                    <vs-col w="3"><a href="https://www.google.com/maps/place/RADEC24+us%C5%82ugi+remontowe,+wyko%C5%84czenia+wn%C4%99trz,+Inowroc%C5%82aw/@52.430884,15.8069981,7.21z/data=!4m5!3m4!1s0x470350898bd704dd:0xe8d349a8766307bf!8m2!3d52.4423934!4d17.7704057?hl=pl-PL" target="_blank"><i class='bx bxs-map bx-md'></i> <h4>Ludzisko 56,<br> 88-160 Janikowo</h4></a></vs-col>
                    <vs-col w="3"><a href="tel:737444950" target="_blank"><i class='bx bxs-phone bx-md' ></i> <h4>+48 737 444 950</h4></a></vs-col>
                    <vs-col w="3"><a href="mailto:radec24@wp.pl" target="_blank"><i class='bx bxs-envelope-open bx-md'></i> <h4>radec24@wp.pl</h4></a></vs-col>
                </vs-row>
                <div>
                    <p>
                        RADEC24 FIRMA OGÓLNOBUDOWLANA<br>
                        RADOSŁAW DĄBROWSKI<br><br>

                        Ludzisko 56<br>
                        88-160 Janikowo <br><br>

                        tel. 737 444 950 <br>
                        NIP 5562323231 <br>
                        REGON 361811180
                    </p>
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
    #kontakt{
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
        .cont{
            width: 100%;
            text-align: center;
            align-items: center;
            position: relative;
            .container{
                width: 800px;
                min-width: 300px;
                height: 1000px;
                background-color: white;
                border-radius: 25px;
                position: relative;
                left: 50%;
                top: -150px;
                transform: translateX(-50%);
                box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.616);

                img{
                    width: 90%;
                    margin-top: 40px;
                    border-radius: 25px;
                }

                a{
                    text-decoration: none;
                    color: darkred;
                }
                .vs-col{
                    margin: 50px 20px;
                    
                }

                p{
                    color: #444;
                }
            }
        }
    }

@media (max-width:1024px){
    #kontakt{
        .cont{
            .container{
                width: 500px;
                min-width: 300px;
                height: 800px;

                .vs-col{
                    margin: 50px 10px;
                }

                
            }
        }
    }
}

@media (max-width:768px){
    #kontakt{
        .cont{
            .container{
                width: 300px;
                height: 600px;

                .vs-col{
                    h4{
                        font-size: 11px;
                    } 
                }
                p{
                    font-size: 13px;
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