import React, { useContext, useState } from 'react';
import { DPIConPeople } from '../../../icons';
import InputContext from '../../../InputContext/InputContext';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Modal from '../modal';
import PreviewComponenet from '../preview';
import { Container, InputContainer, Label } from './styles';

const DashboardInputs = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    addBill,
    addPercentage,
    peoplePayingBill,
    addPeople,
    bill,
    percentage,
    payingBill,
    people,
  } = useContext(InputContext);

  return (
    <Container>
      <InputContainer>
        <Label>Bill</Label>
        <Input type="number" placeholder="$" onChange={addBill} value={bill} />
      </InputContainer>

      <InputContainer>
        <Label>People paying bill </Label>
        <Input
          type="number"
          placeholder={<DPIConPeople />}
          onChange={peoplePayingBill}
          value={payingBill}
          spanClassName="span-styles"
        />
      </InputContainer>

      <InputContainer>
        <Label>Tip percentage</Label>
        <Input
          type="number"
          placeholder="%"
          onChange={addPercentage}
          value={percentage}
        />
      </InputContainer>

      <InputContainer>
        <Label>People to tip </Label>
        <Input
          type="number"
          placeholder={<DPIConPeople />}
          onChange={addPeople}
          value={people}
          spanClassName="span-styles"
        />
      </InputContainer>

      <Button
        className="preview-btn"
        text="Preview"
        onClick={() => setShowModal(true)}
      />

      <Modal show={showModal} hide={() => setShowModal(false)}>
        <PreviewComponenet />
      </Modal>
    </Container>
  );
};

export default DashboardInputs;
