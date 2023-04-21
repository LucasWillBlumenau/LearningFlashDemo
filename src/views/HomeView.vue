<template>
  <div v-if="isModalActive" class="modal">
        <div class="modal-box">
          <h3>Adicione Seu Novo Deck</h3>
          <form @submit.prevent="createDeck">
              <div class="inputfield">
                  <label for="firstField">Nome</label>
                  <input type="text" name="firstField" v-model="deckName" required>
              </div>
              <div class="inputfield">
                  <label for="secondField">Descrição</label>
                  <input type="text" name="secondField" v-model="deckDescription" required>
              </div>
              <div class="buttons">
                  <button type="submit">Adicionar</button>
                  <button @click="isModalActive = false">Cancelar</button>
              </div>
          </form>
        </div>
    </div>
  <main class="home">
    <h1 class="section-title">Confira os resumos da semana</h1>
    <section class="books-section">
      <a v-for="(image, index) in images" :href="'/books/' + index">
        <BookCard :image-source="image.source" :book-title="image.book"/>
      </a>
    </section>
    <h1 class="section-title">Biblioteca de Decks:</h1>
    <section v-if="decks.length == 0" class="no-flashcards-section">
        <div class="flashcard">
            <div class="first-card"></div>
            <div class="second-card"></div>
        </div>
        <div class="flashcard-appender">
            <p>Você ainda não possui nenhum deck...</p>
            <div class="plus-button" @click="isModalActive = true">
                <i class="fa fa-plus"></i>
                <p>Adicionar novo deck</p>
            </div>
        </div>
    </section>
    <section v-else class="decks-section">
      <div class="decks">
        <Deck v-for="deck in decks" :deck-title="deck.deckTitle" :deck-description="deck.deckDescription" />
      </div>
      <div class="plus-button" @click="isModalActive = true">
          <i class="fa fa-plus"></i>
          <p>Adicionar novo deck</p>
      </div>
    </section>
    
  </main>
</template>

<script>
  import BookCard from '@/components/BookCard.vue';
  import Deck from '@/components/Deck.vue';
  export default {
    name: 'HomeView',
    components: { BookCard, Deck },
    data: () => ({
      images: [
        {
          book: '1984',
          source: require('@/assets/img/1984.jpg')
        },
        {
          book: 'Fahreheit 451',
          source: require('@/assets/img/fahreheit.jpg')
        },
        {
          book: 'O Pequeno Príncipe',
          source: require('@/assets/img/o-pequeno-principe.jpg')
        },
        {
          book: 'O Poder do Hábito',
          source: require('@/assets/img/o-poder-do-habito.jpg')
        },
        {
          book: 'Os Sofrimentos do Jovem Werther',
          source: require('@/assets/img/werther.jpg')
        },
      ],
      decks: [],
      deckName: '',
      deckDescription: '',
      isModalActive: false
    }),
    methods: {
      createDeck: function() {
        this.decks.push({
          deckTitle: this.deckName,
          deckDescription: this.deckDescription
        });
        this.isModalActive = false;
      }
    }
  }
</script>

<style scoped>
  .home {
    width: 100vw;
    height: 100vh;
    padding: 35px 15px;
    position: relative;
    margin-left: 4rem;
  }

  .section-title {
    color: #fff;
    text-align: center;  
    margin-top: 5rem;
  }

  .section-title:first-child {
    margin-top: 1rem;
  } 

  .books-section {
    position: relative;
    top: 45px;
    display: flex;
    justify-content: center;
    height: min-content;
    width: 100%;
    gap: 15px;
    padding: 15px 30px;
    overflow-x: scroll;
  }

  .books-section a {
    text-decoration: none;
  }

  .decks-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 25px 45px;
  }

  .decks {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 25px 45px;
    overflow-x: scroll;
  }

  .no-flashcards-section {
    display: flex;
    justify-content: center;
    width: 100%;
    height: min-content;
    margin-top: 2rem;
    width: 100%;
    margin-bottom: 4rem;
  }

  .flashcard {
      display: flex;
      justify-content: right;
      align-items: center;
      height: min-content;
      display: flex;
      width: 50%;
      margin-right: 1rem;
  }

  .first-card {
      height: 150px;
      width: 100px;
      background-color: #ec7e7e;
      border-radius: 10px;
      box-shadow: 15px 15px 20px #00000066;
  }

  .second-card {
      height: 100px;
      width: 150px;
      background-color: #aa491c99;
      border-radius: 10px;
      margin-top: auto;
      transform: translateX(-75px);
      z-index: 1;
      box-shadow: 15px 15px 20px #00000066;
  }

  .flashcard-appender {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;
  }

  .flashcard-appender p {
      color: #ffffffb2;
  }

  .plus-button {
      display: flex;
      justify-content: left;
      align-items: center;
      gap: 15px;
      margin-top: 15px;
  }

  .plus-button i {
      color: #fff;
      background-color: #1611114f;
      height: 25px;
      width: 25px;
      scale: 1.3;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      transition: 250ms;
  }

  .plus-button i:hover {
      color: #ec7e7e;
      scale: 1.5;
      transition: 250ms;
      cursor: pointer;
  }

  .plus-button p {
      color: #f0f8ff;
      font-weight: 600;
  }

  .modal {
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #11111199;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .modal-box {
    color: #fff;
    background-color: #111;
    padding: 15px 25px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .inputfield {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 15px;
  }

  .inputfield input {
      border: none;
      border-radius: 5px;
      padding: 3px 5px;
      outline: none;
  }

  .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
  }

  .buttons button {
      border: none;
      border-radius: 5px;
      padding: 10px 15px;
      background-color: #03ee03f6;
  }

  .buttons button:hover {
      cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    .home {
      margin-left: 0;
      margin-bottom: 2rem;
    }

    .no-flashcards-section {
        flex-direction: column;
        width: 100%;
    }

    .flashcard {
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;
    }

    .first-card {
        transform: translate(50px);
    }

    .second-card {
        transform: translateX(-25px);
    }

    .plus-button {
        justify-content: center;
    }

    .flashcard-appender {
        width: 100%;
        justify-content: center;
        text-align: center;
    }

    .decks-section {
      margin-bottom: 2rem;
    }
  }  
</style>

