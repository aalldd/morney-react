import React, {useState} from 'react';
import Wrapper from './Wrapper';
import generateOutput from './generateOutput';

const NumberPad: React.FC = () => {
  const [output, _setOutput] = useState<string>('0');
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    const setOutput=(output: string)=>{
      if(output.length>16){
        output=output.slice(0,16)
      }else if(output.length===0){
        output='0'
      }
      _setOutput(output)
    }
    if (text === null) { return;}
    if(text==='OK'){return;}
    const res= generateOutput(text,output)
    if(res){
      setOutput(res)
    }
  };
  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  );
};


export {NumberPad};
