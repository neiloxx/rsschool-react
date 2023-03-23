import React from 'react';

import TextInput from 'components/ui/inputs/TextInput';
import { CardType } from 'types/types';
import { validateTitle } from 'helpers/validators';
import generateId from 'utils/generateId';

import './AddCardForm.scss';

type AddCardFormProps = {
  addCard: (card: CardType) => void;
};

type FormFieldsType = { [x: string]: React.RefObject<HTMLInputElement> };

type FormState = {
  errors: { [x: string]: string[] };
};

export default class AddCardForm extends React.Component<AddCardFormProps> {
  initialValues: CardType = {
    id: generateId(),
    title: '',
  };

  fields: FormFieldsType = {
    title: React.createRef<HTMLInputElement>(),
  };

  state: FormState = {
    errors: {
      title: [],
    },
  };

  IsFormValid = async (): Promise<boolean> => {
    await this.setState({
      errors: {
        title: validateTitle(this.fields.title.current?.value || this.initialValues.title),
      },
    });
    for (const error of Object.values(this.state.errors)) {
      if (error.length) {
        return false;
      }
    }
    return true;
  };

  handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    if (await this.IsFormValid()) {
      this.initialValues.title = this.fields.title.current?.value || '';
      this.props.addCard(this.initialValues);
    }
  };

  render() {
    return (
      <form className={'form'} onSubmit={this.handleSubmit}>
        <div className={'form-inner'}>
          <TextInput
            id="title"
            label="Book Title"
            refProp={this.fields.title}
            errors={this.state.errors.title}
          />
          <button type={'submit'}>Submit</button>
        </div>
      </form>
    );
  }
}
