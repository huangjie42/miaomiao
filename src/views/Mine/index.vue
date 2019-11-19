<template>
    <div id="main">
        <Header title="弗兰林卡"/>
        <div id="content">
            <Login/>
        </div>
        <TabBar/>
    </div>
</template>>

<script lang="ts">

import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import Login  from '@/components/Login';

export default {
       name : 'Mine',
    components : {
        Header,
        TabBar,
        Login
    }
}
</script>

<style>


</style>