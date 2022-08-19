<script lang="ts" setup>
    import HelloWorld from './components/HelloWorld.vue';
    import { PolywrapClient } from '@polywrap/client-js';

    const polywrap = new PolywrapClient();

    const isValidInput = (value: string) => {
        const regex = /^Qm[1-9A-Za-z]{43}[^OIl]$/;
        return regex.test(value);
    };

    const handleUpdate = async (value: any) => {
        if (!isValidInput(value.currentTarget.value)) return;
        console.log(value.currentTarget.value);

        try {
            const manifest = await polywrap.getManifest('wrap://ipfs/' + value.currentTarget.value, {});
            console.log(manifest);
        } catch (e) {
            console.log(e);
        }
    };
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" height="125" src="./assets/logo.svg" width="125" />

        <div class="wrapper">
            <HelloWorld msg="You did it!" />
        </div>
    </header>

    <main>
        <p>
            CID: <input @input="handleUpdate" />
        </p>
    </main>
</template>

<style scoped>
    header {
        line-height: 1.5;
    }

    .logo {
        display: block;
        margin: 0 auto 2rem;
    }

    @media (min-width: 1024px) {
        header {
            display: flex;
            place-items: center;
            padding-right: calc(var(--section-gap) / 2);
        }

        .logo {
            margin: 0 2rem 0 0;
        }

        header .wrapper {
            display: flex;
            place-items: flex-start;
            flex-wrap: wrap;
        }
    }
</style>
