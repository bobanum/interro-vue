<template>
  <div class="nouveau">
    <h1>Nouveau</h1>
    <form action="">
      <fieldset>
        <legend>Identification</legend>
        <cours-select />
        <div>
          <label for="session">Cours</label>
          <span>
            <select name="session" id="session">
              <option value="">Choisissez une session...</option>
              <option value="A2022">Automne 2022</option>
              <option value="H2023">Hiver 2023</option>
              <option value="A2023">Automne 2023</option>
            </select>
          </span>
        </div>
        <div>
          <label for="titre">Titre</label>
          <span><input type="text" name="titre" id="titre" /></span>
        </div>
      </fieldset>
      <fieldset>
        <legend>Questions</legend>
        <ul class="options">
          <li><button type="button">Créer une question</button></li>
          <li><button type="button">Choisir une question ▼</button></li>
        </ul>
      </fieldset>
    </form>
  </div>
</template>
<script>
import CoursSelect from "@/components/Cours/Select";
export default {
  name: "nouveau-view",
  components: {
    "cours-select": CoursSelect,
  },
};
</script>
<style lang="scss">
.nouveau {
  fieldset {
    border: 1px solid #444;
	border-radius: 5px;
  }
  .options {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style-type: none;
    gap: 1ch;
    button {
      font: inherit;
      background-color: hsl(var(--hue), var(--sat), 50%);
      border: none;
      padding: 1em;
      border-radius: 0.5em;
      color: #fff;
      font-weight: bold;
    }
  }
  select,
  input,
  textarea,
  button {
    font: inherit;
  }
  select, input[type='text'] {
	border: 1px solid #444;
	border-radius: .5em;
    padding: .5em;
  }
}
</style>
