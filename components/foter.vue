<template>
    <div id="foter">
        <div class="start">
            <img src="logo.png" alt="">
        </div>
        <div class="sec">
            <h5>Copyright © 2020 Radec24. Wszelkie prawa zastrzeżone. | Design & development by <a href="https://makoto.pl" target="_blank">Makoto.</a></h5>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    #foter{
        width: 100%;
        height: 400px;
        
        .start{
            height: 300px;
            background: url('/bg/ciemne.jpg');
            background-attachment: fixed;
            background-position: center;
            background-size: cover;
            position: relative;

            img{
                height: 200px;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                filter: invert(1);

            }
        }
        .sec{
            height: 100px;
            background-color: #1b1b1b;
            text-align: center;

            a{
                color: white;
            }

            h5{
                color: white;
                padding-top: 45px;
            }
        }
    }
</style>

<style lang="scss">
@media (max-width: 768px){
    #foter{
        
        .start{

            img{
                height: 150px;
            }
        }
    }
}

@media (max-width: 425px){
    #foter{
        
        .start{

            img{
                height: 100px;
            }
        }
    }
}
</style>
