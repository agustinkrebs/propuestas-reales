import React, { Component } from 'react';

export default class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameError: '',
      password: '',
      confirmPassword: '',
      passwordError: '',
      confirmPpasswordError: '',
      photo: '',
      description: '',
      mail: '',
      mailError: '',
      totalError: false,
      bye: false,
      rol: 1

    };
    this.onVotesChanged = this.onVotesChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.fileEvent = this.fileEvent.bind(this);
  }

  onVotesChanged(event) {
    this.setState({ [event.target.name]: event.target.value });

  if (this.state.name.length < 5 ){
    this.setState({ nameError: 'El nombre debe poseer minimo 6 caracteres' })
  } else if (this.state.name.length > 4) {
    this.setState({ nameError: '' })
  }

  if (this.state.mail.indexOf("@") == -1 && (this.state.mail)){
    this.setState({ mailError: 'El email no posee @' })
  } else if (this.state.mail){
    this.setState({ mailError: '' })
  }

  if (this.state.password.length < 5 ){
    this.setState({ passwordError: 'La contraseña debe poseer minimo 6 caracteres' })
  } else if (this.state.password.length > 4) {
    this.setState({ passwordError: '' })
  }

  if ((this.state.confirmPassword == this.state.password)  == false){
    console.log(this.state.password)
    console.log(this.state.confirmPassword)
    console.log('- - - - -')
    this.setState({ confirmPasswordError: 'Las contraseñas no coinciden' })
  } else  {
    this.setState({ confirmPasswordError: '' })

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
    if (this.state.bye){
      return (<div>
          <h1>Te has registrado exitosamente</h1>
      </div>)
    } else if (this.state.totalError) {
      return (

        <div className="new-user">
        <p class="letra_chica_form"> Arregla los campos con error </p>
          <form onSubmit={this.onSubmit} encType="multipart/form-data">

             <div className="field-wrap">
                  <input className="input_form" value={this.state.name} placeholder='Nombre*' type="text" onChange={this.onVotesChanged} id="name" name="name" />
                    <p> {this.state.nameError} </p>
              </div>

              <div className="field-wrap">
                  <label>
                   <span className="req"></span>
                  </label>
                  <input  className="input_form" placeholder='email@example.org*' value={this.state.mail}  type="text" onChange={this.onVotesChanged} id="mail" name="mail" />
                  <p> {this.state.mailError} </p>
              </div>


              <div className="field-wrap">
                  <label>
                   <span className="req"></span>
                  </label>
                  <input  className="input_form" placeholder='Contraseña*' type="password" onChange={this.onVotesChanged} id="password" name="password" />
                  <p> {this.state.passwordError} </p>
              </div>

              {/*<div className="field-wrap">
                  <label>
                   <span className="req"></span>
                  </label>
                  <input  className="input_form" placeholder='confirmar contraseña*' type="password" onChange={this.onVotesChanged} id="confirmPassword" name="confirmPassword" />
                  <p> {this.state.confirmPasswordError} </p>
                </div> */}

              <div className="field-wrap">
                  <textarea  className="input_form" placeholder='Cuéntanos quien eres*' type="text_area" onChange={this.onVotesChanged} id="description" name="description" />
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
        </div>
      );
    } else {
      return (
        <div className="tab-content">

          <form onSubmit={this.onSubmit} encType="multipart/form-data">

             <div className="field-wrap">
                  <input className="input_form" placeholder='Nombre*' type="text" onChange={this.onVotesChanged} id="name" name="name" />
                    <p> {this.state.nameError} </p>
              </div>

              <div className="field-wrap">
                  <label>
                   <span className="req"></span>
                  </label>
                  <input  className="input_form" placeholder='email@example.org*'
                   type="text" onChange={this.onVotesChanged} id="mail" name="mail" />
                  <p> {this.state.mailError} </p>
              </div>


              <div className="field-wrap">
                  <label>
                   <span className="req"></span>
                  </label>
                  <input  className="input_form" placeholder='Contraseña*' type="password" onChange={this.onVotesChanged} id="password" name="password" />
                  <p> {this.state.passwordError} </p>
              </div>

               {/*
               </form>div className="field-wrap">
                  <label>
                   <span className="req"></span>
                  </label>
                  <input  className="input_form" placeholder='confirmar contraseña*' type="password" onChange={this.onVotesChanged} id="confirmPassword" name="confirmPassword" />
                  <p> {this.state.confirmPpasswordError} </p>
               </div> */}

              <div className="field-wrap">
                  <input  className="input_form" placeholder='Cuéntanos quien eres*' type="text" onChange={this.onVotesChanged} id="description" name="description" />
              </div>

              <p className="blanco_mediano">
                Ingresa tu mejor foto de perfil 
              </p>
              <input id='file_' placeholder='seleccionar foto' type="file" id="photo" name="photo" onBlur={this.fileEvent}  />

              <div>
              <button type="submit" className="button button-block">
              Get Started
              </button>
            </div>

          </form>
        </div>
      );
    }
  }

 }
