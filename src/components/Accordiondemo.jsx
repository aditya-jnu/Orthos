import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const Accordiondemo = () => (
  <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>

    <Accordion.Item className="AccordionItem" value="item-1" style={{padding:'24px 0px 24px 0px'}}>
      <AccordionTrigger><div className='accordheading'>Is there a free trial available?</div></AccordionTrigger>
      <AccordionContent><div className='accord'>Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</div></AccordionContent>
    </Accordion.Item>

    <div className='Seprator' style={{borderBottom:'1px solid #4C679B'}}></div>

    <Accordion.Item className="AccordionItem" value="item-2" style={{padding:'24px 0px 24px 0px'}}>
      <AccordionTrigger><div className='accordheading'>Can I change my plan later?</div></AccordionTrigger>
      <AccordionContent>
        <div className='accord'></div>
      </AccordionContent>
    </Accordion.Item>

    <div className='Seprator' style={{borderBottom:'1px solid #4C679B'}}></div>

    <Accordion.Item className="AccordionItem" value="item-3" style={{padding:'24px 0px 24px 0px'}}>
      <AccordionTrigger><div className='accordheading'>What is your cancellation policy?</div></AccordionTrigger>
      <AccordionContent>
        <div className='accord'></div>
      </AccordionContent>
    </Accordion.Item>

    <div className='Seprator' style={{borderBottom:'1px solid #4C679B'}}></div>

    <Accordion.Item className="AccordionItem" value="item-4" style={{padding:'24px 0px 24px 0px'}}>
      <AccordionTrigger><div className='accordheading'>Can other info be added to an invoice?</div></AccordionTrigger>
      <AccordionContent>
        <div className='accord'></div>
      </AccordionContent>
    </Accordion.Item>

    <div className='Seprator' style={{borderBottom:'1px solid #4C679B'}}></div>

    <Accordion.Item className="AccordionItem" value="item-5" style={{padding:'24px 0px 24px 0px'}}>
      <AccordionTrigger><div className='accordheading'>How does billing work?</div></AccordionTrigger>
      <AccordionContent>
        <div className='accord'></div>
      </AccordionContent>
    </Accordion.Item>

    <div className='Seprator' style={{borderBottom:'1px solid #4C679B'}}></div>

    <Accordion.Item className="AccordionItem" value="item-2" style={{padding:'24px 0px 24px 0px'}}>
      <AccordionTrigger><div className='accordheading'>How do I change my account email?</div></AccordionTrigger>
      <AccordionContent>
        <div className='accord'></div>
      </AccordionContent>
    </Accordion.Item>

  </Accordion.Root>
);
const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger','customAccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));

export default Accordiondemo;