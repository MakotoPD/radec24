<template>
    <div class="container">
        <div class="h60 header">
            <div class="title">
                Cennik
            </div>
        </div>
        <div class="h100 main">
            <div class="cont">
                <div>
                    <p class="starttext">Różnorodność realizowanych prac nie pozwala na zaproponowanie Państwu jednoznacznego, uniwersalnego cennika.</p>
                </div>
                <div>
                    <h1>Do wyceny każdego zlecenia podchodzimy indywidualnie. </h1>
                    <p class="maintext">
                        Na podstawie analizy zakresu i ilości prac, a także przewidywanej czasochłonności zadania, na życzenie sporządzamy dokładny kosztorys ofertowy (odpłatnie <b>od 100zł netto</b>. W przypadku akceptacji kosztorysu i przystąpieniu do realizacji, kosztorys jest nieodpłatny a zaliczka zostaje zwrócona.) Projekt, aranżacja, wizualizacja również (odpłatnie od 300zł netto. W przypadku akceptacji kosztorysu i przystąpieniu do realizacji wizualizacja jest nieodpłatna a zaliczka zostaje zwrócona)
                        <br><br>
                        Należy również rozróżnić te definicję kosztorys a cennik.
                        <br><br>
                        Cennik jest to spis towarów oraz usług z podaniem ich ceny. O taką formę może klient nas zapytać a my bezzwłocznie prześlemy cennik na podany adres email.
                        <br><br>
                        Kosztorys jest to obliczenie przewidywanych kosztów związanych z wykonaniem czegoś. Za ten punkt właśnie jest pobierana opłata. Jest to normalna usługa kosztorysowania. Naszym kosztorysem inwestor może się posługiwać w dalszych poszukiwaniach ekipy.
                        <br><br>
                        Kosztorys inwestorski jest to kosztorys sporządzany przez inwestora w celu określenia wartości planowanej inwestycji. Inwestor sam szacuje koszty i w tym celu nie jest mu potrzebny kosztorys lecz tylko nasz cennik.
                        <br><br>
                        Kosztorys ślepy jest to przygotowany przez inwestora wykaz i opis robót, których wartość określa potencjalny wykonawca, w tym przypadku my. Ta usługa u nas jest gratis.
                    </p>
                </div>
                <div>
                    <p class="endtext">
                        Nie będziemy Państwa przekonywać, że u nas jest najtaniej, ale możemy zagwarantować wysoką jakość wykonanych przez nas prac.
                        Ponadto zawsze istnieje możliwość negocjacji cen oraz form płatności. <b>„Stali klienci mogą liczyć na dodatkowe korzyści”</b>
                    </p>
                </div>
            </div>
            <div class="checked">
                <img src="sprawdzona-firma.png" alt="">
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

    .main{
        justify-content: center;

        .cont{
            min-width: 290px;
            width: 40%;
            padding: 100px 0;
            margin: 0 30%;
            text-align: center;

            p.starttext{
                font-size: 20px;
                color: #666;
                padding: 50px 0;
            }

            h1{
                padding-top: 50px;
                padding-bottom: 20px;
                color: #333;
            }

            p.maintext{
                text-align: justify;
                line-height: 30px;
                color: #666;
            }

            p.endtext{
                color: #666;
                padding: 100px 0;
                font-size: 16px;
            }
        }
        
        .checked{
            width: 100%;
            padding: 100px 0;
            background: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url('/bg/ciemne.jpg');
            background-attachment: fixed;
            background-position: center;
            background-size: cover;
            position: relative;

            img{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
}
</style>

<style lang="scss" scoped>
@media (max-width: 768px){
    .container{
        .main{
            .cont{
                min-width: 290px;
                width: 80%;
                padding: 100px 0;
                margin: 0 10%;
                text-align: center;
            }
        }
    }
}

@media (max-width: 375px){
    .container{
        .main{
            .cont{
                min-width: 290px;
                width: 90%;
                padding: 100px 0;
                margin: 0 5%;
                text-align: center;
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