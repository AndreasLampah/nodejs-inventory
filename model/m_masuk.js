const mysql = require('mysql2')
const db    = require('../config/database').db
const moment= require('moment')
moment.locale('id')

module.exports =
{
    get_semua_produk: function() {
        let sql = mysql.format(
            `SELECT * FROM barang_masuk;`
        )

        return new Promise( (resolve,reject)=>{
            db.query(sql, function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                } else {
                    resolve(hasil)
                }
            })
        })
    },



    get_semua_kategori: function() {
        let sql = mysql.format(
            `SELECT * FROM barang_masuk;`
        )

        return new Promise( (resolve,reject)=>{
            db.query(sql, function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                } else {
                    resolve(hasil)
                }
            })
        })
    },



    tambah: function(req) {
        let data = {
            // nama kolom di sql: req.body.name
            supplier        : req.body.form_supplier,
            karton          : req.body.form_karton,
            pcs             : req.body.form_pcs,    
            barang_rusak    : req.body.form_barang_rusak,
            barang_bagus    : req.body.form_barang_bagus,

            
        }
        let sql = mysql.format(
            `INSERT INTO barang_masuk SET ?`,
            [data]
        )

        return new Promise( (resolve,reject)=>{
            db.query(sql, function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                } else {
                    resolve(hasil)
                }
            })
        })
    }



}