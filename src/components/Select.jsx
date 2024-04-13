import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import '../styles/Select.css';

const SelectDemo = () => (
  <Select.Root>

    <Select.Trigger className="SelectTrigger" aria-label="Food">
      <Select.Value placeholder="Select Option" style={{fontFamily:'Inter'}}/>
      <Select.Icon className="SelectIcon">
         <ChevronDownIcon/>
      </Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content className="SelectContent">
        <Select.Viewport className="SelectViewport">
          <Select.Group>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
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

export default SelectDemo;