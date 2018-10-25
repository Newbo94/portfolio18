<template>
    <div class="contact-icon-box">
        <a  href="mailto:jannilas@gmail.com">
        <div >
              <img src="~/assets/images/contact-icon.svg" alt="Contact Icon">  
          </div>
          </a>
    </div>
</template>

<style lang="scss">
    .contact-icon-box {
    position: fixed;
    bottom: 10px;
    right: 50px;
    height: 75px;
    width: 75px;
    border-radius: 200px;
    background-color: #fff;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center; 
    box-shadow: 0px 5px 30px rgba(0,0,0,0.15);
        img {
            height: 25px;
}
a {
    background: transparent;
}
    }


    @media screen and (max-width:768px) {
        .contact-icon-box {
            right: 10px;
        }
    }
</style>


<script>
export default {
    
}
</script>
