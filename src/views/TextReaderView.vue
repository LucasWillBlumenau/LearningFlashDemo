<template>
    <div v-if="isModalActive" class="modal">
        <div class="modal-box">
            <div class="flashcard-phrase">
                <h4>Frente: </h4>
                <p>{{ originalPhraseSelected }}</p>
            </div>
            <div class="flashcard-phrase">
                <h4>Verso: </h4>
                <p>{{ translatedPhraseSelected }}</p>
            </div>
            <div class="modal-buttons-container">
                <button class="read-button" @click="isModalActive = false">Adicionar FlashCard</button>
                <button class="read-button" @click="isModalActive = false">Cancelar</button>
            </div>
        </div>
    </div>
    <main class="content">
        <div class="text-wrapper">
            <div class="paragraph-container">
                <p><span @click="showModal(phrase)" class="text-heading" v-for="phrase in text">{{ phrase.original + ' '}}</span></p>
            </div>
            <div class="paragraph-container">
                <p><span class="translation-heading" v-for="phrase in text">{{ phrase.translation + ' '}}</span></p>
            </div>
        </div>
        <button class="read-button" @click="readText">Ler Texto</button>
    </main>
</template>

<script>
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    export default {
        name: 'TextReaderView',
        data: () => ({
            text: [
                {
                    original: 'Shall I compare thee to a summer day?',
                    translation: 'Devo te comparar a um dia de verão'
                },
                {
                    original: 'Thou art more lovely and more temperate',
                    translation: 'Tu és mais adorável e mais temperado'
                },
                {
                    original: 'Rough winds do shake the darling buds of May',
                    translation: 'Ventos fortes abalam os botões queridinhos de maio'
                },
                {
                    original: 'And summer’s lease hath all too short a date',
                    translation: 'E o contrato de arrendamento de verão tem uma data demasiado curta'
                },
                {
                    original: 'Sometime too hot the eye of heaven shines',
                    translation: 'Às vezes quente demais o olho do céu brilha'
                }, 
                {
                    original: 'And often is his gold complexion dimm\'d',
                    translation: 'E muitas vezes a sua tez dourada'
                }, 
                {
                    original: 'And every fair from fair sometime declines,',
                    translation: 'E toda feira de feira em algum momento declina,'
                }, 
                {
                    original: 'By chance or nature’s changing course untrimm\'d',
                    translation: 'Por acaso ou a mudança de rumo da natureza sem trimm\'d'
                }, 
                {
                    original: 'But thy eternal summer shall not fade,',
                    translation: 'Mas o teu eterno verão não se desvanecerá,'
                }, 
                {
                    original: 'Nor lose possession of that fair thou ow’st;',
                    translation: 'Nem percais a posse dessa justa que deves;'
                }, 
                {
                    original: 'Nor shall death brag thou wander’st in his shade,',
                    translation: 'Nem a morte te gabará de andares à sua sombra,'
                }, 
                {
                    original: 'When in eternal lines to time thou grow’st:',
                    translation: 'Quando em eternas filas ao tempo cresces:'
                }, 
                {
                    original: 'So long as men can breathe or eyes can see, So long lives this, and this gives life to thee.',
                    translation: 'Desde que os homens possam respirar ou os olhos possam ver, Tão longa vida isto, e isto dá-te vida.'
                }, 
            ],
            isModalActive: false,
            originalPhraseSelected: '',
            translatedPhraseSelected: ''
        }),
        methods: {
            readText: async function() {
                let phrases = document.querySelectorAll('.text-heading');
                let transalatedPhrases = document.querySelectorAll('.translation-heading');
                for(let i = 0; i < this.text.length; i++) {
                    phrases[i].classList.add('active');
                    transalatedPhrases[i].classList.add('active');
                    await sleep(2000);
                    phrases[i].classList.remove('active');
                    transalatedPhrases[i].classList.remove('active');
                }
            },
            showModal: function(phrase) {
                this.originalPhraseSelected = phrase.original;
                this.translatedPhraseSelected = phrase.translation;
                this.isModalActive = true;
            }
        }
    }
</script>

<style>
    .content {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .text-wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    .paragraph-container {
        width: 40%;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 25px;
        background-color: #111111cb;
        border-radius: 25px;
        height: 350px;
    }
    
    .translation-heading.active,
    .text-heading.active {
        font-size: 18px;
        font-weight: 800;
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
        padding: 30px 25px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .flashcard-phrase {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 5px;
    }

    .modal-buttons-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .read-button {
        border: none;
        border-radius: 5px;
        padding: 10px 15px;
        background-color: #03ee03f6;
        margin-bottom: 30px;
    }

    .read-button:hover {
        cursor: pointer;
    }

    @media screen and (min-width: 900px) {
        .content{
            margin-left: 4rem;
        }
    }

    @media screen and (max-width: 900px) {
        .content{
            margin-bottom: 2rem;
        }
    }
</style>