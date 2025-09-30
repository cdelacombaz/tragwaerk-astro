import { Building2, Landmark, Layers, MessageSquare } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Building2;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string[];
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Building2,
                title: 'Hochbau',
                description: ['Statik für Wohn- und Gewerbebauten', 'Massiv-, Stahl- und Holzbau'],
            },
            {
                icon: Landmark,
                title: 'Kunstbauten',
                description: [
                    'Stützbauwerke – Stahlbeton-, Winkelstütz- und Schwergewichtsmauern',
                    'Brückenbau – Strassen-, Radweg- und Fussgängerbrücken',
                    'Unterführungen – für Strassen, Bahnstrecken und Fussgängerwege',
                ],
            },
            {
                icon: Layers,
                title: 'Geotechnik',
                description: [
                    'Spundwände – von temporäre und dauerhafte Baugrubensicherungen',
                    'Bohrpfahlwände – für tiefe Baugruben und schwierige Baugrundverhältnisse',
                    'Verbaukonstruktionen – individuelle Lösungen angepasst an Boden- und Projektbedingungen',
                ],
            },
            {
                icon: MessageSquare,
                title: 'Beratungen',
                description: [
                    'Technische Beratung & Gutachten',
                    'Projektkoordination mit Architekten, Bauunternehmen und Behörden',
                ],
            },
        ],
    },
    // secondary: {
    //     id: 'secondary',
    //     features: [
    //         {
    //             icon: Heart,
    //             title: 'Made with Love',
    //             description: 'Crafted with attention to detail',
    //         },
    //         {
    //             icon: Coffee,
    //             title: 'Always Fresh',
    //             description: 'Regular updates and improvements',
    //         },
    //         {
    //             icon: Smile,
    //             title: 'User Friendly',
    //             description: 'Intuitive and easy to use',
    //         },
    //     ],
    // },
};
