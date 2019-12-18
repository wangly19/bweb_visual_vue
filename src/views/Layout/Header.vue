<template>
    <div class="header-wrapper">
        <h-button icon="h-icon-menu" size="l" noBorder @click="isCollpase =!isCollpase"></h-button>
    </div>
</template>
<script>
export default {
    props: {
        isCollapse: {
            type: Boolean,
            default: false
        }
    }
}
</script>
