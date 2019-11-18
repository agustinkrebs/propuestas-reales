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
      typeError: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.fileEvent = this.fileEvent.bind(this);
  }


  async onSubmit(event) {
    const data = new FormData();
    if (this.state.description){
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
    data.append('body', this.state.description.replace(/'/g, "&quote&").replace(/"/g, "&quote&").replace(/\n/g, "&line&"));
    data.append('email', this.state.mail);
    data.append('instagram', this.state.instagram);
    data.append('type', this.state.type);
    fetch('/posts', {
      method: 'POST',
      body: data,
    });
    this.setState({ bye: true });
  } 
  if(!this.state.description) 
  {

    this.setState({descriptionError: "ERROR: Tu propuesta esta vacía"})
  } else {
    this.setState({descriptionError: ""})
  }
  if (!this.state.type)
  {
    this.setState({typeError: "ERROR: Elige un tipo para tu propuesta"})
  } else {
    this.setState({typeError: ""})
  }

  if (this.state.privacy == 'private' && (!this.state.name))
  {
    this.setState({nameError: "ERROR: Propuestas privadas requieren nombre"})
  } else {
    this.setState({nameError: ""})
  }

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
      return (
      <div>
        <h2>¡Gracias por enviar esta propuesta!</h2>
      </div>);
    }

    if (!this.state.privacy) {
      return (
        <form onSubmit={this.onSubmit} encType="multipart/form-data">
          <h3>¿Quieres que tu propuesta sea anónima?</h3>
          <select id="privacy" name="privacy" value={this.state.value} onChange={this.handleChange}>
            <option value="" disabled selected>Respuesta:</option>
            <option value="anonymous">Sí</option>
            <option value="private">No</option>
          </select>
        </form>
      );
    }
    if (this.state.privacy == 'anonymous') {
      return (
        <form onSubmit={this.onSubmit} encType="multipart/form-data">
          <h3>¿Quieres que tu propuesta sea anónima?</h3>
          <select id="privacy" name="privacy" value={this.state.value} onChange={this.handleChange}>
            <option value="" disabled selected>Respuesta:</option>
            <option value="anonymous">Sí</option>
            <option value="private">No</option>
          </select>


          <div className="field-wrap">
            <h3>¿A qué área(s) está asociada tu propuesta?</h3>
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

          <h3>¿Cómo clasificarías tu propuesta?</h3>
          <select id="content" name="type" value={this.state.value} onChange={this.handleChange}>
            <option value="-" selected>Respuesta:</option>
            <option value="Reforma/cambio a un Proyecto de Ley">Reforma/cambio a un Proyecto de Ley</option>
            <option value="Proyecto ciudadano">Proyecto ciudadano</option>
            <option value="Proyecto dirigido a empresas">Proyecto dirigido a empresas</option>
          </select>

          <div className="field-wrap">
            <textarea className="post-body" value={this.state.description} placeholder="Describe tu propuesta" type="text" onChange={this.handleChange} id="description" name="description" />
          </div>

          <div className="errors-container">
            <p>
              {this.state.descriptionError}
            </p>
            <p>
              {this.state.typeError}
            </p>
          </div>

          <div>
            <button className="publicar-button" type="submit">
            Publicar
            </button>
          </div>
        </form>
      );
    }
    if (this.state.privacy == 'private') {
      return (

        <form onSubmit={this.onSubmit} encType="multipart/form-data">

          <h3>¿Quieres que tu propuesta sea anónima?</h3>
          <select id="privacy" name="privacy" value={this.state.value} onChange={this.handleChange}>
            <option value="" disabled selected>Respuesta:</option>
            <option valuepublicar="anonymous">Sí</option>
            <option value="private">No</option>
          </select>

          <div className="field-wrap">
            <textarea className="form-input" value={this.state.name} placeholder="¿Cómo te llamas?" type="text" onChange={this.handleChange} id="name" name="name" />

          </div>

          <div className="field-wrap">
            <textarea className="input_form" value={this.state.instagram} placeholder="Cuenta de instagram (opcional)" type="text" onChange={this.handleChange} id="instagram" name="instagram" />

          </div>

          <div className="field-wrap">
            <label>
              <span className="req" />
            </label>
            <textarea className="input_form" placeholder="Correo (opcional)" value={this.state.mail} type="text" onChange={this.handleChange} id="mail" name="mail" />
            <p>
              {' '}
              {this.state.mailError}
              {' '}
            </p>
          </div>

          <div className="field-wrap">
            <h3>¿A qué área(s) está asociada tu propuesta?</h3>
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

          <h3>¿Cómo clasificarías tu propuesta?</h3>
          <select id="content" name="type" value={this.state.value} onChange={this.handleChange}>
            <option value="-" selected>Respuesta: </option>
            <option value="Reforma/cambio a un Proyecto de Ley">Reforma/cambio a un Proyecto de Ley</option>
            <option value="Proyecto ciudadano">Proyecto ciudadano</option>
            <option value="Proyecto dirigido a empresas">Proyecto dirigido a empresas</option>
          </select>

          <div className="field-wrap">
            <textarea className="post-body" value={this.state.description} placeholder="Describe tu propuesta" type="text" onChange={this.handleChange} id="description" name="description" />
            <p>
              {' '}
              {this.state.descriptionError}
              {' '}
            </p>
            <p>
              {' '}
              {this.state.typeError}
              {' '}
            </p>
            <p>
              {' '}
              {this.state.nameError}
              {' '}
            </p>
          </div>

          <div>
            <button type="submit" className="publicar-button">
              Publicar
            </button>
          </div>

        </form>
      );
    }
  }
}
