import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ClassCounterPage() {
  const router = useRouter();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("after first rendering");
  }, []);

  useEffect(() => {
    console.log("after updating (after first rendering)");
  });

  useEffect(() => {
    return () => {
      console.log("before unmounting");
    };
  }, []);

  // 1. can be combined
  // useEffect(() => {
  //   console.log("after first rendering");
  //   return () => {
  //     console.log("before unmounting");
  //   };
  // }, []);

  // 2. useEffect wrong examples (1. infinite loop, 2. rerendering)
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // });

  const onClickCountUp = () => {
    console.log(count);
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    void router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>Count Up</button>
      <button onClick={onClickMove}>Exit chatting room</button>
    </>
  );
}

// class AAA {
//     power = 50
//     attack(){

//     }
// }

// class BBB extends AAA {
//     run(){

//     }
// }

// const mybbb = new BBB()
// mybbb.attack()
