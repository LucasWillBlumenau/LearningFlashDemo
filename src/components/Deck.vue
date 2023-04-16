<template>
    <article class="deck-card">
        <h3>{{ deckTitle }}</h3>
        <p>{{ deckDescription }}</p>
    </article>
</template>

<script>
    export default {
        name: 'Deck',
        props: {
            deckTitle: String,
            deckDescription: String
        }
    }
</script>

<style scoped>
    .deck-card {
        height: 200px;
        width: 175px;
        border-radius: 15px;
        background-color: #e2602c;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .deck-card p,
    .deck-card h3 {
        text-align: center;
    }

    .deck-card h3 {
        position: absolute;
        transition: 125ms;
        font-weight: 800;
        font-size: 20px;
    }
    .deck-card p {
        scale: 0;
        transform: translateY(10px);
        transition: 125ms;
        font-weight: 500;
    }

    .deck-card:hover {
        cursor: pointer;
    }

    .deck-card:hover > p {
        scale: 1;
        transition: 200ms;
    }

    .deck-card:hover > h3 {
        transform: translateY(-30px);
        transition: 200ms;
    }
</style>