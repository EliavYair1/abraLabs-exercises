import Button from '../button/button';
import {
  FormContainer,
  FormHeader,
  SubFormHead,
  FormInput,
  ContactUs,
} from './form.styles';
const Form = () => {
  return (
    <>
      <FormContainer>
        <FormHeader>Fill in the details below</FormHeader>
        <SubFormHead>
          Please fill in your details here and we’ll be in touch with you soon.
        </SubFormHead>
        <FormInput type="text" placeholder="full name" />
        <FormInput type="Email" placeholder="email" />
        <FormInput type="Tel" placeholder="phone" />

        <Button className="sendBtn" />
        <ContactUs href="#">contact us here!</ContactUs>
      </FormContainer>
    </>
  );
};

export default Form;
