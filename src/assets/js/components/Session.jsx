import React, { Component } from 'react';

export default class Session extends Component {
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
      A1: "",
      A2: "", 
      A3: "", 
      A4: "",
      content: ""

    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.fileEvent = this.fileEvent.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  

  
  if (this.state.mail.indexOf("@") == -1 && (this.state.mail)){
    this.setState({ mailError: 'El email no posee @' })
  } else if (this.state.mail){
    this.setState({ mailError: '' })
  }

};
fileEvent(event) {
  this.setState({photo: event.target.files[0]});
}

   async onSubmit(event) {
    if (this.state.mailError == '' && this.state.nameError == '' && this.state.passwordError == '' ) {
      console.log(this.state)
      const info = JSON.stringify({name: this.state.name, mail: this.state.mail, password: this.state.password,
      rol: this.state.rol})
      console.log(this.state.photo);
      var data = new FormData();
      data.append("file", this.state.photo);
      data.append("name", this.state.name);
      data.append("password", this.state.password);
      data.append("rol", this.state.rol);
      data.append("description", this.state.description);
      data.append("mail", this.state.mail);
      fetch('/users/create', {
        method: 'POST',
        body: data,
      })
      console.log('enviando')
      this.setState({ bye: true })
      event.preventDefault();
    } else {
      this.setState({ totalError: true })
      console.log(this.state.totalError)
      event.preventDefault();
    }
  }


  render() {

    if (!this.state.privacy){
      return (

          <form onSubmit={this.onSubmit} encType="multipart/form-data">

            <label>
            ¿Qué carácter quieres que tenga tu propuesta?
              <p><select id="privacy" name="privacy" value={this.state.value} onChange={this.handleChange}>
                <option value="-">- carácter -</option>
                <option value="anonymous">Anónima</option>
                <option value="private">Privada</option>
              </select></p>
            </label>

          </form>
      );
    
  }
  else if (this.state.privacy == 'anonymous'){
    return (

        <form onSubmit={this.onSubmit} encType="multipart/form-data">

          <label>
          ¿Qué carácter quieres que tenga tu propuesta?
            <p><select id="privacy" name="privacy" value={this.state.value} onChange={this.handleChange}>
              <option value="-">- carácter -</option>
              <option value="anonymous">Anónima</option>
              <option value="private">Privada</option>
            </select></p>
          </label>


            <div className="field-wrap">
              <label for="area">¿A qué área(s) está asociada tu propuesta?</label>
              <p><input type="checkbox" id="A1" name="A1" value={this.state.value} onChange={this.handleChange} value="A1"/> Economía, Fomento y Turismo </p>
              <p><input type="checkbox" id="A2" name="A2" value={this.state.value} onChange={this.handleChange} value="A2"/> Salud </p>
              <p><input type="checkbox" id="A3" name="A3" value={this.state.value} onChange={this.handleChange} value="A3"/> Mujer y la Equidad de Género  </p>
              <p><input type="checkbox" id="A4" name="A4" value={this.state.value} onChange={this.handleChange} value="A4"/> Otra </p>
            </div>

            <label>
          ¿De qué forma quieres que impacte tu proyecto?
            <p><select id="content" name="content" value={this.state.value} onChange={this.handleChange}>
                <option value="law" selected>Reforma/cambio a un Proyecto de Ley</option>
                <option value="citizen-project">Proyecto ciudadano</option>
                <option value="company-project">Proyecto dirigido a empresas</option>
            </select></p>
          </label>

          <div className="field-wrap">
                <p><input className="input_form" value={this.state.description} placeholder='Decribenos tu proyecto' type="text" onChange={this.handleChange} id="description" name="description" /></p>
                  <p> {this.state.descriptionError} </p>
            </div>

            <p className="blanco_mediano">
              Foto
            </p>

            <input id='file_' placeholder='seleccionar foto' type="file" id="photo" name="photo" />

            <div>
            <button type="submit" className="button button-block">
            Get Started
            </button>
          </div>

        </form>
    );
  
}
else if (this.state.privacy == 'private'){
  return (

    <form onSubmit={this.onSubmit} encType="multipart/form-data">

    <label>
    ¿Qué carácter quieres que tenga tu propuesta?
      <p><select id="privacy" name="privacy" value={this.state.value} onChange={this.handleChange}>
        <option value="-">- carácter -</option>
        <option value="anonymous">Anónima</option>
        <option value="private">Privada</option>
      </select></p>
    </label>

      <div className="field-wrap">
          <input className="input_form" value={this.state.name} placeholder='¿Cómo te llamas?' type="text" onChange={this.handleChange} id="name" name="name" />
            <p> {this.state.nameError} </p>
      </div>

     <div className="field-wrap">
          <input className="input_form" value={this.state.instagram} placeholder='Cuenta de instagram*' type="text" onChange={this.handleChange} id="instagram" name="instagram" />
            <p> {this.state.nameError} </p>
      </div>

      <div className="field-wrap">
          <label>
           <span className="req"></span>
          </label>
          <input  className="input_form" placeholder='email@example.org*' value={this.state.mail}  type="text" onChange={this.handleChange} id="mail" name="mail" />
          <p> {this.state.mailError} </p>
      </div>

      <div className="field-wrap">
        <label for="area">¿A qué área(s) está asociada tu propuesta?</label>
        <p><input type="checkbox" id="A1" name="A1" value={this.state.value} onChange={this.handleChange} value="A1"/> Economía, Fomento y Turismo </p>
        <p><input type="checkbox" id="A2" name="A2" value={this.state.value} onChange={this.handleChange} value="A2"/> Salud </p>
        <p><input type="checkbox" id="A3" name="A3" value={this.state.value} onChange={this.handleChange} value="A3"/> Mujer y la Equidad de Género  </p>
        <p><input type="checkbox" id="A4" name="A4" value={this.state.value} onChange={this.handleChange} value="A4"/> Otra </p>
      </div>

      <label>
    ¿De qué forma quieres que impacte tu proyecto?
      <p><select id="content" name="content" value={this.state.value} onChange={this.handleChange}>
          <option value="law" selected>Reforma/cambio a un Proyecto de Ley</option>
          <option value="citizen-project">Proyecto ciudadano</option>
          <option value="company-project">Proyecto dirigido a empresas</option>
      </select></p>
    </label>

    <div className="field-wrap">
          <p><input className="input_form" value={this.state.description} placeholder='Decribenos tu proyecto' type="text" onChange={this.handleChange} id="description" name="description" /></p>
            <p> {this.state.descriptionError} </p>
      </div>

      <p className="blanco_mediano">
        Foto
      </p>

      <input id='file_' placeholder='seleccionar foto' type="file" id="photo" name="photo" />

      <div>
      <button type="submit" className="button button-block">
      Get Started
      </button>
    </div>

  </form>
  );

}
}
 }
