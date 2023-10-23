/**
 * 맵드 타입 기반의 유틸리티 타입들 Pick Omit Record
 * Pick<T, K>
 * 뽑다. 고르다
 * 객체 타입으로 부터 특정 프로퍼티만 딱 골라내는 타입
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

// ? K extends keyof T 타입 변수 K에 할당할 수 있는 건 T로 들어오는 객체들의 키값들의 유니언의 서브타입만 들어올 수 있다.
// * K extends 'title' | 'tags' | 'content' | 'thumbnailURL'이 될 수 있음
type Pick<T, K extends keyof T> = {
    [key in K]: T[key];
};

const legacyPost: Pick<Post, 'title' | 'content'> = {
    title: '옛날글..',
    content: '옛날 포스트...',
};

/**
 * Omit<T, K>
 * 생략하다, 빼다
 * 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// * T = Post, K = "title"
// * Pick<Post, Exclude<keyof Post, 'title>>
// * Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailsURL', ' title'>
// * Pick<Post,'content' | 'tags' | 'thumbnailsURL'>
const noTitlePost: Omit<Post, 'title'> = {
    content: '제목 없음',
    tags: [],
    thumbnailURL: '',
};

/**
 * Record<K, V>
 */

// type ThumbnailLegacy = {
//     large: {
//         url: string;
//     };
//     medium: {
//         url: string;
//     };
//     small: {
//         url: string;
//     };
//     watch: {
//         url: string;
//     };
// };

type Record<K extends keyof any, V> = {
    [key in K]: V;
};

type Thumbnail = Record<'large' | 'medium' | 'smail' | 'watch', { url: string; size: number }>;
