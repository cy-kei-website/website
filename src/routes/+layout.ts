import { updateConcerts } from "../stores/concerts";
import { updateBios } from "../stores/bios";
import { updateSocialMedias } from "../stores/socialMedias";


export async function load() {
    await updateConcerts();
    await updateSocialMedias();
    await updateBios();
}