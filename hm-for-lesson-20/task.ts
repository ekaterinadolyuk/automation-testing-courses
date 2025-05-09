// 1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.

interface User {
    name: string;
    age: number;
    occupation: string;
    car?: string;
    children?: number;
}

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    }
];

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(`User's fullname is${user.name}. This user is ${user.age} years old and works as ${user.occupation}.`);

    if (user.car) {
        console.log(`User drives a ${user.car}`);
    }

    if (user.children) {
        console.log(`User has ${user.children} children.`);
    }
}

// 2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфейc Person, который будет соответствовать массиву

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

// 3. Напишите анотации типов к этому классу.

export class ObjectManipulator<T extends Record<string, any>> {
    constructor(protected obj: T) {}
    public set(key: string, value: any): ObjectManipulator<T> {
        const newObj = { ...this.obj, [key]: value };
        return new ObjectManipulator(newObj);
    }

    public get(key: string): any {
        return this.obj[key];
    }

    public delete(key: string): ObjectManipulator<T> {
        const newObj = { ...this.obj };
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): T {
        return this.obj;
    }
}

// 4. Обеспечьте правильную типизацию для указанных функций.

export function map<T, U>(mapper: (item: T) => U, input: T[]): U[];
export function map<T, U>(mapper: (item: T) => U): (input: T[]) => U[];
export function map(): typeof map;
export function map<T, U>(mapper?: (item: T) => U, input?: T[]): any {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper!);
        };
    }
    return input!.map(mapper!);
}

export function filter<T>(filterer: (item: T) => boolean, input: T[]): T[];
export function filter<T>(filterer: (item: T) => boolean): (input: T[]) => T[];
export function filter(): typeof filter;
export function filter<T>(filterer?: (item: T) => boolean, input?: T[]): any {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer!);
        };
    }
    return input!.filter(filterer!);
}

export function add(a: number, b: number): number;
export function add(a: number): (b: number) => number;
export function add(): typeof add;
export function add(a?: number, b?: number): any {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: number) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a! + subB;
        };
    }
    return a! + b!;
}