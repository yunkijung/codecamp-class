export default function Child1(props: any) {
  // Method 2
  const onClick = () => {
    props.setCount((prev: number) => prev + 1);
  };

  return (
    <>
      <div>Child 1 count: {props.count}</div>
      <div onClick={onClick}>Count Up!!!</div>
    </>
  );
}
