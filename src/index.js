import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class AddPersonelList extends React.Component{
  render(){
    return(
      <div>
        <ul className ="list-group">
          {
            this.props.sicilNo.map((itemsicil,indexsicil) => 
              <AddPersonel key={indexsicil} itemsicil={itemsicil} />
            )
          }
        </ul>
      </div>
    )
  }
}

class AddPersonel extends React.Component{
  render(){
    return(
      <div>
       <li className="list-group-item disabled">
        Sicil No: {this.props.itemsicil} Kayıt Tamamlandı.
       </li>
      </div>
    )
  }
}

class Personel extends React.Component{
    constructor(props){
      super(props);
      this.addAdSoyad = this.addAdSoyad.bind(this);
      this.addSicilNo = this.addSicilNo.bind(this);
      this.addePosta = this.addePosta.bind(this);
      this.addSifre = this.addSifre.bind(this);
      this.state = {
        adSoyad: [],
        sicilNo: [],
        ePosta: [],
        sifre: []
      }
    }

    addAdSoyad(itemadsoyad){
      if (!itemadsoyad) {
        return 'Ad Soyad Alanı Boş Geçilemez!'
      }
      this.setState((prevState)=>{
        return {adSoyad : prevState.adSoyad.concat(itemadsoyad)}
      })
    }

    addSicilNo(itemsicil){
      if (!itemsicil) {
        return 'Sicil No Alanı Boş Geçilemez!'
      }
      this.setState((prevState)=>{
        return {sicilNo : prevState.sicilNo.concat(itemsicil)}
      })
    }

    addePosta(itemeposta){
      if (!itemeposta) {
        return 'E-posta Alanı Boş Geçilemez!'
      }
      this.setState((prevState)=>{
        return {ePosta : prevState.ePosta.concat(itemeposta)}
      })
    }

    addSifre(itemsifre){
      if (!itemsifre) {
        return 'Şifre Alanı Boş Geçilemez!'
      }
      this.setState((prevState)=>{
        return {sifre : prevState.sifre.concat(itemsifre)}
      })
    }

    render(){
      return(
        <div className="container">
          <div className="card mt-5">
            <div className="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 class="card-title">Kayıt Ol</h5>
                        <Action addAdSoyad={this.addAdSoyad}
                        addSicilNo={this.addSicilNo}
                        addePosta={this.addePosta}
                        addSifre={this.addSifre}/>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 class="card-title">Kayıtlar</h5>
                        <AddPersonelList adSoyad={this.state.adSoyad}
                        sicilNo={this.state.sicilNo}
                        ePosta={this.state.ePosta}
                        sifre={this.state.sifre}/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      )
    }
}

class Action extends React.Component{
    constructor(props){
      super(props);
      this.onFormSubmit = this.onFormSubmit.bind(this);
      this.state = {
        erroradsoyad:'',
        errorsicil: '',
        erroreposta: '',
        errorsifre: ''
      }
    }
  
    onFormSubmit(e){
      e.preventDefault();
      const itemadsoyad = e.target.elements.txtisim.value.trim();
      const erroradsoyad = this.props.addAdSoyad(itemadsoyad);
      this.setState({
        erroradsoyad:erroradsoyad
      })
      const itemsicil = e.target.elements.txtsicilno.value.trim();
      const errorsicil = this.props.addSicilNo(itemsicil);
      this.setState({
        errorsicil:errorsicil
      })
      const itemeposta = e.target.elements.txteposta.value.trim();
      const erroreposta = this.props.addePosta(itemeposta);
      this.setState({
        erroreposta:erroreposta
      })
      const itemsifre = e.target.elements.txtsifre.value.trim();
      const errorsifre = this.props.addSifre(itemsifre);
      this.setState({
        errorsifre:errorsifre
      })
    }

    render(){
      return(
        <div>
          
          <form onSubmit={this.onFormSubmit}>
            <div className="form-row">

              <div className="form-group col-md-6">
                <label>Ad Soyad</label>
                <input type="text" name='txtisim' className="form-control"/>
                {this.state.erroradsoyad && <p>{this.state.erroradsoyad}</p>}
              </div>

              <div className="form-group col-md-6">
                <label>Sicil No</label>
                <input type="number" name='txtsicilno' className="form-control"/>
                {this.state.errorsicil && <p>{this.state.errorsicil}</p>}
              </div>

              <div className="form-group col-md-6">
                <label>Eposta</label>
                <input type="email" name='txteposta' className="form-control"/>
                {this.state.erroreposta && <p>{this.state.erroreposta}</p>}
              </div>

              <div className="form-group col-md-6">
                <label>Şifre</label>
                <input type="password" name='txtsifre' className="form-control"/>
                {this.state.errorsifre && <p>{this.state.errorsifre}</p>}
              </div>

            </div>
            
            <br/>

            <button type="submit" className="btn btn-primary">Kayıt Ol</button>
          </form>
        </div>
      )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Personel />,root);
