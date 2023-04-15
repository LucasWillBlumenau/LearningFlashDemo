<template>
    <main class="book-page">
        <section>
            <h3 class="book-title">{{ images[$route.params.index].book }}</h3>
            <img class="book-image" :src="images[$route.params.index].source">
        </section>
        <section class="synopses-section">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat doloribus consequuntur repudiandae iste, similique, facilis, obcaecati quam dolor omnis quis itaque quos. Quos voluptatem dolorem, sequi praesentium id ex?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, accusamus in, delectus vel commodi sit veritatis dolorum, aliquam dolore est pariatur. Eligendi beatae quia corporis voluptates magni quo quod deserunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quibusdam beatae vero perspiciatis veritatis, nesciunt, molestias adipisci ducimus modi officia reprehenderit. Nemo eos aliquid autem pariatur laboriosam nisi adipisci ut?</p>
            <button class="play-button">
                <span><i class="fa fa-play"></i>Reproduzir Resumo</span>
            </button>
        </section>
    </main>
</template>

<script>
    export default {
        name: 'BookPage',
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

<style scoped>
    .book-page {
        display: flex;
        justify-content: center;
        align-items: center;
        height: min-content;
        width: 100vw;
        padding: 2rem 0.5rem;
        gap: 35px;
    }

    .book-image {
        height: 400px;
        border-radius: 5px;
        margin-top: 15px;
    }

    .book-title {
        color: #fff;
        text-align: center;
    }

    .synopses-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 25px;
        width: 400px;
    }
    .synopses-section p {
        color: #fff;
    }

    .play-button {
        border: none;
        border-radius: 5px;
        padding: 10px 15px;
        background-color: #03ee03f6;
    }

    .play-button:hover {
        cursor: pointer;
        background-color: #0ff30f;
    }

    .play-button span i{
        margin-right: 5px;
    }

    @media screen and (max-width: 900px) {
        .book-page {
            flex-direction: column;
        }
    }
</style>