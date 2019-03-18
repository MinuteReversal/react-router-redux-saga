export default {
    async get() {
        await fetch("/data/user.json");
    }
};
