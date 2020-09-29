<template>
    <div class="component" :model="active">
        <img id="cookie" src="/cookie.svg" alt="">
        <h3>CIASTECZKA !</h3>
        <p>Używamy plików cookie, aby usprawnić korzystanie z tej strony.</p>
        <vs-button dark @click='active==!active'>
            Lubię ciasteczka!
        </vs-button>
    </div>
</template>

<script>
export default {
    data:() => ({
        active: true
    })
}
</script>

<style lang="scss" scoped>
.component{
    background-color: #fffdfa;
    position: relative;
    text-align: center;
    #cookie{
        height: 100px;
    }
    h3{
        margin-top: 7px;
        margin-bottom: 10px;
    }
    p{
        font-size: 14px;
    }
    .vs-button{
        width: 95%;
        margin-top: 20px;
    }
}
    
</style>