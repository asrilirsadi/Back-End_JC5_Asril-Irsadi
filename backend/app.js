const express = require('express');
var app = express();
app.use('/Images', express.static('Images'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

var upload = require('express-fileupload');
app.use(upload());

const koneksi  = require('cors');
app.use(koneksi());

const crypto = require('crypto');
const secret = 'abcdefg';

const mysql = require('mysql');
const db = mysql.createConnection(
{
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'auto_shop_new'
});
db.connect();

app.listen(8000);

app.post('/registeradmin', (req,res) => 
{
    var Username = req.body.username;
    var Password = req.body.password;
    var Email = req.body.email;
    var AdminStatus = 'user';

    // console.log(`Username     : ${Username}`);
    // console.log(`Password     : ${Password}`);
    // console.log(`Email        : ${Email}`);
    // console.log(`Admin Status : ${AdminStatus}`);

    var encpass = crypto.createHash('sha256', secret).update(Password).digest('hex');
    console.log(`Password setelah di encrypt : ${encpass}`);

    var registerData = `INSERT INTO user_admin SET Username="${Username}", Password="${encpass}", 
                        Email="${Email}", AdminStatus="${AdminStatus}"`;

    db.query(registerData,(err,result) =>
    {
        if (err) throw err;
    });
    res.end();
});

app.post('/loginadmin', (req,res) =>
{  
    var username = req.body.username;
    var password = req.body.password;

    // console.log(`Username     : ${username}`);
    // console.log(`Password     : ${password}`);
    
    var encpass = crypto.createHash('sha256', secret).update(password).digest('hex');
    // console.log(`Password setelah di encrypt : ${encpass}`);

    var pullData = 'SELECT * FROM user_admin';
    db.query(pullData, (err,result) =>
    {
        if (err) throw err;
        
        for(var i=0; i<result.length; i++)
        {
            if ((username === result[i].Username) && (encpass === result[i].Password) && (result[i].AdminStatus === 'admin'))
            {
                var userID = result[i].id;
                res.send((userID).toString());
                break;
            }
            else if(i === result.length-1 )
            {   
                console.log('Data tidak ditemukan, login gagal');
            }
        }
    })
});

app.post('/dataadmin', (req,res) => 
{
    var adminID  = req.body.userID;

    var pullData = `SELECT Username FROM user_admin WHERE id="${adminID}"`;
    db.query(pullData, (err,result) =>
    {
        if (err) throw err;

        res.send(result[0].Username);
    })
});

app.get('/datamerk', (req,res) => 
{
    var pullData = `SELECT * FROM master_merk ORDER BY merk`;
    db.query(pullData, (err,result) =>
    {
        if (err) throw err;

        res.send(result);
    })
});

app.post('/tambahmerk', (req,res) =>
{
    var newmerk = req.body.newmerk;
    
    if(newmerk != '')
    {
        var addmerk = `INSERT INTO master_merk (merk) VALUES ("${newmerk}")`;
        db.query(addmerk, (err,result) =>
        {
            if (err) throw err;
        })
    }

    res.end();
});

app.post('/ubahmerk', (req,res) =>
{
    var idmerk = req.body.idmerk;
    var updatemerk = req.body.updatemerk;

    console.log(idmerk);
    console.log(updatemerk);
    
    if(updatemerk != '')
    {
        var ubahnamamerk = `UPDATE master_merk SET merk="${updatemerk}" WHERE id="${idmerk}"`;
        db.query(ubahnamamerk, (err,result) =>
        {
            if (err) throw err;
        })
    }

    res.end();
});

app.post('/hapusmerk', (req,res) => 
{
    var id = req.body.id;
    
    var hapusData = `DELETE FROM master_merk WHERE id="${id}"`;

    db.query(hapusData, (err, result) => 
    {
        if (err) throw err;

        res.redirect('/');
    })
});

app.post('/datamodelselect', (req,res) => 
{
    var merkID = req.body.merkID;
    var pullData = `SELECT * FROM master_model WHERE merk_id="${merkID}" ORDER BY model`;
    db.query(pullData, (err,result) =>
    {
        if (err) throw err;

        res.send(result);
    })
});

app.post('/datamerkdipilih', (req,res) => 
{
    var merkID = req.body.merkID;
    var pullData = `SELECT * FROM master_merk WHERE id="${merkID}"`;
    db.query(pullData, (err,result) =>
    {
        if (err) throw err;

        //console.log(result);
        res.send(result);
    })
});

app.post('/tambahmodel', (req,res) =>
{
    var newmodel = req.body.newmodel;
    var idmerk = req.body.idmerkdipilih;
    
    if(idmerk !='' && newmodel != '')
    {
        var addmerk = `INSERT INTO master_model (merk_id,model) VALUES ("${idmerk}","${newmodel}")`;
        db.query(addmerk, (err,result) =>
        {
            if (err) throw err;
        })
    }

    res.end();
});

app.post('/ubahmodel', (req,res) =>
{
    var idmodel = req.body.idmodel;
    var updatemodel = req.body.updatemodel;

    console.log(idmodel);
    console.log(updatemodel);
    
    if(updatemodel != '')
    {
        var ubahnamamodel = `UPDATE master_model SET model="${updatemodel}" WHERE id="${idmodel}"`;
        db.query(ubahnamamodel, (err,result) =>
        {
            if (err) throw err;
        })
    }

    res.end();
});

app.post('/hapusmodel', (req,res) => 
{
    var id = req.body.id;
    
    var hapusData = `DELETE FROM master_model WHERE id="${id}"`;

    db.query(hapusData, (err, result) => 
    {
        if (err) throw err;

        res.redirect('/');
    })
});

app.get('/datavariant', (req,res) => 
{
    var pullData = `SELECT * FROM master_variant ORDER BY variant`;
    db.query(pullData, (err,result) =>
    {
        if (err) throw err;

        res.send(result);
    })
});

app.post('/tambahvariant', (req,res) =>
{
    var newvariant = req.body.newvariant;
    
    if(newvariant != '')
    {
        var addvariant = `INSERT INTO master_variant (variant) VALUES ("${newvariant}")`;
        db.query(addvariant, (err,result) =>
        {
            if (err) throw err;
        })
    }

    res.end();
});

app.post('/ubahvariant', (req,res) =>
{
    var idvariant = req.body.idvariant;
    var updatevariant = req.body.updatevariant;

    console.log(idvariant);
    console.log(updatevariant);
    
    if(updatevariant != '')
    {
        var ubahnamavariant = `UPDATE master_variant SET variant="${updatevariant}" WHERE id="${idvariant}"`;
        db.query(ubahnamavariant, (err,result) =>
        {
            if (err) throw err;
        })
    }

    res.end();
});

app.post('/hapusvariant', (req,res) => 
{
    var id = req.body.id;
    
    var hapusData = `DELETE FROM master_variant WHERE id="${id}"`;

    db.query(hapusData, (err, result) => 
    {
        if (err) throw err;

        res.redirect('/');
    })
});

app.get('/databodytype', (req,res) => 
{
    var pullData = `SELECT * FROM master_body_type ORDER BY body_type`;
    db.query(pullData, (err,result) =>
    {
        if (err) throw err;

        //console.log(result);
        res.send(result);
    })
});

app.post('/tambahbodytype', (req,res) =>
{
    var newbodytype = req.body.newbodytype;
    
    if(newbodytype != '')
    {
        var addbodytype = `INSERT INTO master_body_type (body_type) VALUES ("${newbodytype}")`;
        db.query(addbodytype, (err,result) =>
        {
            if (err) throw err;
        })
    }

    res.end();
});

app.post('/ubahbodytype', (req,res) =>
{
    var idbodytype = req.body.idbodytype;
    var updatebodytype = req.body.updatebodytype;

    console.log(idbodytype);
    console.log(updatebodytype);
    
    if(updatebodytype != '')
    {
        var ubahnamabodytype = `UPDATE master_body_type SET body_type="${updatebodytype}" WHERE id="${idbodytype}"`;
        db.query(ubahnamabodytype, (err,result) =>
        {
            if (err) throw err;
        })
    }

    res.end();
});

app.post('/hapusbodytype', (req,res) => 
{
    var id = req.body.id;
    
    var hapusData = `DELETE FROM master_body_type WHERE id="${id}"`;

    db.query(hapusData, (err, result) => 
    {
        if (err) throw err;

        res.redirect('/');
    })
});

app.get('/datacolour', (req,res) => 
{
    var pullData = `SELECT * FROM master_colour ORDER BY colour`;
    db.query(pullData, (err,result) =>
    {
        if (err) throw err;

        //console.log(result);
        res.send(result);
    })
});

app.post('/tambahcolour', (req,res) =>
{
    var newcolour = req.body.newcolour;
    
    if(newcolour != '')
    {
        var addcolour = `INSERT INTO master_colour (colour) VALUES ("${newcolour}")`;
        db.query(addcolour, (err,result) =>
        {
            if (err) throw err;
        })
    }

    res.end();
});

app.post('/ubahcolour', (req,res) =>
{
    var idcolour = req.body.idcolour;
    var updatecolour = req.body.updatecolour;

    console.log(idcolour);
    console.log(updatecolour);
    
    if(updatecolour != '')
    {
        var ubahnamacolour = `UPDATE master_colour SET colour="${updatecolour}" WHERE id="${idcolour}"`;
        db.query(ubahnamacolour, (err,result) =>
        {
            if (err) throw err;
        })
    }

    res.end();
});

app.post('/hapuscolour', (req,res) => 
{
    var id = req.body.id;
    
    var hapusData = `DELETE FROM master_colour WHERE id="${id}"`;

    db.query(hapusData, (err, result) => 
    {
        if (err) throw err;

        res.redirect('/');
    })
});

app.get('/dataprovince', (req,res) => 
{
    var pullData = `SELECT * FROM master_province ORDER BY province`;
    db.query(pullData, (err,result) =>
    {
        if (err) throw err;

        //console.log(result);
        res.send(result);
    })
});

app.post('/tambahprovince', (req,res) =>
{
    var newprovince = req.body.newprovince;
    
    if(newprovince != '')
    {
        var addprovince = `INSERT INTO master_province (province) VALUES ("${newprovince}")`;
        db.query(addprovince, (err,result) =>
        {
            if (err) throw err;
        })
    }

    res.end();
});

app.post('/ubahprovince', (req,res) =>
{
    var idprovince = req.body.idprovince;
    var updateprovince = req.body.updateprovince;

    console.log(idprovince);
    console.log(updateprovince);
    
    if(updateprovince != '')
    {
        var ubahnamaprovince = `UPDATE master_province SET province="${updateprovince}" WHERE id="${idprovince}"`;
        db.query(ubahnamaprovince, (err,result) =>
        {
            if (err) throw err;
        })
    }

    res.end();
});

app.post('/hapusprovince', (req,res) => 
{
    var id = req.body.id;
    
    var hapusData = `DELETE FROM master_province WHERE id="${id}"`;

    db.query(hapusData, (err, result) => 
    {
        if (err) throw err;

        res.redirect('/');
    })
});

app.post('/datacityordistrictselect', (req,res) => 
{
    var provinceID = req.body.provinceID;
    var pullData = `SELECT * FROM master_cityordistrict WHERE province_id="${provinceID}" ORDER BY cityordistrict`;
    db.query(pullData, (err,result) =>
    {
        if (err) throw err;

        res.send(result);
    })
});

app.post('/dataprovincedipilih', (req,res) => 
{
    var provinceID = req.body.provinceID;
    var pullData = `SELECT * FROM master_province WHERE id="${provinceID}"`;
    db.query(pullData, (err,result) =>
    {
        if (err) throw err;

        //console.log(result);
        res.send(result);
    })
});

app.post('/tambahcityordistrict', (req,res) =>
{
    var newcityordistrict = req.body.newcityordistrict;
    var idprovince = req.body.idprovincedipilih;
    
    // console.log(newcityordistrict);
    // console.log(idprovince);
    
    if(idprovince !='' && newcityordistrict != '')
    {
        var addprovince = `INSERT INTO master_cityordistrict (province_id,cityordistrict) VALUES ("${idprovince}","${newcityordistrict}")`;
        db.query(addprovince, (err,result) =>
        {
            if (err) throw err;
        })
    }

    res.end();
});

app.post('/ubahcityordistrict', (req,res) =>
{
    var idcityordistrict = req.body.idcityordistrict;
    var updatecityordistrict = req.body.updatecityordistrict;

    // console.log(idcityordistrict);
    // console.log(updatecityordistrict);
    
    if(updatecityordistrict != '')
    {
        var ubahnamacityordistrict = `UPDATE master_cityordistrict SET cityordistrict="${updatecityordistrict}" WHERE id="${idcityordistrict}"`;
        db.query(ubahnamacityordistrict, (err,result) =>
        {
            if (err) throw err;
        })
    }

    res.end();
});

app.post('/hapuscityordistrict', (req,res) => 
{
    var id = req.body.id;
    
    var hapusData = `DELETE FROM master_cityordistrict WHERE id="${id}"`;

    db.query(hapusData, (err, result) => 
    {
        if (err) throw err;

        res.redirect('/');
    })
});

app.get('/dataproduct', (req,res) => 
{
    var pullData = `SELECT product.id, master_merk.merk, master_model.model, master_variant.variant, product.prodyear,master_body_type.body_type, product.transmission, master_colour.colour, master_cityordistrict.cityordistrict, product.conditioncar, product.price_Rp FROM product LEFT JOIN master_merk ON master_merk.id = product.merk_id LEFT JOIN master_model ON master_model.id = product.model_id LEFT JOIN master_variant ON master_variant.id = product.variant_id LEFT JOIN master_body_type ON master_body_type.id = product.bodytype_id LEFT JOIN master_colour ON master_colour.id = product.colour_id LEFT JOIN master_cityordistrict ON master_cityordistrict.id = product.cityordistrict_id`;
    db.query(pullData, (err,result) =>
    {
        if (err) throw err;

        res.send(result);
    })
});

app.post('/hapusproduct', (req,res) => 
{
    var id = req.body.id;
    
    var hapusData = `DELETE FROM product WHERE id="${id}"`;

    db.query(hapusData, (err, result) => 
    {
        if (err) throw err;

        res.redirect('/');
    })
});



// - - - - - - USER - - - - - - // 

app.post('/registeruser', (req,res) => 
{
    var username_cust = req.body.username_cust;
    var password_cust = req.body.password_cust;
    var email_cust = req.body.email_cust;
    var phone_cust = req.body.phone_cust;

    // console.log(`Username     : ${Username}`);
    // console.log(`Password     : ${Password}`);
    // console.log(`Email        : ${Email}`);
    // console.log(`Admin Status : ${AdminStatus}`);

    var encpass = crypto.createHash('sha256', secret).update(password_cust).digest('hex');
    //console.log(`Password setelah di encrypt : ${encpass}`);

    var registerData = `INSERT INTO user_customer SET username_cust="${username_cust}", password_cust="${encpass}", 
                        email_cust="${email_cust}", phone_cust="${phone_cust}"`;

    db.query(registerData,(err,result) =>
    {
        if (err) throw err;

        res.send('1'); 
    });
    
});

app.post('/loginuser', (req,res) =>
{  
    var username_cust = req.body.username_cust;
    var password_cust = req.body.password_cust;

    console.log(`Username     : ${username_cust}`);
    console.log(`Password     : ${password_cust}`);
    
    var encpass = crypto.createHash('sha256', secret).update(password_cust).digest('hex');
    console.log(`Password setelah di encrypt : ${encpass}`);

    var pullData = 'SELECT * FROM user_customer';
    db.query(pullData, (err,result) =>
    {
        if (err) throw err;
        
        for(var i=0; i<result.length; i++)
        {
            if ((username_cust === result[i].username_cust) && (encpass === result[i].password_cust))
            {
                var userID = result[i].id;
                res.send((userID).toString());
                break;
            }
            else if(i === result.length-1 )
            {   
                console.log('Data tidak ditemukan, login gagal');
            }
        }
    })
});

app.get('/getgambarproduct', (req,res) =>
{
    var pullprodimg = 'SELECT product.id, master_merk.merk, master_model.model, master_variant.variant, product.prodyear, master_body_type.body_type, transmission, master_colour.colour, master_cityordistrict.cityordistrict, product.conditioncar, product.price_Rp, product_image.image1, product_image.image2 FROM product LEFT JOIN master_merk ON product.merk_id = master_merk.id LEFT JOIN master_model ON product.model_id = master_model.id LEFT JOIN master_variant ON product.variant_id = master_variant.id LEFT JOIN master_body_type ON product.bodytype_id = master_body_type.id LEFT JOIN master_colour ON product.colour_id = master_colour.id LEFT JOIN master_cityordistrict ON product.cityordistrict_id = master_cityordistrict.id LEFT JOIN product_image ON product.id = product_image.product_id';

    db.query(pullprodimg, (err,result) =>
    {
        if (err) throw err;
        
        res.send(result);
        // console.log(result)
    })
});

app.post('/getproductchoosen/:productID', (req,res) =>
{
    
    var pullprodchoosen = `SELECT product.id, master_merk.merk, master_model.model, product.model_id, master_variant.variant, product.variant_id, product.prodyear, master_body_type.body_type, product.bodytype_id, transmission, master_colour.colour, master_cityordistrict.cityordistrict, product.conditioncar, product.price_Rp, product_image.image1, product_image.image2, product_image.image3, product_image.image4, product.overview FROM product LEFT JOIN master_merk ON product.merk_id = master_merk.id LEFT JOIN master_model ON product.model_id = master_model.id LEFT JOIN master_variant ON product.variant_id = master_variant.id LEFT JOIN master_body_type ON product.bodytype_id = master_body_type.id LEFT JOIN master_colour ON product.colour_id = master_colour.id LEFT JOIN master_cityordistrict ON product.cityordistrict_id = master_cityordistrict.id LEFT JOIN product_image ON product.id = product_image.product_id WHERE product.id= "${req.params.productID}"`;

    db.query(pullprodchoosen, (err,result) =>
    {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

app.post('/getproductspec', (req,res) =>
{
    var modelID = req.params.modelID;
    var variantID = req.params.variantID;
    var bodytypeID = req.params.bodytypeID;
    var prodyear =req.params.prodyear;
    
    var pullprodspec = `SELECT engine_cc, torque_Nm, power_hp, length_mm, width_mm, height_mm, wheelbase_mm, ground_clearance_mm, interior,safety FROM product_spec WHERE model_id = "${modelID}" AND variant_id = "${variantID}" AND bodytype_id = "${bodytypeID}" AND prodyear = "${prodyear}"`;

    db.query(pullprodspec, (err,result) =>
    {
        if (err) throw err;
        
        res.send(result);
    })
});

app.post('/order', (req, res) =>
{
    var userID = req.body.userID;
    var productID = req.body.productID;

    var insertcart = `INSERT INTO cart SET usercustomer_id="${userID}", product_id="${productID}"`;
    
    db.query(insertcart, (err, result) => 
    {
        if (err) throw err;
        
        res.send('1');
    })
});

app.post('/cart', (req, res) =>
{
    var userID = req.body.userID;

    var datacart = `SELECT * FROM cart WHERE usercustomer_id="${userID}"`;

    db.query(datacart, (err, result) =>
    {
        if (err) throw err;

        res.send(result);
    })
});

app.post('/hapuscart', (req, res) =>
{
    var cartID = req.body.cartID;

    var delcart = `DELETE FROM cart WHERE id="${cartID}"`;

    db.query(delcart, (err, result) =>
    {
        if (err) throw err;

        res.end();
    })
});

app.post('/checkout', (req, res) =>
{
    var userID = req.body.userID;
    var name = req.body.name;
    var address = req.body.address;
    var phone = req.body.phone;

    var insertcheckout = `INSERT INTO checkout SET usercustomer_id="${userID}", name="${name}", address="${address}", phone="${phone}"`;

    db.query(insertcheckout, (err, result) =>
    {
        if (err) throw err;

        res.end();
    })
});
