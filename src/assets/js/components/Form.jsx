import React, { Component } from 'react';


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameError: '',
      photo: '',
      description: '',
      descriptionError: '',
      mail: '',
      mailError: '',
      totalError: false,
      bye: false,
      privacy: '',
      email: '',
      instagram: '',
      ministries: ministriesList,
      type: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.fileEvent = this.fileEvent.bind(this);
  }

  async onSubmit(event) {
    const data = new FormData();
    data.append('', this.state.photo);
    data.append('privacy', this.state.privacy);
    data.append('min1', this.state.min1);
    data.append('min2', this.state.min2);
    data.append('min3', this.state.min3);
    data.append('min4', this.state.min4);
    data.append('min5', this.state.min5);
    data.append('min6', this.state.min6);
    data.append('min7', this.state.min7);
    data.append('min8', this.state.min8);
    data.append('min9', this.state.min9);
    data.append('min10', this.state.min10);
    data.append('min11', this.state.min11);
    data.append('min12', this.state.min12);
    data.append('min13', this.state.min13);
    data.append('min14', this.state.min14);
    data.append('min15', this.state.min15);
    data.append('min16', this.state.min16);
    data.append('min17', this.state.min17);
    data.append('min18', this.state.min18);
    data.append('min19', this.state.min19);
    data.append('min20', this.state.min20);
    data.append('min21', this.state.min21);
    data.append('min22', this.state.min22);
    data.append('min23', this.state.min23);
    data.append('min24', this.state.min24);

    data.append('body', this.state.description);
    data.append('email', this.state.mail);
    data.append('instagram', this.state.instagram);
    data.append('type', this.state.type);
    fetch('/posts', {
      method: 'POST',
      body: data,
    });
    this.setState({ bye: true });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });

    if (this.state.mail.indexOf('@') == -1 && (this.state.mail)) {
      this.setState({ mailError: 'El email no posee @' });
    } else if (this.state.mail) {
      this.setState({ mailError: '' });
    }
  }

  fileEvent(event) {
    this.setState({ photo: event.target.files[0] });
  }

  render() {
    const redirectToPosts = this.state.bye;
    if (redirectToPosts === true) {
      return <h2>Gracias por tu propuesta!</h2>;
    }

    if (!this.state.privacy) {
      return (

        <form onSubmit={this.onSubmit} encType="multipart/form-data">

          <label>
            ¿Qué carácter quieres que tenga tu propuesta?
            <p>
              <select id="privacy" name="privacy" value={this.state.value} onChange={this.handleChange}>
                <option value="-">- carácter -</option>
                <option value="anonymous">Anónima</option>
                <option value="private">Privada</option>
              </select>

            </p>
          </label>

        </form>
      );
    }
    if (this.state.privacy == 'anonymous') {
      return (

        <form onSubmit={this.onSubmit} encType="multipart/form-data">

          <label>
          ¿Qué carácter quieres que tenga tu propuesta?
            <p>
              <select id="privacy" name="privacy" value={this.state.value} onChange={this.handleChange}>
                <option value="-">- carácter -</option>
                <option value="anonymous">Anónima</option>
                <option value="private">Privada</option>
              </select>

            </p>
          </label>


          <div className="field-wrap">
            <label htmlFor="area">¿A qué área(s) está asociada tu propuesta?</label>
            {this.state.ministries.map((min) => {
              const minTuple = min.split(',&,');
              return (
                <p>
                <input type="checkbox" name={`min${minTuple[1]}`} value={minTuple[1]} onChange={this.handleChange} />
                {' '}
                {minTuple[0]}
                {' '}
              </p>
              );
            })}
          </div>

          <label>
          ¿De qué forma quieres que impacte tu proyecto?
            <p>
              <select id="content" name="type" value={this.state.value} onChange={this.handleChange}>
                <option value="-" selected>- tipo -</option>
                <option value="law">Reforma/cambio a un Proyecto de Ley</option>
                <option value="citizen-project">Proyecto ciudadano</option>
                <option value="company-project">Proyecto dirigido a empresas</option>
              </select>

            </p>
          </label>

          <div className="field-wrap">
            <p><input className="input_form" value={this.state.description} placeholder="Decribenos tu proyecto" type="text" onChange={this.handleChange} id="description" name="description" /></p>
            <p>
              {' '}
              {this.state.descriptionError}
              {' '}
            </p>
          </div>

          <div>
            <button type="submit" className="button button-block">
            Publicar
            </button>
          </div>

        </form>
      );
    }
    if (this.state.privacy == 'private') {
      return (

        <form onSubmit={this.onSubmit} encType="multipart/form-data">

          <label>
    ¿Qué carácter quieres que tenga tu propuesta?
            <p>
              <select id="privacy" name="privacy" value={this.state.value} onChange={this.handleChange}>
                <option value="-">- carácter -</option>
                <option value="anonymous">Anónima</option>
                <option value="private">Privada</option>
              </select>

            </p>
          </label>

          <div className="field-wrap">
            <input className="input_form" value={this.state.name} placeholder="¿Cómo te llamas?" type="text" onChange={this.handleChange} id="name" name="name" />
            <p>
              {' '}
              {this.state.nameError}
              {' '}
            </p>
          </div>

          <div className="field-wrap">
            <input className="input_form" value={this.state.instagram} placeholder="Cuenta de instagram*" type="text" onChange={this.handleChange} id="instagram" name="instagram" />
            <p>
              {' '}
              {this.state.nameError}
              {' '}
            </p>
          </div>

          <div className="field-wrap">
            <label>
              <span className="req" />
            </label>
            <input className="input_form" placeholder="email@example.org*" value={this.state.mail} type="text" onChange={this.handleChange} id="mail" name="mail" />
            <p>
              {' '}
              {this.state.mailError}
              {' '}
            </p>
          </div>

          <div className="field-wrap">
            <label htmlFor="area">¿A qué área(s) está asociada tu propuesta?</label>
            {this.state.ministries.map((min) => {
              const minTuple = min.split(',&,');
              // console.log(minTuple);
              // Return the element. Also pass key
              return (
                <p>
              <input type="checkbox" name={`min${minTuple[1]}`} value={minTuple[1]} onChange={this.handleChange} />
              {' '}
              {minTuple[0]}
              {' '}
            </p>
              );
            })}
          </div>

          <label>
    ¿De qué forma quieres que impacte tu proyecto?
            <p>
              <select id="content" name="type" value={this.state.value} onChange={this.handleChange}>
                <option value="-" selected>- tipo -</option>
                <option value="law">Reforma/cambio a un Proyecto de Ley</option>
                <option value="citizen-project">Proyecto ciudadano</option>
                <option value="company-project">Proyecto dirigido a empresas</option>
              </select>

            </p>
          </label>

          <div className="field-wrap">
            <p><input className="input_form" value={this.state.description} placeholder="Decribenos tu proyecto" type="text" onChange={this.handleChange} id="description" name="description" /></p>
            <p>
              {' '}
              {this.state.descriptionError}
              {' '}
            </p>
          </div>

          <div>
            <button type="submit" className="button button-block">
              Publicar
            </button>
          </div>

        </form>
      );
    }
  }
}
