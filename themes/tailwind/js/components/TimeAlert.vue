<template>
    <div
        v-if="visible"
        class="notification-container"
        @click="hideNotification"
    >
        <div class="notification-box">
            <p class="notification-message">{{ message }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";

const visible = ref(false);
const message = ref("");

const showNotification = (text) => {
    message.value = text;
    visible.value = true;
    setTimeout(() => {
        visible.value = false;
    }, 5000);
};

const hideNotification = () => {
    visible.value = false;
};

onMounted(() => {
    Echo.channel("notifications").listen("NotifyUser", (e) => {
        showNotification(`GUK GUK SAAT: ${e.time}`);
    });
});
</script>

<style scoped>
.notification-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}

.notification-box {
    background-color: #333;
    color: #fff;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    max-width: 300px;
}

.notification-message {
    margin: 0;
    font-size: 16px;
}
</style>
