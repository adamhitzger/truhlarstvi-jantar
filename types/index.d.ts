export type Worker = {
    name: string;
    description: string; 
}

export interface HomePage {
    header: string[];
    about: string[];
    workers: Worker[];
}

export interface Service {
    name: string;
    slug: string;
    description: string;
    photo: string;
    images: string[];
}

export type NavLinks = {
    link: string;
    name: string;
}

export interface ActionResponse<T> {
    success: boolean;
    message: string;
    submitted: boolean;
    errors?: {
        [K in keyof T]?: string[]
    };
    inputs?: T;
}