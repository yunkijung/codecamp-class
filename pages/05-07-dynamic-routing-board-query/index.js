import { useRouter } from "next/router"

export default function staticRoutingPage(){

    const router = useRouter();

    const onClickMove1 = () => {
        router.push("/05-08-dynamic-routed-board-query/20001");
    }

    const onClickMove2 = () => {
        router.push("/05-08-dynamic-routed-board-query/20002");
    }

    const onClickMove3 = () => {
        router.push("/05-08-dynamic-routed-board-query/20003");
    }
    const onClickMove23220 = () => {
        router.push("/05-08-dynamic-routed-board-query/23220");
    }

    return (
        <>
            <button onClick={onClickMove1}>Move to Page 20001</button><br />
            <button onClick={onClickMove2}>Move to Page 20002</button><br />
            <button onClick={onClickMove3}>Move to Page 20003</button><br />
            <button onClick={onClickMove23220}>Move to Page 23220</button><br />
        </>
    )
}