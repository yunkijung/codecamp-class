export default function Qqq(){

    // 1
    let aaa = "Hello";
    aaa = 3;

    // 2
    let bbb: string = "Nice to meet you";
    bbb = 3;

    // 3
    let ccc: string;
    ccc = "Nice to meet you!!";
    ccc = 23;

    // number type
    let ddd: number = 10;
    ddd = "john";

    // boolean type
    let eee: boolean = true;
    eee = false;
    eee = "false"; // true

    // Array type
    let fff: number[] = [1, 2, 3, 4, 5, "Hi"];
    let ggg: string[] = ["John", "Simon", "Garry", 10];
    let hhh: (string | number)[] = ["John", "Simon", "Garry", 10];


    // Object type
    interface IProfile {
        name: string
        age: number | string
        school: string
        hobby?: string
    }

    const profile: IProfile = {
        name: "John",
        age: 8,
        school: "Richmon hill high school"
    }

    profile.hobby = "football";

    profile.age = "8 years old";


    // method type => can be called in any places.
    const add = (number1: number, number2: number, unit: string): string => {
        return number1 + number2 + unit;
    }

    const result = add(1000, 2000, "$"); // return type can be expected.

    // any type
    let qqq: any = "John"; // can be assign any type of values.
    qqq = 3;
    qqq = true;

    return <div></div>
}