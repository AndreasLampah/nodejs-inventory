const m_masuk = require('../model/m_masuk')

module.exports =
{
    index: async function(req,res) {
        let dataview = {
            req         : req,
            konten      : 'barang-masuk/index',
            uri_segment : req.path.split('/'),
            produk      : await m_masuk.get_semua_produk()
        }
        res.render('template/struktur', dataview)
    },



    form_tambah: async function(req,res) {
        let dataview = {
            konten      : 'barang-masuk/form-tambah',
            uri_segment : req.path.split('/'),
            info_error  : null,
            kategori    : await m_masuk.get_semua_kategori()
        }
        res.render('template/struktur', dataview)
    },



    proses_simpan: async function(req,res) {
        try {
            let insert      = await m_masuk.tambah(req)
            let isi_notif   = `berhasil membuat kategori baru`
            if (insert.affectedRows > 0) {
                res.redirect(`/barang-masuk?note=sukses&pesan=${isi_notif}`)
            }
        } catch (error) {
            let dataview = {
                konten      : 'barang-masuk/form-tambah',
                req         : req,
                uri_segment : req.path.split('/'),
                info_error  : error,
            }
            res.render('template/struktur', dataview)
        }
    },
}