import React, { Component } from 'react';

import {Link} from 'react-router-dom'; 

class Profile extends Component 
{
    render() 
    {
        return (
                <div>
                    <div className="banner1">
                        <div className="container">
                            <h3><Link to="/">Home</Link> / <span>Profile</span></h3>
                        </div>
                    </div>

                    <div className="hold-transition skin-blue sidebar-mini">
                        <div className="wrapper">
                            <div className="main-header">
                                {/* Logo */}
                                <Link to="./../images/img/user2-160x160.jpg" className="logo">
                                    {/* mini logo for sidebar mini 50x50 pixels */}
                                    <span className="logo-mini"><b>Profil</b>Saya</span>
                                    {/* logo for regular state and mobile devices */}
                                    <span className="logo-lg"><b>Profil</b>Saya</span>
                                </Link>
                                {/* Header Navbar: style can be found in header.less */}
                                <nav className="navbar navbar-static-top">
                                    {/* Sidebar toggle button*/}
                                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    </a>
                                    <div className="navbar-custom-menu">
                                    <ul className="nav navbar-nav">
                                        {/* Messages: style can be found in dropdown.less*/}
                                        <li className="dropdown messages-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-envelope-o" />
                                            <span className="label label-success">4</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="header">You have 4 messages</li>
                                            <li>
                                            {/* inner menu: contains the actual data */}
                                            <ul className="menu">
                                                <li>{/* start message */}
                                                <a href="#">
                                                    <div className="pull-left">
                                                    <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>
                                                    Support Team
                                                    <small><i className="fa fa-clock-o" /> 5 mins</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                                </li>
                                                {/* end message */}
                                                <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                    <img src="../../dist/img/user3-128x128.jpg" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>
                                                    AdminLTE Design Team
                                                    <small><i className="fa fa-clock-o" /> 2 hours</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                                </li>
                                                <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                    <img src="../../dist/img/user4-128x128.jpg" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>
                                                    Developers
                                                    <small><i className="fa fa-clock-o" /> Today</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                                </li>
                                                <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                    <img src="../../dist/img/user3-128x128.jpg" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>
                                                    Sales Department
                                                    <small><i className="fa fa-clock-o" /> Yesterday</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                                </li>
                                                <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                    <img src="../../dist/img/user4-128x128.jpg" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>
                                                    Reviewers
                                                    <small><i className="fa fa-clock-o" /> 2 days</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                                </li>
                                            </ul>
                                            </li>
                                            <li className="footer"><a href="#">See All Messages</a></li>
                                        </ul>
                                        </li>
                                        {/* Notifications: style can be found in dropdown.less */}
                                        <li className="dropdown notifications-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-bell-o" />
                                            <span className="label label-warning">10</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="header">You have 10 notifications</li>
                                            <li>
                                            {/* inner menu: contains the actual data */}
                                            <ul className="menu">
                                                <li>
                                                <a href="#">
                                                    <i className="fa fa-users text-aqua" /> 5 new members joined today
                                                </a>
                                                </li>
                                                <li>
                                                <a href="#">
                                                    <i className="fa fa-warning text-yellow" /> Very long description here that may not fit into the
                                                    page and may cause design problems
                                                </a>
                                                </li>
                                                <li>
                                                <a href="#">
                                                    <i className="fa fa-users text-red" /> 5 new members joined
                                                </a>
                                                </li>
                                                <li>
                                                <a href="#">
                                                    <i className="fa fa-shopping-cart text-green" /> 25 sales made
                                                </a>
                                                </li>
                                                <li>
                                                <a href="#">
                                                    <i className="fa fa-user text-red" /> You changed your username
                                                </a>
                                                </li>
                                            </ul>
                                            </li>
                                            <li className="footer"><a href="#">View all</a></li>
                                        </ul>
                                        </li>
                                        {/* Tasks: style can be found in dropdown.less */}
                                        <li className="dropdown tasks-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-flag-o" />
                                            <span className="label label-danger">9</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="header">You have 9 tasks</li>
                                            <li>
                                            {/* inner menu: contains the actual data */}
                                            <ul className="menu">
                                                <li>{/* Task item */}
                                                <a href="#">
                                                    <h3>
                                                    Design some buttons
                                                    <small className="pull-right">20%</small>
                                                    </h3>
                                                    <div className="progress xs">
                                                    <div className="progress-bar progress-bar-aqua" style={{width: '20%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                                                        <span className="sr-only">20% Complete</span>
                                                    </div>
                                                    </div>
                                                </a>
                                                </li>
                                                {/* end task item */}
                                                <li>{/* Task item */}
                                                <a href="#">
                                                    <h3>
                                                    Create a nice theme
                                                    <small className="pull-right">40%</small>
                                                    </h3>
                                                    <div className="progress xs">
                                                    <div className="progress-bar progress-bar-green" style={{width: '40%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                                                        <span className="sr-only">40% Complete</span>
                                                    </div>
                                                    </div>
                                                </a>
                                                </li>
                                                {/* end task item */}
                                                <li>{/* Task item */}
                                                <a href="#">
                                                    <h3>
                                                    Some task I need to do
                                                    <small className="pull-right">60%</small>
                                                    </h3>
                                                    <div className="progress xs">
                                                    <div className="progress-bar progress-bar-red" style={{width: '60%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                                                        <span className="sr-only">60% Complete</span>
                                                    </div>
                                                    </div>
                                                </a>
                                                </li>
                                                {/* end task item */}
                                                <li>{/* Task item */}
                                                <a href="#">
                                                    <h3>
                                                    Make beautiful transitions
                                                    <small className="pull-right">80%</small>
                                                    </h3>
                                                    <div className="progress xs">
                                                    <div className="progress-bar progress-bar-yellow" style={{width: '80%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                                                        <span className="sr-only">80% Complete</span>
                                                    </div>
                                                    </div>
                                                </a>
                                                </li>
                                                {/* end task item */}
                                            </ul>
                                            </li>
                                            <li className="footer">
                                            <a href="#">View all tasks</a>
                                            </li>
                                        </ul>
                                        </li>
                                        {/* User Account: style can be found in dropdown.less */}
                                        <li className="dropdown user user-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <img src="../Project 01_Front End (using Template)/Admin/dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                                            <span className="hidden-xs">Asril Irsadi</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            {/* User image */}
                                            <li className="user-header">
                                            <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                            <p>
                                                Asril Irsadi - Web Developer
                                                <small>Member since April 2018</small>
                                            </p>
                                            </li>
                                            {/* Menu Body */}
                                            <li className="user-body">
                                            <div className="row">
                                                <div className="col-xs-4 text-center">
                                                <a href="#">Followers</a>
                                                </div>
                                                <div className="col-xs-4 text-center">
                                                <a href="#">Sales</a>
                                                </div>
                                                <div className="col-xs-4 text-center">
                                                <a href="#">Friends</a>
                                                </div>
                                            </div>
                                            {/* /.row */}
                                            </li>
                                            {/* Menu Footer*/}
                                            <li className="user-footer">
                                            <div className="pull-left">
                                                <a href="#" className="btn btn-default btn-flat">Profile</a>
                                            </div>
                                            <div className="pull-right">
                                                <a href="#" className="btn btn-default btn-flat">Sign out</a>
                                            </div>
                                            </li>
                                        </ul>
                                        </li>
                                        {/* Control Sidebar Toggle Button */}
                                        <li>
                                        <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
                                        </li>
                                    </ul>
                                    </div>
                                </nav>
                            </div> 
                            {/* Sidebar toggle button*/}
                            <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </a>
                            {/* Left side column. contains the logo and sidebar */}
                            <aside className="main-sidebar">
                                {/* sidebar: style can be found in sidebar.less */}
                                <section className="sidebar">
                                    {/* Sidebar user panel */}
                                    <div className="user-panel">
                                    <div className="pull-left image">
                                        <img src="../Project 01_Front End (using Template)/Admin/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                    </div>
                                    <div className="pull-left info">
                                        <p>Asril Irsadi</p>
                                        <a href="#"><i className="fa fa-circle text-success" /> Online</a>
                                    </div>
                                    </div>
                                    {/* search form */}
                                    <form action="#" method="get" className="sidebar-form">
                                    <div className="input-group">
                                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                                        <span className="input-group-btn">
                                        <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
                                        </button>
                                        </span>
                                    </div>
                                    </form>
                                    {/* /.search form */}
                                    {/* sidebar menu: : style can be found in sidebar.less */}
                                    {/* Sidebar Menu */}
                                    <ul className="sidebar-menu" data-widget="tree">
                                    <li className="header">Navigasi Utama</li>
                                    {/* Optionally, you can add icons to the links */}
                                    {/* Akun Customer */}
                                    <li><a href="#"><i className="fa fa-link" /> <span>Akun Saya</span></a></li>
                                    {/* My Wishlist */}
                                    <li><a href="#"><i className="fa fa-link" /> <span>My Wishlist</span></a></li>
                                    {/* Riwayat Invoice Customer */}
                                    <li><a href="#"><i className="fa fa-link" /> <span>Riwayat Invoice</span></a></li>
                                    </ul>
                                    {/* /.sidebar-menu */}
                                </section>
                                {/* /.sidebar */}
                            </aside>
                            {/* Main content */}
                            <section className="content">
                                {/* Akun Customer */}
                                <div className="row">
                                    <div className="col-xs-12">
                                    <div className="box box-primary">
                                        <div className="box-header with-border">
                                        <h3 className="box-title">Profile Saya</h3>
                                        </div>
                                        {/* /.box-header */}
                                        {/* form start */}
                                        <form role="form">
                                        <div className="box-body">
                                            <div className="form-group">
                                                <label>Nama Lengkap</label>
                                                <input type="text" className="form-control" placeholder="Asril Irsadi" disabled />
                                            </div>
                                            <div className="form-group">
                                                <label>Alamat</label>
                                                <input type="text" className="form-control" placeholder="Taman Cikunir Indah E2/13, RT 10/RW 11" disabled />
                                            </div>
                                            <div className="form-group">
                                            <label>Kelurahan</label>
                                                <input type="text" className="form-control" placeholder="Jaka Mulya" disabled />
                                                </div>
                                            <div className="form-group">
                                                <label>Kecamatan</label>
                                                <input type="text" className="form-control" placeholder="Bekasi Selatan" disabled />
                                            </div>
                                            <div className="form-group">
                                                <label>Kota/Kabupaten</label>
                                                <input type="text" className="form-control" placeholder="Kota Bekasi" disabled />
                                            </div>
                                            <div className="form-group">
                                                <label>Provinsi</label>
                                                <input type="text" className="form-control" placeholder="Jawa Barat" disabled />
                                            </div>
                                            <div className="form-group">
                                                <label>Kode Pos</label>
                                                <input type="text" className="form-control" placeholder={17146} disabled />
                                            </div>
                                            <div className="form-group">
                                                <label>Nomor Handphone</label>
                                                <input type="text" className="form-control" placeholder="081384996633" disabled />
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="Email" className="form-control" placeholder="irsadi.asril@gmail.com" disabled />
                                            </div>
                                            <div className="form-group">
                                                <label>Nomor Rekening</label>
                                                <input type="text" className="form-control" placeholder={36000234789} disabled />
                                            </div>
                                            <div className="form-group">
                                                <label>Bank Asal Rekening</label>
                                                <input type="text" className="form-control" placeholder="Bank BCA" disabled />
                                            </div>
                                        </div>
                                        {/* /.box-body */}
                                        <div className="box-footer">
                                            <button type="edit" className="btn btn-primary">Ediit</button>
                                        </div>
                                        </form>
                                    </div>
                                    </div>
                                    {/* /.col */}
                                </div>
                                {/* /.row */}

                                {/* Riwayat Invoice */}
                                <div className="row">
                                    <div className="content">
                                    <div className="col-xs-12">
                                        <div className="box box-primary">
                                        <div className="box-header with-border">
                                            <h3 className="box-title">Riwayat Invoice</h3>
                                        </div>
                                        <div className="box">
                                            <div className="box-header">
                                            <h3 className="box-title">Data Table With Full Features</h3>
                                            </div>
                                            {/* /.box-header */}
                                            <div className="box-body">
                                            <table id="example1" className="table table-bordered table-striped">
                                                <thead>
                                                <tr>
                                                    <th>Tanggal</th>  
                                                    <th>No. Invoice</th>
                                                    <th>Order ID</th>
                                                    <th>Total Tagihan</th>
                                                    <th>Detail</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>12/05/2018</td>  
                                                    <td>INV00001</td>
                                                    <td>ORD18E05R120001</td>
                                                    {/* <td>Andy</td>
                                                                        <td>Taman Malaka Blok T4 No.11, RT 10/RW 11, Kel. Malaka Jaya, Kec. Duren Sawit, Jakarta Timur</td>
                                                                        <td>0856 8686 6751</td>
                                                                        <td>andijaya@gmail.com</td>
                                                                        <td>Mitsubhisi Xpander Ultimate A/T 2018 Putih</td>
                                                                        <td>Rp 257.600.000</td>
                                                                        <td>Rp 500.000</td>
                                                                        <td>10 %</td> */}
                                                    <td>Rp 232.290.000</td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <Link to="/detail_invoice"><button type="button" className="btn btn-block btn-success">Lihat Detail</button></Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>15/05/2018</td>  
                                                    <td>INV00002</td>
                                                    <td>ORD18E05R150001</td>
                                                    {/* <td>Beni</td>
                                                                        <td>Kelapa Gading Blok A10 No.24, RT 01/RW 03, Kel. Kelapa Gading, Kec. Kelapa Gading, Jakarta Utara</td>
                                                                        <td>0821 9567 012</td>
                                                                        <td>beni02@gmail.com</td>
                                                                        <td>Toyota Yaris TRD Sportivo CVT 2018 Citrus</td>
                                                                        <td>Rp 275.900.000</td>
                                                                        <td>Rp 300.000</td>
                                                                        <td>10 %</td> */}
                                                    <td>Rp 248.580.000</td>
                                                    <td>
                                                    <div className="btn-group">
                                                        <Link to="/detail_invoice"><button type="button" className="btn btn-block btn-success">Lihat Detail</button></Link>
                                                    </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>22/05/2018</td>  
                                                    <td>INV00003</td>
                                                    <td>ORD18E05R220001</td>
                                                    {/* <td>Cindy</td>
                                                                        <td>Bintara II Blok D8 No.09, RT 03/RW 10, Kel. Bintara Jaya, Kec. Bekasi Barat, Kota Bekasi</td>
                                                                        <td>081 59 26 26 26</td>
                                                                        <td>cindycin@gmail.com</td>
                                                                        <td>Honda CR-V 1.5L Prestige Turbo CVT 2018 Silver</td>
                                                                        <td>Rp 511.000.000</td>
                                                                        <td>Rp 900.000</td>
                                                                        <td>10 %</td> */}
                                                    <td>Rp 460.710.000</td>
                                                    <td>
                                                    <div className="btn-group">
                                                        <Link to="/detail_invoice"><button type="button" className="btn btn-block btn-success">Lihat Detail</button></Link>
                                                    </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                                {/* <tfoot>
                                                                <tr>
                                                                    <th>Rendering engine</th>
                                                                    <th>Browser</th>
                                                                    <th>Platform(s)</th>
                                                                    <th>Engine version</th>
                                                                    <th>CSS grade</th>
                                                                </tr>
                                                                </tfoot> */}
                                            </table>
                                            </div>
                                            {/* /.box-body */}
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </section>
                            {/* Add the sidebar's background. This div must be placed
                                immediately after the control sidebar */}
                            <div className="control-sidebar-bg" />
                        </div>            
                    </div>
                </div>
                );
    }
}

export default Profile;