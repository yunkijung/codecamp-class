import { useRouter } from "next/router"

export default function staticRoutingPage(){

    const router = useRouter();

    const onClickMove1 = () => {
        router.push("/05-04-static-routed-board/1");
    }

    const onClickMove2 = () => {
        router.push("/05-04-static-routed-board/2");
    }

    const onClickMove3 = () => {
        router.push("/05-04-static-routed-board/3");
    }

    return (
        <>
            <button onClick={onClickMove1}>Move to Page 1</button><br />
            <button onClick={onClickMove2}>Move to Page 2</button><br />
            <button onClick={onClickMove3}>Move to Page 3</button><br />
        </>
    )
}