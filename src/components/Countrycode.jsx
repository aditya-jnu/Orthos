import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import '../styles/Countrycode.css';

const Countrycode = () => (
  <Select.Root>

    <Select.Trigger className="SelectTrigge" aria-label="Food">
      <Select.Value placeholder="+62" style={{fontFamily:'Inter'}}/>
      <Select.Icon className="SelectIcon">
         <ChevronDownIcon/>
      </Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content className="SelectContent">
        <Select.Viewport className="SelectViewport">
          <Select.Group>
           <SelectItem value="+62">+62</SelectItem>
            <SelectItem value="=+91">+91</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>

  </Select.Root>
);

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default Countrycode;