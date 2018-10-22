<template>
    <header>

        <div class="header-topbar">
 
        <span class="header-menu-icon is-size-5 ">M<span v-on:click="openNav"><img src="~assets/images/menu.svg" alt="menu-icon"></span>NU</span>
        </div>
        <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">&times;</a>
        <div class="overlay-content">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
        </div>
    </header>
</template>



<script>
export default {
    methods: {
        openNav: function () {
            document.getElementById('myNav').style.width = "100%";
        },
        closeNav: function() {
            document.getElementById("myNav").style.width = "0%";
        }
    }
}
</script>
