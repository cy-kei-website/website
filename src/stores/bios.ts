import { Status } from "../types/status";
import { writable } from "svelte/store";

export interface BioFetchResult {
    short: {
        en: string;
    },
    full: {
        en: string;
    }
    status: Status;
}

export const bios = writable<BioFetchResult>({
    short: {
        en: ""
    },
    full: {
        en: ""
    },
    status: Status.PENDING
});

async function getShort() {
    try {
        const res = await fetch("https://firestore.googleapis.com/v1/projects/cyprien-keiser/databases/(default)/documents/bios/short");
        const json = await res.json();

        return {
            en: json.fields.en.stringValue
        }
    } catch (error) {
        throw new Error("Error while fetching short bios");
    }
}

async function getFull() {
    try {
        const res = await fetch("https://firestore.googleapis.com/v1/projects/cyprien-keiser/databases/(default)/documents/bios/full");
        const json = await res.json();

        return {
            en: json.fields.en.stringValue
        }
    } catch (error) {
        throw new Error("Error while fetching short bios");
    }
}

export async function updateBios() {
    try {
        const responses = await Promise.all([getShort(), getFull()]);
        console.log(responses);
        bios.set({
            short: {
                ...responses[0]
            },
            full: {
                ...responses[1]
            },
            status: Status.OK
        });
    } catch (error) {
        bios.set({
            short: {
                en: ""
            },
            full: {
                en: ""
            },
            status: Status.FAILED
        });
    }
}