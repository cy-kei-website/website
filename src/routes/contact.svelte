<script lang="ts">
    import PageStructure from "../components/PageStructure.svelte";

    function submit() {

    }
</script>

<PageStructure title="Contact" imgName="contact-extrapic.jpg">
    <h2>Send me a message</h2>
    <form on:submit|preventDefault={submit}>
        <div class="form-group">
            <label for="name">Your name</label>
            <input type="text" id="name" placeholder=" " />
        </div>
        <div class="form-group">
            <label for="email">Your email address</label>
            <input type="email" id="email" placeholder=" " />
        </div>
        <div class="form-group">
            <label for="message">Your message</label>
            <textarea id="message" rows="10" />
        </div>

        <button class="cta">Send</button>
    </form>
</PageStructure>

<style>
    .form-group {
        position: relative;
        margin-bottom: 1rem;
    }

    label {
        width: max-content;
    }

    label, input, textarea {
        display: block;
    }

    input, textarea {
        margin-top: 0.1rem;
        font-size: 1.25rem;
        padding: 0.4rem;
        border: none;
        box-shadow: none;
        border-radius: 0.25rem;
        width: 100%;
        box-sizing: border-box;
    }
    
    input:focus, textarea:focus {
        border: none;
        box-shadow: 0 0.25rem 0.5rem 0.25rem rgba(0, 0, 0, 0.1);
        outline: none;
    }

    textarea {
        resize: vertical;
    }

    button {
        cursor: pointer;
        font-size: 1.25rem;
    }
</style>