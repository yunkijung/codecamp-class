// import { PlayCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Rate } from "antd";
import { useState } from "react";

// const MyIcon = styled(PlayCircleOutlined)`
//   font-size: 50px;
//   color: red;
// `;

const MyStar = styled(Rate)``;

export default function LibraryIconPage() {
  const [value, setValue] = useState(3);

  // const qqq = (aaa: number) => {
  //   setValue(aaa);
  // };

  // const qqq = (value) => setValue(value);

  return <MyStar onChange={setValue} value={value} />;
}
