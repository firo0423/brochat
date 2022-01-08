<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  font-family: Arial,sans-serif;
  height: 100%;
  background-color: rgb(194, 194, 194);
  display: flex;
  align-items: center;
  justify-content: center;
}
#app {
  overflow: hidden;
  border-radius: 10px;
  margin-top: 10px;
  height: 900px;
  width: 850px;
  background-color: #eeeeee;

  position: relative;
}
</style>
