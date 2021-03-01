<template>
    <div class="contact contact-form">
        <form data-netlify="true" method="POST" name="my-form">
            <fieldset>
                <legend>Risus, morbi metus, est bibendum elit nisl morbi nisl. Feugiat interdum.</legend>
                <div>
                    <label for="firstname">
                        <span>First Name:</span>
                        <input id="firstname" type="text" name="firstname">
                        <abbr title="required" aria-label="required">*</abbr>
                    </label>
                </div>
                <div>
                    <label for="lastname">
                        <span>Last Name:</span>
                        <input id="lastname" type="text" name="lastname">
                        <abbr title="required" aria-label="required">*</abbr>
                    </label>
                </div>
                <div>
                    <label for="email">
                        <span>Email:</span>
                        <input id="email" type="text" name="email">
                        <abbr title="required" aria-label="required">*</abbr>
                    </label>
                </div>
                <div>
                    <label for="telnumber">
                        <span>Phone Number:</span>
                        <input id="telnumber" type="text" name="telnumber">
                        <abbr title="required" aria-label="required">*</abbr>
                    </label>
                </div>
                <div>
                    <label for="message">
                        <span>Message:</span>
                        <textarea id="message" type="text" name="message"></textarea>
                        <abbr title="required" aria-label="required">*</abbr>
                    </label>
                </div>
                <div>
                    <button class="button" type="submit">Send Message</button>
                </div>
            </fieldset>
        </form>
    </div>
</template>
