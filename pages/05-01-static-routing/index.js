import { useRouter } from "next/router"

export default function staticRoutingPage(){

    const router = useRouter();

    const onClickMove = () => {
        router.push("/05-02-static-routed");
    }

    return <button onClick={onClickMove}>Move Page!!!</button>
}