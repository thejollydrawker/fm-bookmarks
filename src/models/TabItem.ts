export interface TabItem {
    title: string;
    key: string;
}

export interface TabContent {
    title: string;
    text: string;
    image: string;
    key: BookmarkTab;
}

export enum BookmarkTab {
    BOOKMARKING = 'bookmarking',
    SEARCHING = 'searching',
    SHARING = 'sharing',
}