<template>
  <main class="home">
    <h1 class="section-title">Confira os resumos da semana</h1>
    <section class="books-section">
      <a v-for="(image, index) in images" :href="'/books/' + index">
        <BookCard :image-source="image.source" :book-title="image.book"/>
      </a>
    </section>
    <h1 class="section-title">Biblioteca de Decks:</h1>
    <section class="flashcards-section">
        <div class="flashcard">
            <div class="first-card"></div>
            <div class="second-card"></div>
        </div>
        <div class="flashcard-appender">
            <p>Você ainda não possui nenhum deck...</p>
            <div class="plus-button">
                <i class="fa fa-plus"></i>
                <p>Adicionar novo deck</p>
            </div>
        </div>
    </section>
  </main>
</template>

<script>
  import BookCard from '@/components/BookCard.vue';
  export default {
    name: 'HomeView',
    components: {
      BookCard
    },
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
      ]
    }) 
  }
</script>

<style>
  .home {
    width: 100vw;
    height: 100vh;
    padding: 35px 15px;
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
  }

  .books-section a {
    text-decoration: none;
  }

  .flashcards-section {
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
      margin-left: 1rem;
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

  @media screen and (max-width: 900px) {
    .home {
      margin-left: 0;
    }

    .books-section {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    .flashcards-section {
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
        margin-bottom: 4rem;
    }
  }  
</style>

