<script>
export default {
    name: 'AppFooter',
    data: () => ({
        year: (new Date()).getFullYear(),
    }),
};
</script>

<template>
<div class="c-footer row">
    <div class="col-12">
        <router-link to="/">
            Nephele Cloud
        </router-link>
        &copy;&nbsp;{{ year }}
    </div>
</div>
</template>

<style lang="scss">
body.body--light .c-footer {
    color: $white
}
.c-footer {
    margin: 8px auto 24px;
    padding: 0 16px;
    max-width: 1200px;
}
</style>
