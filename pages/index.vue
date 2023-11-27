<script setup>
const generatedAt = useState(() => new Date());
const timeAgo = generatedAt.value.toLocaleString();
</script>

<template>
    <div>
        {{ timeAgo }}
    </div>
</template>