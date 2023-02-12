import type { Concert } from "src/types/concert";
import { writable } from "svelte/store";

export enum Status {
    OK,
    FAILED,
    PENDING
};

export interface ConcertFetchResult {
    concerts: Concert[];
    status: Status;
}

export const concerts = writable<ConcertFetchResult>({
    concerts: [],
    status: Status.PENDING
});

interface RawConcert {
    name: string;
    fields: {
        date: {
            timestampValue: string;
        },
        endDate?: {
            timestampValue: string;
        },
        location: {
            stringValue: string;
        },
        description: {
            stringValue: string;
        },
        url?: {
            stringValue: string;
        }
    }
}

export async function updateConcerts() {
    try {
        const res = await fetch("https://firestore.googleapis.com/v1/projects/cyprien-keiser/databases/(default)/documents/concerts");
        const json = await res.json();

        const concertsArray: Concert[] = json.documents.map((rawConcert: RawConcert) => {
            return {
                location: rawConcert.fields.location.stringValue,
                description: rawConcert.fields.description.stringValue,
                date: new Date(rawConcert.fields.date.timestampValue)
            } as Concert;
        });
    
        concerts.set({
            concerts: concertsArray,
            status: Status.OK
        });
    } catch (error) {
        concerts.set({
            concerts: [],
            status: Status.FAILED
        });
    }
}