import { Select } from 'antd';

// const onSearch = (value) => {
//     console.log('search:', value);
//   };


  const SelectData = ({options,setValue,placeholderlabel,mode}) => (
    <Select
      mode = {mode}
      showSearch
      placeholder={placeholderlabel}
      optionFilterProp="children"
      onChange={(value) => setValue(value)}
  
      size="large"
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      options={options}
      className='mb-2 w-full'
       
    />
  );
export default SelectData;