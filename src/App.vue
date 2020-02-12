<template>
  <div id="app">
    <div class="logo">
      <img alt="Vue logo" width="60" height="60" src="./assets/logo.png">
    </div>

    <div class="container">
      <Sidebar></Sidebar>
      <div class="main">
        <div class="buttons-container">
          <button class="button-filter button-filter--active" type="button">Самый дешевый</button>
          <button class="button-filter" type="button">Самый быстрый</button>
        </div>
        <TicketsList></TicketsList>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar'
  import TicketsList from './components/TicketsList'

  export default {
    name: 'app',
    components: {
      Sidebar,
      TicketsList
    }
  }
</script>

<style>
  body {
    margin: 0;
    background-color: #F3F7FA;
    color: #4A4A4A;
    font-family: 'Open Sans', sans-serif;
  }

  .logo {
    text-align: center;
    padding: 25px;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .head-title {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #4A4A4A;
  }

  .container {
    padding: 0 20px 30px;
    max-width: 750px;
    margin: 0 auto;
    display: flex;
  }

  .main {
    flex: 1 0 0;
  }

  .buttons-container {
    margin-bottom: 20px;
    background: #fff;
    border-radius: 5px;
    display: flex;
    box-shadow: inset 0 0 0 1px #DFE5EC;
  }

  .button-filter {
    cursor: pointer;
    flex: 1 0 50%;
    border: none;
    padding: 15px;
    background: transparent;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    outline: none;
  }

  .button-filter:first-child {
    border-radius: 5px 0 0 5px;
  }

  .button-filter:last-child {
    border-radius: 0 5px 5px 0;
  }

  .button-filter--active {
    background: #2196F3;
    color: #fff;

  }
</style>
