import React from 'react';
import './index.less';
interface IProps {
  name: string;
  age: number;
}
function App(props: IProps) {
  const { name, age } = props;
  return (
    <div className="app">
      <span>{`hello i'm ${name}, ${age} years old!！！！123123123123`}</span>
    </div>
  );
}

export default App;
