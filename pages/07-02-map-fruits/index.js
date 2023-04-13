
const FRUITS = [
    { number: 1, title: "Red" },
    { number: 2, title: "Blue" },
    { number: 3, title: "Green" },
    { number: 4, title: "Yellow" },
    { number: 5, title: "Purple" },
    { number: 6, title: "Orange" },
    { number: 7, title: "asdf" },
    { number: 8, title: "Resdfsaf" },
    { number: 9, title: "asdfasdf" },
    { number: 10, title: "fg" },
]

export default function MapFruitsPage(){

    //const aaa = [<div>1 red</div>,<div>2 blue</div>,<div>3 green</div>];
    const aaa = [{ number: 1, title: "Red" },{ number: 2, title: "Blue" },{ number: 3, title: "Green" }].map(el => <div>{el.number} {el.title}</div>)

    const ccc = FRUITS.map(el => <div>{el.number} {el.title}</div>)

    return (
        <>
            {FRUITS.map(el => <div>{el.number} {el.title}</div>)}
        </>
    )
}