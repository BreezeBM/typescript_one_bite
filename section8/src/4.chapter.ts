/**
 * 템플릿 리터럴 타입
 */

type Color = 'red' | 'black' | 'green';

type Animal = 'dog' | 'cat' | 'chicken';

type ColorAnimal = 'red-dog' | 'red-cat' | 'red-chicken' | 'black-dog' | 'black-cat' | 'black-chicken'; // ... 일일이 하는건 어려움

type ColorAnimalLiteralType = `${Color}-${Animal}`;
