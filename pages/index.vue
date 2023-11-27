<script setup>
const generatedAt = useState(() => new Date().toISOString())
const date = new Date(generatedAt.value)
const timeAgo = ref()
onMounted(() => {
    timeAgo.value = ms(Date.now() - date.valueOf(), { long: true })
})
</script>

<template>
    <div>
        {{ timeAgo }}
    </div>
</template>