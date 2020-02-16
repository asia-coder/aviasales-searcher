<template>
  <div class="sidebar">
    <div class="head-title">Количество пересадок</div>

    <div class="filter-item">
      <checkbox-item label="Все" value="all"></checkbox-item>
    </div>
    <div class="filter-item">
      <checkbox-item label="Без пересадок" value="0"></checkbox-item>
    </div>
    <div class="filter-item">
      <checkbox-item label="1 пересадка" value="1"></checkbox-item>
    </div>
    <div class="filter-item">
      <checkbox-item label="2 пересадки" value="2"></checkbox-item>
    </div>
    <div class="filter-item">
      <checkbox-item label="3 пересадки" value="3"></checkbox-item>
    </div>
  </div>
</template>

<script>
  import CheckboxItem from '../controls/Checkbox'

  export default {
    name: 'Sidebar',
    components: {
      CheckboxItem
    }
  }
</script>

<style scoped>
  .sidebar {
    background: #fff;
    padding: 20px 20px 10px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 230px;
    margin-right: 20px;
  }

  .head-title {
    margin-bottom: 10px;
  }

  .filter-item {
    margin: 0 -20px;
  }

  .avs-checkbox {
    display: block;
    padding: 8px 20px 12px;
  }

  .avs-checkbox:hover {
    background: #F1FCFF;
  }
</style>
