import Switch from 'components/ui/inputs/Switch';
import React from 'react';

import TextInput from 'components/ui/inputs/TextInput';
import { CardType } from 'types/types';
import { validateTitle } from 'helpers/validators';
import generateId from 'utils/generateId';

import './AddCardForm.scss';

type AddCardFormProps = {
  addCard: (card: CardType) => void;
};

type FormFieldsType = {
  title: React.RefObject<HTMLInputElement>;
  status: React.RefObject<HTMLInputElement>[];
};

type FormState = {
  errors: { [x: string]: string[] };
};

const SWITCH = {
  id: 'publish-switch',
  labels: ['published', 'unpublished'],
};

export default class AddCardForm extends React.Component<AddCardFormProps> {
  form: React.RefObject<HTMLFormElement> = React.createRef();

  fields: FormFieldsType = {
    title: React.createRef<HTMLInputElement>(),
    status: SWITCH.labels.map(() => React.createRef()),
  };

  state: FormState = {
    errors: {
      title: [],
    },
  };

  IsFormValid = async (): Promise<boolean> => {
    await this.setState({
      errors: {
        title: validateTitle(`${this.fields.title.current?.value}`),
      },
    });
    for (const error of Object.values(this.state.errors)) {
      if (error.length) {
        return false;
      }
    }
    return true;
  };

  getValues = (): CardType => {
    const currenStatusInput = this.fields.status.find((el) => el.current?.checked);

    return {
      id: generateId(),
      status: currenStatusInput?.current?.value,
      title: this.fields.title.current?.value,
    };
  };

  handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    if (await this.IsFormValid()) {
      this.props.addCard(this.getValues());
      this.form.current?.reset();
    }
  };

  render() {
    return (
      <form className={'form'} ref={this.form} onSubmit={this.handleSubmit}>
        <div className={'form-inner'}>
          <TextInput
            id="title"
            label="Book Title"
            refProp={this.fields.title}
            errors={this.state.errors.title}
          />
          <Switch id={SWITCH.id} labels={SWITCH.labels} refProps={this.fields.status} />
          <button type={'submit'}>Submit</button>
        </div>
      </form>
    );
  }
}
