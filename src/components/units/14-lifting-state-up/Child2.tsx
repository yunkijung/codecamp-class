export default function Child2(props: any) {
  return (
    <>
      <div>Child 2 count: {props.count}</div>
      <div onClick={props.onClickCountUp}>Count Up!!!</div>
    </>
  );
}
