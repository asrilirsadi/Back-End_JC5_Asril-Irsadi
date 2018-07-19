import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class Produk2 extends Component 
{
    render() 
    {
        return (
                <div>
                   <div class="content-wrapper">
                        <section class="content-header">
                            <h1>
                            Produk
                            <small>Mobil Baru</small>
                            </h1>
                            <ol class="breadcrumb">
                            <li><Link to="/"><i class="fa fa-dashboard"></i> Home</Link></li>
                            <li><a href="#">Produk</a></li>
                            <li class="active">Mobil Baru</li>
                            </ol>
                        </section>

                        
                        <section class="content">
                            <div class="row">
                                <div class="col-xs-12">

                                    <div class="box">
                                        <div class="box-header">
                                            <h3 class="box-title">Data Table With Full Features</h3>
                                        </div>
                                        
                                        <div class="box-body">
                                            <table id="example1" class="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                    <th>Merk</th>
                                                    <th>Model</th>
                                                    <th>Varian</th>
                                                    <th>Harga</th>
                                                    <th>Tahun</th>
                                                    <th>Wilayah Tk. 1</th>
                                                    <th>Wilayah Tk. 2</th>
                                                    <th>Warna</th>
                                                    <th>Tipe Body</th>
                                                    <th>Transmisi</th>
                                                    <th>Edit/Delete</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td>Toyota</td>
                                                        <td>Yaris</td>
                                                        <td>TRD Sportivo</td>
                                                        <td>Rp 275.900.000</td>
                                                        <td>2018</td>
                                                        <td>Jabodetabek</td>
                                                        <td>Jakarta Selatan</td>
                                                        <td>Citrus</td>
                                                        <td>Hatchback</td>
                                                        <td>Otomatis</td>
                                                        <td>
                                                            <div class="btn-group">
                                                            <button type="button" class="btn btn-info">Edit</button><span>
                                                            <button type="button" class="btn btn-danger">Del</button></span>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>Daihatsu</td>
                                                        <td>Sirion</td>
                                                        <td>Tipe Manual</td>
                                                        <td>Rp 183.475.000</td>
                                                        <td>2018</td>
                                                        <td>Jawa Barat</td>
                                                        <td>Kota Cimahi</td>
                                                        <td>Merah</td>
                                                        <td>Hatchback</td>
                                                        <td>Manual</td>
                                                        <td>
                                                            <div class="btn-group">
                                                            <button type="button" class="btn btn-info">Edit</button><span>
                                                            <button type="button" class="btn btn-danger">Del</button></span>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                
                                                    <tr>
                                                        <td>Mitsubhisi</td>
                                                        <td>Xpander</td>
                                                        <td>Ultimate</td>
                                                        <td>Rp 257.600.000</td>
                                                        <td>2018</td>
                                                        <td>Jawa Tengah</td>
                                                        <td>Kota Solo</td>
                                                        <td>HItam</td>
                                                        <td>MPV</td>
                                                        <td>Otomatis</td>
                                                        <td>
                                                            <div class="btn-group">
                                                            <button type="button" class="btn btn-info">Edit</button><span>
                                                            <button type="button" class="btn btn-danger">Del</button></span>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>Honda</td>
                                                        <td>CR-V</td>
                                                        <td>1.5L Prestige Turbo</td>
                                                        <td>Rp 511.000.000</td>
                                                        <td>2018</td>
                                                        <td>Jabodetabek</td>
                                                        <td>Jakarta Timur</td>
                                                        <td>Silver</td>
                                                        <td>SUV</td>
                                                        <td>Otomatis</td>
                                                        <td>
                                                            <div class="btn-group">
                                                            <button type="button" class="btn btn-info">Edit</button><span>
                                                            <button type="button" class="btn btn-danger">Del</button></span>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>Suzuki</td>
                                                        <td>Ertiga</td>
                                                        <td>GX</td>
                                                        <td>Rp 223.500.000</td>
                                                        <td>2018</td>
                                                        <td>Jawa Barat</td>
                                                        <td>Kota Bekasi</td>
                                                        <td>Putih</td>
                                                        <td>MPV</td>
                                                        <td>Otomatis</td>
                                                        <td>
                                                            <div class="btn-group">
                                                            <button type="button" class="btn btn-info">Edit</button><span>
                                                            <button type="button" class="btn btn-danger">Del</button></span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="box box-primary">
                                        <div class="box-header with-border">
                                            <h3 class="box-title">Menambahkan Data Mobil Baru</h3>
                                        </div>

                                        <form role="form">
                                            <div class="box-body">
                                                <div class="form-group">
                                                    <label>Merek</label>
                                                    <select class="form-control">
                                                        <option>---Pilih Merk---</option>
                                                        <option>Audi</option>
                                                        <option>BMW</option>
                                                        <option>Daihatsu</option>
                                                        <option>Ford</option>
                                                        <option>Honda</option>
                                                        <option>Hyundai</option>
                                                        <option>Kia</option>
                                                        <option>Mercedes-Benz</option>
                                                        <option>Mini</option>
                                                        <option>Mitsubhisi</option>
                                                        <option>Nissan</option>
                                                        <option>Suzuki</option>
                                                        <option>Toyota</option>
                                                        <option>Volkswagen</option>
                                                    </select>  
                                                    
                                                </div>

                                                <div class="form-group">
                                                    <label>Model</label>
                                                    <select class="form-control">
                                                        <option>---Pilih Model---</option>
                                                        <option>A3</option>
                                                        <option>A4</option>
                                                        <option>Q3</option>
                                                        <option>Q5</option>
                                                        <option>3 Series</option>
                                                        <option>5 Series</option>
                                                        <option>7 Series</option>
                                                        <option>M</option>
                                                        <option>X</option>
                                                        <option>Ayla</option>
                                                        <option>Gran Max</option>
                                                        <option>Sigra</option>
                                                        <option>Sirion</option>
                                                        <option>Terios</option>
                                                        <option>Xenia</option>
                                                        <option>Ecosport</option>
                                                        <option>Everest</option>
                                                        <option>Fiesta</option>
                                                        <option>Focus</option>
                                                        <option>Mustang</option>
                                                        <option>Ranger</option>
                                                        <option>Accord</option>
                                                        <option>BR-V</option>
                                                        <option>Brio</option>
                                                        <option>City</option>
                                                        <option>CR-V</option>
                                                        <option>CR-Z</option>
                                                        <option>HR-V</option>
                                                        <option>Jazz</option>
                                                        <option>Mobilio</option>
                                                        <option>Odyssey</option>
                                                        <option>Grand i10</option>
                                                        <option>H-1</option>
                                                        <option>i10</option>
                                                        <option>i20</option>
                                                        <option>Santa Fe</option>
                                                        <option>Sonata</option>
                                                        <option>Tucson</option>
                                                        <option>Grand Sedona</option>
                                                        <option>Picanto</option>
                                                        <option>Rio</option>
                                                        <option>Sorento</option>
                                                        <option>Sportage</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>8</option>
                                                        <option>Biante</option>
                                                        <option>CX-3</option>
                                                        <option>CX-5</option>
                                                        <option>CX-7</option>
                                                        <option>CX-9</option>
                                                        <option>MX-5</option>
                                                        <option>A-Class</option>
                                                        <option>AMG GT</option>
                                                        <option>B-Class</option>
                                                        <option>C-Class</option>
                                                        <option>CLA-Class</option>
                                                        <option>GLA-Class</option>
                                                        <option>GLC-Class</option>
                                                        <option>GLS-Class</option>
                                                        <option>S-Class</option>
                                                        <option>SLC-Class</option>
                                                        <option>Cooper</option>
                                                        <option>Countryman</option>
                                                        <option>Colt-FE</option>
                                                        <option>Delica</option>
                                                        <option>Lancer</option>
                                                        <option>Mirage</option>
                                                        <option>Outlander Sport</option>
                                                        <option>Pajero Sport</option>
                                                        <option>Strada Triton</option>
                                                        <option>Xpander</option>
                                                        <option>Elgrand</option>
                                                        <option>Evalia</option>
                                                        <option>Grand Livina</option>
                                                        <option>Juke</option>
                                                        <option>March</option>
                                                        <option>Navara</option>
                                                        <option>Serena</option>
                                                        <option>Teana</option>
                                                        <option>X-Trail</option>
                                                        <option>APV</option>
                                                        <option>Baleno</option>
                                                        <option>Carry Pick Up</option>
                                                        <option>Ertiga</option>
                                                        <option>Grand Vitara</option>
                                                        <option>Ignis</option>
                                                        <option>Karimun Wagon R</option>
                                                        <option>Swift</option>
                                                        <option>SX4 S-Cross</option>
                                                        <option>86</option>
                                                        <option>Agya</option>
                                                        <option>Alphard</option>
                                                        <option>Avanza</option>
                                                        <option>CH-R</option>
                                                        <option>Calya</option>
                                                        <option>Camry</option>
                                                        <option>Corolla Altis</option>
                                                        <option>Fortuner</option>
                                                        <option>Kijang Innova</option>
                                                        <option>Land Cruiser</option>
                                                        <option>Rush</option>
                                                        <option>Sienta</option>
                                                        <option>Vellfire</option>
                                                        <option>Vios</option>
                                                        <option>Voxy</option>
                                                        <option>Yaris</option>
                                                        <option>Beetle</option>
                                                        <option>Caravelle</option>
                                                        <option>Golf</option>
                                                        <option>Polo</option>
                                                        <option>Scirocco</option>
                                                        <option>Tiguain</option>
                                                    </select>  
                                                </div>

                                                <div class="form-group">
                                                    <label>Varian</label>
                                                    <select class="form-control">
                                                        <option>---Pilih Varian---</option>
                                                        <option>TFSI</option>
                                                        <option>TFSI Quatro</option>
                                                        <option>S-Line</option>
                                                        <option>Q4</option>
                                                        <option>D</option>
                                                        <option>M</option>
                                                        <option>M Sporty</option>
                                                        <option>R</option>
                                                        <option>R Deluxe</option>
                                                        <option>X</option>
                                                        <option>X Deluxe</option>
                                                        <option>Trend</option>
                                                        <option>Titanium</option>
                                                        <option>Sport</option>
                                                        <option>EcoBoost S</option>
                                                        <option>WildTrak</option>
                                                        <option>XLT</option>
                                                        <option>XLS</option>
                                                        <option>E</option>
                                                        <option>S</option>
                                                        <option>Prestige</option>
                                                        <option>ES</option>
                                                        <option>Turbo</option>
                                                        <option>Type R</option>
                                                        <option>RS</option>
                                                        <option>GL</option>
                                                        <option>GLS</option>
                                                        <option>GLX</option>
                                                        <option>Elegance</option>
                                                        <option>Royale</option>
                                                        <option>XG</option>
                                                        <option>CRDi</option>
                                                        <option>Dspec</option>
                                                        <option>Limited Edition</option>
                                                        <option>Ultimate</option>
                                                        <option>Platinum</option>
                                                        <option>SE 2</option>
                                                        <option>SE 3</option>
                                                        <option>UB</option>
                                                        <option>YB</option>
                                                        <option>XM</option>
                                                        <option>GT Line</option>
                                                        <option>GT Line Ultimate</option>
                                                        <option>V</option>
                                                        <option>RZ</option>
                                                        <option>GT</option>
                                                        <option>Sky Active</option>
                                                        <option>Grand Touring</option>
                                                        <option>Elite</option>
                                                        <option>F55</option>
                                                        <option>F56</option>
                                                        <option>Cooper</option>
                                                        <option>Cooper S</option>
                                                        <option>Preston</option>
                                                        <option>Royal</option>
                                                        <option>Exceed</option>
                                                        <option>Dakar Ultimate</option>
                                                        <option>Dakar</option>
                                                        <option>2.5L Double Cabin</option>
                                                        <option>2.8L Double Cabin </option>
                                                        <option>Exceed Hi-Power</option>
                                                        <option>Highway Star</option>
                                                        <option>St</option>
                                                        <option>SV</option>
                                                        <option>XV Highway Star</option>
                                                        <option>XV</option>
                                                        <option>NP300 SL</option>
                                                        <option>NP300 VL</option>
                                                        <option>Autech</option>
                                                        <option>Panoramic Autech</option>
                                                        <option>Extremer</option>
                                                        <option>T31</option>
                                                        <option>T32</option>
                                                        <option>GL Arena</option>
                                                        <option>GX Arena</option>
                                                        <option>Luxury</option>
                                                        <option>SGX Arena</option>
                                                        <option>SGX Luxury</option>
                                                        <option>Diesel Hybrid</option>
                                                        <option>Dreza</option>
                                                        <option>Dreza GS</option>
                                                        <option>GL Sporty</option>
                                                        <option>G</option>
                                                        <option>TRD Sportivo</option>
                                                        <option>G G</option>
                                                        <option>HV</option>
                                                        <option>Q</option>
                                                        <option>V V</option>
                                                        <option>V</option>
                                                        <option>X X</option>
                                                        <option>Veloz</option>
                                                        <option>SRZ</option>
                                                        <option>VRZ</option>
                                                        <option>J</option>
                                                        <option>G Luxury</option>
                                                        <option>Venturer</option>
                                                        <option>G Limited</option>
                                                        <option>H20</option>
                                                        <option>R80</option>
                                                        <option>TDI</option>
                                                        <option>GTI</option>
                                                        <option>TSI</option>
                                                        <option>Comfort Line</option>
                                                        <option>Highline</option>
                                                        <option>GTS TSI</option>
                                                    </select>  
                                                </div>

                                                <div class="form-group">
                                                    <label>Harga</label>
                                                    <div class="input-group">
                                                        <span class="input-group-addon">Rp</span>
                                                        <input type="text" class="form-control" />
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label>Tahun</label>
                                                    <div class="input-group">
                                                    <div class="input-group-addon">
                                                        <i class="fa fa-calendar"></i>
                                                    </div>
                                                    <input type="text" class="form-control" data-inputmask="'alias': 'yyyy'" data-mask />
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label>Wilayah Tk. 1</label>
                                                    <select class="form-control">
                                                        <option>---Pilih Wilayah Tk.1---</option>
                                                        <option>Jabodetabek</option>
                                                        <option>Jawa Barat</option>
                                                        <option>Jawa Tengah</option>
                                                    </select>  
                                                </div>

                                                <div class="form-group">
                                                    <label>Wilayah Tk. 2</label>
                                                    <select class="form-control">
                                                        <option>---Pilih Wilayah Tk.2---</option>
                                                        <option>Jakarta Utara</option>
                                                        <option>Jakarta Barat</option>
                                                        <option>Jakarta Timur</option>
                                                        <option>Jakarta Pusat</option>
                                                        <option>Jakarta Selatan</option>
                                                        <option>Kota Bekasi</option>
                                                        <option>Kota Bogor</option>
                                                        <option>Kota Depok</option>
                                                        <option>Kota Tangerang</option>
                                                        <option>Kabupaten Bekasi</option>
                                                        <option>Kabupaten Bogor</option>
                                                        <option>Kabupaten Tangerang</option>
                                                        <option>Kota Bandung</option>
                                                        <option>Kota Cimahi</option>
                                                        <option>Kota Cirebon</option>
                                                        <option>Kota Tasik</option>
                                                        <option>Kabupaten Bandung</option>
                                                        <option>Kabupaten Cianjur</option>
                                                        <option>Kabupaten Garut</option>
                                                        <option>Kabupaten Karawang</option>
                                                        <option>Kabupaten Sukabumi</option>
                                                        <option>Kota Magelang</option>
                                                        <option>Kota Semarang</option>
                                                        <option>Kota Surakarta</option>
                                                        <option>Kota Tegal</option>
                                                        <option>Kabupaten Banyumas</option>
                                                        <option>Kabupaten Brebes</option>
                                                        <option>Kabupaten Demak</option>
                                                        <option>Kabupaten Kudus</option>
                                                        <option>Kabupaten Pemalang</option>
                                                    </select>  
                                                </div>

                                                <div class="form-group">
                                                    <label>Warna</label>
                                                    <select class="form-control">
                                                        <option>---Pilih Warna---</option>
                                                        <option>Abu - Abu</option>
                                                        <option>Biru</option>
                                                        <option>Citrus</option>
                                                        <option>Hitam</option>
                                                        <option>Merah</option>
                                                        <option>Putih</option>
                                                        <option>Orange</option>
                                                        <option>Silver</option>
                                                        <option>Ungu</option>
                                                    </select> 
                                                </div>

                                                <div class="form-group">
                                                    <label>Tipe Body</label>
                                                    <select class="form-control">
                                                        <option>---Pilih Tipe Body---</option>
                                                        <option>Hatchback</option>
                                                        <option>MPV</option>
                                                        <option>SUV</option>
                                                        <option>Sedan</option>
                                                    </select>  
                                                </div>

                                                <div class="form-group">
                                                    <label>Jenis Transmisi</label>
                                                    <select class="form-control">
                                                        <option>---Pilih Jenis Transmisi---</option>
                                                        <option>Manual</option>
                                                        <option>Otomatis</option>
                                                    </select>
                                                </div>

                                                <div class="form-group">
                                                    <label for="exampleInputFile">File input</label>
                                                    <input type="file" id="exampleInputFile" />

                                                    <p class="help-block">Example block-level help text here.</p>
                                                </div>

                                                <div class="checkbox">
                                                    <label>
                                                        <input type="checkbox" /> Check me out
                                                    </label>
                                                </div>

                                            </div>
                                            

                                            <div class="box-footer">
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                    
                                </div>

                                <div class="col-md-6">
                                    <div class="box box-primary">
                                        <div class="box-header with-border">
                                            <h3 class="box-title">Menambahkan Kategori / Atribut Produk</h3>
                                        </div>
                                        <form role="form">
                                            <div class="box-body">
                                                <div class="form-group">
                                                    <label>Tambahan Kategori Produk</label>
                                                    <input type="text" class="form-control" placeholder="Enter ..." />
                                                    <button type="submit" class="btn btn-primary">Tambahkan</button>
                                                </div>
                                                <div class="form-group">
                                                    <label>Tambahan Atribut Produk</label>
                                                    <input type="text" class="form-control" placeholder="Enter ..." /> 
                                                    <button type="submit" class="btn btn-primary">Tambahkan</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                    </div>
                </div>    
                );
    }
}

export default Produk2;