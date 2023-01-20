import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Actions = () => {
  const [adSoyad,setAdSoyad] = useState("");
  const [sicilNo,setSicilNo] = useState("");
  const [ePosta,setEPosta] = useState("");
  const [sifre,setSifre] = useState("");

  const [adSoyaderr,setAdSoyaderr] = useState({});
  const [sicilNoerr,setSicilNoerr] = useState({});
  const [ePostaerr,setEPostaerr] = useState({});
  const [sifreerr,setSifreerr] = useState({});

  const onSubmit = (e) => {
    const itemadsoyad = e.target.elements.adsoyaditem.value.trim();
    const itemsicilno = e.target.elements.sicilnoitem.value.trim();
    const itemeposta = e.target.elements.epostaitem.value.trim();
    const itemsifre = e.target.elements.sifreitem.value.trim();

    console.log(itemadsoyad);
    console.log(itemsicilno);
    console.log(itemeposta);
    console.log(itemsifre);
    const isValid = formValidation();
    if (isValid) {
      return formValidation() + alert('Kayıt Başarılı.');
    }
    else{
      e.preventDefault();
      return alert('Lütfen Formu Doldurunuz.');
    }
  }

  const formValidation = () => {
    const adSoyaderr = {};
    const sicilNoerr = {};
    const ePostaerr = {};
    const sifreerr = {};

    let isValid = true;

    if (adSoyad.trim().length <= 0) {
      adSoyaderr.adSoyadhata = "Ad Soyad Alanı Boş Geçilemez.";
      isValid = false;
    }
    if (sicilNo.trim().length <= 0) {
      sicilNoerr.sicilNohata = "Sicil No Alanı Boş Geçilemez.";
      isValid = false;
    }
    if (ePosta.trim().length <= 0) {
      ePostaerr.ePostahata = "E-Posta Alanı Boş Geçilemez.";
      isValid = false;
    }
    if (sifre.trim().length <= 0) {
      sifreerr.sifrehata = "Şifre Alanı Boş Geçilemez.";
      isValid = false;
    }

    setAdSoyaderr(adSoyaderr);
    setSicilNoerr(sicilNoerr);
    setEPostaerr(ePostaerr);
    setSifreerr(sifreerr);

    return isValid;
  }

  return (
    <div>
      <div className="card mt-5">
            <div className="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Kayıt Ol</h5>
                        <form onSubmit={onSubmit}>
                          <div className="form-row">
                  
                            <div className="form-group col-md-6">
                              <label>Ad Soyad</label>
                              <input type="text" name='adsoyaditem' value={adSoyad} onChange={(e)=>{setAdSoyad(e.target.value)}} className="form-control"/>
                              {Object.keys(adSoyaderr).map((key)=>{
                                return  <p className='text-danger'>{adSoyaderr[key]}</p>
                              })}
                            </div>
                  
                            <div className="form-group col-md-6">
                              <label>Sicil No</label>
                              <input type="number" name='sicilnoitem' value={sicilNo} onChange={(e)=>{setSicilNo(e.target.value)}} className="form-control"/>
                              {Object.keys(sicilNoerr).map((key)=>{
                                return  <p className='text-danger'>{sicilNoerr[key]}</p>
                              })}
                            </div>
                  
                            <div className="form-group col-md-6">
                              <label>Eposta</label>
                              <input type="email" name='epostaitem' value={ePosta} onChange={(e)=>{setEPosta(e.target.value)}} className="form-control"/>
                              {Object.keys(ePostaerr).map((key)=>{
                                return  <p className='text-danger'>{ePostaerr[key]}</p>
                              })}
                            </div>
                  
                            <div className="form-group col-md-6">
                              <label>Şifre</label>
                              <input type="password" name='sifreitem' value={sifre} onChange={(e)=>{setSifre(e.target.value)}} className="form-control"/>
                              {Object.keys(sifreerr).map((key)=>{
                                return  <p className='text-danger'>{sifreerr[key]}</p>
                              })}
                            </div>
                  
                          </div>
                          
                          <br/>
                  
                          <button type="submit" className="btn btn-primary">Kayıt Ol</button>
                        </form>

                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Kayıtlar</h5>
                        <div>
                          <ul className ="list-group">
                              <div>
                                  <li className="list-group-item disabled">
                                      Sicil No: Kayıt Tamamlandı.
                                  </li>   
                              </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
  )
}

function App(){
  var template = (
    <div className="container">
        <Actions/>
    </div>
  );
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(template,root);
}

App();
