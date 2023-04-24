interface IProps {
  school: string;
  children: JSX.Element;
}

export default function Layout(props: IProps) {
  return (
    <>
      <div>Hello! Im Yun</div>
      <div>{props.school}</div>
      <div>{props.children}</div>
      <div>Hello! Im John</div>
    </>
  );
}
