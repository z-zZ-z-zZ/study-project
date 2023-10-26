<template>
    <div>
        <p>
            {{ data.name }}
        </p>
        <br>
        <p>
            {{ data.age }}
        </p>
        <br>
        <p>
            {{ data.url }}
        </p>
        <br>
        <p>
            {{ data.desc }}
        </p>
        <br>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import { axios } from '../utils/axios';

interface Data {
    data: {
        name: string,
        age: number,
        url: string,
        desc: string
    }
}

const { data } = await axios.get<Data>("../../public/data.json");
</script>

<style lang='less' scoped></style>