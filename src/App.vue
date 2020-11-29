<template>
  <div id="app">
<!--    <div class="loader">-->
<!--      <div id="loader-7"></div>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>
<style lang="scss">
  $color1: #E6E7E8;
  $color2: #FF8F8F;
  $color3: #404041;
  $color4: #FF8F8F;
  $color5: #5EC3AF;
  $color6: #9E76B4;
  $color7: #43C7F4;
  $color8: #FFCC4E;

  .loader {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(#fff, 0.8);
  }

  #loader-7 {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: relative;
    margin: 0 auto;
    perspective: 120px;
  }

  #loader-7:before {
    content: "";
    position: absolute;
    left: 25px;
    top: 25px;
    width: 50px;
    height: 50px;
    background-color: $color2;
    animation: flip 1s infinite;
  }

  @keyframes flip {
    0% {
      transform: rotate(0);
    }

    50% {
      transform: rotateY(180deg);
    }

    100% {
      transform: rotateY(180deg) rotateX(180deg);
    }
  }

  @keyframes blink {
    0% {
      opacity: 0;

    }
    100% {
      opacity: 1;
    }
  }

  @keyframes show-text {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes appear {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.05)
    }
    75% {
      transform: scale(0.95)
    }
    100% {
      transform: scale(1)
    }
  }


  body {
    padding-top: 10vh;
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  main {
    height: 80vh;
    width: 100vh;
    overflow: visible;
    transform: scale(0);
    animation: appear 500ms ease-out forwards;

    .screen {
      position: relative;
      height: 100%;
      background-color: #303030;
      border-radius: 8px;
      color: white;
      font-size: 30px;

      .top-bar {
        width: 100%;
        height: 30px;
        position: absolute;
        margin-top: 0;
        background-color: #303030;
        border-radius: 7px 7px 0 0;
        font-size: 1rem;
        padding-top: 4px;

        .buttons {
          position: absolute;
          width: 8px;
          height: 8px;
          top: 12px;
          background: $color4;
          border-radius: 50%;
          left: 22px;

          &:after, &:before {
            position: absolute;
            content: "";
            width: 8px;
            height: 8px;
            border-radius: 50%;
          }

          &:after {
            left: 12px;
            background-color: $color5;
          }

          &:before {
            left: -12px;
            background-color: darken($color4, 20%);
          }
        }
      }

      .code {
        padding: 0 2rem;
        height: 100%;
      }
    }
  }

  #app {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
  }

  input {
    box-sizing: border-box;
    appearance: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 1rem;
    line-height: 1;
    padding: 1.2em 1.2em;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    /*border: 3px solid #ccc !important;*/
    border: none;
    // border: 0;
    border-radius: 0;
    color: $color4;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: color 150ms ease-in-out;
  }

  button {
    box-sizing: border-box;
    appearance: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 1rem;
    line-height: 1;
    padding: 1.2em 2.8em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    border: 3px solid $color4 !important;
    // border: 0;
    border-radius: 0;
    color: $color4;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: color 150ms ease-in-out;

    &:after {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 100%;
      background: $color4;
      z-index: -1;
      transition: width 150ms ease-in-out;
    }

    &:hover {
      color: #fff;

      &:after {
        width: 110%;
      }
    }
  }

  .hidden {
    display: none;
  }

  .w-100 {
    width: 100%;
  }

  nav {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: auto auto auto;
    justify-content: flex-start;
    padding: 30px;

    a {
      font-size: 12px;
      color: #ccc;
      text-decoration: none;

      display: inline-block;
      position: relative;
      line-height: 20px;

      &:hover {
        color: white;
      }

      &.router-link-exact-active {
        color: white;
      }
    }
  }
</style>
