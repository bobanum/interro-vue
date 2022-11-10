<template>
  <div>
    <label for="cours">Cours</label>
    <span>
      <select name="cours" id="cours">
        <option value="">Choisissez un cours...</option>
        <option value="582-123-JR">Web 1 : Statique</option>
        <option value="582-234-JR">Web 2 : Magique</option>
        <option value="582-345-JR">Web 3 : Dynamique</option>
      </select>
    </span>
  </div>
</template>
<script>
export default {
    name: 'cours-select'
}
</script>