import TextInput from 'components/ui/inputs/TextInput';
import { validateTitle } from 'helpers/validators';
import React from 'react';

import './AddCardForm.scss';

type FormFieldsType = {
  title: React.RefObject<HTMLInputElement>;
};

type FormState = {
  initial: { [x: string]: string | number };
  errors: { [x: string]: string[] };
};

export default class AddCardForm extends React.Component {
  fields: FormFieldsType = {
    title: React.createRef<HTMLInputElement>(),
  };

  state: FormState = {
    initial: {
      title: '',
    },
    errors: {
      title: [],
    },
  };

  IsFormValid = async () => {
    await this.setState({
      errors: {
        title: validateTitle(this.fields.title.current?.value || `${this.state.initial.title}`),
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
      this.setState({ initial: { title: this.fields.title.current?.value } });
    }
  };

  render() {
    return (
      <form className={'form'} onSubmit={this.handleSubmit}>
        <div className={'form-inner'}>
          <TextInput
            id="title"
            label="Title"
            refProp={this.fields.title}
            errors={this.state.errors.title}
          />
          <input type={'text'} />
          <button type={'submit'}>Submit</button>
        </div>
      </form>
    );
  }
}
