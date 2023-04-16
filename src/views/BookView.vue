<template>
    <main class="book-page">
        <section>
            <h3 class="book-title">{{ books[$route.params.index].book }}</h3>
            <img class="book-image" :src="books[$route.params.index].source">
        </section>
        <section class="synopses-section">
            <p>{{ books[$route.params.index].synopsis }}</p>
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
            books: [
                {
                    book: '1984',
                    source: require('@/assets/img/1984.jpg'),
                    synopsis: '1984 desenha uma realidade em que as pessoas vivem sob tutela de um governo tirânico que controla tudo aquilo que é pensado pelas pessoas. O herói da história, Winston Smith busca lutar contra o partido que governa o local em que vivem e busca entender como fora o mundo antes da ditadura.'
                },
                {
                    book: 'Fahreheit 451',
                    source: require('@/assets/img/fahreheit.jpg'),
                    synopsis: 'Fahreheit 451 é um romance escrito por Ray Bradbury e retrata um mundo em que o governo disperta nas pessoas um ódio enorme pela leitura e faz com elas vejam como um crime as ações de ler ou ter livros. O herói da história é um bombeiro, cuja função é simples - queimar livros. Com o passar do tempo o protagonista começa a se questionar do porquê haver tanto ódio aos livros na sociedade, e acaba adquirindo alguns deles em segredo.'
                },
                {
                    book: 'O Pequeno Príncipe',
                    source: require('@/assets/img/o-pequeno-principe.jpg'),
                    synopsis: 'O Pequeno Príncipe narra a história de um aviador que, após um acidente, acaba fazendo um pouso forçado no deserto e encontra um garoto louro, que diz ter vindo de outro planeta. Com o passar dos dias no deserto, o pequeno príncipe conta suas histórias e acaba ensinando ao aviador as maiores lições de sua vida'
                },
                {
                    book: 'O Poder do Hábito',
                    source: require('@/assets/img/o-poder-do-habito.jpg'),
                    synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dicta nemo! Alias, dolorem explicabo? Eum minus voluptatem quod, ducimus consectetur voluptate libero et quos mollitia ut. Aspernatur, repudiandae hic! Voluptas'
                },
                {
                    book: 'Os Sofrimentos do Jovem Werther',
                    source: require('@/assets/img/werther.jpg'),
                    synopsis: 'Os Sofrimentos do Jovem Werther narra a história de um jovem que, através de cartas que escreve a seu amigo, fala sobre o amor que sente por Charlott, uma jovem que acava se casando com outro homem. O casamento de Charlott causa a Werther uma enorme aflição, que vai se tornando cada vez mais e mais intensa ao longo da história, o que culmina na climax da história, quando Werther tira a própria vida.'
                }
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