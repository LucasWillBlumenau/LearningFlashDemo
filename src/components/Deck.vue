<template>
    <article class="deck-card">
        <h3>{{ deckTitle }}</h3>
        <div class="description-container">
            <p>{{ deckDescription }}</p>
        </div>
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
        min-height: 200px;
        min-width: 175px;
        border-radius: 15px;
        background-color: #e2602c;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .description-container {
        width: 80%;
    }
    .deck-card .description-container p,
    .deck-card h3 {
        text-align: center;
    }

    .deck-card h3 {
        transition: 125ms;
        font-weight: 800;
        font-size: 20px;
        transform: translateY(15px);
    }
    .description-container p {
        scale: 0;
        transition: 125ms;
        font-weight: 500;
    }

    .deck-card:hover {
        cursor: pointer;
    }

    .deck-card:hover > .description-container p {
        scale: 1;
        transition: 200ms;
    }

    .deck-card:hover > h3 {
        transform: translateY(-30px);
        transition: 200ms;
    }
</style>