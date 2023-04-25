import { useState } from "react";
import Child1 from "../../src/components/units/14-lifting-state-up/Child1";
import Child2 from "../../src/components/units/14-lifting-state-up/Child2";

export default function LiftingStateUpPage() {
  const [count, setCount] = useState(0);

  // Method 1
  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <Child1
        count={count}
        onClickCountUp={onClickCountUp}
        setCount={setCount}
      />
      <div>=========================</div>
      <Child2 count={count} onClickCountUp={onClickCountUp} />
    </>
  );
}
