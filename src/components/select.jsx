import { Select } from 'antd';

const onSearch = (value) => {
    console.log('search:', value);
  };


  const SelectData = ({options,setValue,placeholderlabel,mode}) => (
    <Select
      mode = {mode}
      showSearch
      placeholder={placeholderlabel}
      optionFilterProp="children"
      onChange={(value) => setValue(value)}
      onSearch={onSearch}

      size="large"
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      options={options}
      className={ mb-5}
       
    />
  );
export default SelectData;