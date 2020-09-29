<template>
    <div class="container">
        <div class="h60 header">
            <div class="title">
                Referencje
            </div>
        </div>
        <div class="h100 main">
            <img v-img:group src="/referencje/alteza.jpg" alt="">
            <img v-img:group src="/referencje/isover.jpg" alt="">
            <img v-img:group src="/referencje/kmw.png" alt="">
            <img v-img:group src="/referencje/nucair.png" alt="">
            <img v-img:group src="/referencje/pgkim.jpg" alt="">
            <img v-img:group src="/referencje/sirmed.jpg" alt="">
            <img v-img:group src="/referencje/wosp.jpg" alt="">
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
        text-align: center;
        padding: 100px 100px;
        
        img{
            width: 250px;
            margin: 20px;
            transition: .2s;

            &:hover{
                transform: scale(.9);
                filter: brightness(.8);
            }
        }
    }
}
</style>

<style lang="scss">
@media (max-width:768px){
    .container{
        .main{
            justify-content: center;
            text-align: center;
            padding: 100px 50px;
            
            img{
                width: 250px;
                margin: 20px;
                transition: .2s;

                &:hover{
                    transform: scale(.9);
                    filter: brightness(.8);
                }
            }
        }
    }
}

@media (max-width: 425px){
    .container{
        .main{
            justify-content: center;
            text-align: center;
            padding: 100px 0px;
            
            img{
                width: 250px;
                margin: 20px;
                transition: .2s;

                &:hover{
                    transform: scale(.9);
                    filter: brightness(.8);
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