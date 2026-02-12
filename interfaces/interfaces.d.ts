import { Models } from "react-native-appwrite";

type Facility =
    | "Laundry"
    | "Car Parking"
    | "Sport Center"
    | "Cutlery"
    | "Gym"
    | "Swimming Pool"
    | "Wifi"
    | "Pet Center";

interface Property extends Models.Document {
    name: string;
    type: string;
    description: string;
    address: string;
    price: number;
    area: number;
    bedrooms: number;
    bathrooms: number;
    rating: number;
    facilities: Facility[];
    geolocation: string;
    image: string;
    agent: Agent;
    reviews: Review[];
    gallery: Gallery[];
}

interface Agent extends Models.Document {
    name: string;
    email: string;
    avatar: string;
}

interface Review extends Models.Document {
    name: string;
    avatar: string;
    review: string;
    rating: number;
}

interface Gallery extends Models.Document {
    image: string;
}