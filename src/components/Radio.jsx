import { Radio } from 'antd';
import { useState } from 'react';




const RadioButton = ({setValue}) => {

    const [selectedValue, setSelectedValue] = useState(0);

    const handleRadioChange = (event) => {
        const { value } = event.target;
        setSelectedValue(value);
        setValue(value);
      };
  return (
    <Radio.Group value={selectedValue} 
    onChange={handleRadioChange}>
      <Radio value={0} >Easy</Radio>
      <Radio value={1}>Hard</Radio>
    </Radio.Group>
  );
};
export default RadioButton;


