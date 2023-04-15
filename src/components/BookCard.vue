<template>
    <article class="card">
        <img :src="imageSource" class="card-img">
        <div class="card-title">    
            <h4>{{ bookTitle }}</h4>
        </div>
    </article>
</template>
  
<script>
    export default {
        name: 'BookCard',
        props: {
            imageSource: String,
            bookTitle: String
        }
    }
</script>

<style scoped>
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        height: 100%;
        width: 200px;
        text-align: center;
    }

    .card-title {
        height: min-content;
        color: #fff;
    }

    .card-img {
        height: 200px;
        border-radius: 5px;
        transition: 250ms;
    }

    .card-img:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: 250ms;
    }
</style>
  